<script>
//4. feladat
document.write("4. feladat <br/>");
let kor=Number(prompt("Adj meg egy életkort 1-120ig"));

if(kor>0 || kor<7)
{
document.write("Kisgyermekkor");
}
else if(kor>6 || kor<13)
{
document.write("Gyermekkor");
}
else if(kor>11 || kor<17)
{
document.write("Serdülőkor");
}
else if(kor>15 || kor<21)
{
document.write("Ifjúkor");
}
else if(kor>19 || kor<31)
{
document.write("Fiatal felnőttkor");
}
else if(kor>29 || kor<61)
{
document.write("Felnőttkor");
}
else if(kor>59)
{
document.write("Aggkor");
}
else if(kor>120 || kor<0)
{
document.write("Hiba");
}
</script>

