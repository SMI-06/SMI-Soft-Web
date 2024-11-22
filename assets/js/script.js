// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         document.querySelector(".preloader").classList.add("active");
//     } else {
//         document.querySelector(".preloader").style.opacity = "0";
//         setTimeout(() => {
//             document.querySelector(".preloader").classList.remove("active");
//             document.querySelector(".preloader").style.display = "none";
//         }, 1200)
//     }
// };

function menuToggle() {
  if (document.querySelector("header nav").classList.contains("active")) {
    document.querySelector("header nav").classList.remove("active");
    document.querySelector(
      "header .buttonToggle"
    ).innerHTML = `<i class="fas fa-bars"></i>`;
  } else {
    document.querySelector("header nav").classList.add("active");
    document.querySelector(
      "header .buttonToggle"
    ).innerHTML = `<i class="fas fa-times"></i>`;
  }
}

window.addEventListener("scroll", function () {
  if (document.querySelector("header nav").classList.contains("active")) {
    document.querySelector("header nav").classList.remove("active");
    document.querySelector(
      "header .buttonToggle"
    ).innerHTML = `<i class="fas fa-bars"></i>`;
  }
  if (document.querySelector(".blogSection .tableContent .content")) {
    document
      .querySelector(".blogSection .tableContent .content .group button")
      .classList.add("collapsed");
    document
      .querySelector(".blogSection .tableContent .content .group button")
      .setAttribute("aria-expanded", "false");
    document
      .querySelector(".blogSection .tableContent .content .collapse")
      .classList.remove("show");
  }
});

if (document.querySelector(".floatingAction")) {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector(".floatingAction").classList.add("active");
    } else {
      document.querySelector(".floatingAction").classList.remove("active");
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.querySelector(".floatingAction").classList.add("up");
      document.querySelector(".whatsapp-btn").classList.add("up");
    } else {
      document.querySelector(".floatingAction").classList.remove("up");
      document.querySelector(".whatsapp-btn").classList.remove("up");
    }
  };
  document.querySelector(".floatingAction").onclick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
}

