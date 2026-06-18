// Dữ liệu bài viết: thay trường url bằng link bài báo thật khi triển khai.
const newsArticles = [
  {
    title: "PFAS - Nhóm 'hóa chất vĩnh cửu' đang trở thành chỉ tiêu kiểm nghiệm được quan tâm hiện nay",
    description: "PFAS (Per- and Polyfluoroalkyl Substances) là nhóm hóa chất được sử dụng rộng rãi trong bao bì thực phẩm, mỹ phẩm, vật liệu chống thấm và nhiều sản phẩm công nghiệp. Nhiều quốc gia đang siết chặt quy định kiểm soát PFAS trong thực phẩm, nước uống và vật liệu tiếp xúc thực phẩm. Đây được xem là một trong những xu hướng kiểm nghiệm nổi bật giai đoạn 2025 – 2030.",
    date: "16/06/2026",
    url: "https://www.merieuxnutrisciences.com/food/laboratory-testing/contaminants-and-residues/pfas-in-food-packaging-and-water/?utm_source=chatgpt.com"
  },
  {
    title: "Vi nhựa (Microplastics) – Chất ô nhiễm mới nổi trong thực phẩm và nước uống",
    description: "Vi nhựa đang được phát hiện ngày càng nhiều trong nước uống, hải sản, muối ăn và các sản phẩm tiêu dùng. Các cơ quan quản lý và phòng thử nghiệm trên thế giới đang phát triển các phương pháp phân tích nhằm đánh giá mức độ phơi nhiễm và nguy cơ sức khỏe từ vi nhựa.",
    date: "02/09/2021",
    url: "https://pubs.acs.org/doi/abs/10.1021/acs.jafc.1c04199?utm_source=chatgpt.com"
  },
  {
    title: "Kim loại nặng trong thực phẩm, nước và mỹ phẩm: Những rủi ro doanh nghiệp cần biết",
    description: "Pb, Cd, Hg và As vẫn là nhóm chỉ tiêu bắt buộc trong nhiều quy chuẩn an toàn thực phẩm và mỹ phẩm. Việc kiểm soát nguyên liệu đầu vào và giám sát định kỳ giúp giảm nguy cơ sản phẩm không đạt yêu cầu lưu hành.",
    date: "28/05/2026",
    url: "https://medgate.vn/nhung-yeu-cau-ve-kiem-nghiem-doi-voi-thuc-pham-bao-ve-suc-khoe/?utm_source=chatgpt.com"
  },
  {
    title: "Dư lượng thuốc bảo vệ thực vật: Thách thức lớn đối với nông sản xuất khẩu",
    description: "Các thị trường như EU, Hoa Kỳ, Nhật Bản liên tục cập nhật mức giới hạn dư lượng tối đa (MRL). Doanh nghiệp xuất khẩu cần xây dựng chương trình giám sát dư lượng ngay từ vùng nguyên liệu để tránh rủi ro trả hàng hoặc cảnh báo.",
    date: "29/01/2026",
    url: "https://nongnghiephuuco.vn/tang-cuong-kiem-soat-du-luong-thuoc-bao-ve-thuc-vat-khi-xuat-khau-sang-phap-11779.html?utm_source=chatgpt.com"
  },
  {
    title: "ISO/IEC 17025 và giá trị của kết quả thử nghiệm được công nhận",
    description: "ISO/IEC 17025 không chỉ là tiêu chuẩn quản lý phòng thử nghiệm mà còn là cơ sở bảo đảm tính chính xác, khách quan và khả năng truy xuất nguồn gốc của kết quả thử nghiệm.",
    date: "01/05/2026",
    url: "https://viendinhduong.vn/vi/about/don-vi-trong-vien/trung-tam-kiem-nghiem-thuc-pham-va-dinh-duong-6a0c18bd7d7dfcf7b808e913?utm_source=chatgpt.com"
  },
  {
    title: "Chuyển đổi số trong phòng thử nghiệm: Từ dữ liệu đến quản lý rủi ro",
    description: "Xu hướng hiện nay là ứng dụng LIMS, tự động hóa thiết bị và phân tích dữ liệu lớn nhằm nâng cao hiệu quả quản lý chất lượng, giảm sai sót và tăng tốc độ trả kết quả.",
    date: "18/11/2025",
    url: "https://www.technologynetworks.com/applied-sciences/blog/key-trends-and-technologies-in-food-analysis-406855?utm_source=chatgpt.com"
  }
];

