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
