let oneSide = document.getElementsByClassName('oneSide');
let twoSide = document.getElementsByClassName('twoSide');

dice = (array1 = [1, 2, 3, 4, 5, 6], array2 = [1, 2, 3, 4, 5, 6]) => {
	let f_random = Math.floor(Math.random() * 6) + 1;
	let s_random = Math.floor(Math.random() * 6) + 1;
	let sum = f_random + s_random;

	for (let i = 0; i < array1.length; i++) {
		if (oneSide[i].textContent == f_random) {
			oneSide[i].style.border = "2px solid red";
			// oneSide[i].style.display = "inline-block";
		} else {
			oneSide[i].style.border = "0px";
			// oneSide[i].style.display = "none";
		}
		for (let j = 0; j < array2.length; j++) {
			if (twoSide[j].textContent == s_random) {
				twoSide[j].style.border = "2px solid blue";
				// twoSide[j].style.display = "inline-block";
			} else {
				twoSide[j].style.border = "0px";
				// twoSide[j].style.display = "none";
			}
		}
	}

	document.getElementById('result').textContent = sum;
}

setInterval(() => {dice()}, 5*1000);