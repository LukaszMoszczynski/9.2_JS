var femaleNames = [ "Asia", "Justyna", "Anna", "Sylwia" ];
var maleNames = [ "Piotrek", "Arek", "Zdravko", "Clint" ];

var allNames = femaleNames.concat (maleNames);

console.log(allNames);

var newName = "Marian";

if (allNames.indexOf(newName === -1)) {
	allNames [8] = newName; 
}	else {
	console.log("Takie imię już istnieje w tablicy");
}

console.log(allNames);

	/*allNames.push(newName);*/