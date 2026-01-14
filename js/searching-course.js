// Lấy từ khóa từ query string (?q=...)
const params = new URLSearchParams(window.location.search);
const keyword = params.get("q") || "";
document.getElementById("search-keyword").textContent = keyword;


//render card
function renderCard(course) {
  return `
    <div class="course-card swiper-slide">
      <div class="course-header">
        <span class="course-label">Khóa Học</span>
        <h3 class="course-title">${course.title}</h3>
      </div>
      <div class="course-body">
        <p class="course-desc">${course.desc}</p>
        <div class="course-meta">
          <div class="duration-chapters">
            <i class="fas fa-clock"></i> ${course.duration} Giờ &nbsp; | &nbsp;
            <i class="fas fa-book"></i> ${course.chapters} Chương
          </div>
          <div class="rating">
            <i class="fas fa-star"></i> ${course.rating} ★
            <span class="score">(${course.reviews} đánh giá)</span>
          </div>
        </div>
      </div>
      <div class="course-footer">
        <span class="level">${course.level}</span>
        <span class="studying-now"><i class="fas fa-user-graduate"></i>${course.studying} người đang học</span>
      </div>
    </div>
  `;
}

// Lọc theo từ khóa
const filtered = courses.filter(c => c.title.toLowerCase().includes(keyword.toLowerCase()));

const swiperResults = document.getElementById("swiper-results");
const gridResults = document.getElementById("grid-results");

// Render Swiper (top 5)
swiperResults.innerHTML = filtered.slice(0,5).map(c => renderCard(c)).join("");

// Render Grid (còn lại)
gridResults.innerHTML = filtered.slice(5).map(c => renderCard(c)).join("");


new Swiper('.swiper', {
  loop: true, 
  
  autoHeight: true,
  centeredSlides: true,
  watchOverflow: true,
  preloadImages: true,
  allowTouchMove: true,

  slidesPerView: 'auto',
  // cảm ơn chúa nhờ cái này mà cái swipper ko bị tràn thành 3tr pixel
  slidesPerView: 3,
  spaceBetween: 40,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay:
  // {
  //   deplay:3000,
  //   disableOnInteraction: false,

  // }
});