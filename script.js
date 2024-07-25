document.addEventListener('DOMContentLoaded', function () {
	const CURRENT_YEAR = 2024;
	const CORRECT_ANSWER = 'The answer is correct';
	const WRONG_ANSWER = 'Wrong answer';

	const inputNode = document.querySelector('.js-input');
	const buttonNode = document.querySelector('.js-button');
	const outputNode = document.querySelector('.js-output');

	if (!inputNode || !buttonNode || !outputNode) {
		console.error('One or more DOM elements not found');
		return;
	}

	buttonNode.addEventListener('click', function () {
		const inputValue = inputNode.value;

		if (!inputValue) {
			return;
		}

		const answer = parseInt(inputValue, 10);
		let output = CORRECT_ANSWER;

		if (answer !== CURRENT_YEAR) {
			output = WRONG_ANSWER;
		}

		outputNode.innerHTML = output;
	});
});
