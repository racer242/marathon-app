import window from "../assets/window.svg";
import frame from "../assets/frame.svg";
import star from "../assets/star.svg";
import { createUseStyles, useTheme } from "react-jss";
import { MouseParallaxChild } from "react-parallax-mouse";

const COMPONENT_WIDTH = 84;
const COMPONENT_HEIGHT = 99;

const INNER_LEFT = 15;
const INNER_TOP = 17;
const INNER_WIDTH = 54;
const INNER_HEIGHT = 67;

const RESIDENT_OFFSET = 10;
const RESIDENT_WIDTH = INNER_WIDTH + 20;
const RESIDENT_HEIGHT = INNER_HEIGHT + 20;

const PRIZE_WIDTH = 52;
const PRIZE_HEIGHT = 52;

const useStyles = createUseStyles({
  wrapper: {
    position: "absolute",
    width: COMPONENT_WIDTH,
    height: COMPONENT_HEIGHT,
  },

  windowAnimation: {
    animationName: "$windowDance",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  "@keyframes windowDance": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.1)" },
    "50%": { transform: "scale(1)" },
    "100%": { transform: "scale(1)" },
  },

  window: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundImage: `url(${window})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${COMPONENT_WIDTH}px ${COMPONENT_HEIGHT}px`,
    width: COMPONENT_WIDTH,
    height: COMPONENT_HEIGHT,
  },
  frame: {
    position: "absolute",
    left: 10,
    top: 12,
    backgroundImage: `url(${frame})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `64px 77px`,
    width: 64,
    height: 77,
  },
  glass: {
    position: "absolute",
    left: INNER_LEFT,
    top: INNER_TOP,
    width: INNER_WIDTH,
    height: INNER_HEIGHT,
    background: "rgba(123, 79, 157, 0.5)",
  },
  glassAnimation: {
    animationName: "$glassDance",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  "@keyframes glassDance": {
    "0%": { opacity: "1" },
    "25%": { opacity: "0" },
    "50%": { opacity: "1" },
    "100%": { opacity: "1" },
  },

  background: {
    position: "absolute",
    overflow: "hidden",
    left: INNER_LEFT,
    top: INNER_TOP,
    width: INNER_WIDTH,
    height: INNER_HEIGHT,
    background:
      "linear-gradient(0deg, rgba(123, 79, 157, 0.5), rgba(123, 79, 157, 0.5)), #7B4F9D",
  },
  person: {
    position: "absolute",
    left: -RESIDENT_OFFSET,
    top: -RESIDENT_OFFSET,
    width: RESIDENT_WIDTH,
    height: RESIDENT_HEIGHT,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${RESIDENT_WIDTH}px ${RESIDENT_HEIGHT}px`,
    transformOrigin: `${RESIDENT_WIDTH / 2}px ${RESIDENT_HEIGHT}px`,
    animationName: "$personDance",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
  },
  "@keyframes personDance": {
    "0%": { transform: "rotate(0deg) translateY(0px)" },
    "25%": { transform: "rotate(0deg) translateY(5px)" },
    "50%": { transform: "rotate(-5deg) translateY(0px)" },
    "75%": { transform: "rotate(0deg) translateY(5px)" },
    "100%": { transform: "rotate(5deg) translateY(0px)" },
  },
  decorBack: {
    position: "absolute",
    left: -RESIDENT_OFFSET,
    top: -RESIDENT_OFFSET,
    width: RESIDENT_WIDTH,
    height: RESIDENT_HEIGHT,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${RESIDENT_WIDTH}px ${RESIDENT_HEIGHT}px`,
  },
  decorFront: {
    position: "absolute",
    left: -RESIDENT_OFFSET,
    top: -RESIDENT_OFFSET,
    width: RESIDENT_WIDTH,
    height: RESIDENT_HEIGHT,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${RESIDENT_WIDTH}px ${RESIDENT_HEIGHT}px`,
  },
  prizeRandom: {
    position: "absolute",
    left: INNER_LEFT,
    top: INNER_TOP,
    width: INNER_WIDTH,
    height: INNER_HEIGHT,
    backgroundColor: "#FBF068",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${PRIZE_WIDTH}px ${PRIZE_HEIGHT}px`,
    boxSizing: "border-box",
    border: "1px solid #000000",
    transition: "opacity 300ms ease-in-out",
    opacity: 0,
  },
  prizeSelectedPlate: {
    position: "absolute",
    left: INNER_LEFT,
    top: INNER_TOP,
    width: INNER_WIDTH,
    height: INNER_HEIGHT,
    backgroundColor: "#FBF068",
    boxSizing: "border-box",
    border: "1px solid #000000",
    transition: "opacity 300ms ease-in-out 300ms",
    opacity: 0,
  },
  prizeSelected: {
    position: "absolute",
    left: INNER_LEFT,
    top: INNER_TOP,
    width: INNER_WIDTH,
    height: INNER_HEIGHT,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${PRIZE_WIDTH}px ${PRIZE_HEIGHT}px`,
    transition:
      "opacity 500ms ease-in-out 100ms, transform 700ms ease-in-out 100ms",
    opacity: 0,
  },
  overlay: {
    position: "absolute",
    overflow: "hidden",
    left: INNER_LEFT + INNER_WIDTH / 2 - 10,
    top: INNER_TOP + INNER_HEIGHT / 2 - 10,
    width: 20,
    height: 20,
    borderRadius: "10px",
    backgroundColor: "#FAE100",
    boxSizing: "border-box",
    transition:
      "opacity 500ms ease-in-out 0ms, transform 1000ms ease-in-out 0ms",
    opacity: 1,
  },
  starBackground: {
    position: "absolute",
    overflow: "hidden",
    left: INNER_LEFT + INNER_WIDTH / 2 - 486 / 2,
    top: INNER_TOP + INNER_HEIGHT / 2 - 486 / 2,
    width: 486,
    height: 486,
    borderRadius: "243px",
    background:
      "radial-gradient(50% 50% at 50% 50%, rgba(255, 250, 208, 0.15) 58.33%, rgba(255, 242, 121, 0.54) 100%)",
    // backgroundColor: "rgba(255,255,255,0.3)",
    transition:
      "opacity 500ms ease-in-out 200ms, transform 1000ms ease-in-out 200ms",
    opacity: 1,
  },
  star: {
    position: "absolute",
    overflow: "hidden",
    left: INNER_LEFT + INNER_WIDTH / 2 - 486 / 2,
    top: INNER_TOP + INNER_HEIGHT / 2 - 486 / 2,
    width: 486,
    height: 486,
    borderRadius: "243px",
    backgroundImage: `url(${star})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: `486px 486px`,
    transition:
      "opacity 500ms ease-in-out 100ms, transform 1000ms ease-in-out 100ms",
    opacity: 1,
  },
});

function Window(props) {
  const {
    index,
    left,
    top,
    decorBack,
    decorFront,
    person,
    stage,
    isSelected,
    thumbs,
    visiblePrizes,
    normalDuration,
    danceDuration,
  } = props;
  const theme = useTheme();
  const classes = useStyles({ theme });

  const danceAnimationDuration =
    stage === "ringing" ? danceDuration : normalDuration;

  return (
    <div
      className={
        classes.wrapper +
        (stage === "ringing" ? " " + classes.windowAnimation : "")
      }
      style={{
        left,
        top,
        zIndex: isSelected ? 1 : 0,
        animationDuration: `${danceAnimationDuration}s`,
        animationDelay: `${index * ((danceAnimationDuration * 500) / 2)}ms`,
      }}
    >
      <div className={classes.background}>
        {decorBack && (
          <MouseParallaxChild factorX={-0.3} factorY={-0.3}>
            <div
              className={classes.decorBack}
              style={{ backgroundImage: `url(${decorBack})` }}
            ></div>
          </MouseParallaxChild>
        )}

        {person && (
          <MouseParallaxChild factorX={-0.2} factorY={-0.2}>
            <div
              className={classes.person}
              style={{
                backgroundImage: `url(${person})`,
                animationDelay: `${
                  index * ((danceAnimationDuration * 500) / 2)
                }ms`,
                animationDuration: `${danceAnimationDuration}s`,
                animationPlayState:
                  stage !== "prize-selected" &&
                  stage !== "prize-zoom" &&
                  stage !== "finish"
                    ? "running"
                    : "paused",
              }}
            ></div>
          </MouseParallaxChild>
        )}

        {decorFront && (
          <div
            className={classes.decorFront}
            style={{ backgroundImage: `url(${decorFront})` }}
          ></div>
        )}
      </div>

      <div
        className={
          classes.glass +
          (stage === "ringing" ? " " + classes.glassAnimation : "")
        }
        style={{
          animationDuration: `${danceAnimationDuration}s`,
          animationDelay: `${index * ((danceAnimationDuration * 500) / 2)}ms`,
        }}
      ></div>

      {thumbs?.map((v, i) => (
        <div
          key={i}
          className={classes.prizeRandom}
          style={{
            opacity: visiblePrizes && visiblePrizes[index] === i ? 1 : 0,
            backgroundColor: (index + i) % 2 === 0 ? "#FBF068" : "#DE0A3D",
            backgroundImage: `url(${v.normal})`,
          }}
        ></div>
      ))}
      <div className={classes.frame}></div>
      <div className={classes.window}></div>
      <div
        className={classes.prizeSelectedPlate}
        style={{
          opacity: isSelected ? 1 : 0,
        }}
      ></div>
      <div
        className={classes.overlay}
        style={{
          transform:
            stage === "finish" && isSelected
              ? "scale(30)"
              : stage === "prize-zoom" && isSelected
              ? "scale(20)"
              : "scale(0)",
          opacity:
            stage === "finish" && isSelected
              ? 1
              : stage === "prize-zoom" && isSelected
              ? 0.3
              : 0,
        }}
      ></div>
      <div
        className={classes.starBackground}
        style={{
          transform:
            stage === "finish" && isSelected
              ? "scale(.5)"
              : stage === "prize-selected" && isSelected
              ? "scale(.3)"
              : stage === "prize-zoom" && isSelected
              ? "scale(.4)"
              : "scale(0)",
          opacity:
            (stage === "prize-selected" ||
              stage === "prize-zoom" ||
              stage === "finish") &&
            isSelected
              ? 1
              : 0,
        }}
      ></div>
      <div
        className={classes.star}
        style={{
          transform:
            stage === "finish" && isSelected
              ? "scale(.3)"
              : stage === "prize-selected" && isSelected
              ? "scale(.2)"
              : stage === "prize-zoom" && isSelected
              ? "scale(.4)"
              : "scale(0)",
          opacity:
            (stage === "prize-selected" ||
              stage === "prize-zoom" ||
              stage === "finish") &&
            isSelected
              ? 1
              : 0,
        }}
      ></div>
      {thumbs?.map((v, i) => (
        <div
          key={i}
          className={classes.prizeSelected}
          style={{
            opacity:
              isSelected && visiblePrizes && visiblePrizes[index] === i ? 1 : 0,
            backgroundImage: `url(${v.selected})`,
            transform:
              stage === "finish" && isSelected ? "scale(1.5)" : "scale(1)",
          }}
        ></div>
      ))}
    </div>
  );
}

export default Window;
