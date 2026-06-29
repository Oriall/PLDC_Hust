// Database câu hỏi trắc nghiệm cuối kỳ Pháp luật đại cương 02
// Nguồn: CLB HTHT - Quizizz
// Tổng số câu: 35 | Thời gian: 18 phút
// id bắt đầu từ 36 (tiếp nối đề 01)

const quizData02 = [
  {
    id: 36,
    question: "Pháp luật đại cương nghiên cứu những vấn đề cơ bản về cái gì?",
    options: [
      { key: "a", text: "Nhà nước" },
      { key: "b", text: "Pháp luật" },
      { key: "c", text: "Nhà nước và pháp luật" },
      { key: "d", text: "Kinh tế chính trị pháp luật" },
    ],
    answer: "c",
  },
  {
    id: 37,
    question: "Nội dung của môn học pháp luật đại cương?",
    options: [
      { key: "a", text: "Những vấn đề cơ bản về nhà nước và pháp luật" },
      { key: "b", text: "Các hệ thống pháp luật trên thế giới" },
      { key: "c", text: "Các ngành luật chính trong hệ thống pháp luật Việt Nam" },
      { key: "d", text: "Cả ba đáp án trên" },
    ],
    answer: "d",
  },
  {
    id: 38,
    question: "Pháp luật đại cương là ngành khoa học thuộc:",
    options: [
      { key: "a", text: "Khoa học xã hội" },
      { key: "b", text: "Khoa học kỹ thuật" },
      { key: "c", text: "Khoa học chính trị" },
      { key: "d", text: "Khoa học pháp lý" },
    ],
    answer: "d",
  },
  {
    id: 39,
    question: "Mối quan hệ giữa nhà nước và pháp luật là?",
    options: [
      { key: "a", text: "Quan hệ một chiều" },
      { key: "b", text: "Quan hệ phụ thuộc" },
      { key: "c", text: "Quan hệ qua lại ràng buộc tác động lẫn nhau" },
      { key: "d", text: "Không có quan hệ gì" },
    ],
    answer: "c",
  },
  {
    id: 40,
    question: "Bản chất của nhà nước bao gồm:",
    options: [
      { key: "a", text: "Bản chất giai cấp" },
      { key: "b", text: "Bản chất xã hội" },
      { key: "c", text: "Bản chất giai cấp và bản chất xã hội" },
      { key: "d", text: "Bản chất giai cấp, bản chất xã hội và bản chất kinh tế" },
    ],
    answer: "c",
  },
  {
    id: 41,
    question: "Nhà nước mang bản chất giai cấp có nghĩa là:",
    options: [
      { key: "a", text: "Nhà nước thuộc về một giai cấp hoặc một liên minh giai cấp nhất định trong xã hội" },
      { key: "b", text: "Nhà nước chỉ thuộc về một cơ quan quyền lực tối cao trong xã hội" },
      { key: "c", text: "Nhà nước chỉ thuộc về giai cấp bị trị" },
      { key: "d", text: "Không có đáp án đúng" },
    ],
    answer: "a",
  },
  {
    id: 42,
    question: "Một trong những bản chất của nhà nước là:",
    options: [
      { key: "a", text: "Nhà nước có chủ quyền duy nhất" },
      { key: "b", text: "Tính xã hội" },
      { key: "c", text: "Nhà nước đặt ra thuế và thu thuế dưới hình thức bắt buộc" },
      { key: "d", text: "Tất cả đáp án đều đúng" },
    ],
    answer: "b",
  },
  {
    id: 43,
    question: "Thông qua nhà nước, giai cấp thống trị nắm giữ trong tay những loại quyền lực nào?",
    options: [
      { key: "a", text: "Quyền lực kinh tế, quyền lực chính trị" },
      { key: "b", text: "Quyền lực kinh tế, quyền lực chính trị, quyền lực tư tưởng" },
      { key: "c", text: "Quyền lực tinh thần" },
      { key: "d", text: "Cả A và C" },
    ],
    answer: "b",
  },
  {
    id: 44,
    question: "Quyền lực nào tạo ra sự lệ thuộc tư bản giữa giai cấp bị trị với giai cấp thống trị?",
    options: [
      { key: "a", text: "Quyền lực kinh tế" },
      { key: "b", text: "Quyền lực chính trị" },
      { key: "c", text: "Quyền lực tư tưởng" },
      { key: "d", text: "Cả ba đáp án đều đúng" },
    ],
    answer: "a",
  },
  {
    id: 45,
    question: "Quyền lực tư tưởng nghĩa là gì?",
    options: [
      { key: "a", text: "Giai cấp thống trị thông qua nhà nước để xây dựng hệ tư tưởng của mình trở thành hệ tư tưởng thống trị trong xã hội" },
      { key: "b", text: "Giai cấp bị thống trị thông qua nhà nước để xây dựng hệ tư tưởng của mình trở thành hệ tư tưởng thống trị trong xã hội" },
      { key: "c", text: "Giai cấp thống trị thông qua pháp luật để xây dựng hệ tư tưởng của mình trở thành hệ tư tưởng thống trị trong xã hội" },
      { key: "d", text: "Giai cấp thống trị thông qua nhà nước và pháp luật để xây dựng hệ tư tưởng của mình trở thành hệ tư tưởng thống trị trong xã hội" },
    ],
    answer: "a",
  },
  {
    id: 46,
    question: "Tính giai cấp của nhà nước thể hiện:",
    options: [
      { key: "a", text: "Nhà nước là bộ máy trấn áp giai cấp" },
      { key: "b", text: "Nhà nước là bộ máy thống trị của giai cấp này đối với giai cấp khác" },
      { key: "c", text: "Nhà nước là sản phẩm của xã hội có giai cấp" },
      { key: "d", text: "Cả ba đáp án trên" },
    ],
    answer: "d",
  },
  {
    id: 47,
    question: "Nhà nước là sản phẩm và biểu hiện của những mâu thuẫn ... không thể điều hòa được?",
    options: [
      { key: "a", text: "Dân tộc" },
      { key: "b", text: "Giai cấp" },
      { key: "c", text: "Xã hội" },
      { key: "d", text: "Dân tộc và giai cấp" },
    ],
    answer: "b",
  },
  {
    id: 48,
    question: "Nhà nước là bộ máy duy trì sự thống trị của giai cấp này đối với giai cấp khác thể hiện bản chất gì của nhà nước?",
    options: [
      { key: "a", text: "Tính quyền lực" },
      { key: "b", text: "Tính đàn áp" },
      { key: "c", text: "Tính giai cấp" },
      { key: "d", text: "Tính xã hội" },
    ],
    answer: "c",
  },
  {
    id: 49,
    question: "Nội dung nào KHÔNG là cơ sở cho tính giai cấp của nhà nước?",
    options: [
      { key: "a", text: "Giai cấp là nguyên nhân ra đời của nhà nước" },
      { key: "b", text: "Nhà nước là bộ máy trấn áp giai cấp" },
      { key: "c", text: "Nhà nước có quyền lực công cộng đặc biệt và tách rời ra khỏi xã hội" },
      { key: "d", text: "Nhà nước là tổ chức điều hòa những mâu thuẫn giai cấp" },
    ],
    answer: "d",
  },
  {
    id: 50,
    question: "Nhà nước có bản chất xã hội vì:",
    options: [
      { key: "a", text: "Nhà nước xuất hiện bởi nhu cầu quản lý xã hội" },
      { key: "b", text: "Nhà nước xuất hiện bởi nhu cầu trấn áp giai cấp để giữ trật tự xã hội" },
      { key: "c", text: "Nhà nước xuất hiện bởi nhu cầu bảo vệ lợi ích chung của xã hội khi nó trùng với lợi ích của giai cấp thống trị" },
      { key: "d", text: "Do nhu cầu thay đổi kiểu nhà nước" },
    ],
    answer: "a",
  },
  {
    id: 51,
    question: "Mối quan hệ giữa tính giai cấp và tính xã hội trong bản chất của nhà nước là",
    options: [
      { key: "a", text: "Mâu thuẫn giữa tính giai cấp và tính xã hội" },
      { key: "b", text: "Thống nhất giữa tính giai cấp và tính xã hội" },
      { key: "c", text: "Là hai mặt trong một thể thống nhất" },
      { key: "d", text: "Tính giai cấp luôn là mặt chủ yếu quyết định tính xã hội" },
    ],
    answer: "c",
  },
  {
    id: 52,
    question: "Bản chất xã hội của nhà nước thể hiện qua việc:",
    options: [
      { key: "a", text: "Bảo vệ lợi ích của giai cấp" },
      { key: "b", text: "Bảo vệ trật tự của nhà nước" },
      { key: "c", text: "Không bảo vệ những lợi ích khác nhau trong xã hội" },
      { key: "d", text: "Bảo vệ và thể hiện ý chí lợi ích chung của xã hội" },
    ],
    answer: "d",
  },
  {
    id: 53,
    question: "Khẳng định nào sau đây là đúng?",
    options: [
      { key: "a", text: "Bất cứ nhà nước nào cũng thể hiện bản chất giai cấp rõ nét hơn bản chất xã hội" },
      { key: "b", text: "Bất cứ nhà nước nào cũng thể hiện bản chất xã hội rõ nét hơn bản chất giai cấp" },
      { key: "c", text: "Bất cứ nhà nước nào cũng đều thể hiện bản chất giai cấp và bản chất xã hội" },
      { key: "d", text: "Bất cứ nhà nước nào cũng chỉ là bộ máy duy trì sự thống trị của giai cấp này đối với giai cấp khác" },
    ],
    answer: "c",
  },
  {
    id: 54,
    question: "Lịch sử xã hội loài người trải qua mấy kiểu nhà nước?",
    options: [
      { key: "a", text: "1" },
      { key: "b", text: "2" },
      { key: "c", text: "3" },
      { key: "d", text: "4" },
    ],
    answer: "d",
  },
  {
    id: 55,
    question: "Giai cấp thống trị trong nhà nước phong kiến là giai cấp nào?",
    options: [
      { key: "a", text: "Nông dân" },
      { key: "b", text: "Địa chủ" },
      { key: "c", text: "Tăng lữ" },
      { key: "d", text: "Tư bản" },
    ],
    answer: "b",
  },
  {
    id: 56,
    question: "Nhà nước phong kiến củng cố và bảo vệ quyền lợi gì của giai cấp phong kiến?",
    options: [
      { key: "a", text: "Chiếm hữu nô lệ" },
      { key: "b", text: "Chiếm hữu máy móc sản xuất" },
      { key: "c", text: "Chiếm hữu ruộng đất" },
      { key: "d", text: "Chiếm hữu nhà ở" },
    ],
    answer: "c",
  },
  {
    id: 57,
    question: "Hình thức chính thể phổ biến của nhà nước phong kiến là hình thức gì?",
    options: [
      { key: "a", text: "Quân chủ" },
      { key: "b", text: "Quân chủ lập hiến" },
      { key: "c", text: "Xã hội chủ nghĩa" },
      { key: "d", text: "Tư bản" },
    ],
    answer: "a",
  },
  {
    id: 58,
    question: "Nhà nước phong kiến Việt Nam ghi nhận những tư tưởng của tôn giáo nào?",
    options: [
      { key: "a", text: "Thiên chúa giáo" },
      { key: "b", text: "Phật giáo" },
      { key: "c", text: "Nho giáo" },
      { key: "d", text: "Cả B và C" },
    ],
    answer: "d",
  },
  {
    id: 59,
    question: "Pháp luật là một hiện tượng:",
    options: [
      { key: "a", text: "Chỉ mang tính giai cấp không mang tính xã hội" },
      { key: "b", text: "Chỉ mang tính xã hội không mang tính giai cấp" },
      { key: "c", text: "Vừa mang tính xã hội vừa mang tính giai cấp" },
      { key: "d", text: "Cả ba đáp án trên đều sai" },
    ],
    answer: "c",
  },
  {
    id: 60,
    question: "Pháp luật thể hiện ý chí của giai cấp thống trị là:",
    options: [
      { key: "a", text: "Bản chất xã hội của pháp luật" },
      { key: "b", text: "Bản chất giai cấp của pháp luật" },
      { key: "c", text: "Thuộc tính cơ bản của pháp luật" },
      { key: "d", text: "Nguồn của pháp luật" },
    ],
    answer: "b",
  },
  {
    id: 61,
    question: "Tính giai cấp của pháp luật thể hiện ở nhận định nào?",
    options: [
      { key: "a", text: "Pháp luật là sản phẩm của xã hội có giai cấp" },
      { key: "b", text: "Pháp luật là ý chí của giai cấp thống trị" },
      { key: "c", text: "Pháp luật là công cụ điều chỉnh các mối quan hệ giai cấp" },
      { key: "d", text: "Cả ba đáp án trên" },
    ],
    answer: "d",
  },
  {
    id: 62,
    question: "Pháp luật mang bản chất xã hội vì",
    options: [
      { key: "a", text: "Phù hợp với ý chí của giai cấp cầm quyền" },
      { key: "b", text: "Phù hợp với ý chí của giai cấp bị trị" },
      { key: "c", text: "Ghi nhận và bảo vệ lợi ích của các giai cấp và tầng lớp trong xã hội" },
      { key: "d", text: "Cả B và C" },
    ],
    answer: "d",
  },
  {
    id: 63,
    question: "Tính cưỡng chế của pháp luật được thể hiện",
    options: [
      { key: "a", text: "Những hành vi vi phạm pháp luật đều bị xử phạt hành chính" },
      { key: "b", text: "Những hành vi vi phạm pháp luật đều bị áp dụng hình phạt" },
      { key: "c", text: "Những hành vi vi phạm pháp luật đều bị xử lý kỷ luật" },
      { key: "d", text: "Những hành vi vi phạm pháp luật đều có thể bị áp dụng các biện pháp chế tài" },
    ],
    answer: "d",
  },
  {
    id: 64,
    question: "Tính quy phạm phổ biến và bắt buộc chung của pháp luật là:",
    options: [
      { key: "a", text: "Bản chất của pháp luật" },
      { key: "b", text: "Hình thức của pháp luật" },
      { key: "c", text: "Thuộc tính của pháp luật" },
      { key: "d", text: "Chức năng của pháp luật" },
    ],
    answer: "c",
  },
  {
    id: 65,
    question: "Ngôn ngữ pháp lý rõ ràng và chính xác thể hiện thuộc tính nào của pháp luật?",
    options: [
      { key: "a", text: "Tính quy phạm phổ biến" },
      { key: "b", text: "Tính bắt buộc chung" },
      { key: "c", text: "Tính xác định chặt chẽ về mặt hình thức" },
      { key: "d", text: "Không có đáp án đúng" },
    ],
    answer: "c",
  },
  {
    id: 66,
    question: "Pháp luật được nhà nước đảm bảo thực hiện bằng biện pháp gì?",
    options: [
      { key: "a", text: "Tự nguyện" },
      { key: "b", text: "Cưỡng chế" },
      { key: "c", text: "Thỏa thuận" },
      { key: "d", text: "Cả ba đáp án trên" },
    ],
    answer: "b",
  },
  {
    id: 67,
    question: "Pháp luật có khả năng điều chỉnh hành vi của con người là",
    options: [
      { key: "a", text: "Bản chất của pháp luật" },
      { key: "b", text: "Thuộc tính của pháp luật" },
      { key: "c", text: "Chức năng của pháp luật" },
      { key: "d", text: "Cả ba đáp án trên" },
    ],
    answer: "c",
  },
  {
    id: 68,
    question: "Pháp luật có mấy chức năng?",
    options: [
      { key: "a", text: "1" },
      { key: "b", text: "2" },
      { key: "c", text: "3" },
      { key: "d", text: "4" },
    ],
    answer: "c",
  },
  {
    id: 69,
    question: "Chức năng điều chỉnh của pháp luật có nghĩa là",
    options: [
      { key: "a", text: "Pháp luật tác động tới hành vi của con người" },
      { key: "b", text: "Pháp luật tác động tới ý thức và tâm lý của con người" },
      { key: "c", text: "Pháp luật quy định các phương tiện nhằm mục đích bảo vệ các quan hệ xã hội" },
      { key: "d", text: "Cả A và B" },
    ],
    answer: "a",
  },
  {
    id: 70,
    question: "Chức năng giáo dục của pháp luật có nghĩa là",
    options: [
      { key: "a", text: "Pháp luật tác động tới hành vi của con người" },
      { key: "b", text: "Pháp luật tác động tới ý thức và tâm lý của con người" },
      { key: "c", text: "Pháp luật quy định các phương tiện nhằm mục đích bảo vệ các quan hệ xã hội" },
      { key: "d", text: "Cả A và B" },
    ],
    answer: "b",
  },
];

// Metadata
export const quizMeta02 = {
  title: "Trắc nghiệm cuối kỳ Pháp luật đại cương 02",
  source: "CLB HTHT",
  totalQuestions: 35,
  timeLimit: 18, // phút
  idRange: [36, 70],
};

export default quizData02;

// ── Gộp cả hai đề ────────────────────────────────────────────────────────────
// import quizData01 from './quizData.js';
// import quizData02 from './quizData02.js';
// const allQuestions = [...quizData01, ...quizData02]; // 70 câu, id 1–70
// ─────────────────────────────────────────────────────────────────────────────