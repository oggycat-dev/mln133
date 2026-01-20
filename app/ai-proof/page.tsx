import styles from "./ai-proof.module.css";

export default function AIProofPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>Các nguồn tham khảo</h1>
        <p>Phân tích tài liệu giáo trình Chủ nghĩa xã hội khoa học (2019) bằng AI Gemini</p>
      </div>

      {/* Nội dung từ giáo trình */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Nội dung giáo trình (Trang 79-86)</h2>
          <p className={styles.source}>Nguồn: Giáo trình Chủ nghĩa xã hội khoa học (2019)</p>
        </div>

        <div className={styles.content}>
          {/* Phần 1: Dân chủ XHCN */}
          <div className={styles.subsection}>
            <h3>1. Dân chủ xã hội chủ nghĩa ở Việt Nam</h3>
            
            <div className={styles.card}>
              <div className={styles.cardTitle}>Bản chất và Quan điểm</div>
              <p>
                Dân chủ vừa là <strong>mục tiêu</strong> (Dân giàu, nước mạnh, dân chủ, công bằng, văn minh), 
                vừa là <strong>động lực</strong> phát triển đất nước. Dân chủ XHCN có bản chất là quyền lực 
                thuộc về nhân dân ("Dân là gốc, là chủ, dân làm chủ").
              </p>
              <div className={styles.highlight}>
                <strong>Đặc điểm quan trọng:</strong> Dân chủ gắn liền với kỷ cương, pháp luật. 
                Không phải tự do vô kỷ luật hay muốn làm gì thì làm.
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Phương châm thực hiện</div>
              <p className={styles.principle}>
                "Dân biết, dân bàn, dân làm, dân kiểm tra"
              </p>
              <p>
                Đây là nguyên tắc cốt lõi trong việc thực hiện dân chủ XHCN, đảm bảo nhân dân 
                được tham gia đầy đủ vào quá trình quản lý nhà nước và xã hội.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Hai hình thức thực hiện dân chủ</div>
              
              <div className={styles.twoColumns}>
                <div className={styles.subCard}>
                  <h4>Dân chủ gián tiếp (Đại diện)</h4>
                  <p>
                    Nhân dân "ủy quyền" cho các cơ quan/tổ chức do mình bầu ra để thực hiện quyền 
                    làm chủ thay mặt mình.
                  </p>
                  <div className={styles.example}>
                    <strong>Ví dụ:</strong> Bầu đại biểu Quốc hội, Hội đồng nhân dân. 
                    Quốc hội là cơ quan quyền lực nhà nước cao nhất do nhân dân bầu ra.
                  </div>
                </div>

                <div className={styles.subCard}>
                  <h4>Dân chủ trực tiếp</h4>
                  <p>
                    Nhân dân trực tiếp tham gia bàn bạc, quyết định công việc của địa phương và 
                    đất nước.
                  </p>
                  <div className={styles.example}>
                    <strong>Ví dụ:</strong> Bầu cử, ứng cử, đóng góp ý kiến vào văn bản pháp luật, 
                    giám sát hoạt động cơ quan nhà nước, bàn việc ở khu dân cư.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phần 2: Nhà nước pháp quyền */}
          <div className={styles.subsection}>
            <h3>2. Nhà nước pháp quyền Xã hội chủ nghĩa</h3>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Quan niệm chung</div>
              <ul>
                <li>Là nhà nước <strong>thượng tôn pháp luật</strong></li>
                <li>Mọi hoạt động của cơ quan nhà nước, tổ chức, công dân đều phải tuân thủ Hiến pháp và pháp luật</li>
                <li>Phục vụ lợi ích của nhân dân - "Của dân, do dân, vì dân"</li>
              </ul>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>6 Đặc điểm cơ bản của Nhà nước pháp quyền XHCN</div>
              
              <div className={styles.features}>
                <div className={styles.featureCard}>
                  <div className={styles.featureNumber}>1</div>
                  <h4>Của dân, do dân, vì dân</h4>
                  <p>Nhà nước do nhân dân lao động làm chủ, phục vụ lợi ích của nhân dân</p>
                </div>

                <div className={styles.featureCard}>
                  <div className={styles.featureNumber}>2</div>
                  <h4>Thượng tôn pháp luật</h4>
                  <p>Tổ chức và hoạt động dựa trên Hiến pháp và pháp luật</p>
                </div>

                <div className={styles.featureCard}>
                  <div className={styles.featureNumber}>3</div>
                  <h4>Quyền lực thống nhất</h4>
                  <p>Có sự phân công, phối hợp và kiểm soát giữa các cơ quan (Lập pháp - Hành pháp - Tư pháp)</p>
                </div>

                <div className={styles.featureCard}>
                  <div className={styles.featureNumber}>4</div>
                  <h4>Sự lãnh đạo của Đảng</h4>
                  <p>Do Đảng Cộng sản Việt Nam lãnh đạo (phù hợp Hiến pháp)</p>
                </div>

                <div className={styles.featureCard}>
                  <div className={styles.featureNumber}>5</div>
                  <h4>Tôn trọng quyền con người</h4>
                  <p>Coi con người là chủ thể, trung tâm; bảo đảm quyền tự do, dân chủ</p>
                </div>

                <div className={styles.featureCard}>
                  <div className={styles.featureNumber}>6</div>
                  <h4>Tập trung dân chủ</h4>
                  <p>Tổ chức bộ máy theo nguyên tắc này, đảm bảo sự chỉ đạo thống nhất từ Trung ương</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phần 3: Mối quan hệ */}
          <div className={styles.subsection}>
            <h3>3. Mối quan hệ giữa quyền tự do và nghĩa vụ</h3>
            
            <div className={styles.card}>
              <div className={styles.cardTitle}>Nguyên tắc cơ bản</div>
              <ul>
                <li>
                  <strong>Tự do là được làm tất cả những gì pháp luật không cấm</strong>
                </li>
                <li>
                  Tự do của cá nhân <strong>không được xâm phạm</strong> đến danh dự, nhân phẩm, 
                  quyền lợi của người khác (được pháp luật bảo hộ)
                </li>
                <li>
                  <strong>Quyền đi đôi với Nghĩa vụ</strong> - Lợi ích cá nhân phải hài hòa với 
                  lợi ích cộng đồng, quốc gia - dân tộc
                </li>
                <li>
                  Dân chủ XHCN là nền dân chủ <strong>có tổ chức, có lãnh đạo</strong> và được 
                  bảo đảm bằng pháp luật
                </li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <strong>Kết luận quan trọng:</strong> Dân chủ ở Việt Nam KHÔNG PHẢI là "tự do tuyệt đối" 
              - muốn làm gì thì làm. Dân chủ phải gắn liền với kỷ cương, pháp luật.
            </div>
          </div>
        </div>
      </section>

      {/* Minh chứng AI */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Minh chứng sử dụng AI Gemini</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.aiProofBox}>
            <h3>Cách AI được sử dụng:</h3>
            <ol>
              <li>
                <strong>Đọc và phân tích tài liệu:</strong> AI Gemini đã được sử dụng để đọc 
                và hiểu nội dung từ giáo trình "Chủ nghĩa xã hội khoa học (2019)" trang 79-86.
              </li>
              <li>
                <strong>Trích xuất thông tin:</strong> AI đã trích xuất các khái niệm, nguyên tắc, 
                và đặc điểm quan trọng về Dân chủ XHCN và Nhà nước pháp quyền.
              </li>
              <li>
                <strong>Tạo tình huống thực tế:</strong> Dựa trên lý thuyết từ giáo trình, AI đã 
                giúp tạo ra các tình huống giả định trên mạng xã hội để minh họa sự khác biệt giữa 
                dân chủ chân chính và lợi dụng dân chủ.
              </li>
              <li>
                <strong>Giải thích và phân tích:</strong> AI đã cung cấp các giải thích chi tiết 
                về từng tình huống, liên hệ với lý thuyết trong giáo trình.
              </li>
            </ol>
          </div>

          <div className={styles.noteBox}>
            <strong>Lưu ý:</strong> Tất cả nội dung lý thuyết đều được trích xuất từ giáo trình 
            chính thức. AI chỉ đóng vai trò hỗ trợ phân tích và trình bày, không thay đổi nội dung 
            gốc của tài liệu.
          </div>
        </div>
      </section>
    </main>
  );
}

