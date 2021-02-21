var iframe1 = "<iframe width='100%' height='100%' src='";
var iframe2 = "' frameborder='0' noresize scrolling='no' allowfullscreen></iframe>";
var tabsArray = new Object();
                                            tabsArray["1"] = iframe1 + "https://severus09.github.io/AnimeCFD/3320-1.html" + iframe2;
                                            tabsArray["2"] = iframe1 + "https://severus09.github.io/AnimeCFD/3320-1.html" + iframe2;
                                            tabsArray["3"] = iframe1 + "https://severus09.github.io/AnimeCFD/3320-1.html" + iframe2;
                                            tabsArray["4"] = iframe1 + "https://severus09.github.io/AnimeCFD/3320-1.html" + iframe2;
                                            tabsArray["5"] = iframe1 + "https://severus09.github.io/AnimeCFD/3320-1.html" + iframe2;
                                            tabsArray["6"] = iframe1 + "https://severus09.github.io/AnimeCFD/3320-1.html" + iframe2;

            console.log("primer elemento ----------- >" + tabsArray[1]);

//DESCARGAS

var descarga = `<tr><th id='p'>SERVIDORES</th><th id='d'>DESCARGAR</th><th></th></tr>
<tr><td id='p'>SERVER #1</td><td id='d'>
<a class="desc-srv" target='_blank' href='#'><i class="fas fa-download"></i>DESCARGAR</a></td></tr>
<tr><td id='p'>SERVER #2</td><td id='d'>
<a class="desc-srv" target='_blank' href='#'><i class="fas fa-download"></i>DESCARGAR</a></td></tr>
<tr><td id='p'>SERVER #3</td><td id='d'>
<a class="desc-srv" target='_blank' href='#'><i class="fas fa-download"></i>DESCARGAR</a></td></tr>`;

document.getElementById("descargas").innerHTML = `${descarga}`
