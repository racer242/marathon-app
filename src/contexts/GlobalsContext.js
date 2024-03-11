import { createContext, useEffect, useRef, useState } from "react";

export const GlobalsContext = createContext({});

const POINT_AMOUNT = 6;
let randomList = [];

const shuffle = (n) => {
  let num = Math.ceil(n / POINT_AMOUNT);
  let r = Array(num)
    .fill()
    .map((_, i) =>
      Array(POINT_AMOUNT)
        .fill()
        .map((_, i) => i)
        .sort(() => (Math.random() > 0.5 ? 1 : -1))
    );
  for (let i = 1; i < num; i++) {
    if (r[i - 1][r[i].length - 1] === r[i][0]) r[i].reverse();
  }
  randomList = r.flat();
};

export function GlobalsProvider({ children, data, root }) {
  const [stage, setStage] = useState("loading");
  const stageRef = useRef(stage);
  stageRef.current = stage;

  const [settings, setSettings] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(-1);
  const [selectedPointState, setSelectedPointState] = useState(0);

  const [config, setConfig] = useState(null);
  const configRef = useRef(config);
  configRef.current = config;

  const [prizeChangeCount, setPrizeChangeCount] = useState(0);
  const prizeChangeCountRef = useRef(prizeChangeCount);
  prizeChangeCountRef.current = prizeChangeCount;

  useEffect(() => {
    root.addEventListener("reset", (event) => {
      reset();
    });
  }, []);

  const start = () => {
    setStage("start");
  };

  const readyToGo = () => {
    setStage("ready-to-go");
  };

  const readyToStart = () => {
    setStage("ready-to-start");
  };

  const startGame = () => {
    setStage("game");
    shuffle(config.prize.pointRotationAmount);
    changePoint();
  };

  const changePoint = () => {
    setSelectedPoint(randomList[prizeChangeCountRef.current]);
    if (prizeChangeCountRef.current < config.prize.pointRotationAmount - 1) {
      setPrizeChangeCount(prizeChangeCountRef.current + 1);
      showPoint();
      setTimeout(() => {
        if (stageRef.current !== "start") {
          hidePoint();
          setTimeout(() => {
            if (stageRef.current !== "start") {
              changePoint();
            }
          }, config.animation.pointTransition);
        }
      }, config.prize.pointChangeDuration);
    } else {
      setPrizeChangeCount(prizeChangeCountRef.current + 1);
      showPoint();
      setTimeout(() => {
        if (stageRef.current !== "start") finishGame();
      }, config.prize.finishDelay);
    }
  };

  const showPoint = () => {
    setSelectedPointState(1);
  };

  const hidePoint = () => {
    setSelectedPointState(2);
  };

  const finishGame = () => {
    setStage("game-finish");
  };

  const final = () => {
    setStage("final");
    root.dispatchEvent(new Event("finish", { bubbles: true }));
  };

  const reset = () => {
    setSelectedPoint(-1);
    setSelectedPointState(0);
    setPrizeChangeCount(0);
    setError(null);
    setStage("start");
  };

  const restart = () => {
    setSelectedPoint(-1);
    setSelectedPointState(0);
    setPrizeChangeCount(0);
    setStage("ready-to-go");
  };

  return (
    <GlobalsContext.Provider
      value={{
        data,
        stage,
        setStage,
        settings,
        setSettings,
        config,
        setConfig,
        selectedPoint,
        selectedPointState,
        step: prizeChangeCountRef.current,
        error,
        setError,
        action: (action) => {
          switch (action) {
            case "start":
              start();
              break;
            case "ready-to-go":
              readyToGo();
              break;
            case "show-ready":
              readyToStart();
              break;
            case "start-game":
              startGame();
              break;
            case "go-final":
              final();
              break;
            case "reset":
              reset();
              break;
            case "restart":
              restart();
              break;
            default:
              break;
          }
        },
      }}
    >
      {children}
    </GlobalsContext.Provider>
  );
}
