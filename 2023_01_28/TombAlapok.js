<script>
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
</script>