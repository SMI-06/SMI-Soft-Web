document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    document.querySelector(".preloader")?document.querySelector(".preloader").classList.add("hide"):"";
  }
};

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
  if(document.querySelector("header")){
    if (document.querySelector("header nav").classList.contains("active")) {
      document.querySelector("header nav").classList.remove("active");
      document.querySelector(
        "header .buttonToggle"
      ).innerHTML = `<i class="fas fa-bars"></i>`;
    }
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

const targetElement = document.querySelector("body");
if (targetElement) {
  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

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

if (document.querySelector(".testimonialsSection")) {
  let itemCount = document
    .querySelector(".testimonialsSection .testimonialsContainer")
    .getAttribute("data-itemCount");
  document.querySelector(
    ".testimonialsSection .testimonialsContainer"
  ).innerHTML = "";
  for (let i = 0; i < testimonials.length; i++) {
    if (itemCount == "all") {
      document.querySelector(
        ".testimonialsSection .testimonialsContainer"
      ).innerHTML += `
        <div class="${
          testimonials[i].tPos == 1
            ? "col-lg-7 col-md-10"
            : "col-lg-5 col-md-10"
        }">
            <div class="card">
                <div class="d-flex align-items-center gap-3 mb-3">
                    <img
                        src="assets/images/testimonials_client_logo/${
                          testimonials[i].tImage
                        }"
                        class="profile" loading="lazy" alt>
                    <div class="flex-grow-1 userDetail">
                        <h5>${testimonials[i].tName}</h5>
                        <span>${testimonials[i].tPost}</span>
                    </div>
                    <div
                        class="d-flex flex-column align-self-start">
                        <span class="date">${testimonials[i].tDate}</span>
                        <span class="time">${testimonials[i].tTime}</span>
                    </div>
                </div>
                <p class="para">${testimonials[i].tMessage}</p>
                <div class="d-flex align-items-center gap-1">
                    <img src="assets/images/testimonials.png"
                        class="star" alt>
                    <h6 style="color: #d9232d;">SMI SOFTS</h6>
                    <div class="rating" data-rating="${
                      testimonials[i].tRating
                    }">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
      `;
    } else {
      if (i < itemCount) {
        document.querySelector(
          ".testimonialsSection .testimonialsContainer"
        ).innerHTML += `
          <div class="${
            testimonials[i].tPos == 1
              ? "col-lg-7 col-md-10"
              : "col-lg-5 col-md-10"
          }">
              <div class="card">
                  <div class="d-flex align-items-center gap-3 mb-3">
                      <img
                          src="https://demo-egenslab.b-cdn.net/html/softconic/preview/assets/img/home-4/h4-testi-0${
                            testimonials[i].tImage
                          }"
                          class="profile" loading="lazy" alt>
                      <div class="flex-grow-1 userDetail">
                          <h5>${testimonials[i].tName}</h5>
                          <span>${testimonials[i].tPost}</span>
                      </div>
                      <div
                          class="d-flex flex-column align-self-start">
                          <span class="date">${testimonials[i].tDate}</span>
                          <span class="time">${testimonials[i].tTime}</span>
                      </div>
                  </div>
                  <p class="para">${testimonials[i].tMessage}</p>
                  <div class="d-flex align-items-center gap-1">
                      <img src="assets/images/testimonials.png"
                          class="star" alt>
                      <h6 style="color: #d9232d;">SMI SOFTS</h6>
                      <div class="rating" data-rating="${
                        testimonials[i].tRating
                      }">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                      </div>
                  </div>
              </div>
          </div>
        `;
      }
    }
  }
}

if (document.querySelector("#portfolio #portfolioContainer")) {
  let itemCount = document
    .querySelector("#portfolio #portfolioContainer")
    .getAttribute("data-itemCount");
  document.querySelector("#portfolio #portfolioContainer").innerHTML = "";
  for (let i = 0; i < projects.length; i++) {
    if (i < itemCount) {
      let images = "";
      for (let j = 0; j < projects[i].pImage.length; j++) {
        if (projects[i].pImage.length < 2) {
          images += `
                <img src="assets/images/projects/${
                  projects[i].pImage[j]
                }" loading="lazy" style="--item:${
            j + 1
          }; animation:none; opacity:1;" alt>
              `;
        } else {
          images += `
                <img src="assets/images/projects/${
                  projects[i].pImage[j]
                }" loading="lazy" style="--item:${j + 1};" alt>
              `;
        }
      }
      document.querySelector("#portfolio #portfolioContainer").innerHTML += `
              <div class="col-lg-4 col-md-4">
                  <div class="card shadow-sm">
                      <div class="imageContainer" style="--item-count:${
                        projects[i].pImage.length
                      };">
                        ${images}
                      </div>
                      <a href="portfolio.html?filter=${
                        projects[i].pCategory
                      }" class="category">${projects[i].pCategory}</a>
                      <div class="content">
                          <div class="group">
                              <span>${projects[i].pDate}</span>
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

let currentPage = 1;
const itemsPerPage = 6;

if (document.querySelector(".portfolioSection")) {
  for (let i = 0; i < projects.length; i++) {
    if (i < itemsPerPage) {
      document.querySelector(".portfolioSection #hint").innerHTML += `
        <option value="${projects[i].pName}"></option>
      `;
    }
  }
}

if (document.querySelector(".portfolioSection")) {
  const checkFilter = new URLSearchParams(window.location.search);
  if (!checkFilter.has("filter") || !checkFilter.get("filter")) {
    filterData("all");
    categories.forEach((category) => {
      const isActive = category === checkFilter.get("filter");
      document.querySelector(".portfolioSection .filters").innerHTML += `
        <button class="nav-link ${isActive ? "active active-filter" : ""}" 
                onclick="applyFilter('${category}')" 
                type="button" 
                data-bs-toggle="pill">${category}</button>
      `;
    });
  } else if (!categories.includes(checkFilter.get("filter"))) {
    window.location.href = "portfolio.html";
  } else {
    document
      .querySelector(".portfolioSection .filters .allBtn")
      .classList.remove("active");
    categories.forEach((category) => {
      const isActive = category === checkFilter.get("filter");
      document.querySelector(".portfolioSection .filters").innerHTML += `
        <button class="nav-link ${isActive ? "active active-filter" : ""}" 
                onclick="applyFilter('${category}')" 
                type="button" 
                data-bs-toggle="pill">${category}</button>
      `;
    });
    filterData(checkFilter.get("filter"));
  }
}

function filterData(filter) {
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.pCategory === filter);

  document.getElementById("paginationContainer")
    ? document.getElementById("paginationContainer").classList.remove("d-none")
    : "";

  const totalItems = filteredProjects.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;
  updatePagination(totalPages);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedProjects = filteredProjects.slice(start, end);

  const container = document.querySelector(
    ".portfolioSection #portfolioContainer"
  );
  container.innerHTML = paginatedProjects.length
    ? paginatedProjects
        .map((project, index) => {
          let images = "";
          for (let i = 0; i < project.pImage.length; i++) {
            if (project.pImage.length < 2) {
              images += `
                <img src="assets/images/projects/${
                  project.pImage[i]
                }" loading="lazy" style="--item:${
                i + 1
              }; animation:none; opacity:1;" alt>
              `;
            } else {
              images += `
                <img src="assets/images/projects/${
                  project.pImage[i]
                }" loading="lazy" style="--item:${i + 1};" alt>
              `;
            }
          }
          return `
          <div class="col-lg-4 col-md-4">
            <div class="card shadow-sm">
              <div class="imageContainer" style="--item-count:${
                project.pImage.length
              };">
                ${images}
              </div>
              <a href="portfolio.html?filter=${
                project.pCategory
              }" class="category">${project.pCategory}</a>
              <div class="content">
                <div class="group">
                  <span>${project.pDate}</span>
                </div>
                <a href="project-detail.html?id=${index + 1}" class="title">${
            project.pName
          }</a>
                <div class="links">
                  <a href="project-detail.html?id=${
                    index + 1
                  }" class="readmore">
                    read more
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                  <div class="social">
                    <span><i class="fa-solid fa-location-arrow"></i></span>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        })
        .join("")
    : `
      <div class="col-lg-12 col-md-12">
        <div class="card notFound">
          <img src="assets/images/notfound.svg" loading="lazy" alt="" />
          <div class="content w-100">
            <h1 class="title text-center">Projects are <span class="textContent">Not Found</span></h1>
          </div>
        </div>
      </div>
    `;
}

