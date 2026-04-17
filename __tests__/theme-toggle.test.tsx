import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

describe("ThemeToggle", () => {
  it("updates the document theme and persists the selected value", () => {
    window.localStorage.clear();

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );

    fireEvent.change(screen.getByLabelText(/color theme/i), {
      target: { value: "dark" },
    });

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(window.localStorage.getItem("beaver-theme")).toBe("dark");
  });
});
