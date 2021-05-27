'use strict'

window.onload = function () {
	const parallax = document.querySelector('body')

	if (parallax) {
		const content = document.querySelector('.parallax__container')
		const space = document.querySelector('.images-parallax__space')
		const stars = document.querySelector('.images-parallax__stars')

		const forSpace = 40
		const forStars = 20

		const speed = 0.1

		let posX = 0, posY = 0
		let coordXproc = 0, coordYproc = 0

		function setMouseParallaxStyle() {
			const distX = coordXproc - posX
			const distY = coordYproc - posY

			posX += (distX * speed)
			posY += (distY * speed)

			space.style.cssText = `transform: translate(${posX / forSpace}%, ${posY / forSpace}%);)`
			stars.style.cssText = `transform: translate(${posX / forStars}%, ${posY / forStars}%);)`

			requestAnimationFrame(setMouseParallaxStyle)
		}
		setMouseParallaxStyle()

		parallax.addEventListener("mousemove", function (e) {
			const parallaxWidth = parallax.offsetWidth
			const parallaxHeight = parallax.offsetHeight

			const coordX = e.pageX - parallaxWidth / 2
			const coordY = e.pageY - parallaxHeight / 2

			coordXproc = coordX / parallaxWidth * 100
			coordYproc = coordY / parallaxHeight * 100
		})
	}
}
