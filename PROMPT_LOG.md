NHẬT KÝ ĐỒNG HÀNH CÙNG AI (PROMPT LOG)
Học phần: Thiết kế Web – Trường Đại học Lạc Hồng (LHU)
Tên nhóm: Nguyễn Duy Anh Thiện Lớp: 26T401
Tên dự án: San trao doi do cu

## Lịch sử prompt và kết quả

### 1. Dựng trang chủ bằng Semantic HTML

- **Thời gian:** 2026-10-07 18:56
- **Prompt:** “bạn là một chuyên gia trong thiết kế web hãy sử dụng Semantic HTML để thiết kế một trang chủ cho Sàn trao đổi đồ cũ”
- **AI thực hiện:** Tạo trang chủ tiếng Việt với các vùng `header`, `nav`, `main`, `section`, `article` và `footer`. Bổ sung hero, thanh tìm kiếm, danh mục, sản phẩm gợi ý, hướng dẫn trao đổi và khu vực đăng tin; khởi tạo CSS responsive và tương tác tìm kiếm/lọc/lưu.
- **Kết quả:** Ban đầu có `index.html`, `styles.css`, `script.js

### 2. Tập trung vào trang chủ và responsive

- **Thời gian:** 2026-10-07 19:08
- **Prompt:** “chỉ cần làm trang chủ thôi ko cần các trang chứa sản phẩm sau đó sử dụng Flex/Grid, Responsive để thiết kế giao diện sao cho tối ưu dễ dụng và đẹp”
- **AI thực hiện:** Giữ trải nghiệm trong một trang chủ; loại bỏ liên kết giả dẫn sang trang chi tiết sản phẩm; dùng Flexbox/Grid và breakpoint cho desktop, tablet, mobile.

### 3 . Chia Main và Sidebar bằng CSS Grid

- **Thời gian:** 2026-10-07 19:12
- **Prompt:** “Sử dụng CSS Grid để chia bố cục tổng thể (Main và Sidebar)”
- **AI thực hiện:** Chuyển danh mục thành `aside` và nội dung chính thành `main`; Grid tạo hai cột trên desktop, xếp sidebar phía trên nội dung trên màn hình hẹp.

### 4. Thêm chế độ sáng/tối và màu chủ đạo

- **Thời gian:** 2026-10-07 19:18
- **Prompt:** “tôi muốn thêm màu cho trang web / chia ra 2 chế độ sáng và tối / tôi muốn sử dụng tone màu #52CCB0 cho cả 2 chế độ”
- **AI thực hiện:** Thêm bảng màu sáng/tối, nút chuyển chế độ, lưu lựa chọn trong `localStorage`, và dùng cài đặt giao diện của hệ thống khi chưa có lựa chọn đã lưu.

### 5. Tinh chỉnh màu sắc trang chủ

- **Thời gian:** 2026-10-07 19:21
- **Prompt:** “sử dụng CSS thêm màu sao cho giống một giao diện trang chủ”
- **AI thực hiện:** Thêm nền mint dịu, hero chuyển sắc, thẻ sản phẩm có nền/viền và hiệu ứng hover; giữ bảng màu tương ứng trong chế độ tối.

### 6. Xử lý sự cố mất định dạng CSS

- **Thời gian:** 2026-10-07 19:26
- **Prompt:** “Trang web hiện tại đang bị mất định dạng CSS, hiển thị thành chữ thô mặc định. Hãy kiểm tra lại xem bạn đã liên kết file CSS vào thẻ `<head>` của HTML đúng chưa (hoặc đưa CSS vào thẻ `<style>`), và viết lại toàn bộ code hoàn chỉnh để giao diện có đầy đủ màu sắc và bố cục.”
- **AI thực hiện:** Kiểm tra thẻ `<head>` và phát hiện một `<style>` lỗi chỉ có nội dung `#52CCB0`; xóa phần sai, liên kết lại CSS bằng đường dẫn tương đối `./styles.css`.

### 7. Đổi tên thương hiệu và favicon

- **Thời gian:** 2026-10-07 19:59
- **Prompt:** “đổi lại tên thành Semper / và sử dụng ảnh trong fileAttached folder: anh (D:\code\anh) để thay đổi Favicon của trang web”
- **AI thực hiện:** Đổi tiêu đề, thương hiệu hiển thị và nội dung footer sang Semper; lấy ảnh trong thư mục `D:\code\anh`, thu nhỏ và nhúng favicon vào HTML.

### 8. Thay favicon bằng ảnh đính kèm

- **Thời gian:** 2026-10-07 20:06
- **Prompt:** “đổi favicon thành ảnh này”
- **AI thực hiện:** Thay favicon bằng ảnh chữ “S” được đính kèm trong yêu cầu, chuyển thành PNG 48×48 và nhúng trực tiếp trong HTML.

### 9. Dùng biến CSS và class `.dark-theme`

- **Thời gian:** 2026-10-09 18:46
- **Prompt:** “Yêu cầu: Khai báo 2 bộ biến màu (ví dụ: --bg-color và --text-color). Tạo một class .dark- theme để ghi đè các giá trị biến này. Tiêu chí: Giao diện chuyển đổi màu sắc mượt mà.”
- **AI thực hiện:** Khai báo biến màu sáng ở `:root`, biến ghi đè trong `.dark-theme`, cập nhật JavaScript để bật/tắt class và thêm transition cho màu chữ, nền, viền, bóng.

