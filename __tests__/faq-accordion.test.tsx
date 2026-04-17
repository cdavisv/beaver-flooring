import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FaqAccordion } from "@/components/marketing/faq-accordion";

const items = [
  {
    question: "How do estimates work?",
    answer: "We confirm the scope before larger work begins.",
  },
  {
    question: "Do you handle emergencies?",
    answer: "Yes. Call immediately for active leaks or backups.",
  },
];

describe("FaqAccordion", () => {
  it("opens the first item by default and toggles between items", async () => {
    const user = userEvent.setup();

    render(<FaqAccordion items={items} />);

    expect(
      screen.getByText("We confirm the scope before larger work begins."),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /do you handle emergencies/i }),
    );

    expect(
      screen.getByText("Yes. Call immediately for active leaks or backups."),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("We confirm the scope before larger work begins."),
    ).not.toBeInTheDocument();
  });
});
