data = [
  {
    imgurl: "../images/1123.jpeg",
    title: "abcd",
    filter: "app",
  },
  {
    imgurl: "../images/2213.jpg",
    title: "abcd",
    filter: "product",
  },
  {
    imgurl: "../images/3333.jpg",
    title: "abcd",
    filter: "app",
  },
  {
    imgurl: "../images/img1.jpg",
    title: "abcd",
    filter: "branding",
  },
  {
    imgurl: "../images/img2.jpg",
    title: "abcd",
    filter: "app",
  },
  {
    imgurl: "../images/2213.jpg",
    title: "abcd",
    filter: "books",
  },
  {
    imgurl: "../images/aboutUs.jpeg",
    title: "abcd",
    filter: "app",
  },
  {
    imgurl: "../images/2213.jpg",
    title: "abcd",
    filter: "books",
  },
  {
    imgurl: "../images/3333.jpg",
    title: "abcd",
    filter: "branding",
  },
  {
    imgurl: "../images/Hero.jpg",
    title: "abcd",
    filter: "product",
  },
];

var resultHTML = "";
for (var i = 0; i < data.length; i++) {
  resultHTML += `<div class="col-xl-4 col-md-6 portfolio-item filter-${data[i].filter}">
              <div class="portfolio-wrap">
                <a href="${data[i].imgurl}" data-gallery="portfolio-gallery-app" class="glightbox"><img src="${data[i].imgurl}" class="img-fluid" alt="err[i]"></a>
                <div class="portfolio-info">
                  <h4><a href="portfolio-details.html" title="More Details">${data[i].filter}</a></h4>
                  <p>${data[i].title}</p>
                </div>
              </div>
            </div>`;
}
document.getElementById("photos").innerHTML = resultHTML;
