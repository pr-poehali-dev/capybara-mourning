import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import SadCapybara from "@/components/SadCapybara";
import MemorialSection from "@/components/MemorialSection";
import MemoryGame from "@/components/MemoryGame";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("memorial");

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-orange-50 to-yellow-200">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <div className="flex justify-center items-center gap-4 mb-6">
          <SadCapybara />
          <div>
            <h1 className="text-5xl font-bold text-yellow-800 mb-2 font-montserrat">
              В память о Шахтерах Желтых
            </h1>
            <p className="text-xl text-yellow-700 font-open-sans">
              Pony Town помнит своих желтых героев 💛💔
            </p>
          </div>
          <SadCapybara />
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-4 mb-12 px-4">
        <Button
          variant={currentSection === "memorial" ? "default" : "outline"}
          onClick={() => setCurrentSection("memorial")}
          className="font-open-sans"
        >
          <Icon name="Heart" size={16} className="mr-2" />
          Мемориал
        </Button>
        <Button
          variant={currentSection === "history" ? "default" : "outline"}
          onClick={() => setCurrentSection("history")}
          className="font-open-sans"
        >
          <Icon name="BookOpen" size={16} className="mr-2" />
          История
        </Button>
        <Button
          variant={currentSection === "game" ? "default" : "outline"}
          onClick={() => setCurrentSection("game")}
          className="font-open-sans"
        >
          <Icon name="Gamepad2" size={16} className="mr-2" />
          Игра памяти
        </Button>
        <Button
          variant={currentSection === "gallery" ? "default" : "outline"}
          onClick={() => setCurrentSection("gallery")}
          className="font-open-sans"
        >
          <Icon name="Image" size={16} className="mr-2" />
          Галерея
        </Button>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        {currentSection === "memorial" && <MemorialSection />}

        {currentSection === "history" && (
          <Card className="bg-white/80 backdrop-blur-sm border-yellow-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-montserrat text-yellow-800">
                История группы Шахтеры Желтые
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 font-open-sans">
              <p className="text-lg text-slate-700">
                Группа "Шахтеры Желтые" была легендарным сообществом в Pony
                Town, которое объединяло множество игроков в желтых касках
                вокруг общих интересов и золотой дружбы...
              </p>
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <p className="italic text-slate-600">
                  "Мы были не просто группой - мы были семьей в желтых
                  касках..." - один из участников
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {currentSection === "game" && <MemoryGame />}

        {currentSection === "gallery" && (
          <Card className="bg-white/80 backdrop-blur-sm border-yellow-300">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-montserrat text-yellow-800">
                Галерея воспоминаний
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-yellow-50 p-4 rounded-lg text-center"
                >
                  <div className="w-full h-32 bg-yellow-200 rounded mb-2 flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-yellow-500" />
                  </div>
                  <p className="text-sm text-slate-600 font-open-sans">
                    Воспоминание #{i}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </main>

      {/* Floating Capybaras */}
      <div className="fixed bottom-4 left-4">
        <SadCapybara />
      </div>
      <div className="fixed bottom-4 right-4">
        <SadCapybara />
      </div>
    </div>
  );
};

export default Index;
