$(document).ready(function() {
    
    $('.episode-page__servers-list a:first').parent().addClass('is-active').show();
    var firstTabNumber = $('.episode-page__servers-list a:first').attr('href').substring(4);

    $('#video_player').html(tabsArray[firstTabNumber]);

    $('.episode-page__servers-list a').on('click', function(e) {
        e.preventDefault();

        $('.episode-page__servers-list li').removeClass('is-active');
        $(this).parent().addClass('is-active');

        var activeTabNumber = $(this).attr('href').substring(4);
        $('#video_player').html(tabsArray[activeTabNumber]);
        console.log("activetab val: " + activeTabNumber);
    });

    $("#showModal").click(function() {
        $(".modal").addClass("is-active");
    });

    $(".js-download-close").click(function() {
        $(".modal").removeClass("is-active");
    });
});

filterSelection("(1)")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "(1)") c = "(1)";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("a");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("span")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activea");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//cont-descargas

var answer1 = "EPISODIOS";
var answer2 = "SERVIDORES";
var cuerpo1 = "<td id='p'>";
var cuerpo2 = "</td>" + "<td id='d'>";
var cuerpo3 = "</a>" + " " + "-" + " ";
var cuerpo4 = "</a>" + "</td>" + "</tr>";

document.getElementById("descargas").innerHTML = 
"<table id='desc'>" + "<tr>" + "<th id='p'>" + answer1 + "</th>" + "<th id='d'>" + answer2 + "</th>" + "</tr>" + 
"<tr id='redesc' class='des1'>" + cuerpo1 + "01" + cuerpo2 + "<a target='_blank' href='" + des1_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des1_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des1_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des2'>" + cuerpo1 + "02" + cuerpo2 + "<a target='_blank' href='" + des2_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des2_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des2_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des3'>" + cuerpo1 + "03" + cuerpo2 + "<a target='_blank' href='" + des3_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des3_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des3_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des4'>" + cuerpo1 + "04" + cuerpo2 + "<a target='_blank' href='" + des4_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des4_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des4_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des5'>" + cuerpo1 + "05" + cuerpo2 + "<a target='_blank' href='" + des5_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des5_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des5_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des6'>" + cuerpo1 + "06" + cuerpo2 + "<a target='_blank' href='" + des6_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des6_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des6_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des7'>" + cuerpo1 + "07" + cuerpo2 + "<a target='_blank' href='" + des7_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des7_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des7_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des8'>" + cuerpo1 + "08" + cuerpo2 + "<a target='_blank' href='" + des8_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des8_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des8_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des9'>" + cuerpo1 + "09" + cuerpo2 + "<a target='_blank' href='" + des9_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des9_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des9_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des10'>" + cuerpo1 + "10" + cuerpo2 + "<a target='_blank' href='" + des10_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des10_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des10_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des11'>" + cuerpo1 + "11" + cuerpo2 + "<a target='_blank' href='" + des11_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des11_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des11_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des12'>" + cuerpo1 + "12" + cuerpo2 + "<a target='_blank' href='" + des12_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des12_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des12_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des13'>" + cuerpo1 + "13" + cuerpo2 + "<a target='_blank' href='" + des13_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des13_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des13_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des14'>" + cuerpo1 + "14" + cuerpo2 + "<a target='_blank' href='" + des14_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des14_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des14_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des15'>" + cuerpo1 + "15" + cuerpo2 + "<a target='_blank' href='" + des15_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des15_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des15_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des16'>" + cuerpo1 + "16" + cuerpo2 + "<a target='_blank' href='" + des16_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des16_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des16_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des17'>" + cuerpo1 + "17" + cuerpo2 + "<a target='_blank' href='" + des17_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des17_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des17_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des18'>" + cuerpo1 + "18" + cuerpo2 + "<a target='_blank' href='" + des18_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des18_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des18_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des19'>" + cuerpo1 + "19" + cuerpo2 + "<a target='_blank' href='" + des19_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des19_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des19_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des20'>" + cuerpo1 + "20" + cuerpo2 + "<a target='_blank' href='" + des20_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des20_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des20_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des21'>" + cuerpo1 + "21" + cuerpo2 + "<a target='_blank' href='" + des21_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des21_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des21_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des22'>" + cuerpo1 + "22" + cuerpo2 + "<a target='_blank' href='" + des22_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des22_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des22_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des23'>" + cuerpo1 + "23" + cuerpo2 + "<a target='_blank' href='" + des23_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des23_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des23_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des24'>" + cuerpo1 + "24" + cuerpo2 + "<a target='_blank' href='" + des24_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des24_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des24_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des25'>" + cuerpo1 + "25" + cuerpo2 + "<a target='_blank' href='" + des25_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des25_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des25_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des26'>" + cuerpo1 + "26" + cuerpo2 + "<a target='_blank' href='" + des26_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des26_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des26_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des27'>" + cuerpo1 + "27" + cuerpo2 + "<a target='_blank' href='" + des27_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des27_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des27_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des28'>" + cuerpo1 + "28" + cuerpo2 + "<a target='_blank' href='" + des28_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des28_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des28_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des19'>" + cuerpo1 + "29" + cuerpo2 + "<a target='_blank' href='" + des29_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des29_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des29_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des30'>" + cuerpo1 + "30" + cuerpo2 + "<a target='_blank' href='" + des30_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des30_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des30_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des31'>" + cuerpo1 + "31" + cuerpo2 + "<a target='_blank' href='" + des31_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des31_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des31_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des32'>" + cuerpo1 + "32" + cuerpo2 + "<a target='_blank' href='" + des32_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des32_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des32_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des33'>" + cuerpo1 + "33" + cuerpo2 + "<a target='_blank' href='" + des33_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des33_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des33_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des34'>" + cuerpo1 + "34" + cuerpo2 + "<a target='_blank' href='" + des34_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des34_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des34_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des35'>" + cuerpo1 + "35" + cuerpo2 + "<a target='_blank' href='" + des35_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des35_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des35_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des36'>" + cuerpo1 + "36" + cuerpo2 + "<a target='_blank' href='" + des36_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des36_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des36_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des37'>" + cuerpo1 + "37" + cuerpo2 + "<a target='_blank' href='" + des37_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des37_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des37_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des38'>" + cuerpo1 + "38" + cuerpo2 + "<a target='_blank' href='" + des38_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des38_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des38_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des39'>" + cuerpo1 + "39" + cuerpo2 + "<a target='_blank' href='" + des39_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des39_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des39_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des40'>" + cuerpo1 + "40" + cuerpo2 + "<a target='_blank' href='" + des40_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des40_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des40_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des41'>" + cuerpo1 + "41" + cuerpo2 + "<a target='_blank' href='" + des41_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des41_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des41_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des42'>" + cuerpo1 + "42" + cuerpo2 + "<a target='_blank' href='" + des42_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des42_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des42_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des43'>" + cuerpo1 + "43" + cuerpo2 + "<a target='_blank' href='" + des43_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des43_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des43_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des44'>" + cuerpo1 + "44" + cuerpo2 + "<a target='_blank' href='" + des44_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des44_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des44_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des45'>" + cuerpo1 + "45" + cuerpo2 + "<a target='_blank' href='" + des45_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des45_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des45_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des46'>" + cuerpo1 + "46" + cuerpo2 + "<a target='_blank' href='" + des46_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des46_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des46_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des47'>" + cuerpo1 + "47" + cuerpo2 + "<a target='_blank' href='" + des47_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des47_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des47_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des48'>" + cuerpo1 + "48" + cuerpo2 + "<a target='_blank' href='" + des48_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des48_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des48_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des49'>" + cuerpo1 + "49" + cuerpo2 + "<a target='_blank' href='" + des49_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des49_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des49_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des50'>" + cuerpo1 + "50" + cuerpo2 + "<a target='_blank' href='" + des50_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des50_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des50_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des51'>" + cuerpo1 + "51" + cuerpo2 + "<a target='_blank' href='" + des51_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des51_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des51_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des52'>" + cuerpo1 + "52" + cuerpo2 + "<a target='_blank' href='" + des52_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des52_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des52_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des53'>" + cuerpo1 + "53" + cuerpo2 + "<a target='_blank' href='" + des53_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des53_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des53_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des54'>" + cuerpo1 + "54" + cuerpo2 + "<a target='_blank' href='" + des54_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des54_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des54_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des55'>" + cuerpo1 + "55" + cuerpo2 + "<a target='_blank' href='" + des55_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des55_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des55_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des56'>" + cuerpo1 + "56" + cuerpo2 + "<a target='_blank' href='" + des56_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des56_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des56_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des57'>" + cuerpo1 + "57" + cuerpo2 + "<a target='_blank' href='" + des57_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des57_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des57_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des58'>" + cuerpo1 + "58" + cuerpo2 + "<a target='_blank' href='" + des58_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des58_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des58_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des59'>" + cuerpo1 + "59" + cuerpo2 + "<a target='_blank' href='" + des59_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des59_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des59_3 + "'>" + answerST + cuerpo4 +
"<tr id='redesc' class='des60'>" + cuerpo1 + "60" + cuerpo2 + "<a target='_blank' href='" + des60_1 + "'>" + answerMG + cuerpo3 + "<a target='_blank' href='" + des60_2 + "'>" + answerZS + cuerpo3 + "<a target='_blank' href='" + des60_3 + "'>" + answerST + cuerpo4;

