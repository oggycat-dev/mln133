// data.ts - Dữ liệu tình huống và lý thuyết giải thích

export interface Post {
  id: number;
  author: string;
  avatar: string;
  content: string;
  type: "violation" | "democratic";
  theory: string;
  explanation: string;
}

export const posts: Post[] = [
  {
    id: 1,
    author: "Trương Quốc Huy",
    avatar: "👤",
    content:
      "Tôi không thích ông hàng xóm nên tôi lên mạng chửi cho bõ ghét. Tự do ngôn luận mà, tôi thích nói gì là quyền của tôi!",
    type: "violation",
    theory: "Sai! Dân chủ gắn liền với kỷ cương, pháp luật.",
    explanation:
      "Theo tài liệu: Dân chủ không phải là muốn làm gì thì làm. Tự do của cá nhân không được xâm phạm đến danh dự, nhân phẩm của người khác (được pháp luật bảo hộ). Đây là hành vi lợi dụng dân chủ, vi phạm Luật An ninh mạng.",
  },
  {
    id: 2,
    author: "Tối Trí Ngủ",
    avatar: "⭐",
    content:
      "Sau khi đọc dự thảo Luật Đất đai, tôi thấy điều khoản bồi thường chưa thỏa đáng nên đã gửi văn bản kiến nghị lên Hội đồng nhân dân.",
    type: "democratic",
    theory: "Đúng! Phương châm: Dân biết, dân bàn, dân làm, dân kiểm tra.",
    explanation:
      "Đây là hình thức Dân chủ trực tiếp và gián tiếp kết hợp. Công dân thực hiện quyền làm chủ thông qua việc đóng góp ý kiến xây dựng pháp luật - một biểu hiện của nền dân chủ XHCN.",
  },
  {
    id: 3,
    author: "MAI trí Thức",
    avatar: "🔥",
    content:
      "Nghe đồn sắp có biến lớn, mọi người đi rút tiền ngân hàng ngay đi!! (Thông tin chưa kiểm chứng)",
    type: "violation",
    theory: "Sai! Xâm phạm an ninh quốc gia và trật tự an toàn xã hội.",
    explanation:
      "Nhà nước pháp quyền XHCN thượng tôn pháp luật. Hành vi tung tin giả (Fake news) gây hoang mang dư luận là vi phạm pháp luật, không thuộc phạm vi quyền tự do ngôn luận.",
  },
  {
    id: 4,
    author: "Khuyến Dương",
    avatar: "🗳️",
    content:
      "Hôm nay tôi đi bầu cử đại biểu HĐND. Trước khi bỏ phiếu, tôi đã nghiên cứu kỹ tiểu sử, chương trình hành động của các ứng viên.",
    type: "democratic",
    theory: "Đúng! Đây là hình thức Dân chủ trực tiếp thông qua bầu cử.",
    explanation:
      "Bầu cử là quyền và nghĩa vụ của công dân, là cách nhân dân 'ủy quyền' cho người đại diện. Quốc hội, HĐND là cơ quan quyền lực nhà nước do dân bầu ra.",
  },
  {
    id: 5,
    author: "mAi lÝ SÀ",
    avatar: "💼",
    content:
      "Công ty tôi kinh doanh tốt lắm, mỗi tháng trốn được mấy trăm triệu tiền thuế. Tiền của tôi, tôi không muốn nộp cho nhà nước!",
    type: "violation",
    theory: "Sai! Quyền đi đôi với Nghĩa vụ công dân.",
    explanation:
      "Trong Nhà nước pháp quyền XHCN, công dân có quyền tự do kinh doanh nhưng PHẢI có nghĩa vụ nộp thuế theo pháp luật. Lợi ích cá nhân phải hài hòa với lợi ích quốc gia - dân tộc.",
  },
  {
    id: 6,
    author: "63ra1",
    avatar: "📚",
    content:
      "Tôi phát hiện cán bộ phường thu phí sai quy định nên đã phản ánh lên đường dây nóng của UBND quận kèm bằng chứng.",
    type: "democratic",
    theory: "Đúng! Dân kiểm tra, giám sát hoạt động cơ quan nhà nước.",
    explanation:
      "Đây là quyền giám sát của công dân đối với cơ quan nhà nước - một đặc điểm của Nhà nước pháp quyền XHCN: 'Của dân, do dân, vì dân'. Phản ánh đúng kênh, có bằng chứng là cách làm văn minh.",
  },
];
