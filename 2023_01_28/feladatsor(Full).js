<script>
/*
document.write("Nagy Ferenc");
document.write("<br>#AllTeam");
document.write("<br>html: 100");
document.write("<br>css: 100");
document.write("<br>javascript: 99");



let szam=prompt("Adj meg egy számot:");
let hatvany=prompt("Add meg a szám hatványát:");
//let eredmeny=szam**hatvany;
let eredmeny=Math.pow(szam, hatvany);
document.write(`A ${szam}<sup>${hatvany}</sup> = ${eredmeny}`)



let also=Number(prompt("Adj meg egy alsó határértéket:"));
let felso=Number(prompt("Adj meg egy felső határértéket:"));
let generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
if(generaltParosSzam%2==0){
	document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam}`);
}
else if(generaltParosSzam!=felso)
{
	document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam+1}`);
}
else{
	document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam-1}`);
}



let also=Number(prompt("Adj meg egy alsó határértéket:"));
let felso=Number(prompt("Adj meg egy felső határértéket:"));
let megvan=false;
let generaltParosSzam=0;
while(megvan==false){
	generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
    if(generaltParosSzam%2==0){
    	megvan=true;
    }
}
document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam}`);



let also=Number(prompt("Adj meg egy alsó határértéket:"));
let felso=Number(prompt("Adj meg egy felső határértéket:"));
//let generaltParosSzam=0;
do{
	let generaltParosSzam=Math.round(Math.random()*(felso-also))+also;
}while(generaltParosSzam%2==1)
document.write(`Generált páros szám a(z) ${also}-${felso} intervallumban: ${generaltParosSzam}`);




let kor=Number(prompt("Adj meg egy életkort:"));
if(kor>0 && kor<6){
	document.write(`${kor} évesen kisgyermekkorban vagy.`);
}
else if(kor>=6 && kor<12){
	document.write(`${kor} évesen gyermekkorban vagy.`);
}
else if(kor>=12 && kor<16){
	document.write(`${kor} évesen serdülőkorban vagy.`);
}
else if(kor>=16 && kor<20){
	document.write(`${kor} évesen ifjúkorban vagy.`);
}
else if(kor>=20 && kor<30){
	document.write(`${kor} évesen fiatal felnőtt korban vagy.`);
}
else if(kor>=30 && kor<60){
	document.write(`${kor} évesen felnőtt korban vagy.`);
}
else if(kor>=60 && kor<=120){
	document.write(`${kor} évesen aggkorban vagy.`);
}
else {
	document.write(`${kor} kor érték, Hibás Adat!`);
}




let kor=Number(prompt("Adj meg egy életkort:"));
if(kor<=0 || kor>=120){
	document.write(`${kor} kor érték, Hibás Adat!`);
}
else if(kor<6){
	document.write(`${kor} évesen kisgyermekkorban vagy.`);
}
else if(kor<12){
	document.write(`${kor} évesen gyermekkorban vagy.`);
}
else if(kor<16){
	document.write(`${kor} évesen serdülőkorban vagy.`);
}
else if(kor<20){
	document.write(`${kor} évesen ifjúkorban vagy.`);
}
else if(kor<30){
	document.write(`${kor} évesen fiatal felnőtt korban vagy.`);
}
else if(kor<60){
	document.write(`${kor} évesen felnőtt korban vagy.`);
}
else{
	document.write(`${kor} évesen aggkorban vagy.`);
}


let szam=Number(prompt("Adj meg egy számot:"));
let oszto=Number(prompt("Adj meg egy osztót:"));
if(szam%oszto==0){
	document.write(`A ${oszto} osztója ${szam} értéknek`);
}
else{
	document.write(`A ${oszto} NEM osztója ${szam} értéknek`);
}
*/
document.write("Az első 10 négyzetszám:");
for(let i=1;i<=10;i++){
	document.write(i*i+",");
}

</script>
