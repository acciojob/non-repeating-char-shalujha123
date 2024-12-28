function firstNonRepeatedChar(str) {
 // Write your code here
	let arr = str.split("")
	let count = {}
	let flag = false
	for(let t of arr){
		if(count[t]){
			count[t]++
		}else{
			count[t] = 1
			flag = true
		}
	}
	if(flag){
		for(let t of arr){
			if(count[t] === 1){
				return t
			}
		}
	}
	return null
	
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
