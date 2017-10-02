function changeBackgroundColor(className){
 document.getElementsByClassName("backgroundColor")[0].style.background = document.getElementsByClassName(className)[0].value;
 document.getElementsByClassName("background-color--container")[0].style.background = document.getElementsByClassName(className)[0].value;

}

function changeTextColor(className){
  document.getElementsByClassName("h1Color")[0].style.color = document.getElementsByClassName(className)[0].value;
  document.getElementsByClassName("h2Color")[0].style.color = document.getElementsByClassName(className)[0].value;
  document.getElementsByClassName("pColor")[0].style.color = document.getElementsByClassName(className)[0].value;
  document.getElementsByClassName("aColor")[0].style.color = document.getElementsByClassName(className)[0].value;
  document.getElementsByClassName("text-color--container")[0].style.background = document.getElementsByClassName(className)[0].value;
}

function getContrastYIQ(hexcolor){
var r = parseInt(hexcolor.substr(0,2),16);
var g = parseInt(hexcolor.substr(2,2),16);
var b = parseInt(hexcolor.substr(4,2),16);
var yiq = ((r*299)+(g*587)+(b*114))/1000;
return (yiq >= 128) ? 'black' : 'white';
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$(document).ready(function() {
  $("input[name$='radioContrast']").click(function() {
    var test = $(this).val();

    $("div.grade-container").hide();
    $("#gradeContainer" + test).show();
  });
});
