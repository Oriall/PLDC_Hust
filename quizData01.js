// Database câu hỏi trắc nghiệm cuối kỳ Pháp luật đại cương 01
// Nguồn: CLB HTHT - Quizizz
// Tổng số câu: 35 | Thời gian: 18 phút

const quizData = [
  {
    id: 1,
    question: "Pháp luật có tính quy phạm phổ biến có nghĩa là",
    options: [
      { key: "a", text: "Các quy phạm pháp luật được áp dụng một lần duy nhất" },
      { key: "b", text: "Quy phạm pháp luật được áp dụng nhiều lần" },
      { key: "c", text: "Quy phạm pháp luật được khái quát hóa từ nhiều trường hợp mang tính phổ biến trong xã hội" },
      { key: "d", text: "Cả B và C" },
    ],
    answer: "d",
  },
  {
    id: 2,
    question: "Khi nghiên cứu về bản chất của pháp luật thì khẳng định nào sau đây là SAI?",
    options: [
      { key: "a", text: "Pháp luật là ý chí của giai cấp thống trị được đề lên thành luật" },
      { key: "b", text: "Pháp luật bao giờ cũng thể hiện bản chất giai cấp rõ nét hơn bản chất xã hội" },
      { key: "c", text: "Pháp luật là hiện tượng vừa mang tính giai cấp vừa mang tính xã hội" },
      { key: "d", text: "Pháp luật vừa mang tính chủ quan lại vừa mang tính khách quan" },
    ],
    answer: "b",
  },
  {
    id: 3,
    question: "Chọn phương án đúng nhất để điền vào chỗ trống: Xuất phát từ ... cho nên bất cứ nhà nước nào cũng dùng pháp luật làm phương tiện chủ yếu để quản lý mọi mặt đời sống xã hội",
    options: [
      { key: "a", text: "Tính cưỡng chế của pháp luật" },
      { key: "b", text: "Tính quy phạm phổ biến của pháp luật" },
      { key: "c", text: "Tính xác định chặt chẽ về mặt hình thức của pháp luật" },
      { key: "d", text: "Những thuộc tính cơ bản của pháp luật" },
    ],
    answer: "d",
  },
  {
    id: 4,
    question: "Đáp án nào sau đây thể hiện thuộc tính của pháp luật?",
    options: [
      { key: "a", text: "Tính chính xác" },
      { key: "b", text: "Tính quy phạm phổ biến và bắt buộc chung" },
      { key: "c", text: "Tính minh bạch" },
      { key: "d", text: "Tất cả đều đúng" },
    ],
    answer: "b",
  },
  {
    id: 5,
    question: "Nội dung của pháp luật phải quy định rõ ràng chặt chẽ trong các văn bản pháp luật là biểu hiện của thuộc tính nào của pháp luật?",
    options: [
      { key: "a", text: "Tính xác định chặt chẽ về mặt hình thức của pháp luật" },
      { key: "b", text: "Tính quy phạm phổ biến" },
      { key: "c", text: "Tính bắt buộc" },
      { key: "d", text: "Cả A, B, C" },
    ],
    answer: "a",
  },
  {
    id: 6,
    question: "Pháp luật chủ nô quy định",
    options: [
      { key: "a", text: "Quyền lực của mọi người trong xã hội là như nhau" },
      { key: "b", text: "Công khai quyền lực vô hạn của chủ nô" },
      { key: "c", text: "Tình trạng vô quyền của giai cấp nô lệ" },
      { key: "d", text: "Cả B và C" },
    ],
    answer: "d",
  },
  {
    id: 7,
    question: "Điều nào sau đây KHÔNG đúng về pháp luật chủ nô?",
    options: [
      { key: "a", text: "Công khai bảo vệ quyền tư hữu của chủ nô" },
      { key: "b", text: "Củng cố tình trạng bất bình đẳng trong xã hội" },
      { key: "c", text: "Là kiểu pháp luật đầu tiên trong lịch sử" },
      { key: "d", text: "Mang nặng dấu ấn tôn giáo" },
    ],
    answer: "d",
  },
  {
    id: 8,
    question: "Đặc điểm của pháp luật phong kiến là gì?",
    options: [
      { key: "a", text: "Bảo vệ chế độ tư hữu của giai cấp thống trị" },
      { key: "b", text: "Quy định những hình phạt rất tàn bạo" },
      { key: "c", text: "Mang nặng dấu ấn tôn giáo" },
      { key: "d", text: "Cả ba đáp án trên" },
    ],
    answer: "d",
  },
  {
    id: 9,
    question: "Kiểu pháp luật phong kiến thể hiện ý chí của",
    options: [
      { key: "a", text: "Giai cấp địa chủ" },
      { key: "b", text: "Giai cấp thống trị" },
      { key: "c", text: "Giai cấp phong kiến" },
      { key: "d", text: "Cả ba câu trên đều đúng" },
    ],
    answer: "d",
  },
  {
    id: 10,
    question: "Hình thức phổ biến nhất của pháp luật chủ nô là",
    options: [
      { key: "a", text: "Văn bản pháp luật" },
      { key: "b", text: "Tiền lệ pháp" },
      { key: "c", text: "Tập quán pháp" },
      { key: "d", text: "Tín điều tôn giáo" },
    ],
    answer: "c",
  },
  {
    id: 11,
    question: "Pháp luật chủ nô cho phép chủ nô có quyền chiếm hữu đối với",
    options: [
      { key: "a", text: "Tài sản" },
      { key: "b", text: "Tư liệu sản xuất" },
      { key: "c", text: "Nô lệ" },
      { key: "d", text: "Cả ba đáp án trên" },
    ],
    answer: "d",
  },
  {
    id: 12,
    question: "Kiểu pháp luật nào chịu ảnh hưởng mạnh mẽ của tôn giáo?",
    options: [
      { key: "a", text: "Pháp luật phong kiến" },
      { key: "b", text: "Pháp luật chủ nô" },
      { key: "c", text: "Pháp luật tư sản" },
      { key: "d", text: "Pháp luật xã hội chủ nghĩa" },
    ],
    answer: "a",
  },
  {
    id: 13,
    question: "Nguồn luật chủ yếu của hệ thống Common Law là gì?",
    options: [
      { key: "a", text: "Văn bản pháp luật" },
      { key: "b", text: "Án lệ" },
      { key: "c", text: "Tập quán pháp" },
      { key: "d", text: "Lẽ phải" },
    ],
    answer: "b",
  },
  {
    id: 14,
    question: "Hình thức tranh tụng được dùng chủ yếu trong hệ thống Common Law là hình thức nào?",
    options: [
      { key: "a", text: "Tranh tụng tại tòa" },
      { key: "b", text: "Tranh tụng hình sự" },
      { key: "c", text: "Tranh tụng hành chính" },
      { key: "d", text: "Tranh tụng dân sự" },
    ],
    answer: "a",
  },
  {
    id: 15,
    question: "Đối tượng điều chỉnh của pháp luật dân sự là",
    options: [
      { key: "a", text: "Tội phạm và hình phạt" },
      { key: "b", text: "Chế độ kinh tế, chính trị, xã hội" },
      { key: "c", text: "Bộ máy nhà nước" },
      { key: "d", text: "Quan hệ tài sản và quan hệ nhân thân" },
    ],
    answer: "d",
  },
  {
    id: 16,
    question: "Phương pháp điều chỉnh của ngành luật dân sự là gì?",
    options: [
      { key: "a", text: "Bình đẳng, thỏa thuận" },
      { key: "b", text: "Quyền uy phục tùng" },
      { key: "c", text: "Quyền uy thỏa thuận" },
      { key: "d", text: "Quyền uy bình đẳng" },
    ],
    answer: "a",
  },
  {
    id: 17,
    question: "Tài sản bao gồm những gì?",
    options: [
      { key: "a", text: "Vật, tiền" },
      { key: "b", text: "Tiền, giấy tờ có giá" },
      { key: "c", text: "Vật, tiền, giấy tờ có giá, quyền tài sản" },
      { key: "d", text: "Vật, tiền, giấy tờ có giá, quyền sở hữu" },
    ],
    answer: "c",
  },
  {
    id: 18,
    question: "Quyền sở hữu bao gồm mấy loại quyền?",
    options: [
      { key: "a", text: "3 (chiếm hữu, sử dụng, định đoạt)" },
      { key: "b", text: "1 (chiếm hữu)" },
      { key: "c", text: "2 (chiếm hữu, sử dụng)" },
      { key: "d", text: "2 (chiếm hữu, định đoạt)" },
    ],
    answer: "a",
  },
  {
    id: 19,
    question: "Trong thời gian thế chấp tài sản, chủ sở hữu có quyền như thế nào?",
    options: [
      { key: "a", text: "Có quyền sử dụng nhưng không có quyền định đoạt" },
      { key: "b", text: "Không có quyền chiếm hữu và có quyền sử dụng nhưng vẫn có quyền định đoạt" },
      { key: "c", text: "Có quyền chiếm hữu nhưng không có quyền định đoạt" },
      { key: "d", text: "Có quyền chiếm hữu và quyền sử dụng nhưng bị hạn chế quyền định đoạt" },
    ],
    answer: "d",
  },
  {
    id: 20,
    question: "Di sản thừa kế là",
    options: [
      { key: "a", text: "Di sản bao gồm tài sản riêng của người chết, phần tài sản của người chết trong tài sản chung với người khác" },
      { key: "b", text: "Toàn bộ tài sản của người chết" },
      { key: "c", text: "Chỉ có tài sản riêng của người chết" },
      { key: "d", text: "1/2 tài sản chung của vợ chồng khi người đó chết" },
    ],
    answer: "a",
  },
  {
    id: 21,
    question: "Chia tài sản thừa kế theo pháp luật là chia",
    options: [
      { key: "a", text: "Theo di chúc mà người chết để lại" },
      { key: "b", text: "Theo diện thừa kế" },
      { key: "c", text: "Theo hàng thừa kế" },
      { key: "d", text: "Cả B và C" },
    ],
    answer: "d",
  },
  {
    id: 22,
    question: "Di chúc được coi là hợp pháp khi thỏa mãn những điều kiện luật định về:",
    options: [
      { key: "a", text: "Người lập di chúc" },
      { key: "b", text: "Nội dung di chúc" },
      { key: "c", text: "Hình thức di chúc" },
      { key: "d", text: "Cả ba đáp án trên" },
    ],
    answer: "d",
  },
  {
    id: 23,
    question: "Nguyên tắc chia thừa kế theo pháp luật",
    options: [
      { key: "a", text: "Những người thừa kế cùng hàng được chia phần di sản bằng nhau" },
      { key: "b", text: "Tất cả các hàng thừa kế đều được chia tài sản nhưng với các phần không bằng nhau theo quyết định của tòa án" },
      { key: "c", text: "Hàng thừa kế sau chỉ được nhận di sản thừa kế khi không còn ai ở hàng thừa kế trước" },
      { key: "d", text: "Đáp án A và C" },
    ],
    answer: "d",
  },
  {
    id: 24,
    question: "Hợp đồng là ... giữa các bên về việc xác lập thay đổi hoặc chấm dứt các quyền và nghĩa vụ dân sự",
    options: [
      { key: "a", text: "Sự thỏa thuận" },
      { key: "b", text: "Sự hợp tác" },
      { key: "c", text: "Sự liên kết" },
      { key: "d", text: "Cả 3 đáp án đều sai" },
    ],
    answer: "a",
  },
  {
    id: 25,
    question: "Pháp luật đại cương nằm trong hệ thống của",
    options: [
      { key: "a", text: "Ngành luật khoa học pháp lý cơ bản" },
      { key: "b", text: "Ngành luật khoa học pháp lý chuyên ngành liên quan" },
      { key: "c", text: "Ngành luật khoa học pháp lý quốc tế" },
      { key: "d", text: "Ngành luật khoa học pháp lý ứng dụng kỹ thuật" },
    ],
    answer: "a",
  },
  {
    id: 26,
    question: "Đặc điểm nào sau đây là dấu hiệu đặc trưng của nhà nước?",
    options: [
      { key: "a", text: "Nhà nước ra đời khi có sự xuất hiện chế độ tư hữu và sự phân hóa xã hội thành giai cấp" },
      { key: "b", text: "Nhà nước chỉ tồn tại trong xã hội có giai cấp" },
      { key: "c", text: "Nhà nước luôn mang bản chất giai cấp và bản chất xã hội" },
      { key: "d", text: "Nhà nước ban hành pháp luật và đảm bảo thực hiện pháp luật" },
    ],
    answer: "d",
  },
  {
    id: 27,
    question: "Đặc điểm nào sau đây KHÔNG phải là dấu hiệu đặc trưng của nhà nước?",
    options: [
      { key: "a", text: "Nhà nước thiết lập một quyền lực công cộng đặc biệt nhằm đảm bảo thực hiện bằng bộ máy cưỡng chế đặc thù" },
      { key: "b", text: "Nhà nước có chủ quyền quốc gia" },
      { key: "c", text: "Nhà nước chia dân cư căn cứ vào nghề nghiệp và địa vị xã hội của họ" },
      { key: "d", text: "Nhà nước ban hành các loại thuế và tổ chức việc thu thuế dưới hình thức bắt buộc" },
    ],
    answer: "c",
  },
  {
    id: 28,
    question: "Tổ chức nào sau đây đóng vai trò là trung tâm của hệ thống chính trị?",
    options: [
      { key: "a", text: "Nhà nước" },
      { key: "b", text: "Đảng Cộng sản Việt Nam" },
      { key: "c", text: "Toà án nhân dân tối cao" },
      { key: "d", text: "Cả 3 đáp án trên" },
    ],
    answer: "a",
  },
  {
    id: 29,
    question: "Nhà nước phân chia và quản lý dân cư theo các đơn vị hành chính lãnh thổ là",
    options: [
      { key: "a", text: "Phân chia lãnh thổ thành những đơn vị hành chính nhỏ hơn" },
      { key: "b", text: "Phân chia cư dân và lãnh thổ thành các đơn vị khác nhau" },
      { key: "c", text: "Phân chia cư dân thành nhiều nhóm khác nhau" },
      { key: "d", text: "Chia bộ máy thành nhiều đơn vị cấp nhỏ hơn" },
    ],
    answer: "b",
  },
  {
    id: 30,
    question: "Nhà nước phân chia dân cư và lãnh thổ nhằm",
    options: [
      { key: "a", text: "Thực hiện quyền lực" },
      { key: "b", text: "Thực hiện chức năng" },
      { key: "c", text: "Quản lý xã hội" },
      { key: "d", text: "Trấn áp giai cấp" },
    ],
    answer: "c",
  },
  {
    id: 31,
    question: "Phân chia cư dân theo các đơn vị hành chính lãnh thổ dựa trên",
    options: [
      { key: "a", text: "Hình thức của việc thực hiện chức năng của nhà nước" },
      { key: "b", text: "Những đặc thù của từng đơn vị hành chính lãnh thổ" },
      { key: "c", text: "Đặc thù của tổ chức bộ máy nhà nước" },
      { key: "d", text: "Phương thức thực hiện chức năng của nhà nước" },
    ],
    answer: "b",
  },
  {
    id: 32,
    question: "Chủ quyền quốc gia là",
    options: [
      { key: "a", text: "Quyền độc lập tự quyết của quốc gia trong lĩnh vực đối nội" },
      { key: "b", text: "Quyền độc lập tự quyết của quốc gia trong lĩnh vực đối ngoại" },
      { key: "c", text: "Quyền ban hành pháp luật của nhà nước" },
      { key: "d", text: "Tất cả các phương án nêu trên đều đúng" },
    ],
    answer: "d",
  },
  {
    id: 33,
    question: "Các nhà nước phải tôn trọng và không can thiệp lẫn nhau là dấu hiệu của đặc trưng nào của nhà nước?",
    options: [
      { key: "a", text: "Vì nhà nước có quyền lực công cộng đặc biệt" },
      { key: "b", text: "Nhà nước có chủ quyền" },
      { key: "c", text: "Mỗi nhà nước có hệ thống pháp luật riêng" },
      { key: "d", text: "Nhà nước quản lý dân cư của mình theo đơn vị hành chính lãnh thổ" },
    ],
    answer: "b",
  },
  {
    id: 34,
    question: "Nhà nước thiết lập quyền lực công cộng đặc biệt tách rời ra khỏi xã hội và áp đặt lên toàn bộ xã hội thể hiện",
    options: [
      { key: "a", text: "Quyền lực nhà nước mang tính chất công cộng" },
      { key: "b", text: "Thiết lập bộ máy nhà nước chuyên biệt" },
      { key: "c", text: "Quyền lực nhà nước đã tách khỏi quyền lực xã hội" },
      { key: "d", text: "Cả ba phương án trên đều đúng" },
    ],
    answer: "d",
  },
  {
    id: 35,
    question: "Quyền lực công cộng đặc biệt của nhà nước được hiểu là",
    options: [
      { key: "a", text: "Khả năng sử dụng sức mạnh vũ lực" },
      { key: "b", text: "Khả năng sử dụng biện pháp thuyết phục giáo dục" },
      { key: "c", text: "Có thể sử dụng quyền lực kinh tế chính trị hoặc tư tưởng" },
      { key: "d", text: "Việc sử dụng sức mạnh cưỡng chế để quản lý xã hội" },
    ],
    answer: "d",
  },
];

// Metadata
export const quizMeta01 = {
  title: "Trắc nghiệm cuối kỳ Pháp luật đại cương 01",
  source: "CLB HTHT",
  totalQuestions: 35,
  timeLimit: 18, // phút
  idRange: [1, 35],
};

export default quizData;

// ── Hướng dẫn sử dụng ──────────────────────────────────────────────────────
// Mỗi câu có cấu trúc:
//   id       – số thứ tự câu
//   question – nội dung câu hỏi (string)
//   options  – mảng { key: "a"|"b"|"c"|"d", text: string }
//   answer   – key đáp án đúng ("a" | "b" | "c" | "d")
//
// Ví dụ truy cập:
//   import quizData from './quizData.js';
//   const q = quizData[0];          // câu 1
//   console.log(q.answer);          // "d"
//   const correct = q.options.find(o => o.key === q.answer);
// ──────────────────────────────────────────────────────────────────────────