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