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
  let x = 0;
  let y = 0;
  let dx = 500;
  let dy = 500;

  image.src = imageUrl;

  image.addEventListener("load", function() {
    canvasContext.drawImage(image, ix, iy, dx, dy, x, y, dx, dy);
    //perf = new Date() - timeStart;
    //console.log(perf);

    //const canvasGradient = document.createElement('canvas');
    const canvasGradient = document.querySelector('#canvasTest');
    canvasGradient.width = 100;
    canvasGradient.height = 200;
    const contextGradient = canvasGradient.getContext('2d');
    const gradient = contextGradient.createLinearGradient(200,0, 300,0);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'red');
    contextGradient.fillStyle = gradient;
    contextGradient.fillRect(0, 0, 100, 100);

    const canvasShadow = document.createElement('canvas');
    canvasShadow.width = 500;
    canvasShadow.height = 500;
    const contextShadow = canvasShadow.getContext('2d');
    contextShadow.fillStyle = "rgba(0, 0, 0, 0.5)";
    contextShadow.fillRect(
      0,
      0,
      500,
      500
    );

    const canvasLight = document.querySelector('#canvasTest');
    //const canvasLight = document.createElement('canvas');
    canvasLight.width = 500;
    canvasLight.height = 500;
    const contextLight = canvasLight.getContext('2d');
    //const gradient = contextLight.createLinearGradient(0,0, 200,0);
    //gradient.addColorStop(0, 'red');
    //gradient.addColorStop(0.9, 'blue');
    //gradient.addColorStop(1, 'red');

    contextLight.fillStyle = gradient;
    contextLight.strokeStyle = gradient;
    contextLight.lineWidth = 1;

    //contextLight.shadowColor = 'rgba(0, 0, 0, 0.2)';
    contextLight.beginPath();
    contextLight.moveTo(
      200,
      200
    );
    contextLight.lineTo(300, 250);
    contextLight.lineTo(300, 300);
    contextLight.lineTo(200, 400);
    contextLight.lineTo(200, 200);
    //contextLight.closePath();

    //contextLight.shadowBlur = 30;

    contextLight.fill();
    contextLight.stroke();

    const imageLight = contextLight.getImageData(0, 0, 500, 500);

    contextShadow.globalCompositeOperation = 'destination-out';
    contextShadow.drawImage(canvasLight, 0, 0, 500, 500, 0, 0, 500, 500);
    canvasContext.drawImage(canvasShadow, 0, 0, 500, 500, 0, 0, 500, 500);

  });
}
