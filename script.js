const request = new XMLHttpRequest();

request.addEventListener("load", function () {
  console.log(this.responseText);
});

request.open("GET", "https://reqres.in/api/unknown");
request.send();
