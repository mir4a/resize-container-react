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

export const AllHandles = () => {
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

export const OneHandle = () => {
  return (
    <ResizeContainer>
      <div>Resize me!</div>
      <ResizeBothHandle />
    </ResizeContainer>
  );
};

export const TwoHandles = () => {
  return (
    <ResizeContainer>
      <div>Resize me!</div>
      <ResizeWidthHandle />
      <ResizeHeightHandle />
    </ResizeContainer>
  );
};

export const CustomHandles = () => {
  return (
    <ResizeContainer>
      <div>{"WOW, GIPHY icons as a handler :))))"}</div>
      <ResizeWidthHandle
        style={{
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            width: "100%",
            height: 0,
            paddingBottom: "78%",
            position: "relative",
            pointerEvents: "none",
          }}
        >
          <iframe
            src="https://giphy.com/embed/NU4il2utBo5Lq"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </ResizeWidthHandle>
    </ResizeContainer>
  );
};

export const InitialSize = () => {
  return (
    <ResizeContainer initialWidth={200} initialHeight={200}>
      <div>Resize me!</div>
      <ResizeBothHandle />
    </ResizeContainer>
  );
};

export const PlentyOfContent = () => {
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

export const DifferentChildren = () => {
  return (
    <ResizeContainer>
      <div>Resize me!</div>
      <ResizeBothHandle />
      <ResizeHeightHandle />
      <ResizeWidthHandle />
      <div>Resize me too!</div>
      {"just string"}
      <b>below is null</b>
      <br />
      {null}
      <br />
      <b>above is null</b>
      <br />
      <i>below is undefined</i>
      <br />
      {undefined}
      <br />
      <i>above is undefined</i>
      <br />
      <b>below is false</b>
      <br />
      {false}
      <br />
      <b>above is false</b>
      <br />
      <img src="https://picsum.photos/200" alt="random" />
    </ResizeContainer>
  );
};

export const OverflowAutoContent = () => {
  return (
    <ResizeContainer>
      <div
        style={{
          width: "inherit",
          height: "inherit",
          overflow: "auto",
          border: "1px solid transparent",
        }}
      >
        <h1>Resize me!</h1>
        <p style={{ float: "left" }}>
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
        </p>
        <img
          src="https://picsum.photos/200"
          alt="random"
          style={{ float: "left", marginRight: 20, marginBottom: 10 }}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultrices, arcu id sagittis rhoncus, mauris sapien vehicula nisl, ut
          aliquet orci libero ut nunc. Sed in nunc ut turpis ultrices aliquet.
          Nullam euismod, sem a luctus pretium, orci nisl ultrices tellus, vitae
          aliquam nisl nisl quis orci. Proin vel erat sed ipsum ultrices
          vestibulum. Nullam auctor, justo nec aliquam ultrices, ante nisi
          sagittis felis, eu aliquet nisl nisl eu lectus. Sed euismod, velit
        </p>
        <p>
          quis lacinia placerat, nisl nisl tincidunt lorem, nec tincidunt elit
          massa non nisl. Nulla facilisi. Fusce euismod, justo sed ultricies
          luctus, augue nisl aliquam enim, ac convallis nisl lorem quis erat.
          Nullam euismod, sem a luctus pretium, orci nisl ultrices tellus, vitae
          aliquam nisl nisl quis orci. Proin vel erat sed ipsum ultrices
          vestibulum. Nullam auctor, justo nec aliquam ultrices, ante nisi
          sagittis felis, eu aliquet nisl nisl eu lectus. Sed euismod, velit
        </p>
      </div>
      <ResizeBothHandle />
    </ResizeContainer>
  );
};

export const RTL = () => {
  return (
    <div>
      <h1>RTL</h1>
      <div dir="rtl">
        <ResizeContainer isRTL={true}>
          <p>
            المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
            ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة
            مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب
            بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على
            هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد
            الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق
            "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد
            لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس
            بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم
            إيبسوم.
          </p>
          <ResizeBothHandle />
        </ResizeContainer>
      </div>
    </div>
  );
};

export const OnResizeCallback = () => {
  return (
    <ResizeContainer onResize={console.log}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        ultrices, arcu id sagittis rhoncus, mauris sapien vehicula nisl, ut
        aliquet orci libero ut nunc. Sed in nunc ut turpis ultrices aliquet.
        Nullam euismod, sem a luctus pretium, orci nisl ultrices tellus, vitae
      </p>
      <ResizeBothHandle />
    </ResizeContainer>
  );
};

export const OnResizeEndCallback = () => {
  return (
    <ResizeContainer onResizeEnd={console.log}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        ultrices, arcu id sagittis rhoncus, mauris sapien vehicula nisl, ut
        aliquet orci libero ut nunc. Sed in nunc ut turpis ultrices aliquet.
        Nullam euismod, sem a luctus pretium, orci nisl ultrices tellus, vitae
      </p>
      <ResizeBothHandle />
    </ResizeContainer>
  );
};
