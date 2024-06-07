const ulEl = document.getElementById("ul");
const request = new XMLHttpRequest();

request.open("GET", "https://reqres.in/api/unknown");

request.addEventListener("load", function () {
  const responseText = this.responseText;
  const responseJs = JSON.parse(responseText);
  const arrayUsers = responseJs.data;
  arrayUsers.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element.name;
    li.style.backgroundColor = element.color;
    ulEl.appendChild(li);
  });
});

request.send();
