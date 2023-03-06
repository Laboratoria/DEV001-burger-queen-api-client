import Header from "../src/components/Header/Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />, { wrapper: MemoryRouter });
  });

  it("Debe renderizarse", () => {
    const headers = screen.getByText("Burger Queen");
    expect(headers).toBeDefined();
  });
  it("Debe haber un link", () => {
    const link = screen.getByRole("button");
    expect(link).toBeInTheDocument();
  });
});
