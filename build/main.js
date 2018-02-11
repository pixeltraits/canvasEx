window.onload = () => {

  let canvasHtml = document.querySelector('#canvas');
  let canvasContext = canvasHtml.getContext("2d", {
    antialias : true
  });
  let perf = 0;
  let timeStart = new Date();
  let imageUrl = "/public/img/perfTest.jpg";
  let image = new Image(3840, 2160);
  let ix = 0;
  let iy = 0;
  let x = -395;
  let y = -195;
  let dx = 400;
  let dy = 200;

  image.src = imageUrl;

  image.addEventListener("load", function() {
    canvasContext.drawImage(image, ix, iy, dx, dy, x, y, dx, dy);
    perf = new Date() - timeStart;
    console.log(perf);
  });

}
