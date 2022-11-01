import React from "react";
import { render } from "@testing-library/react";

import ResizeContainer from "./ResizeContainer";
import ResizeBothHandle from "../ResizeBothHandle";

describe("ResizeContainer", () => {
  it("renders without crashing", () => {
    render(<ResizeContainer>anything</ResizeContainer>);
  });

  it("does resize", () => {
    render(
      <ResizeContainer>
        <div>Resize me!</div>
        <ResizeBothHandle />
      </ResizeContainer>
    );
    // expect(container).toMatchSnapshot();
  });
});
