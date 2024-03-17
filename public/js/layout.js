function houseAppLayout() {
  const CONTAINER_NATIVE_WIDTH = 880;
  const CONTAINER_NATIVE_HEIGHT = 580;

  const CONTAINER_MIN_WIDTH = 520;

  const houseAppWrapper = document.getElementById("marathon-app-wrapper");
  const houseAppContainer = document.getElementById("marathon-app-container");

  updateBounds();

  houseAppWrapper.style.visibility = "visible";

  function updateBounds() {
    const scale =
      houseAppWrapper.clientWidth < CONTAINER_MIN_WIDTH
        ? Math.min(
            houseAppWrapper.clientWidth / CONTAINER_MIN_WIDTH,
            houseAppWrapper.clientHeight / CONTAINER_NATIVE_HEIGHT
          )
        : Math.min(
            houseAppWrapper.clientWidth / CONTAINER_NATIVE_WIDTH,
            houseAppWrapper.clientHeight / CONTAINER_NATIVE_HEIGHT
          );
    houseAppContainer.style.transform =
      "translate(-50%,-50%) scale(" + scale + "," + scale + ")";
  }

  window.addEventListener("resize", (event) => {
    updateBounds();
  });
}

document.addEventListener("readyGame", (event) => {
  houseAppLayout();
});
