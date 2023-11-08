let footer = `
<div class="container">
    <div class="row gy-4">
        <div class="col-lg-3 col-md-12 footer-info">
            <a href="index.html" class="logo">
            <img src="./images/shuffLogo01.png" />
            </a>
        </div>

        <div class="col footer-links">
            <h4>Useful Links</h4>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./pages/about.html">About</a></li>
            <li><a href="./pages/contact.html">Contact</a></li>
            <li><a href="./pages/portofolio.html">Portofolio</a></li>
            <li><a href="./pages/blog.html">Blog</a></li>
            <li><a href="./pages/booking.html">Booking</a></li>
            </ul>
        </div>

        <div class="col footer-links">
            <h4>Our Services</h4>
            <ul>
            <li><a href="#">Photograph</a></li>
            <li><a href="#">Drone</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Matterport</a></li>
            <li><a href="#">Content Creation</a></li>
            </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
                Jl. Jenderal Sudirman Blok Lot 11 No.Kav 58, RT.5/RW.3, Senayan,
                Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota
                Jakarta 12190<br />
                Indonesia <br /><br />
                <strong>Phone:</strong> +6289729345772<br />
                <strong>Email:</strong> ShuffOfficial@gmail.com<br />
            </p>
        </div>
    </div>
</div>

<div class="container mt-4">
    <div class="copyright">
        &copy; Copyright <strong><span>Shuff</span></strong>. All Rights Reserved
    </div>
</div>
s
`;

let footerPages = `
<div class="container">
    <div class="row gy-4">
        <div class="col-lg-3 col-md-12 footer-info">
            <a href="/" class="logo">
            <img src="../images/shuffLogo01.png" />
            </a>
        </div>

        <div class="col footer-links">
            <h4>Useful Links</h4>
            <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="./portofolio.html">Portofolio</a></li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./booking.html">Booking</a></li>
            </ul>
        </div>

        <div class="col footer-links">
            <h4>Our Services</h4>
            <ul>
            <li><a href="#">Photograph</a></li>
            <li><a href="#">Drone</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Matterport</a></li>
            <li><a href="#">Content Creation</a></li>
            </ul>
        </div>

        <div
            class="col-lg-3 col-md-12 footer-contact text-center text-md-start"
        >
            <h4>Contact Us</h4>
            <p>
            Jl. Jenderal Sudirman Blok Lot 11 No.Kav 58, RT.5/RW.3, Senayan,
            Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota
            Jakarta 12190<br />
            Indonesia <br /><br />
            <strong>Phone:</strong> +6289729345772<br />
            <strong>Email:</strong> ShuffOfficial@gmail.com<br />
            </p>
        </div>
    </div>
</div>

<div class="container mt-4">
    <div class="copyright">
        &copy; Copyright <strong><span>Shuff</span></strong
        >. All Rights Reserved
    </div>
</div>
`;

const footerDetail = `
<div class="container">
    <div class="row gy-4">
        <div class="col-lg-3 col-md-12 footer-info">
            <a href="/" class="logo">
            <img src="../../images/shuffLogo01.png" />
            </a>
        </div>

        <div class="col footer-links">
            <h4>Useful Links</h4>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="../about.html">About</a></li>
            <li><a href="../contact.html">Contact</a></li>
            <li><a href="../portofolio.html">Portofolio</a></li>
            <li><a href="../blog.html">Blog</a></li>
            <li><a href="../booking.html">Booking</a></li>
            </ul>
        </div>

        <div class="col footer-links">
            <h4>Our Services</h4>
            <ul>
            <li><a href="#">Photograph</a></li>
            <li><a href="#">Drone</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Matterport</a></li>
            <li><a href="#">Content Creation</a></li>
            </ul>
        </div>

        <div
            class="col-lg-3 col-md-12 footer-contact text-center text-md-start"
        >
            <h4>Contact Us</h4>
            <p>
            Jl. Jenderal Sudirman Blok Lot 11 No.Kav 58, RT.5/RW.3, Senayan,
            Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota
            Jakarta 12190<br />
            Indonesia <br /><br />
            <strong>Phone:</strong> +6289729345772<br />
            <strong>Email:</strong> ShuffOfficial@gmail.com<br />
            </p>
        </div>
    </div>
</div>

<div class="container mt-4">
    <div class="copyright">
        &copy; Copyright <strong><span>Shuff</span></strong>. All Rights Reserved
    </div>
</div>
`;

const footerHome = document.getElementById("footer");
const footerPage = document.getElementById("footerPages");
const footerDetailBlog = document.getElementById("footerDetail");

if (footerHome) {
    footerHome.innerHTML = footer;
}else if (footerPage) {
    footerPage.innerHTML = footerPages;
}else if (footerDetailBlog) {
    footerDetailBlog.innerHTML = footerDetail;
}
