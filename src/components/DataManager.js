import { useContext, useEffect } from "react";
import axios from "axios";
import { GlobalsContext } from "../contexts/GlobalsContext";

function DataManager({ root }) {
  const loadSettings = (root) => {
    console.log("loadSettings");
    setTimeout(async () => {
      const event = new Event("setup", { bubbles: true });
      root.dispatchEvent(event);
      if (event.data) {
        setSettings(event.data);
        const settings = event.data;
        setConfig({ ...settings });
        action("start");
      } else {
        loadSettings(root);
      }
    }, 100);
  };
  const loadConfig = (root) => {
    console.log("loadConfig");
    setTimeout(async () => {
      let JWT;
      try {
        JWT = window.getJWT();
      } catch (error) {
        console.log("window.getJWT isn't set");
      }
      let response;
      try {
        response = await axios({
          ...config.config,
          data: {
            play: true,
          },
          headers: { JWT: JWT },
        });
      } catch (e) {
        console.error("Request Error:", e.message, e.response);
        if (e.response?.data?.errorText) {
          setError(e.response.data.errorText);
        } else {
          setError(config.errors.loadError);
        }
        return;
      }

      if (response?.data?.JWT) {
        try {
          window.saveJWT(response?.data?.JWT);
        } catch (error) {
          console.log("window.saveJWT isn't set");
        }
      } else {
        console.log("JWT isn't transferred");
      }

      if (response?.data) {
        if (response?.data?.data?.prize) {
          setConfig({ ...response.data.data.prize, ...config });
        } else {
          setConfig({
            ...{
              name: "Вы не выиграли",
              text: "Попробуйте сыграть еще раз",
              image: "./images/no-prize.png",
              noPrize: true,
            },
            ...config,
          });
          // setError(config.errors.noData);
        }
        if (response.data.result === "OK") {
          action("show-ready");
        } else {
          setError(response.data.errorText);
        }
      } else {
        setError(config.errors.noData);
      }
    }, 100);
  };

  const { setSettings, config, setConfig, setError, action, stage } =
    useContext(GlobalsContext);

  useEffect(() => {
    if (stage === "loading") loadSettings(root);
    if (stage === "ready-to-go") loadConfig(root);
  }, [stage]);

  return null;
}

export default DataManager;