if (document.querySelector("#portfolio #portfolioContainer")) {
  let itemCount = document
    .querySelector("#portfolio #portfolioContainer")
    .getAttribute("data-itemCount");
  document.querySelector("#portfolio #portfolioContainer").innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    if (i < itemCount) {
      document.querySelector("#portfolio #portfolioContainer").innerHTML += `
              <div class="col-lg-4 col-md-4">
                  <div class="card shadow-sm">
                      <div class="imageContainer">
                          <img
                              src="assets/images/projects/${
                                projects[i].pImage
                              }" loading="lazy"
                              alt>
                      </div>
                      <a href="portfolio.html?filter=${
                        projects[i].pCategory
                      }" class="category">${projects[i].pCategory}</a>
                      <div class="content">
                          <div class="group">
                              <span>Sep 20, 2023</span>
                              <a href="#">comment (3)</a>
                          </div>
                          <a href="project-detail.html?id=${i + 1}"
                              class="title">${projects[i].pName}</a>
                          <div class="links">
                              <a href="project-detail.html?id=${i + 1}"
                                  class="readmore">
                                  read more
                                  <i
                                      class="fa-solid fa-arrow-right"></i>
                              </a>
                              <div class="social">
                                  <span><i
                                          class="fa-solid fa-location-arrow"></i></span>
                                  <a href="#"><i
                                          class="fa-brands fa-facebook-f"></i></a>
                                  <a href="#"><i
                                          class="fa-brands fa-twitter"></i></a>
                                  <a href="#"><i
                                          class="fa-brands fa-pinterest-p"></i></a>
                                  <a href="#"><i
                                          class="fa-brands fa-instagram"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
    }
  }
}

if (document.querySelector(".portfolioSection")) {
  const checkFilter = new URLSearchParams(window.location.search);
  if (!checkFilter.has('filter') || !checkFilter.get('filter')) {
    filterData("all");
  } else if (!categories.includes(checkFilter.get('filter'))) {
    window.location.href = 'portfolio.html';
  }

  for (let i = 0; i < categories.length; i++) {
    if (categories[i] == checkFilter.get("filter")) {
      document.querySelector(".portfolioSection .filters").innerHTML += `
        <button class="nav-link active" onclick="filterData('${categories[i]}')" type="button" data-bs-toggle="pill">${categories[i]}</button>
      `;
      document.querySelector(".portfolioSection .filters .allBtn").classList.remove("active");
      filterData(`${categories[i]}`);
    } else {
      document.querySelector(".portfolioSection .filters").innerHTML += `
        <button class="nav-link" onclick="filterData('${categories[i]}')" type="button" data-bs-toggle="pill">${categories[i]}</button>
      `;
    }
  }
}

function filterData(filter) {
  if (filter == "all") {
    if (document.querySelector(".portfolioSection #portfolioContainer")) {
      document.querySelector(
        ".portfolioSection #portfolioContainer"
      ).innerHTML = "";
      let countItem = 0;
      for (let i = 0; i < projects.length; i++) {
        countItem++;
        document.querySelector(
          ".portfolioSection #portfolioContainer"
        ).innerHTML += `
                <div class="col-lg-6 col-md-6">
                  <div class="card shadow-sm">
                      <div class="imageContainer">
                          <img
                              src="assets/images/projects/${
                                projects[i].pImage
                              }" loading="lazy"
                              alt>
                      </div>
                      <a href="portfolio.html?filter=${
                        projects[i].pCategory
                      }" class="category">${projects[i].pCategory}</a>
                      <div class="content">
                          <div class="group">
                              <span>Sep 20, 2023</span>
                              <a href="#">comment (3)</a>
                          </div>
                          <a href="project-detail.html?id=${i + 1}"
                              class="title">${projects[i].pName}</a>
                          <div class="links">
                              <a href="project-detail.html?id=${i + 1}"
                                  class="readmore">
                                  read more
                                  <i
                                      class="fa-solid fa-arrow-right"></i>
                              </a>
                              <div class="social">
                                  <span><i
                                          class="fa-solid fa-location-arrow"></i></span>
                                  <a href="#"><i
                                          class="fa-brands fa-facebook-f"></i></a>
                                  <a href="#"><i
                                          class="fa-brands fa-twitter"></i></a>
                                  <a href="#"><i
                                          class="fa-brands fa-pinterest-p"></i></a>
                                  <a href="#"><i
                                          class="fa-brands fa-instagram"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            `;
      }
      if(countItem == 0){
        document.querySelector(
          ".portfolioSection #portfolioContainer"
        ).innerHTML = `
              <div class="col-lg-12 col-md-12">
                <div class="card notFound">
                    <img src="assets/images/notfound.svg" loading="lazy" alt="" />
                    <div class="content w-100">
                      <h1 class="title text-center">Projects are <span
                      class="textContent">Not Found</span></h1>
                    </div>
                </div>
              </div>
            `;
      }
    }
  } else {
    if (document.querySelector(".portfolioSection #portfolioContainer")) {
      document.querySelector(
        ".portfolioSection #portfolioContainer"
      ).innerHTML = "";
      let countItem = 0;
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].pCategory === filter) {
          countItem++;
          document.querySelector(
            ".portfolioSection #portfolioContainer"
          ).innerHTML += `
                  <div class="col-lg-6 col-md-6">
                  <div class="card shadow-sm">
                      <div class="imageContainer">
                          <img
                              src="assets/images/projects/${
                                projects[i].pImage
                              }" loading="lazy"
                              alt>
                      </div>
                      <a href="portfolio.html?filter=${
                        projects[i].pCategory
                      }" class="category">${projects[i].pCategory}</a>
                      <div class="content">
                          <div class="group">
                              <span>Sep 20, 2023</span>
                              <a href="#">comment (3)</a>
                          </div>
                          <a href="project-detail.html?id=${i + 1}"
                              class="title">${projects[i].pName}</a>
                          <div class="links">
                              <a href="project-detail.html?id=${i + 1}"
                                  class="readmore">
                                  read more
                                  <i
                                      class="fa-solid fa-arrow-right"></i>
                              </a>
                              <div class="social">
                                  <span><i
                                          class="fa-solid fa-location-arrow"></i></span>
                                  <a href="#"><i
                                          class="fa-brands fa-facebook-f"></i></a>
                                  <a href="#"><i
                                          class="fa-brands fa-twitter"></i></a>
                                  <a href="#"><i
                                          class="fa-brands fa-pinterest-p"></i></a>
                                  <a href="#"><i
                                          class="fa-brands fa-instagram"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              `;
        }
      }

      if(countItem == 0){
        document.querySelector(
          ".portfolioSection #portfolioContainer"
        ).innerHTML = `
              <div class="col-lg-12 col-md-12">
                <div class="card notFound">
                    <img src="assets/images/notfound.svg" loading="lazy" alt="" />
                    <div class="content w-100">
                      <h1 class="title text-center">Projects are <span
                      class="textContent">Not Found</span></h1>
                    </div>
                </div>
              </div>
            `;
      }
    }
  }
}

if (document.querySelector(".threebox")) {
  VanillaTilt.init(document.querySelectorAll(".threebox"), {
    max: 25,
    speed: 300,
  });
}

if (document.querySelector(".threebox2")) {
  VanillaTilt.init(document.querySelectorAll(".threebox2"), {
    max: 5,
    speed: 300,
  });
}
