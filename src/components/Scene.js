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
import { createUseStyles, useTheme } from "react-jss";
import Window from "./Window";
import { useContext } from "react";
import { GlobalsContext } from "../contexts/GlobalsContext";

const SCENE_WIDTH = 880;
const SCENE_HEIGHT = 580;
const SCENE_PADDING = 300;
const CLOUD_ANIMATION_DURATION = 40;

const windowProps = [
  {
    left: 255,
    top: 200,
    decorBack: decor1Back,
    decorFront: null,
    person: person1,
  },
  {
    left: 398,
    top: 200,
    decorBack: decor2Back,
    decorFront: null,
    person: person2,
  },
  {
    left: 543,
    top: 200,
    decorBack: null,
    decorFront: decor3Front,
    person: person3,
  },
  {
    left: 255,
    top: 333,
    decorBack: decor4Back,
    decorFront: null,
    person: person4,
  },
  {
    left: 543,
    top: 333,
    decorBack: null,
    decorFront: decor5Front,
    person: person5,
  },
];

const useStyles = createUseStyles({
  superWrapper: {
    position: "absolute",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT + SCENE_PADDING * 2,
    top: -SCENE_PADDING,
    overflow: "hidden",
  },
  wrapper: {
    position: "absolute",
    top: SCENE_PADDING,
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
  },
  sky: {
    position: "absolute",
    left: 0,
    top: -350,
    backgroundImage: `url(${sky})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT + SCENE_PADDING,
  },
  building: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundImage: `url(${building})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "500px 356px",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
  },
  ground: {
    position: "absolute",
    left: "50%",
    top: 393,
    transform: "translateX(-50%)",
    backgroundImage: `url(${ground})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "1128px 588px",
    width: 1175,
    height: 588,
  },
  cloudsLight: {
    position: "absolute",
    left: "50%",
    top: 180,
    transform: "translateX(-50%)",
    backgroundImage: `url(${cloudsLight})`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "1000px 210px",
    width: 1000,
    height: 210,
    animation: `$moveCloudsLight ${CLOUD_ANIMATION_DURATION}s linear infinite`,
  },
  "@keyframes moveCloudsLight": {
    from: { backgroundPositionX: 0 },
    to: { backgroundPositionX: "1000px" },
  },
  cloudsDark: {
    position: "absolute",
    left: "50%",
    top: 180,
    transform: "translateX(-50%)",
    backgroundImage: `url(${cloudsDark})`,
    backgroundRepeat: "repeat-x",
    backgroundSize: "1000px 230px",
    width: 1000,
    height: 230,
    animation: `$moveCloudsDark ${
      CLOUD_ANIMATION_DURATION * 1.5
    }s linear infinite`,
  },
  "@keyframes moveCloudsDark": {
    from: { backgroundPositionX: 0 },
    to: { backgroundPositionX: "1000px" },
  },
  ring: {
    position: "absolute",
    left: 486,
    top: 377,
    backgroundImage: `url(${ring})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "14px 14px",
    width: 14,
    height: 14,
  },
  ringSound: {
    position: "absolute",
    left: 478,
    top: 369,
    backgroundImage: `url(${ringSound})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "30px 30px",
    width: 30,
    height: 30,
    animation: `$ringSound 100ms linear infinite alternate`,
  },
  "@keyframes ringSound": {
    from: { transform: "scale(.8)" },
    to: { transform: "scale(1.3)" },
  },
});

function Scene(props) {
  const { ...rest } = props;
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { stage, config, selectedWindow, visiblePrizes } =
    useContext(GlobalsContext);
  const { thumbs, animation } = config ?? { thumbs: [], animation: {} };

  const windows = windowProps.map((v, i) => ({
    index: i,
    isSelected: selectedWindow === i,
    stage,
    thumbs,
    visiblePrizes,
    ...animation,
    ...v,
  }));

  return (
    <div className={classes.superWrapper}>
      <div className={classes.wrapper} {...rest}>
        <div className={classes.sky}></div>
        <div
          className={classes.cloudsDark}
          style={{
            animationPlayState:
              stage !== "prize-selected" &&
              stage !== "prize-zoom" &&
              stage !== "finish"
                ? "running"
                : "paused",
          }}
        ></div>
        <div
          className={classes.cloudsLight}
          style={{
            animationPlayState:
              stage !== "prize-selected" &&
              stage !== "prize-zoom" &&
              stage !== "finish"
                ? "running"
                : "paused",
          }}
        ></div>
        <div className={classes.ground}></div>
        <div className={classes.building}>
          <div className={classes.ring}></div>
          {stage === "ringing" && <div className={classes.ringSound}></div>}
          {windows.map((v, i) => (
            <Window key={i} {...v} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scene;
