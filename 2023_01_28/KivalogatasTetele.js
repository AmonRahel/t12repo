
//Tétel: Kiválogatás tétele
//Eredménye: Kiíratja melyek az adott(T) tulajdonságú elemek a tömbben

//Működése: bejárja a tömböt, majd minden egyes tömb elem esetén, megvizsgálja, igaz-e rá,
//az aktuális (T) tulajdonság. Ha igaz, akkor megjeleníti azt

//Aktuálisan vizsgált T tulajdonság: páros számok
document.write("<br>A tömbben található páros elemek:")
for(let i=0;i<tomb.length;i++){
	if(tomb[i]%2==0){
    	document.write(tomb[i]+",");
    }
}