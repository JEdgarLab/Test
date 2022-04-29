var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open("GET", "https://stardewvalleywiki.com/Stardew_Valley_Wiki", true);
xhttp.send();