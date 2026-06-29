// Database câu hỏi trắc nghiệm cuối kỳ Pháp luật đại cương 05
// Nguồn: CLB HTHT - Quizizz
// Tổng số câu: 35 | Thời gian: 18 phút
// id bắt đầu từ 141 (tiếp nối đề 04)

const quizData05 = [
  {
    id: 141,
    question: "Viện kiểm sát nằm trong hệ thống cơ quan nào của bộ máy nhà nước Việt Nam",
    options: [
      { key: "a", text: "Lập pháp" },
      { key: "b", text: "Tư pháp" },
      { key: "c", text: "Hành pháp" },
      { key: "d", text: "Tòa án" },
    ],
    answer: "b",
  },
  {
    id: 142,
    question: "Căn cứ vào phạm vi hoạt động của nhà nước, chức năng của nhà nước được phân thành",
    options: [
      { key: "a", text: "Chức năng đối nội" },
      { key: "b", text: "Chức năng đối ngoại" },
      { key: "c", text: "Đáp án A và B đều đúng" },
      { key: "d", text: "Không có đáp án nào đúng" },
    ],
    answer: "c",
  },
  {
    id: 143,
    question: "Đâu là đặc trưng của nhà nước pháp quyền",
    options: [
      { key: "a", text: "Sự thống trị của pháp luật trong mọi lĩnh vực của đời sống xã hội" },
      { key: "b", text: "Sự ràng buộc của cơ quan nhà nước, công chức nhà nước bởi pháp luật" },
      { key: "c", text: "Xác định rõ trách nhiệm của nhà nước và công dân trên cơ sở pháp luật" },
      { key: "d", text: "Tất cả các đáp án trên" },
    ],
    answer: "d",
  },
  {
    id: 144,
    question: "Hệ thống chính trị Việt Nam gồm mấy bộ phận (mấy chủ thể)",
    options: [
      { key: "a", text: "2" },
      { key: "b", text: "3" },
      { key: "c", text: "4" },
      { key: "d", text: "5" },
    ],
    answer: "b",
  },
  {
    id: 145,
    question: "Trung tâm của bộ máy nhà nước cộng hòa xã hội chủ nghĩa Việt Nam là cơ quan nào",
    options: [
      { key: "a", text: "Quốc hội" },
      { key: "b", text: "Chính phủ" },
      { key: "c", text: "Hội đồng nhân dân các cấp" },
      { key: "d", text: "Ủy ban nhân dân các cấp" },
    ],
    answer: "a",
  },
  {
    id: 146,
    question: "Nguyên thủ quốc gia của Việt Nam là",
    options: [
      { key: "a", text: "Tổng bí thư" },
      { key: "b", text: "Chủ tịch nước" },
      { key: "c", text: "Thủ tướng chính phủ" },
      { key: "d", text: "Chủ tịch quốc hội" },
    ],
    answer: "b",
  },
  {
    id: 147,
    question: "Có mấy hình thức thực hiện pháp luật",
    options: [
      { key: "a", text: "2" },
      { key: "b", text: "3" },
      { key: "c", text: "4" },
      { key: "d", text: "5" },
    ],
    answer: "c",
  },
  {
    id: 148,
    question: "Chủ thể thực hiện áp dụng pháp luật là ai",
    options: [
      { key: "a", text: "Các cơ quan công chức nhà nước." },
      { key: "b", text: "Cá nhân, tổ chức." },
      { key: "c", text: "Ai cũng có quyền áp dụng pháp luật." },
      { key: "d", text: "Các cơ quan công chức nhà nước có thẩm quyền." },
    ],
    answer: "d",
  },
  {
    id: 149,
    question: "Tuân thủ pháp luật là gì",
    options: [
      { key: "a", text: "Hình thức thực hiện những QPPL mang tính chất ngăn cấm bằng hành vi thụ động, trong đó các chủ thể pháp luật kiềm chế không làm những việc mà pháp luật cấm." },
      { key: "b", text: "Hình thức thực hiện những quy định trao nghĩa vụ bắt buộc của pháp luật một cách tích cực trong đó các chủ thể thực hiện nghĩa vụ của mình bằng những hành động tích cực." },
      { key: "c", text: "Hình thức thực hiện những quy định về quyền chủ thể của pháp luật, trong đó các chủ thể pháp luật chủ động, tự mình quyết định việc thực hiện hay không thực hiện điều mà pháp luật cho phép." },
      { key: "d", text: "Cả A và B" },
    ],
    answer: "a",
  },
  {
    id: 150,
    question: "Chấp hành pháp luật là gì",
    options: [
      { key: "a", text: "Không làm những việc mà pháp luật cấm" },
      { key: "b", text: "Phải thực hiện đúng các nghĩa vụ mà pháp luật quy định" },
      { key: "c", text: "Thực hiện các quyền là pháp luật quy định" },
      { key: "d", text: "Cả ba hoạt động trên đều là tuân thủ pháp luật" },
    ],
    answer: "b",
  },
  {
    id: 151,
    question: "Vận dụng pháp luật là gì",
    options: [
      { key: "a", text: "Thực hiện các QPPL cho phép" },
      { key: "b", text: "Thực hiện các QPPL bắt buộc" },
      { key: "c", text: "Thực hiện các QPPL cấm đoán" },
      { key: "d", text: "Cả ba đều đúng" },
    ],
    answer: "a",
  },
  {
    id: 152,
    question: "Đội mũ bảo hiểm đi ra đường là thi hành pháp luật dưới hình thức gì",
    options: [
      { key: "a", text: "Tuân thủ pháp luật" },
      { key: "b", text: "Thi hành pháp luật" },
      { key: "c", text: "Sử dụng pháp luật" },
      { key: "d", text: "Áp dụng pháp luật" },
    ],
    answer: "b",
  },
  {
    id: 153,
    question: "Vi phạm pháp luật là khi chủ thể có năng lực trách nhiệm pháp lí",
    options: [
      { key: "a", text: "Thực hiện hành động cụ thể trái với quy định của pháp luật có lỗi của chủ thể" },
      { key: "b", text: "Không thực hiện những hành động nhất định theo yêu cầu của pháp luật" },
      { key: "c", text: "Thực hiện hành vi cụ thể trái với quy định của pháp luật có lỗi của chủ thể" },
      { key: "d", text: "Không có đáp án nào đúng" },
    ],
    answer: "c",
  },
  {
    id: 154,
    question: "Thực hiện pháp luật là gì",
    options: [
      { key: "a", text: "Đó là hoạt động có mục đích của các chủ thể" },
      { key: "b", text: "Đưa các quy định của pháp luật vào thực tế cuộc sống" },
      { key: "c", text: "Đáp án A và B đều đúng" },
      { key: "d", text: "Tất cả các đáp án trên đều sai" },
    ],
    answer: "c",
  },
  {
    id: 155,
    question: "Thực hiện 5K trong phòng chống dịch là chúng ta đang thực hiện pháp luật dưới hình thức nào",
    options: [
      { key: "a", text: "Sử dụng pháp luật" },
      { key: "b", text: "Tuân thủ pháp luật" },
      { key: "c", text: "Thi hành pháp luật" },
      { key: "d", text: "Áp dụng pháp luật" },
    ],
    answer: "c",
  },
  {
    id: 156,
    question: "Hành vi trái pháp luật của chủ thể có lỗi khi",
    options: [
      { key: "a", text: "Phản ánh trạng thái tâm lí bên trong của chủ thể khi thực hiện hành vi" },
      { key: "b", text: "Chủ thể có khả năng nhận thức được hậu quả và có nhiều lựa chọn để thực hiện hành vi nhưng đã chọn cách thực hiện hành vi trái pháp luật" },
      { key: "c", text: "Chủ thể có khả năng nhận thức được hậu quả do hành vi gây ra hoặc có nhiều lựa chọn để thực hiện hành vi nhưng đã chọn cách thực hiện hành vi trái pháp luật" },
      { key: "d", text: "Tất cả các đáp án trên" },
    ],
    answer: "b",
  },
  {
    id: 157,
    question: "Trong 4 trường hợp dưới đây đâu là trường hợp cần có sự can thiệp của nhà nước để pháp luật được thực hiện đúng",
    options: [
      { key: "a", text: "Đội mũ bảo hiểm khi đi ra đường" },
      { key: "b", text: "Khi áp dụng chế tài đối với những cá nhân tổ chức vi phạm pháp luật" },
      { key: "c", text: "Thực hiện 5K trong phòng chống dịch" },
      { key: "d", text: "Tất cả các đáp án trên đều đúng" },
    ],
    answer: "b",
  },
  {
    id: 158,
    question: "Quyết định áp dụng pháp luật có giá trị",
    options: [
      { key: "a", text: "Có hiệu lực đối với chủ thể cụ thể" },
      { key: "b", text: "Có hiệu lực một lần" },
      { key: "c", text: "Được đảm bảo thực hiện bằng sự cưỡng chế của nhà nước" },
      { key: "d", text: "Tất cả các đáp án trên đều đúng" },
    ],
    answer: "d",
  },
  {
    id: 159,
    question: "Năng lực trách nhiệm pháp lý của chủ thể vi phạm pháp luật được xác định như thế nào",
    options: [
      { key: "a", text: "Đối với tổ chức luôn có năng lực trách nhiệm pháp lý, cá nhân phụ thuộc vào độ tuổi và khả năng nhận thức" },
      { key: "b", text: "Chủ thể có năng lực trách nhiệm pháp lý khi đạt đến độ tuổi nhất định và có khả năng nhận thức bình thường" },
      { key: "c", text: "Các chủ thể là cá nhân tổ chức đều có năng lực trách nhiệm pháp lý khi thực hiện hành vi trái pháp luật" },
      { key: "d", text: "Chỉ có cá nhân mới có năng lực trách nhiệm pháp lý" },
    ],
    answer: "a",
  },
  {
    id: 160,
    question: "Mặt khách quan của vi phạm pháp luật gồm những dấu hiệu nào",
    options: [
      { key: "a", text: "Hành vi trái pháp luật" },
      { key: "b", text: "Hậu quả nguy hiểm cho xã hội" },
      { key: "c", text: "Mối quan hệ nhân quả giữa hành vi và hậu quả nguy hiểm cho xã hội" },
      { key: "d", text: "Tất cả đáp án trên đều đúng" },
    ],
    answer: "d",
  },
  {
    id: 161,
    question: "Các dấu hiệu của vi phạm pháp luật",
    options: [
      { key: "a", text: "Hành vi cụ thể của chủ thể" },
      { key: "b", text: "Hành vi trái pháp luật" },
      { key: "c", text: "Có lỗi và do chủ thể có năng lực trách nhiệm pháp lý thực hiện" },
      { key: "d", text: "Tất cả các dấu hiệu trên" },
    ],
    answer: "d",
  },
  {
    id: 162,
    question: "Hành vi trái pháp luật thực hiện trong trường hợp nào sau đây thì không bị coi là có lỗi",
    options: [
      { key: "a", text: "Sự kiện bất ngờ" },
      { key: "b", text: "Tình thế cấp thiết" },
      { key: "c", text: "Phòng vệ chính đáng" },
      { key: "d", text: "Tất cả các trường hợp nêu trên" },
    ],
    answer: "d",
  },
  {
    id: 163,
    question: "Hậu quả do hành vi trái pháp luật gây ra cho xã hội là",
    options: [
      { key: "a", text: "Những thiệt hại về vật chất" },
      { key: "b", text: "Những thiệt hại về tinh thần" },
      { key: "c", text: "Những thiệt hại về thể chất" },
      { key: "d", text: "Những thiệt hại hoặc nguy cơ gây ra thiệt hại cho các quan hệ xã hội được pháp luật bảo vệ" },
    ],
    answer: "d",
  },
  {
    id: 164,
    question: "Mặt chủ quan của vi phạm pháp luật là",
    options: [
      { key: "a", text: "Lỗi" },
      { key: "b", text: "Động cơ" },
      { key: "c", text: "Mục đích" },
      { key: "d", text: "Tất cả các đáp án trên" },
    ],
    answer: "d",
  },
  {
    id: 165,
    question: "Không mong muốn hậu quả khi thực hiện hành vi trái pháp luật là đặc điểm của loại lỗi nào",
    options: [
      { key: "a", text: "Lỗi cố ý trực tiếp" },
      { key: "b", text: "Lỗi cố ý gián tiếp" },
      { key: "c", text: "Lỗi vô ý nói chung" },
      { key: "d", text: "Không có đáp án nào đúng" },
    ],
    answer: "c",
  },
  {
    id: 166,
    question: "Không nhận thức được hậu quả khi thực hiện hành vi trái pháp luật mặc dù có trách nhiệm nhận thức và có thể nhận thức được thì đó là dấu hiệu của lỗi",
    options: [
      { key: "a", text: "Lỗi cố ý trực tiếp" },
      { key: "b", text: "Lỗi cố ý gián tiếp" },
      { key: "c", text: "Lỗi vô ý do cẩu thả" },
      { key: "d", text: "Lỗi vô ý do quá tự tin" },
    ],
    answer: "c",
  },
  {
    id: 167,
    question: "Trách nhiệm pháp lý được áp dụng đối với",
    options: [
      { key: "a", text: "Chủ thể thực hiện hành vi trái pháp luật" },
      { key: "b", text: "Cá nhân tổ chức thực hiện hành vi trái pháp luật" },
      { key: "c", text: "Cá nhân tổ chức không thực hiện nghĩa vụ pháp lý quy định" },
      { key: "d", text: "Cá nhân tổ chức vi phạm pháp luật" },
    ],
    answer: "d",
  },
  {
    id: 168,
    question: "Loại trách nhiệm pháp lý nào nghiêm khắc nhất",
    options: [
      { key: "a", text: "Trách nhiệm kỷ luật" },
      { key: "b", text: "Trách nhiệm hành chính" },
      { key: "c", text: "Trách nhiệm hình sự" },
      { key: "d", text: "Trách nhiệm dân sự" },
    ],
    answer: "c",
  },
  {
    id: 169,
    question: "Trách nhiệm dân sự được thể hiện dưới những hình thức nào sau đây",
    options: [
      { key: "a", text: "Phạt vi phạm" },
      { key: "b", text: "Bồi thường thiệt hại do vi phạm gây ra" },
      { key: "c", text: "Đính chính xin lỗi công khai" },
      { key: "d", text: "Tất cả các hình thức nêu trên" },
    ],
    answer: "d",
  },
  {
    id: 170,
    question: "Hình phạt là hình thức của loại trách nhiệm pháp lý nào",
    options: [
      { key: "a", text: "Trách nhiệm kỷ luật" },
      { key: "b", text: "Trách nhiệm hành chính" },
      { key: "c", text: "Trách nhiệm hình sự" },
      { key: "d", text: "Trách nhiệm dân sự" },
    ],
    answer: "c",
  },
  {
    id: 171,
    question: "Một người đi xe máy lạng lách đánh võng ngoài đường dẫn đến va chạm giao thông và gây tai nạn thì lỗi gây tai nạn là lỗi gì",
    options: [
      { key: "a", text: "Lỗi cố ý trực tiếp" },
      { key: "b", text: "Lỗi cố ý gián tiếp" },
      { key: "c", text: "Lỗi vô ý do cẩu thả" },
      { key: "d", text: "Lỗi vô ý do quá tự tin" },
    ],
    answer: "d",
  },
  {
    id: 172,
    question: "Một người đi vào rừng hút thuốc và gạt tàn xuống dưới làm cho tàn thuốc bén vào lá cây khô dẫn đến cháy rừng thì lỗi gì",
    options: [
      { key: "a", text: "Lỗi cố ý trực tiếp" },
      { key: "b", text: "Lỗi cố ý gián tiếp" },
      { key: "c", text: "Lỗi vô ý do cẩu thả" },
      { key: "d", text: "Lỗi vô ý do quá tự tin" },
    ],
    answer: "c",
  },
  {
    id: 173,
    question: "Trách nhiệm hành chính được áp dụng đối với người vi phạm hành chính là",
    options: [
      { key: "a", text: "Hình phạt" },
      { key: "b", text: "Xử phạt hành chính" },
      { key: "c", text: "Buộc thôi việc" },
      { key: "d", text: "Bồi thường thiệt hại" },
    ],
    answer: "b",
  },
  {
    id: 174,
    question: "Một chị điều khiển xe máy vượt đèn đỏ thì trách nhiệm pháp lý áp dụng đối với chị ấy là",
    options: [
      { key: "a", text: "Trách nhiệm kỷ luật" },
      { key: "b", text: "Trách nhiệm hành chính" },
      { key: "c", text: "Trách nhiệm hình sự" },
      { key: "d", text: "Trách nhiệm dân sự" },
    ],
    answer: "b",
  },
  {
    id: 175,
    question: "Mình cho bạn vay tiền đến hạn bạn không trả mình kiện bạn ra tòa, tòa thụ lý giải quyết thì những hình thức thực hiện pháp luật nào được áp dụng trong trường hợp này",
    options: [
      { key: "a", text: "Vận dụng pháp luật" },
      { key: "b", text: "Chấp hành pháp luật" },
      { key: "c", text: "Áp dụng pháp luật" },
      { key: "d", text: "Đáp án A và C" },
    ],
    answer: "d",
  },
];

// Metadata
export const quizMeta05 = {
  title: "Trắc nghiệm cuối kỳ Pháp luật đại cương 05",
  source: "CLB HTHT",
  totalQuestions: 35,
  timeLimit: 18, // phút
  idRange: [141, 175],
};

export default quizData05;

// ── Gộp cả năm đề ────────────────────────────────────────────────────────────
// import quizData01 from './quizData.js';
// import quizData02 from './quizData02.js';
// import quizData03 from './quizData03.js';
// import quizData04 from './quizData04.js';
// import quizData05 from './quizData05.js';
// const allQuestions = [...quizData01, ...quizData02, ...quizData03, ...quizData04, ...quizData05]; // 175 câu, id 1–175
// ─────────────────────────────────────────────────────────────────────────────