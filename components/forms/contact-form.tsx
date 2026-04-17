"use client";

import { FormEvent, useState } from "react";

type FormState =
  | { status: "idle"; message: string }
  | { status: "submitting"; message: string }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const initialState: FormState = { status: "idle", message: "" };

export function ContactForm({ urgent = false }: { urgent?: boolean }) {
  const [formState, setFormState] = useState<FormState>(initialState);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState({ status: "submitting", message: "Sending your request..." });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });

    const data = (await response.json()) as { message?: string };

    if (!response.ok) {
      setFormState({
        status: "error",
        message:
          data.message ??
          "We could not send your request. Please call instead.",
      });
      return;
    }

    form.reset();
    setFormState({
      status: "success",
      message:
        data.message ??
        "Thanks. We received your request and will follow up shortly.",
    });
  }

  return (
    <form
      className="surface-card stack"
      style={{ padding: "24px" }}
      onSubmit={onSubmit}
    >
      <div className="grid-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Location" name="location" required />
        <Field label="Service type" name="serviceType" required />
        <Field label="Preferred callback time" name="callbackTime" />
      </div>
      <Field label="Message" name="message" as="textarea" required />
      <input
        type="hidden"
        name="priority"
        value={urgent ? "urgent" : "standard"}
      />
      <button
        className={`button ${urgent ? "button-urgent" : "button-primary"}`}
        type="submit"
        disabled={formState.status === "submitting"}
        aria-busy={formState.status === "submitting"}
      >
        {formState.status === "submitting" ? "Sending..." : "Submit request"}
      </button>
      {formState.message ? (
        <p
          role={formState.status === "error" ? "alert" : "status"}
          style={{
            margin: 0,
            color:
              formState.status === "error"
                ? "var(--danger)"
                : formState.status === "success"
                  ? "var(--success)"
                  : "var(--fg-muted)",
          }}
        >
          {formState.message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
}) {
  const sharedStyles = {
    width: "100%",
    borderRadius: "12px",
    border: "1px solid var(--border-strong)",
    background: "var(--bg-surface)",
    color: "var(--fg-default)",
    padding: "12px 14px",
    minHeight: as === "textarea" ? "144px" : "48px",
  } satisfies React.CSSProperties;

  return (
    <label className="stack" style={{ gap: "8px" }}>
      <span style={{ fontWeight: 700 }}>
        {label}
        {required ? " *" : ""}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} style={sharedStyles} />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          style={sharedStyles}
        />
      )}
    </label>
  );
}
