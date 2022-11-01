import React from "react";
import { render } from "@testing-library/react";
import ResizeBothHandle from "./ResizeBothHandle";

describe("ResizeBothHandle", () => {
  it("matches snapshot", () => {
    const { container } = render(<ResizeBothHandle />);
    expect(container).toMatchSnapshot();
  });
});
