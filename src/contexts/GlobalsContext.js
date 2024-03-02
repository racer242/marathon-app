import { createContext, useEffect, useRef, useState } from "react";

export const GlobalsContext = createContext({});

const WINDOW_AMOUNT = 5;

export function GlobalsProvider({ children, data, root }) {
  const [stage, setStage] = useState("loading"); //start,ringing,prize-selected,prize-zoom,finish
  const stageRef = useRef(stage);
  stageRef.current = stage;

  const [settings, setSettings] = useState(null);
  const [error, setError] = useState(null);
  const [selectedWindow, setSelectedWindow] = useState(-1);
  const [visiblePrizes, setVisiblePrizes] = useState([]);

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

  const startRinging = () => {
    setStage("ringing");
  };

  const showPrizes = () => {
    setTimeout(() => {
      if (stageRef.current !== "start") changePrizeVisibility();
    }, config.prize.prizeChangeDuration * 3);
  };

  const changePrizeVisibility = () => {
    let visiblePrizes = [];
    let thumbs = Array(configRef.current.thumbs.length)
      .fill(0)
      .map((v, i) => i);
    for (let i = 0; i < config.prize.visiblePrizeAmount; i++) {
      const index = Math.floor(Math.random() * thumbs.length);
      visiblePrizes[Math.floor(Math.random() * WINDOW_AMOUNT)] = thumbs.splice(
        index,
        1
      )[0];
    }
    setVisiblePrizes(visiblePrizes);

    if (prizeChangeCountRef.current < config.prize.prizeRotationAmount) {
      setPrizeChangeCount(prizeChangeCountRef.current + 1);

      setTimeout(() => {
        if (stageRef.current !== "start") changePrizeVisibility();
      }, config.prize.prizeChangeDuration);
    } else {
      setTimeout(() => {
        if (stageRef.current !== "start") selectPrize();
      }, config.prize.prizeChangeDuration);
    }
  };

  const selectPrize = () => {
    let selectedWindow = Math.floor(Math.random() * WINDOW_AMOUNT);
    let visiblePrizes = [];
    visiblePrizes[selectedWindow] = configRef.current.index;
    setVisiblePrizes(visiblePrizes);
    setSelectedWindow(selectedWindow);

    setStage("prize-selected");
    setTimeout(() => {
      if (stageRef.current !== "start") zoomPrize();
    }, 1000);
  };

  const zoomPrize = () => {
    setStage("prize-zoom");
    setTimeout(() => {
      if (stageRef.current !== "start") finish();
    }, 2000);
  };

  const finish = () => {
    setStage("finish");
    root.dispatchEvent(new Event("finish", { bubbles: true }));
  };

  const reset = () => {
    setVisiblePrizes(null);
    setSelectedWindow(null);
    setPrizeChangeCount(0);
    setStage("start");
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
        selectedWindow,
        error,
        setError,
        visiblePrizes,
        action: (action) => {
          switch (action) {
            case "start":
              start();
              break;
            case "start-ringing":
              startRinging();
              break;
            case "show-prizes":
              showPrizes();
              break;
            case "reset":
              reset();
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
