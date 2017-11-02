function bubbleSort(array) {
	var sortedArray = array;

	if (array.length <= 1) {
		return array;
	}

	for (var i = 0; i < sortedArray.length; i++) {
		for (var j = 0; j < sortedArray.length; j++) {
			if (sortedArray[j+1]) {
				if (comparison(sortedArray[j], sortedArray[j+1])) {
					swap(sortedArray, sortedArray[j], sortedArray[j+1]);
				}
			}
		}
	}
	return sortedArray;
}

function swap(arr, element1, element2) {
	var index1 = arr.indexOf(element1);
	var index2 = arr.indexOf(element2);

	arr[index1] = element2;
	arr[index2] = element1;

	return arr;
}

function comparison(element1, element2) {
	if (element1 > element2) {
		return true;
	}
	return false;
}