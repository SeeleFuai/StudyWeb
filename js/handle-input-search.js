// Lấy ô input
const searchInput = document.querySelector(".course-search");

// Lắng nghe sự kiện Enter
searchInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const keyword = searchInput.value.trim();
    if (keyword) {
      // Chuyển hướng sang trang kết quả với query string
      window.location.href = `course.html?q=${encodeURIComponent(keyword)}`;
    }
  }
});

