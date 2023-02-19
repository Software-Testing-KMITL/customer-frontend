import { fireEvent, render, screen } from "@testing-library/react";

import { ProductQualtity } from "@/sections/product";

describe("Product Qualtity", () => {
  const setWant = (w: number) => {
    return w;
  };
  let remain = 4;

  test("should render collect", () => {
    render(<ProductQualtity remain={remain} setWant={setWant} />);
    const IncreaseButton = screen.getByRole("button", { name: "+" });
    expect(IncreaseButton).toBeDefined();

    const DecreaseButton = screen.getByRole("button", { name: "-" });
    expect(DecreaseButton).toBeDefined();

    const Counter = screen.getByRole("counter").textContent;
    expect(Counter).toBe("1");
  });

  test("should increase when click (+) if not more than remain of product", () => {
    render(<ProductQualtity remain={remain} setWant={setWant} />);
    let IncreaseButton = screen.getByRole("button", { name: "+" });
    let Counter = screen.getByRole("counter").textContent;

    fireEvent.click(IncreaseButton);

    expect(Counter).toBe("1");
  });

  test(
    "should not increase when click (+) if counter is equal remain of product"
  );

  test("must decrease when click (-)");

  test("must not decrease when click (-) if counter is equal 1");

  test("call back must set (w) valid");
});
