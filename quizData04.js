// Database câu hỏi trắc nghiệm cuối kỳ Pháp luật đại cương 04
// Nguồn: CLB HTHT - Quizizz
// Tổng số câu: 35 | Thời gian: 18 phút
// id bắt đầu từ 106 (tiếp nối đề 03)

const quizData04 = [
  {
    id: 106,
    question: "Nhà nước quân chủ hạn chế (quân chủ lập hiến) là nhà nước như thế nào:",
    options: [
      { key: "a", text: "Quyền lực nhà nước tối cao thuộc về một tập thể do bầu cử mà ra" },
      { key: "b", text: "Quyền lực nhà nước tối cao thuộc về một tập thể và được hình thành theo phương thức thừa kế" },
      { key: "c", text: "Quyền lực nhà nước được chia làm hai một phần thuộc về nhà vua hoặc nữ hoàng theo phương thức thừa kế, một phần thuộc về cơ quan nhà nước khác do bầu cử." },
      { key: "d", text: "Không có phương án nào đúng" },
    ],
    answer: "c",
  },
  {
    id: 107,
    question: "Trong nhà nước quân chủ chuyên chế thì:",
    options: [
      { key: "a", text: "Quyền lực tối cao thuộc về một người do bầu cử mà ra" },
      { key: "b", text: "Quyền lực nhà nước tối cao thuộc về một người và được hình thành theo phương thức thừa kế" },
      { key: "c", text: "Quyền lực nhà nước tối cao thuộc về một tập thể do bầu cử mà ra" },
      { key: "d", text: "Quyền lực nhà nước tối cao thuộc về một tập thể và được hình thành theo phương thức thừa kế" },
    ],
    answer: "b",
  },
  {
    id: 108,
    question: "Chế độ chính trị của nhà nước Việt Nam:",
    options: [
      { key: "a", text: "Dân chủ xã hội chủ nghĩa" },
      { key: "b", text: "Dân chủ chủ nô" },
      { key: "c", text: "Dân chủ tư sản" },
      { key: "d", text: "Dân chủ quý tộc" },
    ],
    answer: "a",
  },
  {
    id: 109,
    question: "Hình thức chính thể của nhà nước Việt Nam:",
    options: [
      { key: "a", text: "Cộng hòa đại nghị" },
      { key: "b", text: "Cộng hòa tổng thống" },
      { key: "c", text: "Chế độ độc đảng" },
      { key: "d", text: "Cộng hòa lưỡng tính" },
    ],
    answer: "a",
  },
  {
    id: 110,
    question: "Chế độ chính trị phản dân chủ là gì:",
    options: [
      { key: "a", text: "Nhà nước độc tài" },
      { key: "b", text: "Vi phạm các quyền tự do của nhân dân" },
      { key: "c", text: "Vi phạm các quyền dân chủ của nhân dân" },
      { key: "d", text: "Tất cả đều đúng" },
    ],
    answer: "d",
  },
  {
    id: 111,
    question: "Hình thức chính thể quân chủ hạn chế còn có tên gọi khác là gì:",
    options: [
      { key: "a", text: "Quân chủ chuyên chế" },
      { key: "b", text: "Quân chủ tập quyền" },
      { key: "c", text: "Quân chủ lập hiến" },
      { key: "d", text: "Không có phương án nào đúng" },
    ],
    answer: "c",
  },
  {
    id: 112,
    question: "Quyền lực của nhà vua trong hình thức chính thể quân chủ tuyệt đối luôn:",
    options: [
      { key: "a", text: "Bị giới hạn bởi pháp luật" },
      { key: "b", text: "Vô hạn" },
      { key: "c", text: "Bị giới hạn bởi nhà nước" },
      { key: "d", text: "Bị giới hạn" },
    ],
    answer: "b",
  },
  {
    id: 113,
    question: "Hình thức chính thể cộng hòa đại nghị còn được gọi là:",
    options: [
      { key: "a", text: "Hình thức chính thể cộng hòa nghị viện" },
      { key: "b", text: "Hình thức chính thể cộng hòa tổng thống" },
      { key: "c", text: "Hình thức chính thể cộng hòa lưỡng tính" },
      { key: "d", text: "Hình thức chính thể quân chủ đại nghị" },
    ],
    answer: "a",
  },
  {
    id: 114,
    question: "Hình thức cấu trúc nhà nước bao gồm những loại nào?",
    options: [
      { key: "a", text: "Nhà nước đơn nhất và nhà nước liên bang" },
      { key: "b", text: "Chỉ có nhà nước đơn nhất" },
      { key: "c", text: "Chỉ có nhà nước liên bang" },
      { key: "d", text: "Nhà nước đơn nhất, nhà nước liên bang và liên minh các nhà nước" },
    ],
    answer: "d",
  },
  {
    id: 115,
    question: "Nhà nước đơn nhất là nhà nước như thế nào?",
    options: [
      { key: "a", text: "Là nhà nước có chủ quyền chung, có lãnh thổ toàn vẹn, thống nhất; có một hệ thống các cơ quan nhà nước thống nhất từ trung ương đến địa phương; có một hệ thống pháp luật thống nhất trên toàn vẹn lãnh thổ quốc gia" },
      { key: "b", text: "Là nhà nước có chủ quyền chung, có lãnh thổ toàn vẹn; có một hệ thống các cơ quan nhà nước thống nhất từ trung ương đến địa phương; có một hệ thống pháp luật thống nhất trên toàn vẹn lãnh thổ quốc gia" },
      { key: "c", text: "Là nhà nước có chủ quyền riêng, có lãnh thổ toàn vẹn, thống nhất; có một hệ thống các cơ quan nhà nước thống nhất từ trung ương đến địa phương; có một hệ thống pháp luật thống nhất trên toàn vẹn lãnh thổ quốc gia" },
      { key: "d", text: "Không có phương án nào đúng" },
    ],
    answer: "a",
  },
  {
    id: 116,
    question: "Nhà nước liên bang là nhà nước như thế nào?",
    options: [
      { key: "a", text: "Là nhà nước được thiết lập từ hai hay nhiều vùng lãnh thổ." },
      { key: "b", text: "Là nhà nước được thiết lập từ hai hay nhiều vùng lãnh thổ gần nhau." },
      { key: "c", text: "Là nhà nước được thiết lập từ hai hay nhiều nhà nước thành viên." },
      { key: "d", text: "Là nhà nước được thiết lập từ ba hay nhiều nhà nước thành viên." },
    ],
    answer: "c",
  },
  {
    id: 117,
    question: "Chế độ chính trị được hiểu là gì:",
    options: [
      { key: "a", text: "Là tổng thể các phương pháp để thực hiện quyền lực nhà nước" },
      { key: "b", text: "Là tất cả các thiết chế chính trị trong xã hội" },
      { key: "c", text: "Là toàn bộ đường lối chính xác mà đảng chính trị cầm quyền đề ra" },
      { key: "d", text: "Tất cả đều đúng" },
    ],
    answer: "a",
  },
  {
    id: 118,
    question: "Quan hệ xã hội muốn trở thành quan hệ pháp luật cần có điều kiện gì:",
    options: [
      { key: "a", text: "Có chủ thể tham gia quan hệ pháp luật và chủ thể đó có đủ năng lực chủ thể" },
      { key: "b", text: "Có quy phạm pháp luật điều chỉnh" },
      { key: "c", text: "Có sự kiện pháp lý" },
      { key: "d", text: "Phải có đủ ba điều kiện trên" },
    ],
    answer: "d",
  },
  {
    id: 119,
    question: "Các yếu tố của quan hệ pháp luật gồm:",
    options: [
      { key: "a", text: "Chủ thể, khách thể của quan hệ pháp luật" },
      { key: "b", text: "Nội dung của quan hệ pháp luật" },
      { key: "c", text: "Sự kiện pháp lý" },
      { key: "d", text: "Chủ thể, khách thể và nội dung của quan hệ pháp luật" },
    ],
    answer: "d",
  },
  {
    id: 120,
    question: "Nhận định nào sau đây là đúng:",
    options: [
      { key: "a", text: "Quan hệ pháp luật luôn phản ánh ý chí của các bên tham gia quan hệ" },
      { key: "b", text: "Quan hệ pháp luật luôn phản ánh ý chí của nhà nước" },
      { key: "c", text: "Quan hệ pháp luật được đảm bảo bằng sức mạnh cưỡng chế của nhà nước" },
      { key: "d", text: "Tất cả các nhận định trên đều đúng" },
    ],
    answer: "d",
  },
  {
    id: 121,
    question: "Chủ thể của quan hệ pháp luật là:",
    options: [
      { key: "a", text: "Tất cả các cá nhân, tổ chức tham gia vào quan hệ pháp luật" },
      { key: "b", text: "Các cá nhân, tổ chức có đủ năng lực chủ thể theo quy định của pháp luật tham gia vào quan hệ pháp luật" },
      { key: "c", text: "Bất kỳ cá nhân nào" },
      { key: "d", text: "Mọi tổ chức" },
    ],
    answer: "b",
  },
  {
    id: 122,
    question: "Nhận định nào dưới đây là sai:",
    options: [
      { key: "a", text: "Năng lực pháp luật của cá nhân là như nhau" },
      { key: "b", text: "Năng lực pháp luật của cá nhân xuất hiện khi cá nhân đó sinh ra và mất đi khi cá nhân đó chết" },
      { key: "c", text: "Năng lực pháp luật của mọi tổ chức là như nhau" },
      { key: "d", text: "Năng lực pháp luật của tổ chức xuất hiện khi tổ chức đó được thành lập" },
    ],
    answer: "c",
  },
  {
    id: 123,
    question: "Năng lực chủ thể gồm những loại năng lực:",
    options: [
      { key: "a", text: "Năng lực pháp luật và năng lực hành vi" },
      { key: "b", text: "Năng lực pháp luật" },
      { key: "c", text: "Năng lực hành vi" },
      { key: "d", text: "Năng lực pháp luật và năng lực hành chính" },
    ],
    answer: "a",
  },
  {
    id: 124,
    question: "Năng lực chủ thể được hiểu là:",
    options: [
      { key: "a", text: "Khả năng chủ thể có thể trở thành các bên tham gia vào các quan hệ pháp luật" },
      { key: "b", text: "Khả năng chủ thể có các quyền và nghĩa vụ pháp lý do nhà nước thừa nhận" },
      { key: "c", text: "Khả năng chủ thể bằng hành vi của mình thực hiện trên thực tế các quyền và nghĩa vụ pháp lý" },
      { key: "d", text: "Tất cả đều đúng" },
    ],
    answer: "a",
  },
  {
    id: 125,
    question: "Năng lực pháp luật là gì:",
    options: [
      { key: "a", text: "Khả năng chủ thể có thể trở thành các bên tham gia vào các quan hệ pháp luật" },
      { key: "b", text: "Khả năng chủ thể có các quyền và nghĩa vụ pháp lý do nhà nước thừa nhận" },
      { key: "c", text: "Khả năng chủ thể bằng hành vi của mình thực hiện trên thực tế các quyền và nghĩa vụ pháp lý" },
      { key: "d", text: "Tất cả đều đúng" },
    ],
    answer: "b",
  },
  {
    id: 126,
    question: "Năng lực hành vi được hiểu là:",
    options: [
      { key: "a", text: "Khả năng chủ thể có thể trở thành các bên tham gia vào các quan hệ pháp luật" },
      { key: "b", text: "Khả năng chủ thể có các quyền và nghĩa vụ pháp lý do nhà nước thừa nhận" },
      { key: "c", text: "Khả năng chủ thể bằng hành vi của mình thực hiện trên thực tế các quyền và nghĩa vụ pháp lý" },
      { key: "d", text: "Tất cả đều đúng" },
    ],
    answer: "c",
  },
  {
    id: 127,
    question: "Nhận định nào dưới đây là đúng:",
    options: [
      { key: "a", text: "Năng lực pháp luật luôn mang tính giai cấp" },
      { key: "b", text: "Năng lực pháp luật là điều kiện đủ, năng lực hành vi là điều kiện cần" },
      { key: "c", text: "Năng lực pháp luật của mọi tổ chức là như nhau" },
      { key: "d", text: "Năng lực hành vi luôn mang tính giai cấp" },
    ],
    answer: "a",
  },
  {
    id: 128,
    question: "Chủ thể của quan hệ pháp luật là cá nhân bao gồm mấy loại:",
    options: [
      { key: "a", text: "Công dân Việt Nam" },
      { key: "b", text: "Người nước ngoài sinh sống hoạt động trên lãnh thổ Việt Nam" },
      { key: "c", text: "Người không có quốc tịch sinh sống hoạt động trên lãnh thổ Việt Nam" },
      { key: "d", text: "Tất cả các phương án trên" },
    ],
    answer: "d",
  },
  {
    id: 129,
    question: "Năng lực hành vi của cá nhân phụ thuộc vào:",
    options: [
      { key: "a", text: "Độ tuổi và khả năng hành vi" },
      { key: "b", text: "Độ tuổi và khả năng nhận thức" },
      { key: "c", text: "Độ tuổi" },
      { key: "d", text: "Khả năng nhận thức" },
    ],
    answer: "b",
  },
  {
    id: 130,
    question: "Có một anh A gây thương tích cho chị B nên tòa thụ lý và xét xử anh 10 năm. Xác định chủ thể của quan hệ pháp luật hình sự trong vụ án trên:",
    options: [
      { key: "a", text: "Công dân A với chị B" },
      { key: "b", text: "Anh A với nhà nước" },
      { key: "c", text: "Anh A với nhà nước và chị B" },
      { key: "d", text: "Tất cả các phương án trên đều sai" },
    ],
    answer: "b",
  },
  {
    id: 131,
    question: "Một tội phạm có mức cao nhất của khung hình phạt là 12 năm tù. Tội phạm này được xếp vào loại nào dưới đây:",
    options: [
      { key: "a", text: "Tội phạm nghiêm trọng" },
      { key: "b", text: "Tội phạm đặc biệt nghiêm trọng" },
      { key: "c", text: "Tội phạm rất nghiêm trọng" },
      { key: "d", text: "Tội phạm ít nghiêm trọng" },
    ],
    answer: "c",
  },
  {
    id: 132,
    question: "Chính phủ có quyền ban hành những loại VBPL nào:",
    options: [
      { key: "a", text: "Nghị quyết, nghị định, quyết định" },
      { key: "b", text: "Pháp lệnh, nghị quyết" },
      { key: "c", text: "Luật, pháp lệnh" },
      { key: "d", text: "Nghị quyết, nghị định" },
    ],
    answer: "d",
  },
  {
    id: 133,
    question: "Cơ sở nào làm phát sinh trách nhiệm pháp lý?",
    options: [
      { key: "a", text: "Khi có chủ thể pháp luật xuất hiện" },
      { key: "b", text: "Khi có hành vi vi phạm pháp luật và có quyết định áp dụng" },
      { key: "c", text: "Khi có quy phạm pháp luật được ban hành" },
      { key: "d", text: "Khi cơ quan có thẩm quyền tiến hành xem xét vụ việc vi phạm" },
    ],
    answer: "b",
  },
  {
    id: 134,
    question: "Nhà nước do ai lập ra?",
    options: [
      { key: "a", text: "Do Thượng đế lập ra" },
      { key: "b", text: "Do các giai cấp bị trị trong xã hội lập ra" },
      { key: "c", text: "Do toàn dân thế giới lập ra" },
      { key: "d", text: "Do giai cấp thống trị lập ra" },
    ],
    answer: "d",
  },
  {
    id: 135,
    question: "Hình thức chính thể cộng hoà được hiểu như thế nào?",
    options: [
      { key: "a", text: "Là hình thức chính thể mà quyền lực nhà nước được trao cho một cơ quan được thành lập theo chế độ bầu cử" },
      { key: "b", text: "Là hình thức chính thể mà quyền lực nhà nước được trao cho một người đứng đầu theo chế độ thừa kế" },
      { key: "c", text: "Là hình thức chính thể mà quyền lực nhà nước được trao cho một cơ quan được thành lập theo chế độ bầu cử và bên cạnh cơ quan này còn có một người đứng đầu là vua hoặc nữ hoàng" },
      { key: "d", text: "Cả ba nhận định trên đều sai" },
    ],
    answer: "a",
  },
  {
    id: 136,
    question: "Đối tượng điều chỉnh của luật dân sự là:",
    options: [
      { key: "a", text: "Các quan hệ vật chất" },
      { key: "b", text: "Các quan hệ tài sản" },
      { key: "c", text: "Các quan hệ nhân thân phi tài sản" },
      { key: "d", text: "Cả quan hệ tài sản và quan hệ nhân thân phi tài sản" },
    ],
    answer: "d",
  },
  {
    id: 137,
    question: "Đối tượng điều chỉnh của ngành luật hình sự là gì?",
    options: [
      { key: "a", text: "Là quan hệ xã hội giữa Nhà nước và chủ thể đã thực hiện tội phạm" },
      { key: "b", text: "Là quan hệ giữa người phạm tội với người bị hại" },
      { key: "c", text: "Là quan hệ giữa Viện kiểm sát nhân dân với người phạm tội" },
      { key: "d", text: "Cả ba đáp án đều đúng" },
    ],
    answer: "a",
  },
  {
    id: 138,
    question: "Hoạt động nào sau đây thuộc chức năng của viện kiểm sát nhân dân:",
    options: [
      { key: "a", text: "Hoạt động truy tố người phạm tội ra trước tòa án" },
      { key: "b", text: "Hoạt động xét xử kẻ phạm tội" },
      { key: "c", text: "Hoạt động thi hành án" },
      { key: "d", text: "Cả ba hoạt động trên đều thuộc chức năng của viện kiểm sát nhân dân" },
    ],
    answer: "a",
  },
  {
    id: 139,
    question: "Cơ quan hành pháp là:",
    options: [
      { key: "a", text: "Tất cả đều sai" },
      { key: "b", text: "Ủy ban thường vụ quốc hội, Chủ tịch nước" },
      { key: "c", text: "Quốc hội, Chính phủ" },
      { key: "d", text: "Chủ tịch nước, Chính phủ, Hội đồng nhân dân" },
    ],
    answer: "a",
  },
  {
    id: 140,
    question: "Quy phạm pháp luật là cách xử sự do nhà nước quy định để:",
    options: [
      { key: "a", text: "Áp dụng cho một lần duy nhất và hết hiệu lực sau lần áp dụng đó" },
      { key: "b", text: "Áp dụng cho một lần duy nhất và vẫn còn hiệu lực sau lần áp dụng đó" },
      { key: "c", text: "Áp dụng cho nhiều lần và vẫn còn hiệu lực sau những lần áp dụng đó" },
      { key: "d", text: "Áp dụng cho nhiều lần và hết hiệu lực sau những lần áp dụng đó" },
    ],
    answer: "c",
  },
];

// Metadata
export const quizMeta04 = {
  title: "Trắc nghiệm cuối kỳ Pháp luật đại cương 04",
  source: "CLB HTHT",
  totalQuestions: 35,
  timeLimit: 18, // phút
  idRange: [106, 140],
};

export default quizData04;

// ── Gộp cả bốn đề ────────────────────────────────────────────────────────────
// import quizData01 from './quizData.js';
// import quizData02 from './quizData02.js';
// import quizData03 from './quizData03.js';
// import quizData04 from './quizData04.js';
// const allQuestions = [...quizData01, ...quizData02, ...quizData03, ...quizData04]; // 140 câu, id 1–140
// ─────────────────────────────────────────────────────────────────────────────