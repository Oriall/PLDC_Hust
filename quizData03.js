// Database câu hỏi trắc nghiệm cuối kỳ Pháp luật đại cương 03
// Nguồn: CLB HTHT - Quizizz
// Tổng số câu: 35 | Thời gian: 18 phút
// id bắt đầu từ 71 (tiếp nối đề 02)

const quizData03 = [
  {
    id: 71,
    question: "Theo quan điểm của Chủ nghĩa Mác - Lê Nin thì:",
    options: [
      { key: "a", text: "Nhà nước do các toàn thể thành viên trong xã hội thỏa thuận lập ra" },
      { key: "b", text: "Nhà nước do giai cấp thống trị trong xã hội lập ra" },
      { key: "c", text: "Nhà nước do một cá nhân xuất chúng trong xã hội lập ra" },
      { key: "d", text: "Nhà nước do giai cấp chiếm đa số trong xã hội lập ra" },
    ],
    answer: "b",
  },
  {
    id: 72,
    question: "Thuyết quyền gia trưởng giải thích sự ra đời của Nhà nước là do kết quả:",
    options: [
      { key: "a", text: "Liên kết nhiều dòng họ" },
      { key: "b", text: "Sự phát triển của gia đình" },
      { key: "c", text: "Liên kết bộ lạc, bộ tộc" },
      { key: "d", text: "Cả 03 phương án trên đều đúng" },
    ],
    answer: "b",
  },
  {
    id: 73,
    question: "Nhà nước là một hiện tượng lịch sử - xã hội:",
    options: [
      { key: "a", text: "Bất biến" },
      { key: "b", text: "Có thể thay đổi theo quy luật tự nhiên khách quan" },
      { key: "c", text: "Có thể thay đổi theo ý chí của con người" },
      { key: "d", text: "Có thể thay đổi theo ý chí của giai cấp thống trị" },
    ],
    answer: "b",
  },
  {
    id: 74,
    question: "Tính xã hội của Nhà nước thể hiện ở việc:",
    options: [
      { key: "a", text: "Nhà nước quan tâm đến toàn bộ các giai tầng trong xã hội" },
      { key: "b", text: "Nhà nước quan tâm đến giai cấp giàu có trong xã hội" },
      { key: "c", text: "Nhà nước quan tâm đến giai cấp nghèo khó trong xã hội" },
      { key: "d", text: "Nhà nước quan tâm đến đội ngũ công chức nhà nước" },
    ],
    answer: "a",
  },
  {
    id: 75,
    question: "Quyền lực nào tạo ra sự lệ thuộc cơ bản nhất giữa giai cấp bị trị với giai cấp thống trị:",
    options: [
      { key: "a", text: "Quyền lực chính trị" },
      { key: "b", text: "Quyền lực kinh tế" },
      { key: "c", text: "Quyền lực tư tưởng" },
      { key: "d", text: "Cả 3 đáp án đều đúng" },
    ],
    answer: "b",
  },
  {
    id: 76,
    question: "Đặc điểm nào sau đây không phải là dấu hiệu đặc trưng của nhà nước:",
    options: [
      { key: "a", text: "Nhà nước thiết lập một quyền lực công cộng đặc biệt, được bảo đảm thực hiện bằng một bộ máy cưỡng chế đặc thù." },
      { key: "b", text: "Nhà nước có chủ quyền quốc gia." },
      { key: "c", text: "Nhà nước phân chia dân cư căn cứ vào nghề nghiệp và địa vị xã hội của họ" },
      { key: "d", text: "Nhà nước ban hành các loại thuế và thực hiện thu thuế dưới hình thức bắt buộc" },
    ],
    answer: "c",
  },
  {
    id: 77,
    question: "Tổ chức nào sau đây đóng vai trò trung tâm của hệ thống chính trị Việt Nam:",
    options: [
      { key: "a", text: "Đảng phái chính trị." },
      { key: "b", text: "Các tổ chức chính trị – xã hội." },
      { key: "c", text: "Nhà nước." },
      { key: "d", text: "Các tổ chức xã hội, xã hội nghề nghiệp" },
    ],
    answer: "c",
  },
  {
    id: 78,
    question: "Các nhà nước phải tôn trọng và không can thiệp lẫn nhau vì:",
    options: [
      { key: "a", text: "Nhà nước có quyền lực công cộng đặc biệt." },
      { key: "b", text: "Nhà nước có chủ quyền quốc gia." },
      { key: "c", text: "Mỗi nhà nước có hệ thống pháp luật riêng." },
      { key: "d", text: "Nhà nước phân chia và quản lý cư dân của mình theo đơn vị hành chính – lãnh thổ." },
    ],
    answer: "b",
  },
  {
    id: 79,
    question: "Nhà nước nào sau đây có hình thức cấu trúc nhà nước liên bang:",
    options: [
      { key: "a", text: "Việt Nam" },
      { key: "b", text: "Pháp" },
      { key: "c", text: "Ấn Độ" },
      { key: "d", text: "Trung Quốc" },
    ],
    answer: "c",
  },
  {
    id: 80,
    question: "Chức năng của nhà nước là:",
    options: [
      { key: "a", text: "Thực hiện những công việc trong phạm vi lãnh thổ quốc gia và công việc của nhà nước vượt ra ngoài phạm vi lãnh thổ quốc gia" },
      { key: "b", text: "Thực hiện chính sách đối nội của nhà nước" },
      { key: "c", text: "Thực hiện chính sách đối ngoại" },
      { key: "d", text: "Thực hiện chính sách đối nội hoặc đối ngoại." },
    ],
    answer: "a",
  },
  {
    id: 81,
    question: "Đâu là đặc trưng của nhà nước pháp quyền:",
    options: [
      { key: "a", text: "Sự thống trị của pháp luật trong mọi lĩnh vực của đời sống xã hội" },
      { key: "b", text: "Sự ràng buộc của Nhà nước, cơ quan nhà nước, công chức nhà nước bởi pháp luật" },
      { key: "c", text: "Xác định rõ trách nhiệm của nhà nước và công dân trên cơ sở pháp luật" },
      { key: "d", text: "Tất cả các đáp án trên" },
    ],
    answer: "d",
  },
  {
    id: 82,
    question: "Nguồn sớm nhất hình thành pháp luật là:",
    options: [
      { key: "a", text: "Tiền lệ pháp" },
      { key: "b", text: "Tập quán pháp" },
      { key: "c", text: "Văn bản pháp luật" },
      { key: "d", text: "Các học thuyết chính trị - pháp lý" },
    ],
    answer: "b",
  },
  {
    id: 83,
    question: "Học thuyết pháp luật tự nhiên cho rằng:",
    options: [
      { key: "a", text: "Pháp luật xuất phát từ cuộc sống tự nhiên hoang dã" },
      { key: "b", text: "Pháp luật là tổng thể các quyền và nghĩa vụ của con người tự nhiên sinh ra đã có" },
      { key: "c", text: "Pháp luật là hệ thống quy tắc của tự nhiên" },
      { key: "d", text: "Cả 03 phương án trên đều đúng" },
    ],
    answer: "b",
  },
  {
    id: 84,
    question: "Các nguyên tắc của pháp luật là yếu tố quan trọng thuộc:",
    options: [
      { key: "a", text: "Hình thức bên trong của pháp luật" },
      { key: "b", text: "Hình thức bên ngoài của pháp luật" },
      { key: "c", text: "Cấu trúc của pháp luật" },
      { key: "d", text: "Cả 03 phương án trên đều đúng" },
    ],
    answer: "a",
  },
  {
    id: 85,
    question: "Việc tòa án thường đưa các vụ án đi xét xử lưu động thể hiện chủ yếu chức năng nào của pháp luật:",
    options: [
      { key: "a", text: "Chức năng điều chỉnh các QHXH" },
      { key: "b", text: "Chức năng bảo vệ các QHXH" },
      { key: "c", text: "Chức năng giáo dục pháp luật" },
      { key: "d", text: "Cả A, B và C đều sai" },
    ],
    answer: "c",
  },
  {
    id: 86,
    question: "\"Nội dung của pháp luật phải được quy định rõ ràng, chặt chẽ trong các văn bản pháp luật\" là biểu hiện thuộc tính nào của pháp luật:",
    options: [
      { key: "a", text: "Tính quy phạm phổ biến" },
      { key: "b", text: "Tính xác định chặt chẽ về mặt hình thức" },
      { key: "c", text: "Tính bắt buộc chung" },
      { key: "d", text: "Tính cưỡng chế nhà nước" },
    ],
    answer: "b",
  },
  {
    id: 87,
    question: "Hội đồng nhân dân các cấp có quyền ban hành loại văn bản QPPL nào:",
    options: [
      { key: "a", text: "Nghị quyết" },
      { key: "b", text: "Nghị định" },
      { key: "c", text: "Nghị quyết, nghị định" },
      { key: "d", text: "Nghị quyết, quyết định" },
    ],
    answer: "a",
  },
  {
    id: 88,
    question: "Văn bản quy phạm pháp luật được áp dụng từ thời điểm nào:",
    options: [
      { key: "a", text: "Bắt đầu có hiệu lực" },
      { key: "b", text: "Thời điểm thông qua" },
      { key: "c", text: "Thời điểm ký ban hành" },
      { key: "d", text: "Thời điểm đăng công báo" },
    ],
    answer: "a",
  },
  {
    id: 89,
    question: "Bộ phận \"giả định\" có ý nghĩa như thế nào trong quy phạm pháp luật:",
    options: [
      { key: "a", text: "Xác định chủ thể, điều kiện, hoàn cảnh, tình huống chịu sự tác động của QPPL." },
      { key: "b", text: "Xác định cách xử sự của các chủ thể pháp luật khi tham gia vào quan hệ xã hội" },
      { key: "c", text: "Xác định biện pháp xử lý đối với chủ thể vi phạm pháp luật" },
      { key: "d", text: "Tuỳ từng trường hợp mà có một trong các ý nghĩa nêu trên." },
    ],
    answer: "a",
  },
  {
    id: 90,
    question: "Quy phạm pháp luật bao gồm những loại nào:",
    options: [
      { key: "a", text: "Chỉ có một loại là \"quy phạm bắt buộc\"" },
      { key: "b", text: "Chỉ có một loại là \"quy phạm cấm đoán\"" },
      { key: "c", text: "Chỉ có một loại là \"quy phạm lựa chọn\"" },
      { key: "d", text: "Có thể bao gồm tất cả các loại quy phạm nêu trên" },
    ],
    answer: "d",
  },
  {
    id: 91,
    question: "Quy phạm \"Công dân được quyền tự do kinh doanh theo quy định của pháp luật\" gồm những bộ phận nào:",
    options: [
      { key: "a", text: "Giả định, quy định, chế tài" },
      { key: "b", text: "Giả định, quy định" },
      { key: "c", text: "Giả định, chế tài" },
      { key: "d", text: "Quy định, chế tài" },
    ],
    answer: "b",
  },
  {
    id: 92,
    question: "Chủ thể của quan hệ pháp luật là:",
    options: [
      { key: "a", text: "Tất cả các cá nhân, pháp nhân tham gia vào quan hệ pháp luật" },
      { key: "b", text: "Các cá nhân, pháp nhân có đầy đủ năng lực chủ thể" },
      { key: "c", text: "Bất kỳ cá nhân nào" },
      { key: "d", text: "Bất kỳ pháp nhân nào" },
    ],
    answer: "b",
  },
  {
    id: 93,
    question: "Nhận định nào dưới đây là sai:",
    options: [
      { key: "a", text: "Năng lực pháp luật của mọi cá nhân là như nhau" },
      { key: "b", text: "Năng lực pháp luật của cá nhân xuất hiện khi cá nhân đó sinh ra, mất đi khi cá nhân đó chết" },
      { key: "c", text: "Năng lực pháp luật của mọi tổ chức là như nhau" },
      { key: "d", text: "Năng lực pháp luật của tổ chức xuất hiện khi tổ chức đó được thành lập" },
    ],
    answer: "c",
  },
  {
    id: 94,
    question: "Đội mũ bảo hiểm khi tham gia giao thông bằng xe gắn máy chính là chủ thể đang thực hiện pháp luật dưới hình thức nào:",
    options: [
      { key: "a", text: "Tuân thủ pháp luật" },
      { key: "b", text: "Thi hành (chấp hành) pháp luật" },
      { key: "c", text: "Sử dụng pháp luật" },
      { key: "d", text: "Áp dụng pháp luật." },
    ],
    answer: "b",
  },
  {
    id: 95,
    question: "Hành vi trái pháp luật thực hiện trong trường hợp nào sau đây thì không bị coi là có lỗi:",
    options: [
      { key: "a", text: "Sự kiện bất ngờ" },
      { key: "b", text: "Tình thế cấp thiết" },
      { key: "c", text: "Phòng vệ chính đáng" },
      { key: "d", text: "Tất cả các trường hợp trên" },
    ],
    answer: "d",
  },
  {
    id: 96,
    question: "Chủ thể không thấy trước hành vi của mình có thể gây ra hậu quả nguy hại cho xã hội, mặc dù phải thấy trước và có thể thấy trước hậu quả đó thì:",
    options: [
      { key: "a", text: "Chủ thể không có lỗi vì không nhận thức được hậu quả" },
      { key: "b", text: "Chủ thể có lỗi vô ý do cẩu thả" },
      { key: "c", text: "Chủ thể có lỗi vô ý do quá tự tin" },
      { key: "d", text: "Chủ thể có lỗi cố ý gián tiếp" },
    ],
    answer: "b",
  },
  {
    id: 97,
    question: "Khái niệm \"trách nhiệm pháp lý\" được hiểu như thế nào:",
    options: [
      { key: "a", text: "Là quan hệ pháp luật đặc biệt phát sinh giữa Nhà nước và các chủ thể pháp luật" },
      { key: "b", text: "Là quan hệ pháp luật đặc biệt phát sinh giữa Nhà nước và chủ thể vi phạm pháp luật trong việc nhà nước áp dụng chế tài đối với chủ thể vi phạm pháp luật" },
      { key: "c", text: "Là quan hệ pháp luật đặc biệt phát sinh giữa cơ quan nhà nước có thẩm quyền với nhau trong việc giải quyết vi phạm pháp luật" },
      { key: "d", text: "Là quan hệ pháp luật đặc biệt phát sinh giữa các chủ thể vi phạm pháp luật với nhau." },
    ],
    answer: "b",
  },
  {
    id: 98,
    question: "Quyết định xử phạt đối với anh A điều khiển xe máy vượt đèn đỏ là trách nhiệm pháp lý gì:",
    options: [
      { key: "a", text: "Trách nhiệm hành chính" },
      { key: "b", text: "Trách nhiệm dân sự" },
      { key: "c", text: "Trách nhiệm hình sự" },
      { key: "d", text: "Trách nhiệm kỷ luật" },
    ],
    answer: "a",
  },
  {
    id: 99,
    question: "Các hệ thống pháp luật phổ biến trên thế giới được phân loại thành:",
    options: [
      { key: "a", text: "02 nhóm" },
      { key: "b", text: "03 nhóm" },
      { key: "c", text: "04 nhóm" },
      { key: "d", text: "05 nhóm" },
    ],
    answer: "b",
  },
  {
    id: 100,
    question: "Tư cách pháp nhân để chỉ:",
    options: [
      { key: "a", text: "Tư cách chủ thể pháp luật của cá nhân" },
      { key: "b", text: "Tư cách chủ thể pháp luật của cá nhân, tổ chức" },
      { key: "c", text: "Tư cách chủ thể pháp luật của tổ chức" },
      { key: "d", text: "Cả A, B, C đều sai" },
    ],
    answer: "c",
  },
  {
    id: 101,
    question: "Quyền tác giả là quyền của cá nhân, .... đối với tác phẩm do mình sáng tạo ra hoặc .....",
    options: [
      { key: "a", text: "tổ chức, sử dụng" },
      { key: "b", text: "tổ chức, sở hữu" },
      { key: "c", text: "pháp nhân, sở hữu" },
      { key: "d", text: "pháp nhân, sử dụng" },
    ],
    answer: "b",
  },
  {
    id: 102,
    question: "Đối tượng điều chỉnh của ngành luật lao động là:",
    options: [
      { key: "a", text: "Các quan hệ phát sinh giữa nhà nước với người phạm tội" },
      { key: "b", text: "Quan hệ lao động" },
      { key: "c", text: "Quan hệ phát sinh trong quá trình sử dụng lao động" },
      { key: "d", text: "Đáp án B và C là đúng." },
    ],
    answer: "d",
  },
  {
    id: 103,
    question: "Đối tượng điều chỉnh của Luật hình sự Việt Nam là:",
    options: [
      { key: "a", text: "Quan hệ xã hội phát sinh giữa các cơ quan tố tụng và người phạm tội." },
      { key: "b", text: "Quan hệ xã hội phát sinh giữa người thực hiện hành vi phạm tội với nạn nhân." },
      { key: "c", text: "Quan hệ xã hội phát sinh giữa các cơ quan tố tụng với nhau trong quá trình giải quyết vụ việc hình sự." },
      { key: "d", text: "Quan hệ xã hội phát sinh giữa các cơ quan tiến hành tố tụng với nạn nhân." },
    ],
    answer: "a",
  },
  {
    id: 104,
    question: "Phát biểu nào về Tội phạm là đúng nhất:",
    options: [
      { key: "a", text: "Tội phạm là những hành vi nguy hiểm cho xã hội cần phải trừng trị bởi yêu cầu của xã hội." },
      { key: "b", text: "Tội phạm là những hành vi nguy hiểm gây ra hậu quả lớn cho xã hội Nhà nước cần phải nghiêm trị." },
      { key: "c", text: "Tội phạm là những hành vi nguy hiểm cho xã hội do tòa án tuyên." },
      { key: "d", text: "Tội phạm là những hành vi nguy hiểm cho xã hội được quy định trong bộ luật hình sự" },
    ],
    answer: "d",
  },
  {
    id: 105,
    question: "Đối tượng điều chỉnh của pháp luật dân sự là:",
    options: [
      { key: "a", text: "Tội phạm và hình phạt" },
      { key: "b", text: "Chế độ chính trị, kinh tế, xã hội" },
      { key: "c", text: "Bộ máy nhà nước" },
      { key: "d", text: "Quan hệ tài sản và quan hệ nhân thân" },
    ],
    answer: "d",
  },
];

// Metadata
export const quizMeta03 = {
  title: "Trắc nghiệm cuối kỳ Pháp luật đại cương 03",
  source: "CLB HTHT",
  totalQuestions: 35,
  timeLimit: 18, // phút
  idRange: [71, 105],
};

export default quizData03;

// ── Gộp cả ba đề ─────────────────────────────────────────────────────────────
// import quizData01 from './quizData.js';
// import quizData02 from './quizData02.js';
// import quizData03 from './quizData03.js';
// const allQuestions = [...quizData01, ...quizData02, ...quizData03]; // 105 câu, id 1–105
// ─────────────────────────────────────────────────────────────────────────────