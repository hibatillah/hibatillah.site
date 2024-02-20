import { isTouchScreen } from "@/lib/util";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  const isTouched = isTouchScreen();

  if (!isTouched) {
    return (
      <AnimatedCursor
        showSystemCursor={true}
        innerSize={0}
        outerSize={25}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        clickables={["a", "button", "abbr", "code"]}
        innerStyle={{
          backgroundColor: "transparent",
        }}
        outerStyle={{
          border: "2px solid rgb(13, 148, 136)",
        }}
      />
    );
  }
}
