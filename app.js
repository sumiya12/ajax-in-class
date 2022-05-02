let func = (arr, c) => {
  let html = document.querySelector(c);
  arr.map((item) => {
    let s = `<div class="container">
      <div class="picture"><img src="${item.avatar_url} "></div>
      <div class="sub">
        <div class="name">${item.login.toUpperCase()}</div>
        <button><a href="${item.html_url}">Github Profile</a></button>
      </div>`;
    html.innerHTML += s;
  });
};

const github = new XMLHttpRequest();
github.onreadystatechange = function () {
  const html = document.querySelector(".container");
  let datas = JSON.parse(this.responseText);
  func(datas, "body");
  console.log(datas);
};
github.open("GET", "https://api.github.com/users", true);
github.send();
