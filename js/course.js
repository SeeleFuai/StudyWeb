
const courses = [
  {
    title: "Lập Trình Python Cơ Bản",
    desc: "Khóa học giúp bạn làm quen với cú pháp Python và xây dựng ứng dụng đơn giản.",
    level: "Beginner-friendly",
    duration: 6,
    chapters: 32,
    rating: 4.6,
    reviews: 1850,
    studying: 74
  },
  {
    title: "JavaScript Cho Người Mới Bắt Đầu",
    desc: "Khám phá cách tạo trang web động với JavaScript, từ cơ bản đến ứng dụng thực tế.",
    level: "Beginner-friendly",
    duration: 5,
    chapters: 27,
    rating: 4.4,
    reviews: 1420,
    studying: 89
  },
  {
    title: "ReactJS Cho Frontend Developer",
    desc: "Xây dựng ứng dụng web hiện đại với ReactJS, thư viện phổ biến cho phát triển frontend.",
    level: "Intermediate",
    duration: 6,
    chapters: 30,
    rating: 4.9,
    reviews: 3500,
    studying: 150
  },
  {
    title: "Node.js Backend Development",
    desc: "Khóa học giúp bạn xây dựng API và ứng dụng backend mạnh mẽ với Node.js và Express.",
    level: "Intermediate",
    duration: 7,
    chapters: 34,
    rating: 4.6,
    reviews: 1980,
    studying: 95
  },
  {
    title: "C++ Nâng Cao",
    desc: "Khóa học tập trung vào kỹ thuật nâng cao trong C++ như OOP, template và quản lý bộ nhớ.",
    level: "Advanced",
    duration: 8,
    chapters: 42,
    rating: 4.7,
    reviews: 2100,
    studying: 112
  },
  {
    title: "Java Cơ Bản",
    desc: "Học cách viết ứng dụng với Java, ngôn ngữ phổ biến trong phát triển phần mềm và Android.",
    level: "Intermediate",
    duration: 7,
    chapters: 36,
    rating: 4.3,
    reviews: 980,
    studying: 65
  },
  {
    title: "TypeScript Cho Frontend Developer",
    desc: "Khóa học giúp bạn nắm vững TypeScript để viết code an toàn và dễ bảo trì hơn.",
    level: "Intermediate",
    duration: 5,
    chapters: 25,
    rating: 4.4,
    reviews: 980,
    studying: 68
  },
  {
    title: "Kotlin Cho Android",
    desc: "Học cách xây dựng ứng dụng Android hiện đại với Kotlin, ngôn ngữ chính thức của Google.",
    level: "Intermediate",
    duration: 7,
    chapters: 33,
    rating: 4.3,
    reviews: 1200,
    studying: 95
  },
  {
    title: "Go (Golang) Backend Development",
    desc: "Khóa học giúp bạn xây dựng hệ thống backend hiệu năng cao với Go.",
    level: "Intermediate",
    duration: 6,
    chapters: 28,
    rating: 4.6,
    reviews: 860,
    studying: 72
  },
  {
    title: "Rust Programming Cơ Bản",
    desc: "Khám phá Rust – ngôn ngữ lập trình an toàn bộ nhớ, hiệu năng cao cho hệ thống hiện đại.",
    level: "Beginner-friendly",
    duration: 8,
    chapters: 40,
    rating: 4.5,
    reviews: 1100,
    studying: 56
  },
  {
    title: "PHP & Laravel Web Development",
    desc: "Xây dựng website và API mạnh mẽ với PHP và framework Laravel phổ biến.",
    level: "Intermediate",
    duration: 9,
    chapters: 45,
    rating: 4.2,
    reviews: 1340,
    studying: 81
  },
  {
    title: "Machine Learning với Python",
    desc: "Khóa học nhập môn Machine Learning với thư viện scikit-learn.",
    level: "Intermediate",
    duration: 8,
    chapters: 35,
    rating: 4.6,
    reviews: 2200,
    studying: 130
  },
  {
    title: "TensorFlow Deep Learning",
    desc: "Xây dựng mô hình Deep Learning với TensorFlow.",
    level: "Advanced",
    duration: 10,
    chapters: 50,
    rating: 4.7,
    reviews: 1800,
    studying: 90
  },
  {
    title: "PyTorch Neural Networks",
    desc: "Khóa học về xây dựng mạng nơ-ron với PyTorch.",
    level: "Advanced",
    duration: 9,
    chapters: 48,
    rating: 4.5,
    reviews: 1500,
    studying: 85
  },
  {
    title: "Data Science với Pandas",
    desc: "Phân tích dữ liệu bằng Python và thư viện Pandas.",
    level: "Intermediate",
    duration: 7,
    chapters: 32,
    rating: 4.6,
    reviews: 2100,
    studying: 120
  },
  {
    title: "SQL Cho Người Mới",
    desc: "Khóa học nhập môn SQL để quản lý cơ sở dữ liệu.",
    level: "Beginner-friendly",
    duration: 4,
    chapters: 20,
    rating: 4.3,
    reviews: 900,
    studying: 70
  },
  {
    title: "Docker & Kubernetes",
    desc: "Triển khai ứng dụng với Docker và Kubernetes.",
    level: "Advanced",
    duration: 8,
    chapters: 38,
    rating: 4.6,
    reviews: 1600,
    studying: 100
  },
  {
    title: "HTML & CSS Cơ Bản",
    desc: "Khóa học nhập môn xây dựng giao diện web với HTML & CSS.",
    level: "Beginner-friendly",
    duration: 3,
    chapters: 15,
    rating: 4.2,
    reviews: 800,
    studying: 60
  },
  {
    title: "Angular Framework",
    desc: "Phát triển ứng dụng frontend với Angular.",
    level: "Intermediate",
    duration: 7,
    chapters: 30,
    rating: 4.4,
    reviews: 1100,
    studying: 75
  },
  {
    title: "Vue.js Cho Frontend",
    desc: "Xây dựng ứng dụng frontend với Vue.js.",
    level: "Intermediate",
    duration: 6,
    chapters: 28,
    rating: 4.5,
    reviews: 1250,
    studying: 80
  },
  {
  title: "Python Nâng Cao",
  desc: "Khóa học tập trung vào kỹ thuật nâng cao trong Python như OOP, decorator, và quản lý bộ nhớ.",
  level: "Advanced",
  duration: 9,
  chapters: 40,
  rating: 4.7,
  reviews: 2400,
  studying: 120
  },
  {
    title: "Python cho Phân Tích Dữ Liệu",
    desc: "Học cách sử dụng Python với Pandas và NumPy để phân tích dữ liệu thực tế.",
    level: "Intermediate",
    duration: 7,
    chapters: 35,
    rating: 4.6,
    reviews: 2100,
    studying: 95
  },
  {
    title: "Python Web Development với Django",
    desc: "Xây dựng ứng dụng web mạnh mẽ với Django framework và Python.",
    level: "Intermediate",
    duration: 8,
    chapters: 38,
    rating: 4.5,
    reviews: 1800,
    studying: 110
  },
  {
    title: "Python cho Machine Learning",
    desc: "Khóa học nhập môn Machine Learning với Python và scikit-learn.",
    level: "Intermediate",
    duration: 10,
    chapters: 45,
    rating: 4.8,
    reviews: 3200,
    studying: 150
  },
  {
    title: "Python Automation",
    desc: "Tự động hóa các tác vụ hàng ngày với Python: xử lý file, web scraping, và script tiện ích.",
    level: "Beginner-friendly",
    duration: 6,
    chapters: 28,
    rating: 4.4,
    reviews: 1300,
    studying: 80
  }

];
