<script>
//Tömb alapismeretek
let tomb=[];
for(let i=0;i<10;i++){
	tomb.push(Math.round(Math.random()*100));
}
document.write("Kiíratás egyszerű document.write-tal: ");
document.write(tomb);//Alapvetően vesszővel elválasztva kiírja a tömb tartalmát

document.write("<br>Kiíratás for ciklussal: ");
for(let i=0;i<tomb.length;i++){
	//CIKLUSMAG - tartalmazhatja a szűrési feltételeket
	document.write(tomb[i]+" ");
}

//Tétel:Összegzés tétele
//Eredménye: Megszámolja egy adott tömb elemeinek az összegét

//Működése: bejárja a tömböt, majd minden egyes tömb elem esetén, az előre deklarált
//összeg változó értékét, növeli az aktuális tömbelem értékével, végül kiírja


let osszeg=0;
for(let i=0;i<tomb.length;i++)
{
	osszeg+=tomb[i];
}
document.write("<br>A tömb elemeinek összege: "+osszeg);



/*
//Tétel: Átlagszámítás tétele
//Eredménye:Megszámolja egy adott tömb elemeinek az átlagát

//Működése:bejárja a tömböt, majd minden egyes tömb elem esetén, az előre deklarált
//összeg változó értékét, növeli az aktuális tömbelem értékével, végül kiírja
//az elemek összegét, elosztva az elemek mennyiségével

//Alapvetően ugyanaz mint a összegzés tétele, csak a kiíratás módosul


let osszeg=0;
for(let i=0;i<tomb.length;i++)
{
	osszeg+=tomb[i];
}
document.write("<br>A tömb elemeinek átlaga: "+osszeg/tomb.length);
*/
document.write("<br>A tömb elemeinek átlaga: "+osszeg/tomb.length);




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


</script>
