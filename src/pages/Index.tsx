import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import SadCapybara from "@/components/SadCapybara";
import MemorialSection from "@/components/MemorialSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("memorial");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-purple-50 to-slate-200">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <div className="flex justify-center items-center gap-4 mb-6">
          <SadCapybara />
          <div>
            <h1 className="text-5xl font-bold text-slate-800 mb-2 font-montserrat">
              В память о Шахтерах
            </h1>
            <p className="text-xl text-slate-600 font-open-sans">
              Pony Town помнит своих героев 💔
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
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-montserrat text-slate-800">
                История группы Шахтеры
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 font-open-sans">
              <p className="text-lg text-slate-700">
                Группа "Шахтеры" была легендарным сообществом в Pony Town,
                которое объединяло множество игроков вокруг общих интересов и
                дружбы...
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-300">
                <p className="italic text-slate-600">
                  "Мы были не просто группой - мы были семьей..." - один из
                  участников
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {currentSection === "game" && (
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-montserrat text-slate-800">
                Игра "Собери всех Шахтеров"
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-slate-700 font-open-sans">
                Помоги капибарам собрать всех участников группы в памятные
                коробки
              </p>
              <div className="bg-purple-100 p-8 rounded-lg">
                <Icon
                  name="Package"
                  size={64}
                  className="mx-auto mb-4 text-purple-600"
                />
                <p className="text-slate-600 mb-4">Игра скоро будет доступна</p>
                <Button className="font-open-sans">
                  <Icon name="Play" size={16} className="mr-2" />
                  Начать игру
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentSection === "gallery" && (
          <Card className="bg-white/80 backdrop-blur-sm border-purple-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-montserrat text-slate-800">
                Галерея воспоминаний
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-purple-50 p-4 rounded-lg text-center"
                >
                  <div className="w-full h-32 bg-purple-200 rounded mb-2 flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-purple-400" />
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
