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