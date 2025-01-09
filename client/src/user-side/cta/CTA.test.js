import { test } from "vitest";
import { render } from "@testing-library/react";
import { CTA1, CTA2, CTA3 } from "./index";

test("Page", () => {
  render(<CTA1 />);
});
test("Page", () => {
  render(<CTA2 />);
});
test("Page", () => {
  render(<CTA3 />);
});
