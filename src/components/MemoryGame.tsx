import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GameCard {
  id: number;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGame = () => {
  const participants = [
    "ЗолотойШахтер",
    "КапитанЖелтый",
    "ГлубокийКопатель",
    "АлмазныйИскатель",
    "ЖелтаяКаска",
    "СолнечныйМайнер",
    "Золотодобытчик",
    "СветлыйШахтер",
    "ЯркийКопатель",
    "МедовыйМайнер",
    "ЛимонныйШахтер",
    "БананШахтер",
    "КанарейкаШахтер",
    "СолнцеШахтер",
    "ЗолотойРудокоп",
    "ЖелтыйГигант",
  ];

  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    const selectedParticipants = participants.slice(0, 8);
    const gameCards = [...selectedParticipants, ...selectedParticipants]
      .map((name, index) => ({
        id: index,
        name,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(gameCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setGameStarted(true);
    setScore(1000);
    setMoves(0);
  };

  const flipCard = (cardId: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(cardId)) return;
    if (cards[cardId].isMatched) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    setCards((prev) =>
      prev.map((card) =>
        card.id === cardId ? { ...card, isFlipped: true } : card,
      ),
    );

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);
      setScore((prev) => Math.max(0, prev - 10));

      setTimeout(() => {
        const [firstId, secondId] = newFlippedCards;
        const firstCard = cards[firstId];
        const secondCard = cards[secondId];

        if (firstCard.name === secondCard.name) {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isMatched: true }
                : card,
            ),
          );
          setMatchedPairs((prev) => prev + 1);
          setScore((prev) => prev + 100);
        } else {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card,
            ),
          );
        }
        setFlippedCards([]);
      }, 1000);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setCards([]);
    setFlippedCards([]);
    setMatchedPairs(0);
    setScore(0);
    setMoves(0);
  };

  const isGameComplete = matchedPairs === 8;

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-yellow-300">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-montserrat text-yellow-800">
          Игра "Собери всех Шахтеров Желтых"
        </CardTitle>
        <div className="flex justify-center gap-8 mt-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{score}</div>
            <div className="text-sm text-slate-600">Очки</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{moves}</div>
            <div className="text-sm text-slate-600">Ходы</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {matchedPairs}/8
            </div>
            <div className="text-sm text-slate-600">Пары</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {!gameStarted ? (
          <div className="text-center space-y-4">
            <p className="text-lg text-slate-700 font-open-sans">
              Помоги капибарам собрать всех участников группы Шахтеры Желтые!
              Найди одинаковые пары участников, переворачивая карточки.
            </p>
            <div className="bg-yellow-100 p-6 rounded-lg">
              <Icon
                name="Pickaxe"
                size={64}
                className="mx-auto mb-4 text-yellow-600"
              />
              <p className="text-slate-600 mb-4">
                Готов начать копать воспоминания?
              </p>
              <Button
                onClick={initializeGame}
                className="bg-yellow-500 hover:bg-yellow-600 font-open-sans"
              >
                <Icon name="Play" size={16} className="mr-2" />
                Начать игру
              </Button>
            </div>
          </div>
        ) : isGameComplete ? (
          <div className="text-center space-y-4">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-lg">
              <Icon
                name="Trophy"
                size={64}
                className="mx-auto mb-4 text-yellow-600"
              />
              <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                Поздравляем!
              </h3>
              <p className="text-lg text-slate-700 mb-4">
                Вы собрали всех Шахтеров Желтых!
              </p>
              <p className="text-lg text-yellow-700 font-semibold mb-4">
                Финальный счет: {score} очков за {moves} ходов
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={resetGame}
                  variant="outline"
                  className="font-open-sans"
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Играть снова
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-center gap-2">
              <Button
                onClick={resetGame}
                variant="outline"
                size="sm"
                className="font-open-sans"
              >
                <Icon name="RotateCcw" size={16} className="mr-2" />
                Новая игра
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`
                    aspect-square bg-gradient-to-br cursor-pointer rounded-lg border-2 transition-all duration-300 
                    ${
                      card.isMatched
                        ? "from-green-200 to-green-300 border-green-400"
                        : card.isFlipped
                          ? "from-yellow-200 to-yellow-300 border-yellow-400"
                          : "from-yellow-100 to-orange-100 border-yellow-300 hover:border-yellow-400"
                    }
                  `}
                  onClick={() => flipCard(card.id)}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-2">
                    {card.isFlipped || card.isMatched ? (
                      <>
                        <Icon
                          name="HardHat"
                          size={24}
                          className={
                            card.isMatched
                              ? "text-green-600"
                              : "text-yellow-600"
                          }
                        />
                        <span
                          className={`text-xs text-center font-medium mt-1 ${
                            card.isMatched
                              ? "text-green-700"
                              : "text-yellow-700"
                          }`}
                        >
                          {card.name}
                        </span>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon
                          name="Package"
                          size={32}
                          className="text-yellow-400"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MemoryGame;