//selector-episodios

var ep = "EPISODIO";

document.getElementById("selector-ep").innerHTML = 
"<div id='eps' class='stb'><a href='#vid1-1' id='cll1' class='ep1 btn-server btn active' onclick='filterSelection" + '("(1)")' + "'>" + "<span>" + ep + " 1" + "</span>" + "</a>" +
"<a href='#vid2-1' id='cll2' class='ep2 btn-server btn' onclick='filterSelection" + '("(2)")' + "'>" + "<span>" + ep + " 2" + "</span>" + "</a>" +
"<a href='#vid3-1' id='cll3' class='ep3 btn-server btn' onclick='filterSelection" + '("(3)")' + "'>" + "<span>" + ep + " 3" + "</span>" + "</a>" +
"<a href='#vid4-1' id='cll4' class='ep4 btn-server btn' onclick='filterSelection" + '("(4)")' + "'>" + "<span>" + ep + " 4" + "</span>" + "</a>" +
"<a href='#vid5-1' id='cll5' class='ep5 btn-server btn' onclick='filterSelection" + '("(5)")' + "'>" + "<span>" + ep + " 5" + "</span>" + "</a>" +
"<a href='#vid6-1' id='cll6' class='ep6 btn-server btn' onclick='filterSelection" + '("(6)")' + "'>" + "<span>" + ep + " 6" + "</span>" + "</a>" +
"<a href='#vid7-1' id='cll7' class='ep7 btn-server btn' onclick='filterSelection" + '("(7)")' + "'>" + "<span>" + ep + " 7" + "</span>" + "</a>" +
"<a href='#vid8-1' id='cll8' class='ep8 btn-server btn' onclick='filterSelection" + '("(8)")' + "'>" + "<span>" + ep + " 8" + "</span>" + "</a>" +
"<a href='#vid9-1' id='cll9' class='ep9 btn-server btn' onclick='filterSelection" + '("(9)")' + "'>" + "<span>" + ep + " 9" + "</span>" + "</a>" +
"<a href='#vid10-1' id='cll10' class='ep10 btn-server btn' onclick='filterSelection" + '("(10)")' + "'>" + "<span>" + ep + " 10" + "</span>" + "</a>" +
"<a href='#vid11-1' id='cll11' class='ep11 btn-server btn' onclick='filterSelection" + '("(11)")' + "'>" + "<span>" + ep + " 11" + "</span>" + "</a>" +
"<a href='#vid12-1' id='cll12' class='ep12 btn-server btn' onclick='filterSelection" + '("(12)")' + "'>" + "<span>" + ep + " 12" + "</span>" + "</a>" +
"<a href='#vid13-1' id='cll13' class='ep13 btn-server btn' onclick='filterSelection" + '("(13)")' + "'>" + "<span>" + ep + " 13" + "</span>" + "</a>" + 
"<a href='#vid14-1' id='cll14' class='ep14 btn-server btn' onclick='filterSelection" + '("(14)")' + "'>" + "<span>" + ep + " 14" + "</span>" + "</a>" + 
"<a href='#vid15-1' id='cll15' class='ep15 btn-server btn' onclick='filterSelection" + '("(15)")' + "'>" + "<span>" + ep + " 15" + "</span>" + "</a>" + 
"<a href='#vid16-1' id='cll16' class='ep16 btn-server btn' onclick='filterSelection" + '("(16)")' + "'>" + "<span>" + ep + " 16" + "</span>" + "</a>" + 
"<a href='#vid17-1' id='cll17' class='ep17 btn-server btn' onclick='filterSelection" + '("(17)")' + "'>" + "<span>" + ep + " 17" + "</span>" + "</a>" + 
"<a href='#vid18-1' id='cll18' class='ep18 btn-server btn' onclick='filterSelection" + '("(18)")' + "'>" + "<span>" + ep + " 18" + "</span>" + "</a>" + 
"<a href='#vid19-1' id='cll19' class='ep19 btn-server btn' onclick='filterSelection" + '("(19)")' + "'>" + "<span>" + ep + " 19" + "</span>" + "</a>" + 
"<a href='#vid20-1' id='cll20' class='ep20 btn-server btn' onclick='filterSelection" + '("(20)")' + "'>" + "<span>" + ep + " 20" + "</span>" + "</a>" + 
"<a href='#vid21-1' id='cll21' class='ep21 btn-server btn' onclick='filterSelection" + '("(21)")' + "'>" + "<span>" + ep + " 21" + "</span>" + "</a>" + 
"<a href='#vid22-1' id='cll22' class='ep22 btn-server btn' onclick='filterSelection" + '("(22)")' + "'>" + "<span>" + ep + " 22" + "</span>" + "</a>" + 
"<a href='#vid23-1' id='cll23' class='ep23 btn-server btn' onclick='filterSelection" + '("(23)")' + "'>" + "<span>" + ep + " 23" + "</span>" + "</a>" + 
"<a href='#vid24-1' id='cll24' class='ep24 btn-server btn' onclick='filterSelection" + '("(24)")' + "'>" + "<span>" + ep + " 24" + "</span>" + "</a>" + 
"<a href='#vid25-1' id='cll25' class='ep25 btn-server btn' onclick='filterSelection" + '("(25)")' + "'>" + "<span>" + ep + " 25" + "</span>" + "</a>" + 
"<a href='#vid26-1' id='cll26' class='ep26 btn-server btn' onclick='filterSelection" + '("(26)")' + "'>" + "<span>" + ep + " 26" + "</span>" + "</a>" + 
"<a href='#vid27-1' id='cll27' class='ep27 btn-server btn' onclick='filterSelection" + '("(27)")' + "'>" + "<span>" + ep + " 27" + "</span>" + "</a>" + 
"<a href='#vid28-1' id='cll28' class='ep28 btn-server btn' onclick='filterSelection" + '("(28)")' + "'>" + "<span>" + ep + " 28" + "</span>" + "</a>" + 
"<a href='#vid29-1' id='cll29' class='ep29 btn-server btn' onclick='filterSelection" + '("(29)")' + "'>" + "<span>" + ep + " 29" + "</span>" + "</a>" + 
"<a href='#vid30-1' id='cll30' class='ep30 btn-server btn' onclick='filterSelection" + '("(30)")' + "'>" + "<span>" + ep + " 30" + "</span>" + "</a>" + 
"<a href='#vid31-1' id='cll31' class='ep31 btn-server btn' onclick='filterSelection" + '("(31)")' + "'>" + "<span>" + ep + " 31" + "</span>" + "</a>" + 
"<a href='#vid32-1' id='cll32' class='ep32 btn-server btn' onclick='filterSelection" + '("(32)")' + "'>" + "<span>" + ep + " 32" + "</span>" + "</a>" + 
"<a href='#vid33-1' id='cll33' class='ep33 btn-server btn' onclick='filterSelection" + '("(33)")' + "'>" + "<span>" + ep + " 33" + "</span>" + "</a>" + 
"<a href='#vid34-1' id='cll34' class='ep34 btn-server btn' onclick='filterSelection" + '("(34)")' + "'>" + "<span>" + ep + " 34" + "</span>" + "</a>" + 
"<a href='#vid35-1' id='cll35' class='ep35 btn-server btn' onclick='filterSelection" + '("(35)")' + "'>" + "<span>" + ep + " 35" + "</span>" + "</a>" + 
"<a href='#vid36-1' id='cll36' class='ep36 btn-server btn' onclick='filterSelection" + '("(36)")' + "'>" + "<span>" + ep + " 36" + "</span>" + "</a>" + 
"<a href='#vid37-1' id='cll37' class='ep37 btn-server btn' onclick='filterSelection" + '("(37)")' + "'>" + "<span>" + ep + " 37" + "</span>" + "</a>" + 
"<a href='#vid38-1' id='cll38' class='ep38 btn-server btn' onclick='filterSelection" + '("(38)")' + "'>" + "<span>" + ep + " 38" + "</span>" + "</a>" + 
"<a href='#vid39-1' id='cll39' class='ep39 btn-server btn' onclick='filterSelection" + '("(39)")' + "'>" + "<span>" + ep + " 39" + "</span>" + "</a>" + 
"<a href='#vid40-1' id='cll40' class='ep40 btn-server btn' onclick='filterSelection" + '("(40)")' + "'>" + "<span>" + ep + " 40" + "</span>" + "</a>" + 
"<a href='#vid41-1' id='cll41' class='ep41 btn-server btn' onclick='filterSelection" + '("(41)")' + "'>" + "<span>" + ep + " 41" + "</span>" + "</a>" + 
"<a href='#vid42-1' id='cll42' class='ep42 btn-server btn' onclick='filterSelection" + '("(42)")' + "'>" + "<span>" + ep + " 42" + "</span>" + "</a>" + 
"<a href='#vid43-1' id='cll43' class='ep43 btn-server btn' onclick='filterSelection" + '("(43)")' + "'>" + "<span>" + ep + " 43" + "</span>" + "</a>" + 
"<a href='#vid44-1' id='cll43' class='ep44 btn-server btn' onclick='filterSelection" + '("(44)")' + "'>" + "<span>" + ep + " 44" + "</span>" + "</a>" + 
"<a href='#vid45-1' id='cll43' class='ep45 btn-server btn' onclick='filterSelection" + '("(45)")' + "'>" + "<span>" + ep + " 45" + "</span>" + "</a>" + 
"<a href='#vid46-1' id='cll43' class='ep46 btn-server btn' onclick='filterSelection" + '("(46)")' + "'>" + "<span>" + ep + " 46" + "</span>" + "</a>" + 
"<a href='#vid47-1' id='cll43' class='ep47 btn-server btn' onclick='filterSelection" + '("(47)")' + "'>" + "<span>" + ep + " 47" + "</span>" + "</a>" + 
"<a href='#vid48-1' id='cll43' class='ep48 btn-server btn' onclick='filterSelection" + '("(48)")' + "'>" + "<span>" + ep + " 48" + "</span>" + "</a>" + 
"<a href='#vid49-1' id='cll43' class='ep49 btn-server btn' onclick='filterSelection" + '("(49)")' + "'>" + "<span>" + ep + " 49" + "</span>" + "</a>" + 
"<a href='#vid50-1' id='cll43' class='ep50 btn-server btn' onclick='filterSelection" + '("(50)")' + "'>" + "<span>" + ep + " 50" + "</span>" + "</a>" + 
"<a href='#vid51-1' id='cll43' class='ep51 btn-server btn' onclick='filterSelection" + '("(51)")' + "'>" + "<span>" + ep + " 51" + "</span>" + "</a>" + 
"<a href='#vid52-1' id='cll43' class='ep52 btn-server btn' onclick='filterSelection" + '("(52)")' + "'>" + "<span>" + ep + " 52" + "</span>" + "</a>" + 
"<a href='#vid53-1' id='cll43' class='ep53 btn-server btn' onclick='filterSelection" + '("(53)")' + "'>" + "<span>" + ep + " 53" + "</span>" + "</a>" + 
"<a href='#vid54-1' id='cll43' class='ep54 btn-server btn' onclick='filterSelection" + '("(54)")' + "'>" + "<span>" + ep + " 54" + "</span>" + "</a>" + 
"<a href='#vid55-1' id='cll43' class='ep55 btn-server btn' onclick='filterSelection" + '("(55)")' + "'>" + "<span>" + ep + " 55" + "</span>" + "</a>" + 
"<a href='#vid56-1' id='cll43' class='ep56 btn-server btn' onclick='filterSelection" + '("(56)")' + "'>" + "<span>" + ep + " 56" + "</span>" + "</a>" + 
"<a href='#vid57-1' id='cll43' class='ep57 btn-server btn' onclick='filterSelection" + '("(57)")' + "'>" + "<span>" + ep + " 57" + "</span>" + "</a>" + 
"<a href='#vid58-1' id='cll43' class='ep58 btn-server btn' onclick='filterSelection" + '("(58)")' + "'>" + "<span>" + ep + " 58" + "</span>" + "</a>" + 
"<a href='#vid59-1' id='cll43' class='ep59 btn-server btn' onclick='filterSelection" + '("(59)")' + "'>" + "<span>" + ep + " 59" + "</span>" + "</a>" + 
"<a href='#vid60-1' id='cll43' class='ep60 btn-server btn' onclick='filterSelection" + '("(60)")' + "'>" + "<span>" + ep + " 60" + "</span>" + "</a>" + 
"</div>";

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//removeclasss
$(document).ready(function(){
  $("#cll1").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll1").addClass("activex");
  });
  $("#cll2").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll2").addClass("activex");
  });
  $("#cll3").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll3").addClass("activex");
  });
  $("#cll4").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll4").addClass("activex");
  });
  $("#cll5").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll5").addClass("activex");
  });
  $("#cll6").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll6").addClass("activex");
  });
  $("#cll7").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll7").addClass("activex");
  });
  $("#cll8").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll8").addClass("activex");
  });
  $("#cll9").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll9").addClass("activex");
  });
  $("#cll10").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll10").addClass("activex");
  });
  $("#cll11").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll11").addClass("activex");
  });
  $("#cll12").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll12").addClass("activex");
  });
  $("#cll13").click(function(){
    $("#rcll a").removeClass("activex");
    $("#acll13").addClass("activex");
  });
});

