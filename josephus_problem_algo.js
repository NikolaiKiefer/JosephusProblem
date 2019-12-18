console.log('     _                      _');               
console.log('    | | ___  ___  ___ _ __ | |__  _   _ ___'); 
console.log(" _  | |/ _ \\/ __|/ _ \\ '_ \\| '_ \\| | | / __|");
console.log("| |_| | (_) \\__ \\  __/ |_) | | | | |_| \\__ \\");
console.log(" \\___/ \\___/|___/\\___| .__/|_| |_|\\__,_|___/");
console.log("                     |_|");                    
console.log(" ____            _     _");                
console.log("|  _ \\ _ __ ___ | |__ | | ___ _ __ ___");  
console.log("| |_) | '__/ _ \\| '_ \\| |/ _ \\ '_ ` _ \\"); 
console.log("|  __/| | | (_) | |_) | |  __/ | | | | |");
console.log("|_|   |_|  \\___/|_.__/|_|\\___|_| |_| |_|");
console.log(" ");
console.log("Willkommen beim Problem des Josephus, es folgt eine kleine Einleitung mit Entstehung und Erklärung des Problems");

                                       
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
function start() {
readline.question('Wie viele Krieger einschließlich Posephus gibt es?', (warriorCount) => {
	if (!isNaN(warriorCount)) {
  console.log(`Es gibt ${warriorCount} Krieger einschließlich Posephus`);
  calculateSurivor(warriorCount);
  readline.close()
	} else {
		console.log("bitte gib eine Zahl ein");
		start();
	}
})
}
start();

function calculateSurivor(warriorcount) {
	let bites = "";
	while(warriorcount >= 1) {
		let tmp = numberToBites(warriorcount);
		bites += tmp[0];
		warriorcount = tmp[1];
	}
	let tmpArray = bites.split("");
	tmpArray = tmpArray.reverse();
	bites = tmpArray.join("");
	let surivor = bites.substring(1,bites.length) + bites.substring(0,1);
	console.log("Josephus sollte sich an Stelle: " + parseInt(surivor,2) + " stellen");
};

function numberToBites(number) {
	var bit = [];
	var mod = number % 2;
	bit.push(mod);
	bit.push((number - mod) / 2);
	return bit;
}

            
