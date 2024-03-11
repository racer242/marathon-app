import { useContext } from "react";
import { createUseStyles, useTheme } from "react-jss";
import field from "../assets/field.svg";
import redField from "../assets/red-field.svg";
import track from "../assets/track.svg";
import RadialProgress from "react-radial-progress-motion";
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

import { pointProps } from "../config/gameConfig";

import { GlobalsContext } from "../contexts/GlobalsContext";

const SCENE_WIDTH = 880;
const SCENE_HEIGHT = 580;
const SCENE_PADDING = 300;

const useStyles = createUseStyles({
  wrapper: {
    top: 0,
    left: 0,
    position: "absolute",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
  },

  //
  // **********************************************************
  //
  decor: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundImage: `url(${decor})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "822px 488px",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
    pointerEvents: "none",
  },

  //
  // **********************************************************
  //
  startScreen: {
    top: 0,
    left: 0,
    position: "absolute",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
    transition: "opacity 1s ease-in-out 100ms",
  },
  startBackground: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundImage: `url(${background})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "880px 580px",
    backgroundColor: "#FAC913",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
  },
  title: {
    position: "absolute",
    left: 208,
    top: 152,
    backgroundImage: `url(${title})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "471px 138px",
    width: 471,
    height: 138,
  },
  prize1: {
    position: "absolute",
    left: 245,
    top: 285,
    backgroundImage: `url(${prize1})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "102px 100px",
    width: 102,
    height: 100,
  },
  prize2: {
    position: "absolute",
    left: 382,
    top: 285,
    backgroundImage: `url(${prize2})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "102px 100px",
    width: 102,
    height: 100,
  },
  prize3: {
    position: "absolute",
    left: 520,
    top: 285,
    backgroundImage: `url(${prize3})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "102px 100px",
    width: 102,
    height: 100,
  },
  startLaterButton: {
    boxSizing: "border-box",
    position: "absolute",
    width: "227px",
    height: "56px",
    left: "210px",
    top: "486px",
    border: "2px solid #262626",
    borderRadius: "54px",
    color: "#262626",
    backgroundColor: "#FAC913",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "56px",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #C1022F",
      color: "#C1022F",
    },
    transition: "opacity 1s ease-in-out 100ms",
  },
  startButton: {
    boxSizing: "border-box",
    position: "absolute",
    width: "227px",
    height: "56px",
    left: "448px",
    top: "486px",
    borderRadius: "54px",
    background: "#721185",
    border: "2px solid #721185",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "56px",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #9B32B0",
      backgroundColor: "#9B32B0",
      color: "#FFFFFF",
    },
    animation: `$movestartButton 1s ease-in-out infinite alternate`,
    transition: "opacity 1s ease-in-out 100ms",
  },
  "@keyframes movestartButton": {
    from: { transform: "scale(.95)" },
    to: { transform: "scale(1.05)" },
  },
  clockButtonContainer: {
    position: "absolute",
    left: 380,
    top: 420,
    width: 115,
    height: 128,
    transition: "opacity 1s ease-in-out 100ms, transform 1s ease-in-out 1000ms",
  },
  clockButton: {
    position: "absolute",
    left: -10,
    width: 115 + 20,
    height: 128,
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "140px",
    cursor: "pointer",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "115px 128px",
    backgroundImage: `url(${clockButtonUp})`,
    "&:hover": {
      backgroundImage: `url(${clockButtonDown})`,
    },
    animation: `$movestartButton 1s ease-in-out infinite alternate`,
  },
  clockDisplay: {
    position: "absolute",
    left: 18,
    top: 30,
    width: 79,
    height: 79,
    backgroundImage: `url(${clockDisplay})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "79px 79px",
    pointerEvents: "none",
  },
  clockContainer: {
    position: "absolute",
    left: 380,
    top: 420,
    width: 115,
    height: 128,
    color: "#721185",
    fontSize: 36,
    textAlign: "center",
    lineHeight: "140px",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "115px 128px",
    transition: "opacity 1s ease-in-out 100ms",
  },
  clockProgressbar: {
    position: "absolute",
    left: 17,
    top: 27,
    width: 79,
    height: 79,
  },
  //
  // **********************************************************
  //
  gameFinishScreen: {
    top: 0,
    left: 0,
    position: "absolute",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
    transition: "opacity 1s ease-in-out 100ms",
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
  finalButton: {
    boxSizing: "border-box",
    position: "absolute",
    width: 253,
    height: 56,
    left: 314,
    top: 481,
    borderRadius: "54px",
    background: "#C1022F",
    border: "2px solid #C1022F",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    lineHeight: "56px",
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #E6001C",
      backgroundColor: "#E6001C",
      color: "#FFFFFF",
    },
    animation: `$movestartButton 1s ease-in-out infinite alternate`,
    transition: "opacity 1s ease-in-out 100ms",
  },
  stop: {
    position: "absolute",
    left: 289,
    top: 49,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "300px 200px",
    width: 300,
    height: 200,
  },
  track: {
    position: "absolute",
    left: 260,
    top: 105,
    backgroundImage: `url(${track})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "358px 169px",
    width: 358,
    height: 169,
  },
  stopTitle: {
    position: "absolute",
    width: "100%",
    height: "auto",
    left: 0,
    top: 288,
    color: "#721185",
    fontSize: 22,
    textAlign: "center",
    lineHeight: "auto",
    transition: "opacity 1s ease-in-out 100ms",
  },
  stopText: {
    position: "absolute",
    width: 410,
    height: "auto",
    left: 237,
    top: 327,
    color: "#262626",
    fontSize: 14,
    textAlign: "center",
    lineHeight: "auto",
    transition: "opacity 1s ease-in-out 100ms",
    fontFamily: "Inter",
  },
  product: {
    position: "absolute",
    left: 270,
    top: 84,
    backgroundImage: `url(${product})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "344px 185px",
    width: 344,
    height: 185,
  },
  finalDecor1: {
    position: "absolute",
    left: 148,
    top: 89,
    backgroundImage: `url(${finalDecor1})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "142px 139px",
    width: 142,
    height: 139,
  },
  finalDecor2: {
    position: "absolute",
    left: 585,
    top: 137,
    backgroundImage: `url(${finalDecor2})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "121px 108px",
    width: 121,
    height: 108,
  },
  finalDecor3: {
    position: "absolute",
    left: 173,
    top: 89,
    backgroundImage: `url(${finalDecor3})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "141px 95px",
    width: 141,
    height: 95,
  },
  finalDecor4: {
    position: "absolute",
    left: 585,
    top: 89,
    backgroundImage: `url(${finalDecor4})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "122px 178px",
    width: 122,
    height: 178,
  },
  //
  // **********************************************************
  //
  finalScreen: {
    top: 0,
    left: 0,
    position: "absolute",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
    transition: "opacity 1s ease-in-out 100ms",
  },
  redField: {
    position: "absolute",
    left: 107,
    top: 24,
    backgroundImage: `url(${redField})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "668px 484px",
    width: 668,
    height: 484,
  },
  prizeTitle: {
    position: "absolute",
    width: "100%",
    height: "auto",
    left: 0,
    top: 330,
    color: "#262626",
    fontSize: 16,
    textAlign: "center",
    lineHeight: "auto",
    transition: "opacity 1s ease-in-out 100ms",
  },
  prizeName: {
    position: "absolute",
    width: "100%",
    height: "auto",
    left: 0,
    top: 360,
    color: "#ffffff",
    fontSize: 22,
    textAlign: "center",
    lineHeight: "auto",
    transition: "opacity 1s ease-in-out 100ms",
  },
  prizeText: {
    position: "absolute",
    width: 310,
    height: "auto",
    left: 287,
    top: 400,
    color: "#262626",
    fontSize: 16,
    textAlign: "center",
    lineHeight: "auto",
    transition: "opacity 1s ease-in-out 100ms",
  },
  prizeImage: {
    position: "absolute",
    left: 313,
    top: 87,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "250px 250px",
    width: 250,
    height: 250,
  },
  prizeGlow: {
    position: "absolute",
    left: 313,
    top: 87,
    backgroundImage: `url(${prizeGlow})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "250px 250px",
    width: 250,
    height: 250,
  },
  finalStarsLeft: {
    position: "absolute",
    left: 209,
    top: 94,
    backgroundImage: `url(${finalStarsLeft})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "164px 204px",
    width: 164,
    height: 204,
  },
  finalStarsRight: {
    position: "absolute",
    left: 474,
    top: 95,
    backgroundImage: `url(${finalStarsRight})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "208px 203px",
    width: 208,
    height: 203,
  },
});

function Interface() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { stage, action, config, step, selectedPoint } =
    useContext(GlobalsContext);
  return (
    <div className={classes.wrapper}>
      {/*
       **********************************************************
       */}
      <div
        className={classes.startScreen}
        style={{
          opacity: stage === "start" ? 1 : 0,
          pointerEvents: stage === "start" ? "all" : "none",
        }}
      >
        <div className={classes.startBackground}></div>
        <div className={classes.title}></div>
        <div className={classes.prize1}></div>
        <div className={classes.prize2}></div>
        <div className={classes.prize3}></div>
        <div
          className={classes.startLaterButton}
          onClick={(e) => {
            e.target.dispatchEvent(new Event("skip", { bubbles: true }));
          }}
        >
          Пробежаться позже
        </div>
        <div
          className={classes.startButton}
          onClick={(e) => {
            action("ready-to-go");
          }}
        >
          Пробежаться и узнать
        </div>
      </div>
      {/*
       **********************************************************
       */}
      <div
        className={classes.clockButtonContainer}
        style={
          ["ready-to-go", "ready-to-start"].includes(stage)
            ? {
                transform: "scale(1,1)",
                opacity: 1,
                pointerEvents: "all",
              }
            : {
                transform: "scale(0,0)",
                opacity: 0,
                pointerEvents: "none",
              }
        }
      >
        <div
          className={classes.clockButton}
          style={{
            opacity: stage === "ready-to-start" ? 1 : 0,
            pointerEvents: stage === "ready-to-start" ? "all" : "none",
          }}
          onClick={(e) => {
            action("start-game");
          }}
        >
          Старт
        </div>
      </div>

      {/*
       **********************************************************
       */}
      <div
        className={classes.gameFinishScreen}
        style={{
          opacity: stage === "game-finish" ? 1 : 0,
          pointerEvents: stage === "game-finish" ? "all" : "none",
        }}
      >
        <div className={classes.field}></div>
        <div className={classes.track}></div>
        <div className={classes.finalDecor3}></div>
        <div className={classes.finalDecor4}></div>
        <div className={classes.finalDecor1}></div>
        <div className={classes.finalDecor2}></div>
        {selectedPoint > 0 && (
          <>
            <div
              className={classes.stop}
              style={{
                backgroundImage: `url(${pointProps[selectedPoint].stop})`,
              }}
            ></div>
            <div
              className={classes.stopTitle}
              dangerouslySetInnerHTML={{
                __html: pointProps[selectedPoint].title,
              }}
            ></div>
            <div
              className={classes.stopText}
              dangerouslySetInnerHTML={{
                __html: pointProps[selectedPoint].text,
              }}
            ></div>
            <div
              className={classes.finalButton}
              onClick={(e) => {
                action("go-final");
              }}
            >
              Нажать и узнать приз
            </div>
          </>
        )}
        <div className={classes.product}></div>
      </div>

      {/*
       **********************************************************
       */}
      <div
        className={classes.finalScreen}
        style={{
          opacity: stage === "final" ? 1 : 0,
          pointerEvents: stage === "final" ? "all" : "none",
        }}
      >
        <div className={classes.redField}></div>
        <div className={classes.prizeGlow}></div>
        <div className={classes.finalStarsLeft}></div>
        <div className={classes.finalStarsRight}></div>
        {config && config.name && (
          <>
            <div
              className={classes.prizeImage}
              style={{
                backgroundImage: `url(${config.image})`,
              }}
            ></div>
            <div className={classes.prizeTitle}>Итак, ваш приз:</div>
            <div
              className={classes.prizeName}
              dangerouslySetInnerHTML={{ __html: config.name }}
            ></div>
            <div
              className={classes.prizeText}
              dangerouslySetInnerHTML={{ __html: config.text }}
            ></div>
            <div
              className={classes.startLaterButton}
              onClick={(e) => {
                e.target.dispatchEvent(new Event("skip", { bubbles: true }));
              }}
            >
              Закрыть окно
            </div>
            <div
              className={classes.startButton}
              onClick={(e) => {
                action("restart");
              }}
            >
              Сыграть еще раз
            </div>
          </>
        )}
      </div>

      {/*
       **********************************************************
       */}
      <div
        className={classes.clockContainer}
        style={{
          opacity: stage === "game" ? 1 : 0,
          pointerEvents: stage === "game" ? "all" : "none",
          backgroundImage:
            step < config?.prize.pointRotationAmount ?? 1
              ? `url(${clock})`
              : `url(${clockSelected})`,
        }}
      >
        <div className={classes.clockProgressbar}>
          <RadialProgress
            width="79"
            value={step ?? 0}
            min="1"
            max={config?.prize.pointRotationAmount ?? 1}
            indColor="#E42350"
            trackColor="rgba(0,0,0,0)"
            emptyIndWidth="rgba(0,0,0,0)"
            endCaps="square"
          />
        </div>
        <div className={classes.clockDisplay}></div>
        {step < 10 ? "0" + step : step}
      </div>
      {/*
       **********************************************************
       */}
      <div className={classes.decor}></div>
    </div>
  );
}

export default Interface;
