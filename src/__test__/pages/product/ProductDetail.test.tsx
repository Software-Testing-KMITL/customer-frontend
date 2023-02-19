import { fireEvent, getByText, render, screen } from "@testing-library/react";

import { ProductDetail } from "@/sections/product";
import { ProductType } from "@/types";

describe("Product Detail", () => {
  let mock = {
    _id: "63f1bc73ec9506c1089a7b26",
    name: "Product 1",
    amount: 10,
    price: 100,
    description: "Product 1 description",
    category: ["Category 1", "Category 3"],
    picture: "",
  };
  test("render correctly", () => {
    render(<ProductDetail data={mock} />);

    let NameEl = screen.getByRole("heading", { name: mock.name });
    expect(NameEl).toBeDefined();

    // let AmountEl = screen.getByText(mock.amount);
    // expect(AmountEl).toBeDefined();

    // let DesEl = screen.getByText(mock.description);
    // expect(DesEl).toBeDefined();
  });
});
