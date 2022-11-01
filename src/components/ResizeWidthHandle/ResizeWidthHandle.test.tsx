import React from "react";
import { render } from "@testing-library/react";
import ResizeWidthHandle from "./ResizeWidthHandle";

describe("ResizeWidthHandle", () => {
  it("matches snapshot", () => {
    const { container } = render(<ResizeWidthHandle />);
    expect(container).toMatchSnapshot();
  });
});
