function searchChampionNavbar(e){
  e.preventDefault();
  const name = document.getElementById("navbarSearch").value.toLowerCase();
  if(name.includes("malph")) window.location.href="heroes-malphite.html";
  else if(name.includes("lee")) window.location.href="heroes-leesin.html";
  else if(name.includes("ahri")) window.location.href="heroes-ahri.html";
  else if(name.includes("leona")) window.location.href="heroes-leona.html";
  else if(name.includes("jinx")) window.location.href="heroes-jinx.html";
  else alert("Champion not found");
}