function updatePagination(totalPages) {
  const paginationContainer = document.getElementById("paginationContainer");
  paginationContainer.innerHTML = "";

  paginationContainer.innerHTML += `
    <a href="javascript:void(0)" class="${
      currentPage === 1 ? "disabled" : ""
    }" onclick="changePage(${currentPage - 1})">
      <i class="fa-solid fa-chevron-left"></i>
    </a>
  `;

  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.innerHTML += `
      <a href="javascript:void(0)" class="${
        currentPage === i ? "active" : ""
      }" onclick="changePage(${i})">${i}</a>
    `;
  }

  paginationContainer.innerHTML += `
    <a href="javascript:void(0)" class="${
      currentPage === totalPages ? "disabled" : ""
    }" onclick="changePage(${currentPage + 1})">
      <i class="fa-solid fa-chevron-right"></i>
    </a>
  `;
}

function changePage(page) {
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  const activeFilter = document.querySelector(".active-filter");
  const filter = activeFilter ? activeFilter.textContent.trim() : "all";
  filterData(filter);
}

function applyFilter(filter) {
  document
    .querySelectorAll(".portfolioSection .filters .nav-link")
    .forEach((button) => {
      button.classList.remove("active", "active-filter");
    });
  const filterButton = Array.from(
    document.querySelectorAll(".portfolioSection .filters .nav-link")
  ).find((btn) => btn.textContent.trim() === filter);
  if (filterButton) {
    filterButton.classList.add("active", "active-filter");
  }
  currentPage = 1;
  filterData(filter);
}

