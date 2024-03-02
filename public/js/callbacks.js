function houseAppCallbacks() {
  const houseAppRoot = document.getElementById("marathon-app-root");

  houseAppRoot.addEventListener("setup", (event) => {
    console.log("Game setup");
    event.data = {
      config: { url: "./response.json", method: "GET" }, //Адрес конфигурации игры https://dev.ms-2023.srv08.ru/api/Game
      confetti: {
        amount: 150, //Количество конфети
      },
      prize: {
        visiblePrizeAmount: 2, //Количество одновременно открываемых призов во время звонка
        prizeChangeDuration: 500, //Интервал показа призов при ротации во время звонка
        prizeRotationAmount: 10, //Количество показов призов во время звонка
      },
      animation: {
        normalDuration: 3, //Длительность анимации людей в режиме ожидания, сек
        danceDuration: 1, //Длительность анимации во время звонка, сек
      },
      errors: {
        noData: "Конфигурация пустая",
        loadError: "Ошибка загрузки конфигурации",
      },
    };
  });

  houseAppRoot.addEventListener("skip", (event) => {
    console.log("Game skipped");
  });

  houseAppRoot.addEventListener("finish", (event) => {
    console.log("Game finished");
  });
}

window.addEventListener("load", (event) => {
  houseAppCallbacks();
});
