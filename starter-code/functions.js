// Question 1
function maxOfTwoNumbers(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
}}

// Question 2
function maxOfThree(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} 
	else if (num1 < num2 && num2 > num3) {
		return num2;
	}
	else {
		return num3;
	}	
}

// Question 3
function isCharacterAVowel(char) {
	if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
		return true;
	} else {
		return false;
	}
}

// Question 4
var arrayOfNumbers = [1,2,3,4];

function sumArray(num) {
	var sum = 0;
	for (var i = 0; i < num.length; i++) {
		sum += num[i];
}
	return sum;	
}


// Question 4
var arrayOfNumbers = [1,2,3,4];

	function sumArray(num) {
		var multiply = 1;
		for (var i = 0; i < num.length; i++) {
			multiply *= num[i];
	}
		return multiply;
	
}

// Question 5
var numberOfArguments = function(){
  
}



// Question 6
var reverseString = function(string) {
  var rev = '';
  for (var i = string.length - 1; i >= 0; i--)
    rev += string[i];
  return rev;
}


// Question 7
function findLongestWord(str) {
  var split = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < split.length; i++){
    if(split[i].length > longestWord){
	longestWord = split[i].length;
     }
  }
  return longestWord;
}


// Question 8
var ary = ['one', 'two', 'three']
function filterLongWords (i, x) {
	for (var j = 0; j < x.length; i++) {
		if (x[j] >= i ) {
			console.log(' This works')
			return j;
		} else {
			console.log( ' number not big enough')
		}
	}  
}
filterLongWords(2, ary);


// Bonus 1
function charactersOccurencesCount() {
  
}

