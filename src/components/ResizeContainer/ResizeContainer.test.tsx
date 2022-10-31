import React from "react";
import { render } from "@testing-library/react";

import ResizeContainer from "./ResizeContainer";

describe("ResizeContainer", () => {
  it("renders without crashing", () => {
    render(<ResizeContainer children={null} />);
  });
});
