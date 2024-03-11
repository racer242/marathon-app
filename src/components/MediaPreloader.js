import { PreloadMedia, MediaType } from "react-preload-media";
import { useReducer } from "react";

const media = [
  // { type: MediaType.Image, url: decor1Back },
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
