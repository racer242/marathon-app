import { useContext } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { GlobalsContext } from "../contexts/GlobalsContext";
import Scene from "./Scene";

const useStyles = createUseStyles({
  wrapper: {},
});

const zoomTransforms = [
  "scale(3) translate(143px,50px)",
  "scale(3) translate(0px,50px)",
  "scale(3) translate(-143px,50px)",
  "scale(3) translate(143px,-85px)",
  "scale(3) translate(-143px,-85px)",
];

function Camera() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { selectedWindow, stage } = useContext(GlobalsContext);
  return (
    <div className={classes.wrapper}>
      <Scene
        style={{
          transform:
            stage === "prize-zoom" || stage === "finish"
              ? zoomTransforms[selectedWindow]
              : null,
          transition:
            stage === "prize-zoom" ? "transform 2s ease-in-out 100ms" : null,
        }}
      />
    </div>
  );
}

export default Camera;