//selector-opciones

var answer1 = "NATSUKI";
var answer2 = "NEKOPLAY";
var answer3 = "KOJU";
var answer4 = "TAKI";
var answer5 = "YUI";
var answer6 = "REM";

document.getElementById("selector-op").innerHTML = 
"<div class='stb' id='rcll'><div class='stb' id='ops'><a id='acll1' class='op1 btn-server btn activex filterDiv (1)' href='#vid1-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (1)' href='#vid1-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (1)' href='#vid1-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (1)' href='#vid1-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (1)' href='#vid1-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (1)' href='#vid1-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll2' class='op1 btn-server btn filterDiv (2)' href='#vid2-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (2)' href='#vid2-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (2)' href='#vid2-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (2)' href='#vid2-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (2)' href='#vid2-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (2)' href='#vid2-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll3' class='op1 btn-server btn filterDiv (3)' href='#vid3-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (3)' href='#vid3-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (3)' href='#vid3-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (3)' href='#vid3-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (3)' href='#vid3-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (3)' href='#vid3-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll4' class='op1 btn-server btn filterDiv (4)' href='#vid4-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (4)' href='#vid4-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (4)' href='#vid4-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (4)' href='#vid4-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (4)' href='#vid4-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (4)' href='#vid4-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll5' class='op1 btn-server btn filterDiv (5)' href='#vid5-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (5)' href='#vid5-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (5)' href='#vid5-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (5)' href='#vid5-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (5)' href='#vid5-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (5)' href='#vid5-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll6' class='op1 btn-server btn filterDiv (6)' href='#vid6-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (6)' href='#vid6-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (6)' href='#vid6-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (6)' href='#vid6-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (6)' href='#vid6-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (6)' href='#vid6-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll7' class='op1 btn-server btn filterDiv (7)' href='#vid7-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (7)' href='#vid7-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (7)' href='#vid7-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (7)' href='#vid7-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (7)' href='#vid7-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (7)' href='#vid7-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll8' class='op1 btn-server btn filterDiv (8)' href='#vid8-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (8)' href='#vid8-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (8)' href='#vid8-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (8)' href='#vid8-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (8)' href='#vid8-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (8)' href='#vid8-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll9' class='op1 btn-server btn filterDiv (9)' href='#vid9-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (9)' href='#vid9-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (9)' href='#vid9-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (9)' href='#vid9-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (9)' href='#vid9-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (9)' href='#vid9-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll10' class='op1 btn-server btn filterDiv (10)' href='#vid10-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (10)' href='#vid10-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (10)' href='#vid10-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (10)' href='#vid10-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (10)' href='#vid10-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (10)' href='#vid10-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll11' class='op1 btn-server btn filterDiv (11)' href='#vid11-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (11)' href='#vid11-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (11)' href='#vid11-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (11)' href='#vid11-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (11)' href='#vid11-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (11)' href='#vid11-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll12' class='op1 btn-server btn filterDiv (12)' href='#vid12-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (12)' href='#vid12-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (12)' href='#vid12-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (12)' href='#vid12-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (12)' href='#vid12-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (12)' href='#vid12-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll13' class='op1 btn-server btn filterDiv (13)' href='#vid13-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (13)' href='#vid13-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (13)' href='#vid13-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (13)' href='#vid13-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (13)' href='#vid13-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (13)' href='#vid13-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll14' class='op1 btn-server btn filterDiv (14)' href='#vid14-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (14)' href='#vid14-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (14)' href='#vid14-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (14)' href='#vid14-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (14)' href='#vid14-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (14)' href='#vid14-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll15' class='op1 btn-server btn filterDiv (15)' href='#vid15-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (15)' href='#vid15-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (15)' href='#vid15-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (15)' href='#vid15-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (15)' href='#vid15-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (15)' href='#vid15-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll16' class='op1 btn-server btn filterDiv (16)' href='#vid16-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (16)' href='#vid16-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (16)' href='#vid16-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (16)' href='#vid16-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (16)' href='#vid16-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (16)' href='#vid16-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll17' class='op1 btn-server btn filterDiv (17)' href='#vid17-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (17)' href='#vid17-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (17)' href='#vid17-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (17)' href='#vid17-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (17)' href='#vid17-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (17)' href='#vid17-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll18' class='op1 btn-server btn filterDiv (18)' href='#vid18-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (18)' href='#vid18-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (18)' href='#vid18-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (18)' href='#vid18-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (18)' href='#vid18-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (18)' href='#vid18-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll19' class='op1 btn-server btn filterDiv (19)' href='#vid19-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (19)' href='#vid19-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (19)' href='#vid19-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (19)' href='#vid19-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (19)' href='#vid19-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (19)' href='#vid19-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll20' class='op1 btn-server btn filterDiv (20)' href='#vid20-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (20)' href='#vid20-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (20)' href='#vid20-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (20)' href='#vid20-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (20)' href='#vid20-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (20)' href='#vid20-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll21' class='op1 btn-server btn filterDiv (21)' href='#vid21-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (21)' href='#vid21-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (21)' href='#vid21-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (21)' href='#vid21-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (21)' href='#vid21-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (21)' href='#vid21-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll22' class='op1 btn-server btn filterDiv (22)' href='#vid22-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (22)' href='#vid22-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (22)' href='#vid22-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (22)' href='#vid22-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (22)' href='#vid22-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (22)' href='#vid22-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll23' class='op1 btn-server btn filterDiv (23)' href='#vid23-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (23)' href='#vid23-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (23)' href='#vid23-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (23)' href='#vid23-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (23)' href='#vid23-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (23)' href='#vid23-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll24' class='op1 btn-server btn filterDiv (24)' href='#vid24-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (24)' href='#vid24-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (24)' href='#vid24-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (24)' href='#vid24-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (24)' href='#vid24-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (24)' href='#vid24-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll25' class='op1 btn-server btn filterDiv (25)' href='#vid25-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (25)' href='#vid25-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (25)' href='#vid25-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (25)' href='#vid25-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (25)' href='#vid25-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (25)' href='#vid25-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll26' class='op1 btn-server btn filterDiv (26)' href='#vid26-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (26)' href='#vid26-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (26)' href='#vid26-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (26)' href='#vid26-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (26)' href='#vid26-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (26)' href='#vid26-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll27' class='op1 btn-server btn filterDiv (27)' href='#vid27-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (27)' href='#vid27-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (27)' href='#vid27-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (27)' href='#vid27-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (27)' href='#vid27-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (27)' href='#vid27-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll28' class='op1 btn-server btn filterDiv (28)' href='#vid28-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (28)' href='#vid28-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (28)' href='#vid28-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (28)' href='#vid28-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (28)' href='#vid28-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (28)' href='#vid28-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll29' class='op1 btn-server btn filterDiv (29)' href='#vid29-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (29)' href='#vid29-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (29)' href='#vid29-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (29)' href='#vid29-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (29)' href='#vid29-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (29)' href='#vid29-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll30' class='op1 btn-server btn filterDiv (30)' href='#vid30-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (30)' href='#vid30-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (30)' href='#vid30-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (30)' href='#vid30-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (30)' href='#vid30-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (30)' href='#vid30-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll31' class='op1 btn-server btn filterDiv (31)' href='#vid31-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (31)' href='#vid31-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (31)' href='#vid31-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (31)' href='#vid31-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (31)' href='#vid31-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (31)' href='#vid31-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll32' class='op1 btn-server btn filterDiv (32)' href='#vid32-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (32)' href='#vid32-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (32)' href='#vid32-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (32)' href='#vid32-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (32)' href='#vid32-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (32)' href='#vid32-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll33' class='op1 btn-server btn filterDiv (33)' href='#vid33-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (33)' href='#vid33-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (33)' href='#vid33-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (33)' href='#vid33-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (33)' href='#vid33-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (33)' href='#vid33-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll34' class='op1 btn-server btn filterDiv (34)' href='#vid34-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (34)' href='#vid34-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (34)' href='#vid34-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (34)' href='#vid34-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (34)' href='#vid34-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (34)' href='#vid34-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll35' class='op1 btn-server btn filterDiv (35)' href='#vid35-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (35)' href='#vid35-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (35)' href='#vid35-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (35)' href='#vid35-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (35)' href='#vid35-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (35)' href='#vid35-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll36' class='op1 btn-server btn filterDiv (36)' href='#vid36-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (36)' href='#vid36-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (36)' href='#vid36-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (36)' href='#vid36-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (36)' href='#vid36-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (36)' href='#vid36-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll37' class='op1 btn-server btn filterDiv (37)' href='#vid37-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (37)' href='#vid37-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (37)' href='#vid37-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (37)' href='#vid37-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (37)' href='#vid37-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (37)' href='#vid37-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll38' class='op1 btn-server btn filterDiv (38)' href='#vid38-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (38)' href='#vid38-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (38)' href='#vid38-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (38)' href='#vid38-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (38)' href='#vid38-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (38)' href='#vid38-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll39' class='op1 btn-server btn filterDiv (39)' href='#vid39-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (39)' href='#vid39-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (39)' href='#vid39-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (39)' href='#vid39-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (39)' href='#vid39-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (39)' href='#vid39-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll40' class='op1 btn-server btn filterDiv (40)' href='#vid40-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (40)' href='#vid40-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (40)' href='#vid40-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (40)' href='#vid40-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (40)' href='#vid40-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (40)' href='#vid40-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll41' class='op1 btn-server btn filterDiv (41)' href='#vid41-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (41)' href='#vid41-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (41)' href='#vid41-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (41)' href='#vid41-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (41)' href='#vid41-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (41)' href='#vid41-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll42' class='op1 btn-server btn filterDiv (42)' href='#vid42-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (42)' href='#vid42-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (42)' href='#vid42-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (42)' href='#vid42-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (42)' href='#vid42-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (42)' href='#vid42-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll43' class='op1 btn-server btn filterDiv (43)' href='#vid43-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (43)' href='#vid43-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (43)' href='#vid43-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (43)' href='#vid43-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (43)' href='#vid43-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (43)' href='#vid43-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll44' class='op1 btn-server btn filterDiv (44)' href='#vid44-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (44)' href='#vid44-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (44)' href='#vid44-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (44)' href='#vid44-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (44)' href='#vid44-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (44)' href='#vid44-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll45' class='op1 btn-server btn filterDiv (45)' href='#vid45-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (45)' href='#vid45-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (45)' href='#vid45-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (45)' href='#vid45-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (45)' href='#vid45-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (45)' href='#vid45-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll46' class='op1 btn-server btn filterDiv (46)' href='#vid46-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (46)' href='#vid46-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (46)' href='#vid46-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (46)' href='#vid46-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (46)' href='#vid46-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (46)' href='#vid46-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll47' class='op1 btn-server btn filterDiv (47)' href='#vid47-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (47)' href='#vid47-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (47)' href='#vid47-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (47)' href='#vid47-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (47)' href='#vid47-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (47)' href='#vid47-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll48' class='op1 btn-server btn filterDiv (48)' href='#vid48-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (48)' href='#vid48-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (48)' href='#vid48-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (48)' href='#vid48-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (48)' href='#vid48-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (48)' href='#vid48-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll49' class='op1 btn-server btn filterDiv (49)' href='#vid49-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (49)' href='#vid49-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (49)' href='#vid49-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (49)' href='#vid49-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (49)' href='#vid49-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (49)' href='#vid49-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll50' class='op1 btn-server btn filterDiv (50)' href='#vid50-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (50)' href='#vid50-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (50)' href='#vid50-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (50)' href='#vid50-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (50)' href='#vid50-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (50)' href='#vid50-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll51' class='op1 btn-server btn filterDiv (51)' href='#vid51-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (51)' href='#vid51-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (51)' href='#vid51-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (51)' href='#vid51-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (51)' href='#vid51-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (51)' href='#vid51-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll52' class='op1 btn-server btn filterDiv (52)' href='#vid52-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (52)' href='#vid52-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (52)' href='#vid52-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (52)' href='#vid52-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (52)' href='#vid52-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (52)' href='#vid52-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll53' class='op1 btn-server btn filterDiv (53)' href='#vid53-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (53)' href='#vid53-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (53)' href='#vid53-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (53)' href='#vid53-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (53)' href='#vid53-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (53)' href='#vid53-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll54' class='op1 btn-server btn filterDiv (54)' href='#vid54-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (54)' href='#vid54-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (54)' href='#vid54-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (54)' href='#vid54-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (54)' href='#vid54-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (54)' href='#vid54-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll55' class='op1 btn-server btn filterDiv (55)' href='#vid55-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (55)' href='#vid55-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (55)' href='#vid55-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (55)' href='#vid55-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (55)' href='#vid55-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (55)' href='#vid55-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll56' class='op1 btn-server btn filterDiv (56)' href='#vid56-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (56)' href='#vid56-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (56)' href='#vid56-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (56)' href='#vid56-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (56)' href='#vid56-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (56)' href='#vid56-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll57' class='op1 btn-server btn filterDiv (57)' href='#vid57-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (57)' href='#vid57-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (57)' href='#vid57-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (57)' href='#vid57-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (57)' href='#vid57-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (57)' href='#vid57-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll58' class='op1 btn-server btn filterDiv (58)' href='#vid58-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (58)' href='#vid58-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (58)' href='#vid58-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (58)' href='#vid58-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (58)' href='#vid58-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (58)' href='#vid58-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll59' class='op1 btn-server btn filterDiv (59)' href='#vid59-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (59)' href='#vid59-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (59)' href='#vid59-3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (59)' href='#vid59-4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (59)' href='#vid59-5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (59)' href='#vid59-6'>" + "<span>" + answer6 + "</span>" + "</a>" +

"<a id='acll60' class='op1 btn-server btn filterDiv (60)' href='#vid60-1'>" + "<span>" + answer1 + "</span>" + "</a>" +
"<a class='op2 btn-server btn filterDiv (60)' href='#vid60-2'>" + "<span>" + answer2 + "</span>" + "</a>" +
"<a class='op3 btn-server btn filterDiv (60)' href='#vid60_3'>" + "<span>" + answer3 + "</span>" + "</a>" +
"<a class='op4 btn-server btn filterDiv (60)' href='#vid60_4'>" + "<span>" + answer4 + "</span>" + "</a>" +
"<a class='op5 btn-server btn filterDiv (60)' href='#vid60_5'>" + "<span>" + answer5 + "</span>" + "</a>" +
"<a class='op6 btn-server btn filterDiv (60)' href='#vid60_6'>" + "<span>" + answer6 + "</span>" + "</a></div>";

// botones de opciones activo
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activex");
  current[0].className = current[0].className.replace(" activex", "");
  this.className += " activex";
  });
}

// filtrado de opciones
filterSelection("(1)")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "()") c = "()";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
