import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.heroImageSection}>
        <Image
          src="/dai-hoi-dang.png"
          alt="Chào mừng Đại hội Đảng Cộng sản Việt Nam"
          width={1600}
          height={800}
          priority
          className={styles.heroImage}
        />
      </div>

      <div className={styles.hero}>
        <h1 className={styles.title}>GÓC NHÌN DÂN CHỦ</h1>
        <p className={styles.subtitle}>Democracy Lens</p>
        <p className={styles.description}>
          Phân tích Dân chủ xã hội chủ nghĩa và Nhà nước pháp quyền XHCN Việt Nam
        </p>

        <div className={styles.tagline}>
          <p>
            <strong>Câu hỏi:</strong> Dân chủ ở Việt Nam có phải là "tự do tuyệt đối" 
            - muốn làm gì thì làm?
          </p>
        </div>

        <div className={styles.cta}>
          <Link href="/theory" className={styles.btnPrimary}>
            Tìm hiểu Lý thuyết
          </Link>
          <Link href="/feed" className={styles.btnSecondary}>
            Xem Tình huống thực tế
          </Link>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>Lý thuyết cơ bản</h3>
          <p>Tìm hiểu về Dân chủ XHCN, Nhà nước pháp quyền, và các nguyên tắc cốt lõi</p>
        </div>

        <div className={styles.feature}>
          <h3>Phân tích tình huống</h3>
          <p>Case studies thực tế trên mạng xã hội về dân chủ chân chính vs lợi dụng dân chủ</p>
        </div>
      </div>

      <div className={styles.keyPoints}>
        <h2>GHI NHỚ NHANH</h2>
        <div className={styles.pointsGrid}>
          <div className={styles.point}>
            <strong>Mục tiêu:</strong> Dân giàu, nước mạnh, dân chủ, công bằng, văn minh
          </div>
          <div className={styles.point}>
            <strong>Phương châm:</strong> Dân biết - Dân bàn - Dân làm - Dân kiểm tra
          </div>
          <div className={styles.point}>
            <strong>Nguyên tắc:</strong> Dân chủ gắn liền với kỷ cương, pháp luật
          </div>
          <div className={styles.point}>
            <strong>Mối quan hệ:</strong> Đảng lãnh đạo - Nhà nước quản lý - Nhân dân làm chủ
          </div>
        </div>
      </div>

      <div className={styles.conclusion}>
        <h3>KẾT LUẬN</h3>
        <p className={styles.conclusionText}>
          <strong>Dân chủ ở Việt Nam KHÔNG PHẢI là sự tự do vô kỷ luật.</strong>
        </p>
        <ul className={styles.conclusionList}>
          <li>Dân chủ XHCN là nền dân chủ có tổ chức, có lãnh đạo và được bảo đảm bằng pháp luật</li>
          <li>Tự do là được làm tất cả những gì pháp luật không cấm</li>
          <li>Dân chủ là quyền làm chủ đi đôi với trách nhiệm công dân</li>
        </ul>
      </div>
    </main>
  );
}
