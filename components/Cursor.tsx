import { isTouchScreen } from "@/lib/util";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  const isTouched = isTouchScreen();

  return isTouched ? null : (
    <AnimatedCursor
      showSystemCursor={true}
      innerSize={0}
      outerSize={25}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      clickables={["a", "button", "abbr", "time"]}
      innerStyle={{
        backgroundColor: "transparent",
      }}
      outerStyle={{
        border: "2px solid rgb(13, 148, 136)",
      }}
    />
  );
}
