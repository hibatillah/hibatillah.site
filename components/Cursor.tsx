import { isMobile } from "@/lib/util";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  const mobile = isMobile()

  return !mobile ? (
    <AnimatedCursor
      showSystemCursor={true}
      innerSize={0}
      outerSize={15}
      innerScale={1}
      outerScale={4}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: "transparent",
      }}
      outerStyle={{
        border: "2px solid rgb(13, 148, 136)",
      }}
    />
  ) : null;
}
