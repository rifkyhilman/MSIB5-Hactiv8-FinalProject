data = [
  {
    imgurl: "../images/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident ab numquam, repellat error tempora! Consequatur tempore doloremque aliquam rem consequuntur? Temporibus eum itaque sed quidem. Necessitatibus officiis iste debitis!",
    filter: "branding",
  },
  {
    imgurl: "../images/portofolio image/1.jpeg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia?",
    filter: "product",
  },
  {
    imgurl: "../images/portofolio image/14.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident ab numquam, repellat error tempora! Consequatur tempore doloremque aliquam rem consequuntur? Temporibus eum itaque sed quidem. Necessitatibus officiis iste debitis!",
    filter: "branding",
  },
  {
    imgurl: "../images/Tanpa Judul.jpeg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia?",
    filter: "product",
  },
  {
    imgurl: "../images/img2.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident ab numquam, repellat error tempora! Consequatur tempore doloremque aliquam rem consequuntur? Temporibus eum itaque sed quidem. Necessitatibus officiis iste debitis!",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/13.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo quaerat veritatis. Quam, non impedit.",
    filter: "books",
  },
  {
    imgurl: "../images/aboutUs.jpeg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident ab numquam, repellat error tempora! Consequatur tempore doloremque aliquam rem consequuntur? Temporibus eum itaque sed quidem. Necessitatibus officiis iste debitis!",
    filter: "app",
  },
  {
    imgurl: "../images/2213.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo quaerat veritatis. Quam, non impedit.",
    filter: "books",
  },
  {
    imgurl: "../images/3333.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, architecto?",
    filter: "branding",
  },
  {
    imgurl: "../images/Hero.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident ab numquam, repellat error tempora! Consequatur tempore doloremque aliquam rem consequuntur? Temporibus eum itaque sed quidem. Necessitatibus officiis iste debitis!",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/10.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident ab numquam, repellat error tempora! Consequatur tempore doloremque aliquam rem consequuntur? Temporibus eum itaque sed quidem. Necessitatibus officiis iste debitis!",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/2.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, architecto?",
    filter: "branding",
  },
  {
    imgurl: "../images/portofolio image/3.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, architecto?",
    filter: "branding",
  },
  {
    imgurl: "../images/portofolio image/4.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, architecto?",
    filter: "branding",
  },
  {
    imgurl: "../images/portofolio image/5.jpg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo quaerat veritatis. Quam, non impedit.",
    filter: "books",
  },
  {
    imgurl: "../images/portofolio image/6.jpeg",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo quaerat veritatis. Quam, non impedit.",
    filter: "books",
  },
  {
    imgurl: "../images/portofolio image/7.png",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo quaerat veritatis. Quam, non impedit.",
    filter: "books",
  },
  {
    imgurl: "../images/portofolio image/8.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident ab numquam, repellat error tempora! Consequatur tempore doloremque aliquam rem consequuntur? Temporibus eum itaque sed quidem. Necessitatibus officiis iste debitis!",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/15.jpg",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente provident ab numquam, repellat error tempora! Consequatur tempore doloremque aliquam rem consequuntur? Temporibus eum itaque sed quidem. Necessitatibus officiis iste debitis!",
    filter: "app",
  },
  {
    imgurl: "../images/portofolio image/11.jpeg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia?",
    filter: "product",
  },
  {
    imgurl: "../images/portofolio image/12.jpg",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, mollitia?",
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
