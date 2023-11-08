const header = `
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" class="logo d-flex align-items-center">
            <img src="./images/shuffLogo02.png" alt="shuffLogo" />
        </a>
        <!-- .navbar -->
        <nav id="navbar" class="navbar">
            <ul>
                <li><a href="/" class="active">Home</a></li>
                <li><a href="./pages/about.html">About</a></li>
                <li><a href="./pages/contact.html">Contact</a></li>
                <li><a href="./pages/portofolio.html">Portofolio</a></li>
                <li><a href="./pages/blog.html">Blog</a></li>
                <li><a href="./pages/booking.html">Booking</a></li>
            </ul>
        </nav>

        <!-- BurgerMenu -->
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list">
            <span class="material-symbols-outlined"> menu </span>
        </i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x">
            <span class="material-symbols-outlined"> close </span>
        </i>

    </div>
`;

const headerPages = `
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" class="logo d-flex align-items-center">
          <img src="../images/shuffLogo02.png" alt="shuffLogo" />
        </a>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./about.html" class="active">About</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="./portofolio.html">Portofolio</a></li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./booking.html">Booking</a></li>
          </ul>
        </nav>

        <!-- BurgerMenu -->
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list">
            <span class="material-symbols-outlined"> menu </span>
        </i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x">
            <span class="material-symbols-outlined"> close </span>
        </i>

    </div>

`;

const headerDetailBlog = `
<div class="container-fluid container-xl d-flex align-items-center justify-content-between">
    <a href="/" class="logo d-flex align-items-center">
        <img src="../../images/shuffLogo02.png" alt="shuffLogo" />
    </a>
    <nav id="navbar" class="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="../about.html">About</a></li>
            <li><a href="../contact.html">Contact</a></li>
            <li><a href="../portofolio.html">Portofolio</a></li>
            <li><a href="../blog.html" class="active" >Blog</a></li>
            <li><a href="../booking.html">Booking</a></li>
        </ul>
    </nav>
    <!-- BurgerMenu -->
    <i class="mobile-nav-toggle mobile-nav-show bi bi-list">
        <span class="material-symbols-outlined"> menu </span>
    </i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x">
        <span class="material-symbols-outlined"> close </span>
    </i>
    <!-- . -->
</div>
`;


const headerHome = document.getElementById("header");
const headerPage = document.getElementById("headerPages");
const headerDetail = document.getElementById("headerDetail");

if (headerHome) {
    headerHome.innerHTML = header;
}else if (headerPage) {
    headerPage.innerHTML = headerPages;
}else if (headerDetailBlog) {
    headerDetail.innerHTML = headerDetailBlog;
}



