                                    NHẬT KÝ ĐỒNG HÀNH CÙNG AI (PROMPT LOG)
Học phần: Thiết kế Web – Trường Đại học Lạc Hồng (LHU)
Tên nhóm: Trần Minh Bảo 
Lớp: 26CT401
Tên dự án: Sàn trao đổi đồ cũ
1. Thông tin công cụ AI sử dụng
● Công cụ chính: Github Copilot, Antigravity 
● Công cụ hỗ trợ code (Extension): GitHub Copilot
● Công cụ tạo hình ảnh/nội dung: 
2. Nhật ký quá trình thực hiện (Các Prompt quan trọng)
- Lần 1: Khởi tạo: Tạo khung html cho trang danh mục sản phẩm
    + Nội dung Prompt:
        Bạn là chuyên gia thiết kế web, thiết kế ui/ux. Hãy thiết kế một trang danh mục sản phẩm (chỉ sử dụng html và css) dùng bố cục css grid (Product Grid) chuyên nghiệp. Sử dụng nhãn (Badges) để phân loại tình trạng đồ cũ (Likenew, Good, Fair).
    + Kết quả & Tùy chỉnh: AI làm đúng 90%, em phải sửa lại link ảnh và thêm logo vào.
- Lần 2: Giao diện
    + Nội dung prompt: 
        Hãy thiết kế một thanh menu. Trên màn hình lớn, menu hiển thị đầy đủ các liên kết (Trang chủ, Danh mục sản phẩm, Đăng tin). Trên màn hình dưới 768px, ẩn toàn bộ menu và chỉ hiển thị biểu tượng Hamburger.
    + Kết quả: AI đã làm tốt theo yêu cầu.
- Lần 3: Tính năng
    + Nội dung prompt:
        Hãy làm giao diện lọc và tìm kiếm đồ cũ theo nhiều tiêu chí.
    + Kết quả: AI đã làm một giao diện lọc và tìm kiếm theo yêu cầu nhưng chưa sử dụng được.
    + Tùy chỉnh: Em đã yêu cầu AI hãy dùng javascript để xử lí phần tìm kiếm cũng như áp dụng được bộ lọc sản phẩm theo danh mục, tình trạng, giá.
- Lần 4: Tạo form đăng tin
    + Nội dung prompt:
        Hãy làm một form cho phần đăng tin khi người dùng click vào sẽ dẫn tới một Form cho phép người dùng nhập mô tả, tải ảnh (giả lập) và chọn loại hình trao đổi (Tặng/Bán/Đổi). Tạo file dangtin.html trong thư mục html và dangtin.css trong thư mục css.
    + Kết quả: AI làm tốt. Nhưng chưa nội dung chưa đúng ý của em.
    + Tùy chỉnh: Hãy thiết kế lại trang đăng tin theo yêu cầu sau:
        - giữ nguyên cấu trúc trang, giữ nguyên vị trí ô tiêu đề tin, ô mô tả chi tiết sẽ nằm dưới ô "danh mục sản phẩm" và ô hình ảnh sản phẩm nằm dưới ô"mô tả chi tiết".
        - thay đổi mục "loại hình trao đổi" thành một ô "danh mục sản phẩm" cho phép người dùng chọn các danh mục sản phẩm
        - ở dưới ô"danh mục sản phẩm" là ô "giá bán" cho phép người dùng nhập giá bán, ràng buộc tối thiểu là 10.000đ.
        - ở dưới ô "danh mục sản phẩm" là ô "tình trạng sản phẩm" gồm có 3 ô "like new, good và fair"
        - ở dưới ô" tình trạng sản phẩm" sẽ là thông tin vận chuyển: bao gồm địa chỉ lấy hàng (cho người dùng thêm mới địa chỉ) và phí vận chuyển (có 2 lựa chọn người mua trả và người bán trả).
- Lần 5: Giao diện dark/light
    + Nội dung prompt: 
        Yêu cầu:Khai báo 2 bộ biến màu (ví dụ: --bg-color và --text-color). Tạo một class .dark-theme để ghi đè các giá trị biến này. Tiêu chí: Giao diện chuyển đổi màu sắc mượt mà.
    + Kết quả: AI làm tốt theo yêu cầu
- Lần 6: Tạo trang chi tiết sản phẩm
    + Nội dung prompt:
        Hãy tạo trang ctsp.html trong thư mục html ctsp.css trong thư mục css. Yêu cầu:
        - Sử dụng chung hệ thống màu sắc (tông xanh ngọc, xám pastel), font chữ, phong cách bo góc và đổ bóng
        - Giữ nguyên toàn bộ nội dung, cấu trúc bộ lọc và lưới sản phẩm bằng CSS Grid của tôi
    + Kết quả: AI làm tốt theo yêu cầu. 
- Lần 7: Thêm sản phẩm
    + Nội dung prompt
    Ở trang sanpham.html, với mỗi một danh mục: thời trang, đồ gia dụng, điện tử, sách&giải trí, thể thao. Hãy tạo nội dung cho 5 sản phẩm đối với mỗi danh mục. Yêu cầu: có đầy đủ ảnh cho product-image. Đồng thời trang ctsp.html cũng có đầy đủ nội dung và hình ảnh cho main-image và thumnail-list của sản phẩm đó.
    + Kết quả: AI làm tốt nhưng bị lỗi gạch chân ở nút "Xem chi tiết"
    + Tùy chỉnh: Hãy kiểm tra kỹ lại xem hình ảnh của tất cả sản phẩm có bị lỗi ảnh không và hãy loại bỏ gạch chân ở dưới chữ "Xem chi tiết".
- Lần 8: Thiết kế nút tin nhắn
    + Nội dung prompt:
    Hãy thiết kế một nút tin nhắn có hiệu ứng phập phùng gây chú ý ở chỗ khoảng trống còn lại trên info người bán trong trang ctsp.html
    + Kết quả: AI làm tốt theo yêu cầu.
 