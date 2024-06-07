const request = new XMLHttpRequest();

request.open("GET", "https://reqres.in/api/unknown");

request.addEventListener("load", function () {
  const responseText = this.responseText;
  const responseJs = JSON.parse(responseText);
  console.log(responseJs.data);
});

request.send();
