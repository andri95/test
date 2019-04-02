
class Spurningar{
	constructor(spurningar, svor){
		this._spurningar = spurningar;
		this._svor = svor;
	}
}

let spurningEitt = new Spurningar("Hvað er svarið?", ["A", "B", "C", "D"]);
let spurningTvo = new Spurningar("True eða False?", ["True", "False"]);

const spurningarTemp = [spurningEitt, spurningTvo];

function template(){
	return 
			`<div class="spurning">{this.spurningarTemp.[0].spurningar}</div>
			<div class="svarEitt">{this.spurningarTemp.[0].svor.[0]}</div>
			<div class="svarTvo">{this.spurningarTemp.[0].svor.[1]}</div>
			<div class="svarThrju">{this.spurningarTemp.[0].svor.[2]}</div>
			<div class="svarFjogur">{this.spurningarTemp.[0].svor.[3]}</div>
			`
}