function openCity(evt, cityName) {
  var i, content, links;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  links = document.getElementsByClassName("btn");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "grid";
  evt.currentTarget.className += " active";
}

const popup = document.querySelector('.message_top');
const popup2 = document.querySelector('.message_back');
const popup3 = document.querySelector('.message_box');


function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");
  popup2.classList.remove("open-popup");
  popup3.classList.remove("open-popup");
}