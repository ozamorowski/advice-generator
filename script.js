(async function () {
	await getAdvice()

	document.querySelector('#load-next').addEventListener('click', getAdvice)
})();

async function getAdvice() {
	// const loading = document.querySelector('#loading')

	// loading.style.display = 'block'
	const { id, advice } = await fetchApi()
	setAdviceHTML(id, advice)
	// loading.style.display = 'none'
}

async function fetchApi() {
	const response = await fetch('https://api.adviceslip.com/advice')
	const { slip: { id, advice } } = await response.json()

	return { id, advice }
}

function setAdviceHTML(id, advice) {
	const adviceId = document.querySelector('#advice-id')
	const adviceText = document.querySelector('#advice-text')

	adviceId.innerHTML = id
	adviceText.innerHTML = '"' + advice + '"'
}