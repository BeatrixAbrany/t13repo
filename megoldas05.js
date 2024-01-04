<script>
//5. feladat
document.write("5. feladat <br/>");

let szam=Number(prompt("Adj meg egy számot"));
let oszt=Number(prompt("Adj meg egy osztót"));

if (oszt%szam==0)
{
document.write("A "+oszt+" osztja a "+szam+"-t")
}
else
{
document.write("A "+oszt+" nem osztja a "+szam+"-t")
}
</script>