const themeToggle = document.querySelector("#themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");
const newsGrid = document.querySelector("#newsGrid");
const mobileMenuToggle = document.querySelector("#mobileMenuToggle");
const mainNav = document.querySelector("#mainNav");

// Render danh sách bài viết từ mảng newsArticles.
function renderNewsArticles() {
  newsGrid.innerHTML = newsArticles.map((article) => `
    <article class="news-card">
      <span class="news-meta">${article.date}</span>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <a class="text-link" href="${article.url}" ${article.url !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ""}>Xem thêm</a>
    </article>
  `).join("");
}

// Dark mode có lưu lựa chọn của người dùng.
function setTheme(mode) {
  const isDark = mode === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "Light" : "Dark";
  localStorage.setItem("vinalab-theme", mode);
}

const savedTheme = localStorage.getItem("vinalab-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

renderNewsArticles();
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  setTheme(nextTheme);
});

// Menu mobile thu gọn để giữ header gọn trên màn hình nhỏ.
mobileMenuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("is-open");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
  });
});

/*
contactForm.addEventListener("submit", (event) => {
    ...
});
*/

let currentSlide = 0;

const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".slide-btn.prev");
const nextBtn = document.querySelector(".slide-btn.next");

function showSlide(index) {
    if (index < 0) {
        currentSlide = images.length - 1;
    } else if (index >= images.length) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});
const testCatalog = [
  {
    sample: "Thực phẩm",
    test: "Kim loại nặng: Pb, Cd, Hg, As",
    method: "AOAC / ISO / TCVN",
    time: "3 - 5 ngày"
  },
  {
    sample: "Thực phẩm",
    test: "Vi sinh: E. coli, Salmonella, Coliforms",
    method: "ISO / TCVN",
    time: "3 - 7 ngày"
  },
  {
    sample: "Nông sản",
    test: "Dư lượng thuốc bảo vệ thực vật",
    method: "LC-MS/MS, GC-MS/MS",
    time: "5 - 7 ngày"
  },
  {
    sample: "Nước",
    test: "pH, TDS, độ cứng, Nitrit, Nitrat",
    method: "SMEWW / TCVN",
    time: "2 - 4 ngày"
  },
  {
    sample: "Mỹ phẩm",
    test: "Kim loại nặng, chất bảo quản, vi sinh",
    method: "ISO / ASEAN Cosmetic Method",
    time: "5 - 7 ngày"
  },
  {
    sample: "Môi trường",
    test: "COD, BOD5, TSS, Amoni, kim loại nặng",
    method: "SMEWW / TCVN",
    time: "5 - 7 ngày"
  }
];

const testSearch = document.querySelector("#testSearch");
const sampleFilter = document.querySelector("#sampleFilter");
const testCatalogBody = document.querySelector("#testCatalogBody");

function renderTestCatalog() {
  const keyword = testSearch.value.toLowerCase();
  const sample = sampleFilter.value;

  const filtered = testCatalog.filter((item) => {
    const matchKeyword =
      item.sample.toLowerCase().includes(keyword) ||
      item.test.toLowerCase().includes(keyword) ||
      item.method.toLowerCase().includes(keyword);

    const matchSample = sample === "all" || item.sample === sample;

    return matchKeyword && matchSample;
  });

  testCatalogBody.innerHTML = filtered.map((item) => `
    <div class="table-row">
      <span>${item.sample}</span>
      <span>${item.test}</span>
      <span>${item.method}</span>
      <span>${item.time}</span>
    </div>
  `).join("");
}

testSearch.addEventListener("input", renderTestCatalog);
sampleFilter.addEventListener("change", renderTestCatalog);

renderTestCatalog();