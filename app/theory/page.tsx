"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./theory.module.css";

interface FeatureDetail {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  content: {
    theory: string[];
    analysis: string[];
    examples?: {
      correct?: string[];
      incorrect?: string[];
    };
  };
}

const featureDetails: FeatureDetail[] = [
  {
    id: 1,
    title: "Của dân, do dân, vì dân",
    subtitle: "Nhà nước do nhân dân lao động làm chủ",
    image: "/1.png",
    content: {
      theory: [
        "Quyền lực thuộc về nhân dân: Dân chủ là bản chất của chế độ xã hội chủ nghĩa (do nhân dân làm chủ, quyền lực thuộc về nhân dân).",
        "Nhà nước phục vụ lợi ích của nhân dân, không phải của một nhóm thiểu số hay cá nhân nào.",
        "Nhân dân là chủ thể quyết định mọi vấn đề quan trọng của đất nước thông qua các hình thức dân chủ trực tiếp và gián tiếp."
      ],
      analysis: [
        "Đây là nguyên tắc cơ bản nhất của Nhà nước pháp quyền XHCN Việt Nam. Nhà nước không phải là công cụ của một nhóm người, mà là công cụ của toàn thể nhân dân.",
        "Quyền lực nhà nước xuất phát từ nhân dân, do nhân dân trao cho thông qua bầu cử và các hình thức khác.",
        "Mọi chính sách, pháp luật đều phải vì lợi ích của nhân dân, phục vụ sự phát triển của đất nước."
      ],
      examples: {
        correct: [
          "Nhân dân tham gia bầu cử đại biểu Quốc hội, Hội đồng nhân dân để đại diện cho mình.",
          "Nhân dân đóng góp ý kiến vào các dự thảo luật thông qua các kênh chính thống.",
          "Nhân dân giám sát hoạt động của các cơ quan nhà nước."
        ],
        incorrect: [
          "Một nhóm người tự ý quyết định chính sách mà không thông qua quy trình dân chủ.",
          "Lợi dụng quyền lực để phục vụ lợi ích cá nhân thay vì lợi ích nhân dân."
        ]
      }
    }
  },
  {
    id: 2,
    title: "Thượng tôn pháp luật",
    subtitle: "Tổ chức và hoạt động dựa trên Hiến pháp và pháp luật",
    image: "/2.png",
    content: {
      theory: [
        "Đề cao vai trò tối thượng của Hiến pháp và pháp luật trong mọi hoạt động của Nhà nước và xã hội.",
        "Mọi công dân, tổ chức, kể cả cơ quan nhà nước đều phải tuân thủ pháp luật một cách nghiêm ngặt.",
        "Dân chủ gắn liền với kỷ luật, kỷ cương và phải được thể chế hóa bằng pháp luật, được pháp luật bảo đảm."
      ],
      analysis: [
        "Đây là điểm mấu chốt để bác bỏ quan điểm 'dân chủ là tự do tuyệt đối'. Dân chủ không đứng một mình mà phải đi đôi với kỷ luật.",
        "Dân chủ phải thực hiện trong khuôn khổ Hiến pháp và pháp luật. Pháp luật chính là 'hàng rào' bảo vệ nền dân chủ.",
        "Pháp luật sinh ra không phải để hạn chế quyền tự do chính đáng, mà để ngăn chặn các hành vi lợi dụng tự do để gây hại."
      ],
      examples: {
        correct: [
          "Công dân thực hiện quyền tự do ngôn luận trong khuôn khổ pháp luật, không xúc phạm danh dự người khác.",
          "Cơ quan nhà nước hoạt động theo đúng thẩm quyền được Hiến pháp và pháp luật quy định."
        ],
        incorrect: [
          "Lợi dụng 'tự do ngôn luận' để vu khống, xúc phạm danh dự người khác (vi phạm Luật An ninh mạng).",
          "Tự ý làm trái pháp luật với lý do 'tự do cá nhân'."
        ]
      }
    }
  },
  {
    id: 3,
    title: "Quyền lực thống nhất",
    subtitle: "Có sự phân công, phối hợp và kiểm soát giữa các cơ quan (Lập pháp - Hành pháp - Tư pháp)",
    image: "/3.png",
    content: {
      theory: [
        "Quyền lực nhà nước là thống nhất, có sự phân công rõ ràng giữa các cơ quan: Quốc hội (Lập pháp), Chính phủ (Hành pháp), Tòa án và Viện kiểm sát (Tư pháp).",
        "Các cơ quan này vừa độc lập trong chức năng, vừa phối hợp chặt chẽ với nhau để thực hiện quyền lực nhà nước.",
        "Có cơ chế kiểm soát quyền lực để đảm bảo không có cơ quan nào lạm quyền."
      ],
      analysis: [
        "Nguyên tắc này đảm bảo quyền lực nhà nước được thực thi một cách hiệu quả, minh bạch và có kiểm soát.",
        "Sự phân công rõ ràng giúp mỗi cơ quan tập trung vào chức năng của mình, tránh chồng chéo và lạm quyền.",
        "Cơ chế kiểm soát đảm bảo các cơ quan hoạt động đúng pháp luật và phục vụ lợi ích nhân dân."
      ],
      examples: {
        correct: [
          "Quốc hội ban hành luật, Chính phủ thi hành luật, Tòa án xét xử theo luật.",
          "Các cơ quan giám sát lẫn nhau để đảm bảo tuân thủ pháp luật."
        ],
        incorrect: [
          "Một cơ quan tự ý thực hiện chức năng của cơ quan khác mà không có sự phân công.",
          "Không có cơ chế kiểm soát, dẫn đến lạm quyền."
        ]
      }
    }
  },
  {
    id: 4,
    title: "Sự lãnh đạo của Đảng",
    subtitle: "Do Đảng Cộng sản Việt Nam lãnh đạo (phù hợp Hiến pháp)",
    image: "/4.png",
    content: {
      theory: [
        "Đảng Cộng sản Việt Nam là lực lượng lãnh đạo Nhà nước và xã hội, được Hiến pháp công nhận.",
        "Sự lãnh đạo của Đảng đảm bảo định hướng chính trị đúng đắn, phù hợp với lợi ích của nhân dân và dân tộc.",
        "Đảng lãnh đạo thông qua các nghị quyết, chủ trương, chính sách được thể chế hóa thành pháp luật."
      ],
      analysis: [
        "Đây là đặc điểm riêng của Nhà nước pháp quyền XHCN Việt Nam, khác với các mô hình nhà nước pháp quyền khác.",
        "Sự lãnh đạo của Đảng không mâu thuẫn với nguyên tắc thượng tôn pháp luật, mà được thực hiện trong khuôn khổ Hiến pháp và pháp luật.",
        "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ - đây là mối quan hệ biện chứng trong hệ thống chính trị Việt Nam."
      ],
      examples: {
        correct: [
          "Đảng đề ra đường lối, chủ trương, sau đó được thể chế hóa thành pháp luật thông qua Quốc hội.",
          "Đảng lãnh đạo thông qua đội ngũ đảng viên gương mẫu, tuân thủ pháp luật."
        ],
        incorrect: [
          "Đảng can thiệp trực tiếp vào hoạt động tư pháp, vi phạm nguyên tắc độc lập xét xử.",
          "Lợi dụng vị trí đảng viên để làm trái pháp luật."
        ]
      }
    }
  },
  {
    id: 5,
    title: "Tôn trọng quyền con người",
    subtitle: "Coi con người là chủ thể, trung tâm; bảo đảm quyền tự do, dân chủ",
    image: "/5.png",
    content: {
      theory: [
        "Nhà nước coi con người là chủ thể, là trung tâm của mọi chính sách và hoạt động.",
        "Nhà nước đảm bảo quyền con người, quyền công dân được tôn trọng và bảo vệ.",
        "Quyền đi đôi với Nghĩa vụ: Công dân có quyền nhưng đồng thời có nghĩa vụ chấp hành pháp luật."
      ],
      analysis: [
        "Tự do của người này không được xâm phạm đến tự do, lợi ích hợp pháp của người khác và của cộng đồng.",
        "Trong nền dân chủ XHCN, lợi ích cá nhân phải hài hòa với lợi ích tập thể và lợi ích quốc gia - dân tộc.",
        "Việc đặt cái 'Tôi' cá nhân lên trên pháp luật và cộng đồng là đi ngược lại bản chất của dân chủ XHCN."
      ],
      examples: {
        correct: [
          "Công dân được tự do ngôn luận, nhưng không được vu khống, xúc phạm danh dự người khác.",
          "Công dân được tự do kinh doanh, nhưng phải tuân thủ pháp luật về thuế, môi trường.",
          "Nhà nước bảo vệ quyền được giáo dục, chăm sóc sức khỏe của mọi công dân."
        ],
        incorrect: [
          "Lợi dụng 'quyền tự do' để làm tổn hại đến quyền và lợi ích hợp pháp của người khác.",
          "Đặt lợi ích cá nhân lên trên lợi ích cộng đồng, vi phạm pháp luật."
        ]
      }
    }
  },
  {
    id: 6,
    title: "Tập trung dân chủ",
    subtitle: "Tổ chức bộ máy theo nguyên tắc này, đảm bảo sự chỉ đạo thống nhất từ Trung ương",
    image: "/6.png",
    content: {
      theory: [
        "Tập trung dân chủ là nguyên tắc tổ chức và hoạt động của bộ máy nhà nước và các tổ chức chính trị - xã hội.",
        "Tập trung: Đảm bảo sự chỉ đạo thống nhất từ Trung ương, có kỷ luật, kỷ cương.",
        "Dân chủ: Phát huy tính chủ động, sáng tạo của các cấp, các địa phương, các tổ chức và cá nhân."
      ],
      analysis: [
        "Nguyên tắc này đảm bảo vừa có sự thống nhất trong chỉ đạo, vừa phát huy được tính dân chủ, sáng tạo ở các cấp.",
        "Tập trung không có nghĩa là độc đoán, mà là tập trung trên cơ sở dân chủ, lắng nghe ý kiến của nhân dân.",
        "Dân chủ không có nghĩa là tự do vô kỷ luật, mà là dân chủ trong khuôn khổ pháp luật và kỷ cương."
      ],
      examples: {
        correct: [
          "Trung ương ban hành chính sách chung, các địa phương căn cứ vào tình hình thực tế để triển khai phù hợp.",
          "Các cấp chính quyền lắng nghe ý kiến nhân dân trước khi quyết định các vấn đề quan trọng."
        ],
        incorrect: [
          "Địa phương tự ý làm trái chủ trương của Trung ương mà không có lý do chính đáng.",
          "Lợi dụng 'dân chủ' để không tuân thủ chỉ đạo thống nhất, gây mất đoàn kết."
        ]
      }
    }
  }
];

