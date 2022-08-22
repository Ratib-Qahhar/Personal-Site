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