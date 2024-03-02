import decor1Back from "../assets/decor1-back.svg";
import decor2Back from "../assets/decor2-back.svg";
import decor4Back from "../assets/decor4-back.svg";
import decor3Front from "../assets/decor3-front.svg";
import decor5Front from "../assets/decor5-front.svg";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import person4 from "../assets/person4.svg";
import person5 from "../assets/person5.svg";
import ring from "../assets/ring.svg";
import ringSound from "../assets/ring-sound.svg";
import cloudsLight from "../assets/clouds-light.svg";
import cloudsDark from "../assets/clouds-dark.svg";
import sky from "../assets/sky.svg";
import building from "../assets/building.png";
import ground from "../assets/ground.svg";
import window from "../assets/window.svg";
import frame from "../assets/frame.svg";
import star from "../assets/star.svg";
import clouds from "../assets/clouds-final.svg";
import ringMessageTail from "../assets/ring-message-tail.svg";

import { PreloadMedia, MediaType } from "react-preload-media";
import { useReducer } from "react";

const media = [
  { type: MediaType.Image, url: decor1Back },
  { type: MediaType.Image, url: decor2Back },
  { type: MediaType.Image, url: decor4Back },
  { type: MediaType.Image, url: decor3Front },
  { type: MediaType.Image, url: decor5Front },
  { type: MediaType.Image, url: person1 },
  { type: MediaType.Image, url: person2 },
  { type: MediaType.Image, url: person3 },
  { type: MediaType.Image, url: person4 },
  { type: MediaType.Image, url: person5 },
  { type: MediaType.Image, url: ring },
  { type: MediaType.Image, url: ringSound },
  { type: MediaType.Image, url: cloudsLight },
  { type: MediaType.Image, url: cloudsDark },
  { type: MediaType.Image, url: sky },
  { type: MediaType.Image, url: building },
  { type: MediaType.Image, url: ground },
  { type: MediaType.Image, url: window },
  { type: MediaType.Image, url: frame },
  { type: MediaType.Image, url: star },
  { type: MediaType.Image, url: clouds },
  { type: MediaType.Image, url: ringMessageTail },
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
