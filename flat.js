let gallery = document.getElementsByClassName("gallery")[0];
let flatInfo = document.getElementsByClassName("flatInfo")[0];
let map = document.getElementById("iframe");
map.style.height = gallery.offsetHeight - flatInfo.offsetHeight - 12 + "px" ;