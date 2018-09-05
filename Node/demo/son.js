class Father {
	getGender(){
		return "M";
	}
	
	getName() {
		return "Prakash";
	}
}

class Son extends Father {
	getName() {
		return 'Venkat';
	}
	
	getCity() {
		return "Hyderabad";
	}
}

module.exports = Son;