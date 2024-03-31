import { createUseStyles, useTheme } from "react-jss";
import { useContext } from "react";
import { GlobalsContext } from "../contexts/GlobalsContext";

import field from "../assets/field.svg";
import game from "../assets/game.png";
import point from "../assets/point.svg";

import { pointProps } from "../config/gameConfig";

const SCENE_WIDTH = 880;
const SCENE_HEIGHT = 580;
const SCENE_PADDING = 300;

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
    transition: "opacity 500ms ease-in-out 400ms",
  },
  field: {
    position: "absolute",
    left: 107,
    top: 24,
    backgroundImage: `url(${field})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "668px 484px",
    width: 668,
    height: 484,
  },
  game: {
    position: "absolute",
    left: 130,
    top: 57,
    backgroundImage: `url(${game})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "611px 416px",
    width: 611,
    height: 416,
  },
  pointContainer: {
    position: "absolute",
    width: 53,
    height: 53,
    transform: "translate(-50%,-50%)",
  },
  point: {
    position: "absolute",
    backgroundImage: `url(${point})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "53px 53px",
    width: 53,
    height: 53,
    transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out",
  },
  decor: {
    position: "absolute",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    transition: "opacity 300ms ease-in-out",
  },
});

function Scene(props) {
  const { ...rest } = props;
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { stage, config, selectedPoint, selectedPointState, visiblePrizes } =
    useContext(GlobalsContext);
  const { thumbs, animation } = config ?? { thumbs: [], animation: {} };

  const points = pointProps.map((v, i) => ({
    index: i,
    isSelected: selectedPoint === i,
    stage,
    thumbs,
    visiblePrizes,
    ...animation,
    ...v,
  }));

  return (
    <div className={classes.superWrapper}>
      <div
        className={classes.wrapper}
        {...rest}
        style={{
          opacity: [
            "ready-to-go",
            "ready-to-start",
            "start-game",
            "play-game",
            "game",
          ].includes(stage)
            ? 1
            : 0,
        }}
      >
        {[
          "ready-to-go",
          "ready-to-start",
          "start-game",
          "play-game",
          "game",
          "game-finish",
        ].includes(stage) && <div className={classes.field}></div>}
        {[
          "ready-to-go",
          "ready-to-start",
          "start-game",
          "play-game",
          "game",
          "game-finish",
        ].includes(stage) && <div className={classes.game}></div>}
        {[
          "ready-to-go",
          "ready-to-start",
          "start-game",
          "play-game",
          "game",
          "game-finish",
        ].includes(stage) &&
          points.map((v, i) => (
            <div key={i}>
              <div
                className={classes.decor}
                style={{
                  left: v.decorX,
                  top: v.decorY,
                  width: v.decorW,
                  height: v.decorH,
                  backgroundSize: `${v.decorW}px ${v.decorH}px`,
                  backgroundImage: `url(${v.decor})`,
                  ...(v.isSelected && selectedPointState === 1
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                      }),
                }}
              ></div>
              <div
                className={classes.pointContainer}
                style={{
                  left: v.pointX,
                  top: v.pointY,
                }}
              >
                <div
                  className={classes.point}
                  style={{
                    ...(v.isSelected
                      ? selectedPointState === 0
                        ? {
                            transform: "scale(3,3)",
                            opacity: 0,
                          }
                        : selectedPointState === 1
                        ? {
                            transform: "scale(1,1)",
                            opacity: 1,
                          }
                        : {
                            transform: "scale(1,1)",
                            opacity: 0,
                          }
                      : {
                          transform: "scale(3,3)",
                          opacity: 0,
                        }),
                  }}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Scene;
