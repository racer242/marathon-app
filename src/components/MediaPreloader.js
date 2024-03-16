import { PreloadMedia, MediaType } from "react-preload-media";
import { useReducer } from "react";

import field from "../assets/field.svg";
import redField from "../assets/red-field.svg";
import track from "../assets/track.svg";
import product from "../assets/product.png";
import decor from "../assets/decor.svg";
import background from "../assets/start-bg.png";
import title from "../assets/start-title.png";
import prize1 from "../assets/start-prize1.svg";
import prize2 from "../assets/start-prize2.svg";
import prize3 from "../assets/start-prize3.svg";
import clock from "../assets/clock.svg";
import clockSelected from "../assets/clock-selected.svg";
import clockDisplay from "../assets/clock-display.svg";
import clockButtonUp from "../assets/clock-button-up.svg";
import clockButtonDown from "../assets/clock-button-down.svg";
import finalDecor1 from "../assets/final-decor1.svg";
import finalDecor2 from "../assets/final-decor2.svg";
import finalDecor3 from "../assets/final-decor3.svg";
import finalDecor4 from "../assets/final-decor4.svg";
import finalStarsLeft from "../assets/final-starts-left.svg";
import finalStarsRight from "../assets/final-starts-right.svg";
import prizeGlow from "../assets/prize-glow.svg";
import game from "../assets/game.png";
import point from "../assets/point.svg";

const media = [
  { type: MediaType.Image, url: field },
  { type: MediaType.Image, url: redField },
  { type: MediaType.Image, url: track },
  { type: MediaType.Image, url: product },
  { type: MediaType.Image, url: decor },
  { type: MediaType.Image, url: background },
  { type: MediaType.Image, url: title },
  { type: MediaType.Image, url: prize1 },
  { type: MediaType.Image, url: prize2 },
  { type: MediaType.Image, url: prize3 },
  { type: MediaType.Image, url: clock },
  { type: MediaType.Image, url: clockSelected },
  { type: MediaType.Image, url: clockDisplay },
  { type: MediaType.Image, url: clockButtonUp },
  { type: MediaType.Image, url: clockButtonDown },
  { type: MediaType.Image, url: finalDecor1 },
  { type: MediaType.Image, url: finalDecor2 },
  { type: MediaType.Image, url: finalDecor3 },
  { type: MediaType.Image, url: finalDecor4 },
  { type: MediaType.Image, url: finalStarsLeft },
  { type: MediaType.Image, url: finalStarsRight },
  { type: MediaType.Image, url: prizeGlow },
  { type: MediaType.Image, url: game },
  { type: MediaType.Image, url: point },
];

export function MediaPreloader({ children }) {
  const [isLoaded, loaded] = useReducer(() => true, false);
  return (
    <>
      <PreloadMedia media={media} onFinished={() => loaded()}></PreloadMedia>
      {isLoaded ? children : null}
    </>
  );
}
