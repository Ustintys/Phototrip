let xml = new XMLHttpRequest();
xml.open("GET", "../XML.xml", false);
xml.send();
let datas = xml.responseXML.querySelector("information");
Array.from(document.getElementsByClassName("middle-info-name"))[0].innerHTML = xml.responseXML.querySelector("information").children[0].innerHTML;
