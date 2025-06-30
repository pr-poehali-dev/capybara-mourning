import { useEffect, useState } from "react";

const SadCapybara = () => {
  const [tears, setTears] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTears((prev) => {
        const newTear = Math.random();
        return [...prev.slice(-3), newTear];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Капибара */}
      <div className="text-6xl animate-bounce select-none">🐽</div>

      {/* Анимированные слезы */}
      <div className="absolute top-8 left-8">
        {tears.map((tear, index) => (
          <div
            key={`${tear}-${index}`}
            className="absolute text-blue-400 animate-ping"
            style={{
              left: `${Math.random() * 20}px`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: "3s",
            }}
          >
            💧
          </div>
        ))}
      </div>

      {/* Грустные глаза */}
      <div className="absolute top-4 left-4 text-2xl">😢</div>
    </div>
  );
};

export default SadCapybara;
