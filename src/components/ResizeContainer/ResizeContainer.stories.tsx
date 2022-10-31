import React from "react";
import ResizeBothHandle from "../ResizeBothHandle";
import ResizeHeightHandle from "../ResizeHeightHandle";
import ResizeWidthHandle from "../ResizeWidthHandle";
import ResizeContainer from "./ResizeContainer";

export const Isolated = () => {
  return (
    <ResizeContainer>
      <div>Resize me!</div>
    </ResizeContainer>
  );
};

export const WithHandles = () => {
  return (
    <ResizeContainer>
      <div>Resize me!</div>
      <ResizeBothHandle />
      <ResizeHeightHandle />
      <ResizeWidthHandle />
    </ResizeContainer>
  );
};

export const CustomStyles = () => {
  return (
    <ResizeContainer
      style={{
        border: "1px solid red",
        backgroundColor: "yellow",
      }}
    >
      <div>Resize me!</div>
      <ResizeBothHandle />
      <ResizeHeightHandle />
      <ResizeWidthHandle />
    </ResizeContainer>
  );
};

export const WithOneHandle = () => {
  return (
    <ResizeContainer>
      <div>Resize me!</div>
      <ResizeBothHandle />
    </ResizeContainer>
  );
};

export const WithTwoHandles = () => {
  return (
    <ResizeContainer>
      <div>Resize me!</div>
      <ResizeWidthHandle />
      <ResizeHeightHandle />
    </ResizeContainer>
  );
};

export const WithInitialSize = () => {
  return (
    <ResizeContainer initialWidth={200} initialHeight={200}>
      <div>Resize me!</div>
      <ResizeBothHandle />
    </ResizeContainer>
  );
};

export const WithPlentyOfContent = () => {
  return (
    <ResizeContainer>
      <div>
        <h1>Resize me!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultrices, arcu id sagittis rhoncus, mauris sapien vehicula nisl, ut
          aliquet orci libero ut nunc. Sed in nunc ut turpis ultrices aliquet.
          Nullam euismod, sem a luctus pretium, orci nisl ultrices tellus, vitae
          aliquam nisl nisl quis orci. Proin vel erat sed ipsum ultrices
          vestibulum. Nullam auctor, justo nec aliquam ultrices, ante nisi
          sagittis felis, eu aliquet nisl nisl eu lectus. Sed euismod, velit
          quis lacinia placerat, nisl nisl tincidunt lorem, nec tincidunt elit
          massa non nisl. Nulla facilisi. Fusce euismod, justo sed ultricies
          luctus, augue nisl aliquam enim, ac convallis nisl lorem quis erat.
          Nullam euismod, sem a luctus pretium, orci nisl ultrices tellus, vitae
          aliquam nisl nisl quis orci. Proin vel erat sed ipsum ultrices
          vestibulum. Nullam auctor, justo nec aliquam ultrices, ante nisi
          sagittis felis, eu aliquet nisl nisl eu lectus. Sed euismod, velit
          quis lacinia placerat, nisl nisl tincidunt lorem, nec tincidunt elit
          massa non nisl. Nulla facilisi. Fusce euismod, justo sed ultricies
          luctus, augue nisl aliquam enim, ac convallis nisl lorem quis erat.
          Nullam euismod, sem a luctus pretium, orci nisl ultrices tellus, vitae
          aliquam nisl nisl quis orci. Proin vel erat sed ipsum ultrices
          vestibulum. Nullam auctor, justo nec aliquam ultrices, ante nisi
          sagittis felis, eu aliquet nisl nisl eu lectus. Sed euismod, velit
          quis lacinia placerat, nisl nisl tincidunt lorem, nec tincidunt elit
          massa non nisl. Nulla facilisi. Fusce euismod, justo sed ultricies
          luctus, augue nisl aliquam enim, ac convallis nisl lorem quis erat.
          Nullam euismod, sem a luctus pretium, orci nisl ultrices tellus, vitae
        </p>
      </div>
      <ResizeBothHandle />
    </ResizeContainer>
  );
};
