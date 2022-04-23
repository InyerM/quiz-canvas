const wall = document.getElementById("wall")
const ctx = wall.getContext("2d")

const drawRectangle = (x, y, w, h, color, scolor, lw) => {
  ctx.fillStyle = color
  ctx.strokeStyle = scolor
  ctx.lineWidth = lw
  ctx.strokeRect(x, y, w, h)
  ctx.fillRect(x, y, w, h)
}

const drawCircle = (x, y, r, color, scolor, lw) => {
  ctx.beginPath()
  ctx.lineWidth = lw
  ctx.fillStyle = color
  ctx.strokeStyle = scolor
  ctx.arc(x, y, r, 0, Math.PI*2)
  ctx.stroke()
  ctx.fill()
}

const drawTriangle = (x, y, x1, y1, x2, y2, color, scolor, lw) => {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.closePath()

  ctx.lineWidth = lw;
  ctx.strokeStyle = scolor;
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.fill();
}

const drawPentagon = (x, y, x1, y1, x2, y2, x3, y3, x4, y4, color, scolor, lw) => {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineTo(x3, y3)
  ctx.lineTo(x4, y4)
  ctx.closePath()

  ctx.lineWidth = lw;
  ctx.strokeStyle = scolor;
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.fill();
}

const drawHexagon = (x, y, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, color, scolor, lw) => {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineTo(x3, y3)
  ctx.lineTo(x4, y4)
  ctx.lineTo(x5, y5)
  ctx.closePath()

  ctx.lineWidth = lw;
  ctx.strokeStyle = scolor;
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.fill();
}

drawRectangle(50, 80, 150, 150, '#ff5555', '#db3c30', 5)
drawCircle(125, 350, 78, '#00e7ed', '#37d8d9', 5)
drawTriangle(265, 245, 445, 245, 355, 80, '#ffdf4a', '#f9dc63', 5)
drawHexagon(245, 370, 285, 300, 365, 300, 405, 370, 365, 440, 285, 440, '#fe0e0f', '#f10b0c', 5)
drawPentagon(480, 170, 560, 110, 640, 170, 610, 270, 510, 270, '#9f51ff', '#a36ddb', 5)
drawRectangle(450, 330, 200, 90, '#00ce52', '#0ac959')