export default function TheoryPage() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetail | null>(null);

  const openModal = (feature: FeatureDetail) => {
    setSelectedFeature(feature);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedFeature(null);
    document.body.style.overflow = 'unset';
  };

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
            <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
              👆 Nhấp vào từng đặc điểm để xem giải thích chi tiết
            </p>
            
            <div className={styles.features}>
              {featureDetails.map((feature) => (
                <div
                  key={feature.id}
                  className={styles.featureCard}
                  onClick={() => openModal(feature)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.featureNumber}>{feature.id}</div>
                  <h4>{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>
              ))}
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

      {/* Modal Popup */}
      {selectedFeature && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={closeModal}>
              ×
            </button>
            
            <div className={styles.modalHeader}>
              <div className={styles.modalNumber}>{selectedFeature.id}</div>
              <div>
                <h2>{selectedFeature.title}</h2>
                <p className={styles.modalSubtitle}>{selectedFeature.subtitle}</p>
              </div>
            </div>

            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedFeature.image}
                alt={selectedFeature.title}
                width={800}
                height={600}
                className={styles.modalImage}
                priority
              />
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <h3>1. Cơ sở lý luận</h3>
                <ul>
                  {selectedFeature.content.theory.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3>2. Phân tích chi tiết</h3>
                <ul>
                  {selectedFeature.content.analysis.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {selectedFeature.content.examples && (
                <div className={styles.modalSection}>
                  <h3>3. Ví dụ minh họa</h3>
                  
                  {selectedFeature.content.examples.correct && (
                    <div className={styles.exampleBox}>
                      <h4 className={styles.exampleTitleCorrect}>✓ Dân chủ chân chính (Đúng luật)</h4>
                      <ul>
                        {selectedFeature.content.examples.correct.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFeature.content.examples.incorrect && (
                    <div className={styles.exampleBox}>
                      <h4 className={styles.exampleTitleIncorrect}>✗ Lợi dụng dân chủ (Sai luật)</h4>
                      <ul>
                        {selectedFeature.content.examples.incorrect.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
