function houseAppCallbacks() {
  const houseAppRoot = document.getElementById("marathon-app-root");

  houseAppRoot.addEventListener("setup", (event) => {
    console.log("Game setup");
    event.data = {
      config: { url: `${window.apiUrl}/api/PlayGame`, method: "POST" }, //Адрес конфигурации игры https://dev.ms-2023.srv08.ru/api/Game
      prize: {
        pointChangeDuration: 600, //Интервал показа меток при ротации во время игры
        pointRotationAmount: 12, //Количество показов меток во время игры
        finishDelay: 2000, //Задержка после игры
      },
      animation: { pointTransition: 300 },
      errors: {
        noData: "Конфигурация пустая",
        loadError: "Ошибка загрузки конфигурации",
      },
    };
  });

  houseAppRoot.addEventListener("skip", (event) => {
    document.dispatchEvent(new CustomEvent("gameEnd"));

    console.log("Game skipped");
  });

  houseAppRoot.addEventListener("finish", (event) => {
    console.log("Game finished");
  });
}

document.addEventListener("readyGame", (event) => {
  houseAppCallbacks();
});
