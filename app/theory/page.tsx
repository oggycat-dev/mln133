import styles from "./theory.module.css";

export default function TheoryPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>LÝ THUYẾT CƠ BẢN</h1>
        <p>Dân chủ xã hội chủ nghĩa và Nhà nước pháp quyền XHCN Việt Nam</p>
      </div>

      {/* Phần 1: Dân chủ XHCN */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>1. DÂN CHỦ XÃ HỘI CHỦ NGHĨA Ở VIỆT NAM</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.subsection}>
            <h3>Bản chất và Quan điểm</h3>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Là mục tiêu và động lực</div>
              <p>
                Dân chủ vừa là <strong>mục tiêu</strong> (Dân giàu, nước mạnh, dân chủ, 
                công bằng, văn minh), vừa là <strong>động lực</strong> phát triển đất nước.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Bản chất</div>
              <ul>
                <li>Quyền lực thuộc về nhân dân ("Dân là gốc, là chủ, dân làm chủ")</li>
                <li>
                  <strong>Gắn liền với kỷ cương, pháp luật</strong> (Không phải tự do vô kỷ luật)
                </li>
              </ul>
            </div>

            <div className={styles.highlight}>
              <strong>Phương châm thực hiện:</strong> 
              "Dân biết, dân bàn, dân làm, dân kiểm tra"
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>Hai hình thức thực hiện dân chủ</h3>
            
            <div className={styles.twoColumns}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Dân chủ gián tiếp (Đại diện)</div>
                <p>
                  Nhân dân "ủy quyền" cho các cơ quan/tổ chức do mình bầu ra.
                </p>
                <div className={styles.example}>
                  <strong>Ví dụ:</strong> Bầu đại biểu Quốc hội, Hội đồng nhân dân. 
                  Quốc hội là cơ quan quyền lực nhà nước cao nhất.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Dân chủ trực tiếp</div>
                <p>
                  Nhân dân trực tiếp tham gia bàn bạc, quyết định công việc.
                </p>
                <div className={styles.example}>
                  <strong>Ví dụ:</strong> Bầu cử, ứng cử, đóng góp ý kiến vào văn bản 
                  pháp luật, giám sát hoạt động cơ quan nhà nước, bàn việc ở khu dân cư.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phần 2: Nhà nước pháp quyền */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>2. NHÀ NƯỚC PHÁP QUYỀN XÃ HỘI CHỦ NGHĨA</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.subsection}>
            <h3>Quan niệm chung</h3>
            <div className={styles.conceptBox}>
              <ul>
                <li>Là nhà nước <strong>thượng tôn pháp luật</strong></li>
                <li>Mọi hoạt động của cơ quan nhà nước, tổ chức, công dân đều phải tuân thủ Hiến pháp và pháp luật</li>
                <li>Phục vụ lợi ích của nhân dân</li>
              </ul>
            </div>
          </div>

          <div className={styles.subsection}>
            <h3>6 Đặc điểm cơ bản (RẤT QUAN TRỌNG)</h3>
            
            <div className={styles.features}>
              <div className={styles.featureCard}>
                <div className={styles.featureNumber}>1</div>
                <h4>Của dân, do dân, vì dân</h4>
                <p>Nhà nước do nhân dân lao động làm chủ</p>
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
      </section>

      {/* Phần 3: Từ khóa ghi nhớ */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>TỪ KHÓA ĐỂ NHỚ NHANH</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.keywordsGrid}>
            <div className={styles.keywordCard}>
              <h4>Mục tiêu tổng quát</h4>
              <p>Dân giàu, nước mạnh, dân chủ, công bằng, văn minh</p>
            </div>

            <div className={styles.keywordCard}>
              <h4>Nguyên tắc quyền lực</h4>
              <p>Thống nhất - Phân công - Phối hợp - Kiểm soát</p>
            </div>

            <div className={styles.keywordCard}>
              <h4>Mối quan hệ</h4>
              <p>Đảng lãnh đạo - Nhà nước quản lý - Nhân dân làm chủ</p>
            </div>

            <div className={styles.keywordCard}>
              <h4>Phương châm</h4>
              <p>Dân biết - Dân bàn - Dân làm - Dân kiểm tra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kết luận */}
      <section className={styles.conclusion}>
        <h2>KẾT LUẬN QUAN TRỌNG</h2>
        <div className={styles.conclusionBox}>
          <p className={styles.mainConclusion}>
            <strong>Dân chủ ở Việt Nam KHÔNG PHẢI là "tự do tuyệt đối"</strong>
          </p>
          <ul>
            <li>Dân chủ XHCN là nền dân chủ <strong>có tổ chức, có lãnh đạo</strong> và được bảo đảm bằng pháp luật</li>
            <li>Tự do là được làm tất cả những gì <strong>pháp luật không cấm</strong></li>
            <li>Quyền đi đôi với <strong>Nghĩa vụ</strong> - Lợi ích cá nhân phải hài hòa với lợi ích cộng đồng</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
