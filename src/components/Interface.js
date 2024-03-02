import { useContext } from "react";
import { createUseStyles, useTheme } from "react-jss";

import clouds from "../assets/clouds-final.svg";

import ringMessageTail from "../assets/ring-message-tail.svg";
import { GlobalsContext } from "../contexts/GlobalsContext";

const SCENE_WIDTH = 880;
const SCENE_HEIGHT = 580;

const useStyles = createUseStyles({
  wrapper: {
    top: 0,
    left: 0,
    position: "absolute",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
  },
  title: {
    position: "absolute",
    left: "50%",
    top: 30,
    transform: "translateX(-50%)",
    fontSize: 36,
    color: "#5F2589",
    transition: "opacity 1s ease-in-out",
  },
  subtitle: {
    position: "absolute",
    left: "50%",
    top: 78,
    transform: "translateX(-50%)",
    fontSize: 16,
    color: "#231F20",
    transition: "opacity 1s ease-in-out 300ms",
  },
  ringLaterButton: {
    boxSizing: "border-box",
    position: "absolute",
    width: "227px",
    height: "56px",
    left: "210px",
    top: "496px",
    border: "2px solid #FFFFFF",
    borderRadius: "54px",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "56px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.3)",
    },
    transition: "opacity 1s ease-in-out 100ms",
  },
  ringButton: {
    boxSizing: "border-box",
    position: "absolute",
    width: "227px",
    height: "56px",
    left: "448px",
    top: "496px",
    borderRadius: "54px",
    background: "#C20F2F",
    border: "2px solid #C20F2F",
    color: "#FFED00",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "56px",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #FFFFFF",
      backgroundColor: "#FFFFFF",
      color: "#C10230",
    },
    animation: `$moveRingButton 1s ease-in-out infinite alternate`,
    transition: "opacity 1s ease-in-out 100ms",
  },
  "@keyframes moveRingButton": {
    from: { transform: "scale(.95)" },
    to: { transform: "scale(1.05)" },
  },
  ringMessage: {
    boxSizing: "border-box",
    position: "absolute",
    width: "227px",
    height: "56px",
    left: "325px",
    top: "496px",
    borderRadius: "54px",
    background: "#137809",
    border: "2px solid #137809",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "56px",
    animation: `$moveRingButton 1s ease-in-out infinite alternate`,
    "&:before": {
      content: '""',
      backgroundImage: `url(${ringMessageTail})`,
      position: "absolute",
      top: -15,
      right: 2,
      width: "41px",
      height: "32px",
      display: "block",
    },
    transition: "opacity 1s ease-in-out 300ms",
  },

  finishButton: {
    boxSizing: "border-box",
    position: "absolute",
    width: "267px",
    height: "56px",
    left: "305px",
    top: "496px",
    borderRadius: "54px",
    border: "2px solid #FFFFFF",
    background: "#FFFFFF",
    color: "#C10230",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "56px",
    cursor: "pointer",
    "&:hover": {
      background: "#C20F2F",
      border: "2px solid #C20F2F",
      color: "#FFED00",
    },
    transition: "opacity 1s ease-in-out 2000ms",
  },
  finishTitle: {
    position: "absolute",
    left: "50%",
    top: 30,
    transform: "translateX(-50%)",
    fontSize: 36,
    color: "#5F2589",
    transition: "opacity 1s ease-in-out 1000ms",
  },
  prizeMessage: {
    boxSizing: "border-box",
    position: "absolute",
    left: "50%",
    top: 82,
    transform: "translateX(-50%)",
    borderRadius: "54px",
    background: "#5F2589",
    border: "2px solid #5F2589",
    color: "#FFED00",
    fontSize: 24,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    whiteSpace: "nowrap",
    transition: "opacity 1s ease-in-out 1500ms",
  },
  cloudsLeft: {
    position: "absolute",
    left: -105,
    top: 135,
    backgroundImage: `url(${clouds})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "585px 353px",
    width: 368,
    height: 353,
    transition: "left 2s ease-out 400ms",
  },
  cloudsRight: {
    position: "absolute",
    left: 681,
    top: 158,
    backgroundImage: `url(${clouds})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "585px 353px",
    backgroundPositionX: "-385px",
    width: 368,
    height: 353,
    transition: "left 2s ease-out 400ms",
  },
});

function Interface() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { stage, action, config } = useContext(GlobalsContext);
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.title}
        style={{
          opacity: stage === "start" ? 1 : 0,
        }}
      >
        Дом Сочных Историй
      </div>
      <div
        className={classes.subtitle}
        style={{ opacity: stage === "start" || stage === "ringing" ? 1 : 0 }}
      >
        Получить призы
      </div>

      <div
        className={classes.ringLaterButton}
        onClick={(e) => {
          e.target.dispatchEvent(new Event("skip", { bubbles: true }));
        }}
        style={{
          opacity: stage === "start" ? 1 : 0,
          pointerEvents: stage === "start" ? "all" : "none",
        }}
      >
        Получить позже
      </div>
      <div
        className={classes.ringButton}
        onClick={(e) => {
          action("start-ringing");
        }}
        style={{
          opacity: stage === "start" ? 1 : 0,
          pointerEvents: stage === "start" ? "all" : "none",
        }}
      >
        Позвонить в дверь
      </div>

      <div
        className={classes.ringMessage}
        style={{ opacity: stage === "ringing" ? 1 : 0, pointerEvents: "none" }}
      >
        Звоним в дверь
      </div>

      <div
        className={classes.finishTitle}
        style={{ opacity: stage === "finish" ? 1 : 0 }}
      >
        Ура! Твой приз:
      </div>
      <div
        className={classes.prizeMessage}
        style={{ opacity: stage === "finish" ? 1 : 0 }}
        dangerouslySetInnerHTML={{ __html: config?.name }}
      ></div>
      <div
        className={classes.finishButton}
        onClick={(e) => {
          action("reset");
        }}
        style={{
          opacity: stage === "finish" ? 1 : 0,
          pointerEvents: "none",
          // pointerEvents: stage === "finish" ? "all" : "none",
        }}
      >
        А сейчас будет история...
      </div>
      <div
        className={classes.cloudsLeft}
        style={{ left: stage === "finish" ? null : -400 }}
      ></div>
      <div
        className={classes.cloudsRight}
        style={{ left: stage === "finish" ? null : 1000 }}
      ></div>
    </div>
  );
}

export default Interface;
