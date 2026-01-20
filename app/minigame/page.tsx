"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./minigame.module.css";

interface Question {
  id: number;
  question: string;
  answers: string[]; // Có thể có nhiều đáp án đúng
  hint: string;
  imagePath: string;
}

const questions: Question[] = [
  {
    id: 1,
    question:
      "Thuật ngữ Dân chủ ra đời vào khoảng thế kỷ thứ V TCN, được hiểu là (...) của nhân dân.",
    answers: ["quyền lực"],
    hint: "Gợi ý: Điều mà nhân dân nắm giữ trong một nền dân chủ (8 chữ cái)",
    imagePath: "/images/minigame/q1.png",
  },
  {
    id: 2,
    question:
      "Trong chủ nghĩa Mác - Lênin, dân chủ không chỉ là một giá trị nhân văn mà còn là một (...) nhà nước.",
    answers: ["hình thái"],
    hint: "Gợi ý: Dạng/loại của nhà nước (8 chữ cái)",
    imagePath: "/images/minigame/q2.png",
  },
  {
    id: 3,
    question:
      "Khác với các nền dân chủ trước đó, dân chủ xã hội chủ nghĩa mang bản chất của (...).",
    answers: ["giai cấp công nhân"],
    hint: "Gợi ý: Lực lượng lãnh đạo cách mạng XHCN (15 chữ cái)",
    imagePath: "/images/minigame/q3.png",
  },
  {
    id: 4,
    question:
      "Về mặt kinh tế, nền dân chủ XHCN dựa trên chế độ (...) về tư liệu sản xuất chủ yếu.",
    answers: ["công hữu"],
    hint: "Gợi ý: Trái ngược với tư hữu (7 chữ cái)",
    imagePath: "/images/minigame/q4.png",
  },
  {
    id: 5,
    question:
      "Dân chủ xã hội chủ nghĩa là nền dân chủ (...) nhất trong lịch sử, vì nó phục vụ lợi ích của đa số.",
    answers: ["rộng rãi"],
    hint: "Gợi ý: Mở rộng, bao trùm (7 chữ cái)",
    imagePath: "/images/minigame/q5.png",
  },
  {
    id: 6,
    question:
      "Nhà nước xã hội chủ nghĩa là (...) quan trọng nhất để thực thi quyền làm chủ của nhân dân.",
    answers: ["công cụ"],
    hint: "Gợi ý: Phương tiện để thực hiện mục đích (6 chữ cái)",
    imagePath: "/images/minigame/q6.png",
  },
  {
    id: 7,
    question:
      "Hình thức dân chủ mà nhân dân bầu ra những người đại diện thay mặt mình quyết định các công việc chung gọi là dân chủ (...).",
    answers: ["gián tiếp"],
    hint: "Gợi ý: Không trực tiếp, thông qua người khác (8 chữ cái)",
    imagePath: "/images/minigame/q7.png",
  },
  {
    id: 8,
    question:
      "Sự khác biệt lớn nhất là dân chủ XHCN hướng tới sự giải phóng con người một cách (...).",
    answers: ["toàn diện"],
    hint: "Gợi ý: Đầy đủ mọi mặt (8 chữ cái)",
    imagePath: "/images/minigame/q8.png",
  },
  {
    id: 9,
    question:
      "Trong mối quan hệ giữa dân chủ và nhà nước, dân chủ là (...) chính trị của việc tổ chức và hoạt động của nhà nước.",
    answers: ["cơ sở"],
    hint: "Gợi ý: Nền tảng, gốc rễ (4 chữ cái)",
    imagePath: "/images/minigame/q9.png",
  },
  {
    id: 10,
    question:
      'Lênin từng khẳng định: "Dân chủ xã hội chủ nghĩa gấp triệu lần dân chủ (...)".',
    answers: ["tư sản"],
    hint: "Gợi ý: Giai cấp sở hữu tư liệu sản xuất trong CNTB (5 chữ cái)",
    imagePath: "/images/minigame/q10.png",
  },
];

