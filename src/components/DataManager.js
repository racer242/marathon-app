import { useContext, useEffect } from "react";
import axios from "axios";
import { GlobalsContext } from "../contexts/GlobalsContext";

function DataManager({ root }) {
  const loadSettings = (root) => {
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
    setTimeout(async () => {
      let response;
      try {
        response = await axios(config.config);
      } catch (e) {
        console.error("Request Error:", e.message, e.response);
        if (e.response?.data?.errorText) {
          setError(e.response.data.errorText);
        } else {
          setError(config.errors.loadError);
        }
        return;
      }

      if (response?.data) {
        if (response?.data?.prize) {
          setConfig({ ...response.data.prize, ...config });
        } else {
          setError(config.errors.noData);
        }
        if (response.data.result === "OK") {
          action("show-prizes");
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
    if (stage === "ringing") loadConfig(root);
  }, [stage]);

  return null;
}

export default DataManager;