function searchProjects(event) {
  event.preventDefault();
  const searchQuery = document
    .getElementById("searchInput")
    .value.toLowerCase();
  if (document.querySelector(".portfolioSection #portfolioContainer")) {
    document.querySelector(".portfolioSection #portfolioContainer").innerHTML =
      "";
    let countItem = 0;
    if (searchQuery === "") {
      document.getElementById("paginationContainer")
        ? document
            .getElementById("paginationContainer")
            .classList.remove("d-none")
        : "";
    } else {
      document.getElementById("paginationContainer")
        ? document.getElementById("paginationContainer").classList.add("d-none")
        : "";
    }
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].pName.toLowerCase().includes(searchQuery)) {
        countItem++;
        let images = "";
        for (let j = 0; j < projects[i].pImage.length; j++) {
          if (projects[i].pImage.length < 2) {
            images += `
                <img src="assets/images/projects/${
                  projects[i].pImage[j]
                }" loading="lazy" style="--item:${
              j + 1
            }; animation:none; opacity:1;" alt>
              `;
          } else {
            images += `
                <img src="assets/images/projects/${
                  projects[i].pImage[j]
                }" loading="lazy" style="--item:${j + 1};" alt>
              `;
          }
        }
        document.querySelector(
          ".portfolioSection #portfolioContainer"
        ).innerHTML += `
                <div class="col-lg-4 col-md-4">
                <div class="card shadow-sm">
                    <div class="imageContainer" style="--item-count:${
                      projects[i].pImage.length
                    };">
                        ${images}
                    </div>
                    <a href="portfolio.html?filter=${
                      projects[i].pCategory
                    }" class="category">${projects[i].pCategory}</a>
                    <div class="content">
                        <div class="group">
                            <span>${projects[i].pDate}</span>
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

    if (countItem == 0) {
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
