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

const explanation = "Das Prolem des Josephus ist ein theoretisches Problem. Josephus ist ein griechischer Soldat der mit seinen 40 Kameraden in einer Höhle verschanzt und umzingelt ist. Josephus Kameraden wollen lieber sterben aber als sich von den Römern gefangen nehmen zu lassen. Josephus teilt diese Meinung nicht aber hat Angst das sie ihn töten wenn er es seinen Kameraden mitteilt. Er schlägt vor das sich alle in einen kreis stellen und im Kreis tötet der Krieger welcher an der Reihe ist seinen linken Nachbarn. Ist die Runde beendet geht es von vorne los solange bis nur noch eine Person übrig ist. An welcher stelle im Kreis muss Jpsephus also stehen um zu überleben das er sich stellen kann.";

console.log(explanation);
                                       
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
function start() {
	
readline.question('Wie viele Krieger einschließlich Posephus gibt es?', (warriorCount) => {
	if (!isNaN(warriorCount)) {
 		console.log(`Es gibt ${warriorCount} Krieger einschließlich Posephus`);
 		// calculateSurivor(warriorCount);	
		calculateSurivorByExploration(warriorCount);
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

function calculateSurivorByExploration(warriorCount){
	var warriorArray = new Array(parseInt(warriorCount));
	for (var i = 0; i < warriorArray.length; i++){
		warriorArray[i] = i + 1;
	};
	warriorArray = reduceWarriors(warriorArray,0);
	console.log(warriorArray);
}

function reduceWarriors(oldArray, startPosition){
	var newArray = [];
	var factor = 0;
	for (var i = 0; i < oldArray.length; i++) {
		if((i % 2) == startPosition){
			newArray.push(oldArray[i])
			factor = 1
		} else {
			factor = 0
		}
	}
	if( newArray.length > 1) {
	newArray  = reduceWarriors(newArray,factor);
	}
	return newArray;
}

function showExplanation() {
	console.log(explanation);
}
            





