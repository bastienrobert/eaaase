var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var ray = 20
var x = 0
var raf

var now = Date.now()
var lastTime = now
var deltaTime = 0
var currentTime = 0
var startTime = 0

window.addEventListener('resize', reset)
document.addEventListener('click', reset)
reset()
animate()

function reset() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  x = 0
  ctx.fillStyle = '#24292e'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  startTime = currentTime
  if (!raf) animate()
}

function animate() {
  raf = window.requestAnimationFrame(animate)

  now = Date.now()
  deltaTime = (now - lastTime) / 1000
  lastTime = now
  currentTime += deltaTime

  if (x <= (3 * canvas.width) / 4) {
    x = Ease.easeInCubic(
      currentTime - startTime,
      canvas.width / 4,
      (3 * canvas.width) / 4,
      2
    )
  } else {
    window.cancelAnimationFrame(raf)
    raf = null
  }

  ctx.beginPath()
  ctx.globalAlpha = '.001'
  ctx.fillStyle = '#24292e'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.globalAlpha = '.3'
  ctx.closePath()

  ctx.beginPath()
  ctx.save()
  ctx.translate(0, canvas.height / 2 - ray / 2)
  ctx.fillStyle = '#ff0000'
  ctx.arc(x, 0, ray, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
  ctx.closePath()
}