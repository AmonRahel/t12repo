//Tétel: Megszámlálás tétele
//Eredménye: Kiíraja hány adott(T) tulajdonságú elem található a tömbben

//Működése: bejárja a tömböt, majd minden egyes tömb elem esetén, megvizsgálja, igaz-e rá,
//az aktuális (T) tulajdonság. Ha igaz, akkor növel egy "db" változót, majd ha befejezte a
//vizsgálatot, megjeleníti a "db" változó értékét, ami a tétel eredménye lesz

//Aktuálisan vizsgált T tulajdonság: páros számok

let db=0;
for(let i=0;i<tomb.length;i++){
	if(tomb[i]%2==0){
    	db++;
    }
}
document.write("<br>A tömbben található páros elemek száma: "+db);