function showalert(){
  alert("กดทำไม ยังไม่ทำเลย อิ______อิ");
}

var x,xmlhttp,xmlDoc
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "assets/res/car-detail.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("Car");
table="";
for (i = 0; i <x.length; i++) {
  table += "<tr onclick='displayCD(" + i + ")'><td class='artistButton' >";
  table += x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
  table += "</td></tr>";
}
document.getElementById("demo").innerHTML = table;

function displayCD(i) {
  if(i%3==0){
  document.getElementById("main").style.backgroundColor = "LightPink";}
  else if(i%3==1){
  document.getElementById("main").style.backgroundColor = "LightGreen";}
  else {
  document.getElementById("main").style.backgroundColor = "LightSkyBlue";}

  document.getElementById("showCar").innerHTML =
  "Brand: " +
  x[i].getElementsByTagName("BRAND")[0].childNodes[0].nodeValue +
  "<br>Model: " +
  x[i].getElementsByTagName("MODEL")[0].childNodes[0].nodeValue +
  "<br>Color: " +
  x[i].getElementsByTagName("COLOR")[0].childNodes[0].nodeValue +
  "<br>Price: " +
  x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
  "<br><br><img src=res/" +
  x[i].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue+
  ">";
}
