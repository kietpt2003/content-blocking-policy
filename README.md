# Home Content Blocker — Privacy policy

Trang chính sách quyền riêng tư tĩnh cho Home Content Blocker, hỗ trợ Tiếng Việt, English và 简体中文. Không cần cài thư viện hoặc build.

## GitHub Pages

Sau khi đẩy mã nguồn lên GitHub:

1. Mở **Settings → Pages** trong repository.
2. Chọn **Deploy from a branch**, chọn nhánh chứa các file này và thư mục **/ (root)**, sau đó **Save**.
3. Chờ GitHub Pages triển khai. Với tên repository hiện tại, địa chỉ dự kiến là:

   `https://kietpt2003.github.io/content-blocking-policy/`

Các liên kết theo ngôn ngữ:

- Tiếng Việt: `https://kietpt2003.github.io/content-blocking-policy/?lang=vi`
- English: `https://kietpt2003.github.io/content-blocking-policy/?lang=en`
- 简体中文: `https://kietpt2003.github.io/content-blocking-policy/?lang=zh-CN`

Trang ưu tiên ngôn ngữ trong liên kết, sau đó ngôn ngữ trình duyệt và cuối cùng Tiếng Việt. Các liên kết mục lục chứa mã ngôn ngữ để có thể chia sẻ trực tiếp. Khi tắt JavaScript, toàn bộ ba bản chính sách vẫn đọc được trên cùng trang. Không tải font, script hay tài nguyên từ bên thứ ba; không dùng cookie, bộ nhớ trình duyệt hay analytics.

## Nguồn nội dung và icon

- Bản tiếng Anh giữ nguyên nội dung `../content-blocking-extension/docs/privacy-policy.md`, ngày cập nhật **7 November 2026**. Bản tiếng Việt và tiếng Trung giản thể dịch từ bản này.
- Icon PNG sao chép từ `../content-blocking-extension/dist/extension/icons/128.png` và `32.png`, đúng tài nguyên trong manifest extension.
- Màu sắc lấy từ `../content-blocking-extension/src/ui/ui.css`.

Khi chính sách gốc thay đổi, cập nhật đồng thời cả ba bản trong `index.html`. Ngày cập nhật là ngày sửa nội dung chính sách, không phải ngày thay đổi giao diện.

## Xem trên máy

Chạy `python3 -m http.server 8080` tại thư mục này, rồi mở `http://localhost:8080`. Cũng có thể mở trực tiếp `index.html` để đọc nội dung và đổi ngôn ngữ.
