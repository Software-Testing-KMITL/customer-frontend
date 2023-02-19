import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'

import { ProductQualtity } from "@/sections/product";

describe("Product Qualtity", () => {
  const setWant = () => {};
  let remain = 9;

  test("must render collect", () => {
    render(<ProductQualtity remain={remain} setWant={setWant} />);

    const IncreaseButton = screen.getByRole("button", { name: "+" });
    expect(IncreaseButton).toBeDefined();

    const DecreaseButton = screen.getByRole("button", { name: "-" });
    expect(DecreaseButton).toBeDefined();

    const Counter = screen.getByRole("counter").textContent;
    expect(Counter).toBe("1");
  });

  test("must increase when click (+) if not more than remain of product", () => {
    let IncreaseButton = screen.getByRole("button", { name: "+" });
    IncreaseButton.click();
    let Counter = screen.getByRole("counter").textContent;
    expect(Counter).toBe("2");
  });

  test(
    "must not increase when click (+) if counter is equal remain of product"
  );

  test("must decrease when click (-)");

  test("must not decrease when click (-) if counter is equal 1");
});