export default function MinigamePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    { questionId: number; correct: boolean; userAnswer: string }[]
  >([]);

  const current = questions[currentQuestion];

  const checkAnswer = () => {
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const correct = current.answers.some(
      (ans) => ans.toLowerCase() === normalizedUserAnswer
    );

    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setScore((prev) => prev + 1);
    }

    setAnsweredQuestions((prev) => [
      ...prev,
      {
        questionId: current.id,
        correct,
        userAnswer: userAnswer.trim(),
      },
    ]);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setUserAnswer("");
      setShowResult(false);
      setIsCorrect(null);
      setShowHint(false);
    } else {
      setGameFinished(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setUserAnswer("");
    setScore(0);
    setShowResult(false);
    setIsCorrect(null);
    setShowHint(false);
    setGameFinished(false);
    setAnsweredQuestions([]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !showResult && userAnswer.trim()) {
      checkAnswer();
    } else if (e.key === "Enter" && showResult) {
      nextQuestion();
    }
  };

  if (gameFinished) {
    return (
      <div className={styles.container}>
        <div className={styles.finishCard}>
          <div className={styles.trophy}>🏆</div>
          <h1 className={styles.finishTitle}>Hoàn thành!</h1>
          <div className={styles.finalScore}>
            <span className={styles.scoreNumber}>{score}</span>
            <span className={styles.scoreTotal}>/ {questions.length}</span>
          </div>
          <p className={styles.scoreMessage}>
            {score === questions.length
              ? "Xuất sắc! Bạn đã trả lời đúng tất cả!"
              : score >= questions.length * 0.7
                ? "Tuyệt vời! Bạn nắm khá vững kiến thức!"
                : score >= questions.length * 0.5
                  ? "Khá tốt! Hãy ôn tập thêm nhé!"
                  : "Cố gắng lên! Hãy xem lại lý thuyết nhé!"}
          </p>

          <div className={styles.reviewSection}>
            <h3>Kết quả chi tiết:</h3>
            <div className={styles.reviewList}>
              {answeredQuestions.map((item, index) => (
                <div
                  key={item.questionId}
                  className={`${styles.reviewItem} ${item.correct ? styles.reviewCorrect : styles.reviewWrong}`}
                >
                  <span className={styles.reviewNumber}>Câu {index + 1}</span>
                  <span className={styles.reviewIcon}>
                    {item.correct ? "✓" : "✗"}
                  </span>
                  <span className={styles.reviewAnswer}>
                    {item.correct
                      ? item.userAnswer
                      : `${item.userAnswer} → ${questions[index].answers[0]}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.restartButton} onClick={restartGame}>
            <span>🔄</span> Chơi lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header với tiến trình */}
      <div className={styles.header}>
        <div className={styles.progressInfo}>
          <span className={styles.questionCounter}>
            Câu {currentQuestion + 1}/{questions.length}
          </span>
          <span className={styles.scoreDisplay}>🎯 Điểm: {score}</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Card câu hỏi */}
      <div className={styles.questionCard}>
        {/* Hình ảnh gợi ý */}
        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <Image
              src={current.imagePath}
              alt={`Gợi ý câu ${current.id}`}
              fill
              className={styles.hintImage}
            />
          </div>
        </div>

        {/* Câu hỏi */}
        <div className={styles.questionSection}>
          <p className={styles.questionText}>{current.question}</p>

          {/* Nút gợi ý */}
          <button
            className={styles.hintButton}
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? "🙈 Ẩn gợi ý" : "💡 Xem gợi ý"}
          </button>

          {showHint && <p className={styles.hintText}>{current.hint}</p>}
        </div>

        {/* Input trả lời */}
        <div className={styles.answerSection}>
          <input
            type="text"
            className={`${styles.answerInput} ${
              showResult
                ? isCorrect
                  ? styles.inputCorrect
                  : styles.inputWrong
                : ""
            }`}
            placeholder="Nhập đáp án của bạn..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={showResult}
            autoFocus
          />

          {/* Kết quả */}
          {showResult && (
            <div
              className={`${styles.resultBox} ${isCorrect ? styles.correct : styles.wrong}`}
            >
              {isCorrect ? (
                <>
                  <span className={styles.resultIcon}>✓</span>
                  <span>Chính xác!</span>
                </>
              ) : (
                <>
                  <span className={styles.resultIcon}>✗</span>
                  <span>
                    Sai rồi! Đáp án đúng:{" "}
                    <strong>{current.answers.join(" / ")}</strong>
                  </span>
                </>
              )}
            </div>
          )}

          {/* Nút hành động */}
          <div className={styles.actionButtons}>
            {!showResult ? (
              <button
                className={styles.submitButton}
                onClick={checkAnswer}
                disabled={!userAnswer.trim()}
              >
                Kiểm tra
              </button>
            ) : (
              <button className={styles.nextButton} onClick={nextQuestion}>
                {currentQuestion < questions.length - 1
                  ? "Câu tiếp theo →"
                  : "Xem kết quả 🎉"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
