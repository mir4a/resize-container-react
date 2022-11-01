import React from "react";
import { render } from "@testing-library/react";
import ResizeHeightHandle from "./ResizeHeightHandle";

describe("ResizeHeightHandle", () => {
  it("matches snapshot", () => {
    const { container } = render(<ResizeHeightHandle />);
    expect(container).toMatchSnapshot();
  });
});
