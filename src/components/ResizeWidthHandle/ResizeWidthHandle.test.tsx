import React from "react";
import { render } from "@testing-library/react";
import ResizeWidthHandle from "./ResizeWidthHandle";

describe("ResizeWidthHandle", () => {
  it("matches snapshot", () => {
    const { container } = render(<ResizeWidthHandle />);
    // @ts-expect-error
    expect(container).toMatchSnapshot();
  });
});
