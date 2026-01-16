"use client";
import { useState } from "react";
import { posts, Post } from "../data";
import styles from "./feed.module.css";

interface Result {
  status: "correct" | "wrong";
  msg: string;
}

export default function FeedPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answeredPosts, setAnsweredPosts] = useState<Set<number>>(new Set());

  const handleJudge = (post: Post, judgment: "true" | "false") => {
    setSelectedPost(post);
    const isCorrect =
      (judgment === "true" && post.type === "democratic") ||
      (judgment === "false" && post.type === "violation");

    if (isCorrect) {
      setResult({ status: "correct", msg: "CHÍNH XÁC!" });
      if (!answeredPosts.has(post.id)) {
        setScore((prev) => ({
          correct: prev.correct + 1,
          total: prev.total + 1,
        }));
        setAnsweredPosts((prev) => new Set(prev).add(post.id));
      }
    } else {
      setResult({ status: "wrong", msg: "CHƯA CHÍNH XÁC!" });
      if (!answeredPosts.has(post.id)) {
        setScore((prev) => ({ ...prev, total: prev.total + 1 }));
        setAnsweredPosts((prev) => new Set(prev).add(post.id));
      }
    }
  };

  const closePopup = () => {
    setSelectedPost(null);
    setResult(null);
  };

  const resetScore = () => {
    setScore({ correct: 0, total: 0 });
    setAnsweredPosts(new Set());
  };

  return (
    <main className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1>PHÂN TÍCH TÌNH HUỐNG THỰC TẾ</h1>
          <p>Đánh giá các tình huống trên mạng xã hội: Dân chủ chân chính hay lợi dụng tự do?</p>
        </div>
        <div className={styles.scoreCard}>
          <div className={styles.scoreLabel}>Điểm số của bạn</div>
          <div className={styles.scoreValue}>
            {score.correct}/{score.total}
          </div>
          <button onClick={resetScore} className={styles.resetBtn}>
            Làm lại
          </button>
        </div>
      </div>

      {/* Hướng dẫn */}
      <div className={styles.instruction}>
        <h3>Hướng dẫn</h3>
        <p>
          Đọc từng bài đăng dưới đây và phân tích xem đây là hành vi 
          <strong> dân chủ chân chính</strong> hay <strong>lợi dụng tự do</strong> 
          để vi phạm pháp luật. Nhấn vào nút tương ứng để xem giải thích!
        </p>
      </div>

      {/* Feed */}
      <div className={styles.feed}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postHeader}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>{post.author.charAt(0)}</div>
                <div className={styles.userDetails}>
                  <div className={styles.username}>{post.author}</div>
                  <div className={styles.timestamp}>69 giờ trước</div>
                </div>
              </div>
              <div className={styles.postMenu}>⋯</div>
            </div>

            <div className={styles.postContent}>
              <p>{post.content}</p>
            </div>

            <div className={styles.postActions}>
              <button
                className={`${styles.actionBtn} ${styles.btnLike}`}
                onClick={() => handleJudge(post, "true")}
                disabled={answeredPosts.has(post.id)}
              >
                <span>Dân chủ chân chính</span>
              </button>
              <button
                className={`${styles.actionBtn} ${styles.btnDislike}`}
                onClick={() => handleJudge(post, "false")}
                disabled={answeredPosts.has(post.id)}
              >
                <span>Lợi dụng tự do</span>
              </button>
            </div>

            {answeredPosts.has(post.id) && (
              <div className={styles.answeredBadge}>
                Đã trả lời
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && result && (
        <div className={styles.overlay} onClick={closePopup}>
          <div
            className={`${styles.modal} ${
              result.status === "correct" ? styles.modalCorrect : styles.modalWrong
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closePopup}>
              ×
            </button>

            <div className={styles.resultHeader}>
              <h2>{result.msg}</h2>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.reviewSection}>
                <h4>Tình huống:</h4>
                <div className={styles.reviewPost}>
                  <span className={styles.reviewAvatar}>{selectedPost.author.charAt(0)}</span>
                  <p>&ldquo;{selectedPost.content}&rdquo;</p>
                </div>
              </div>

              <div className={styles.theorySection}>
                <h4>Cơ sở lý luận:</h4>
                <div className={styles.theoryBox}>
                  <strong>{selectedPost.theory}</strong>
                </div>
              </div>

              <div className={styles.explanationSection}>
                <h4>Giải thích chi tiết:</h4>
                <p>{selectedPost.explanation}</p>
              </div>

              <div className={styles.labelSection}>
                <span className={styles.label}>Phân loại: </span>
                <span
                  className={
                    selectedPost.type === "democratic"
                      ? styles.labelGood
                      : styles.labelBad
                  }
                >
                  {selectedPost.type === "democratic"
                    ? "DÂN CHỦ CHÂN CHÍNH"
                    : "LỢI DỤNG DÂN CHỦ"}
                </span>
              </div>
            </div>

            <button onClick={closePopup} className={styles.confirmBtn}>
              Đã hiểu
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
