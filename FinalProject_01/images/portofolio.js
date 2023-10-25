data = [
  {
    imgurl: "../images/1123.jpeg",
    title: "abcd",
    filter: "future",
  },
  {
    imgurl: "../images/2213.jpg",
    title: "abcd",
    filter: "beauty",
  },
  {
    imgurl: "../images/3333.jpg",
    title: "abcd",
    filter: "future",
  },
  {
    imgurl: "../images/img1.jpg",
    title: "abcd",
    filter: "elegant",
  },
  {
    imgurl: "../images/img2.jpg",
    title: "abcd",
    filter: "future",
  },
  {
    imgurl: "../images/2213.jpg",
    title: "abcd",
    filter: "nature",
  },
  {
    imgurl: "../images/aboutUs.jpeg",
    title: "abcd",
    filter: "future",
  },
  {
    imgurl: "../images/1123.jpeg",
    title: "abcd",
    filter: "nature",
  },
  {
    imgurl: "../images/vivi.jpg",
    title: "abcd",
    filter: "elegant",
  },
  {
    imgurl: "../images/Hero.jpg",
    title: "abcd",
    filter: "beauty",
  },
];

var resultHTML = "";
for (var i = 0; i < data.length; i++) {
  resultHTML += `<div id="galimg-${i}" class="card">
  <img src="${data[i].imgurl}">
</div>`;
}

document.getElementById("photos").innerHTML = resultHTML;

let search = document.getElementById("search").value.toLowerCase();
search;
