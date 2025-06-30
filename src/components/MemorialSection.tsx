import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MemorialSection = () => {
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
    "МастерКирки",
    "ЗолотойКрот",
    "СияющийМайнер",
    "ЯнтарныйШахтер",
    "ПчелиныйШахтер",
    "ЗолотойВетер",
    "СолнечныйЛуч",
    "ЖелтыйВсадник",
    "КукурузныйШахтер",
    "ЗолотойГром",
    "СияющаяКирка",
    "ЖелтыйМолот",
    "СолнечныйДиск",
    "ЗолотойПоток",
    "ЯркийФонарь",
    "ЖелтыйАлмаз",
    "МедовыйКот",
    "ЗолотойЗакат",
    "СолнечныйВоин",
    "ЖелтыйДракон",
    "ЗолотойПесок",
    "СияющийКристалл",
    "ЖелтыйТитан",
    "СолнечныйМеч",
    "ЗолотойВихрь",
    "ЯркийЩит",
    "ЖелтыйФеникс",
    "СолнечныйОгонь",
    "ЗолотойМиф",
    "СияющийКлинок",
    "ЖелтыйКомет",
    "СолнечныйДух",
    "ЗолотойСтрелок",
    "ЯркийРыцарь",
    "ЖелтыйВолшебник",
    "СолнечныйМаг",
    "ЗолотойЧемпион",
    "СияющийВождь",
    "ЖелтыйЛегенда",
    "СолнечныйГерой",
    "ЗолотойИмператор",
    "ЯркийКороль",
    "ЖелтыйБог",
    "СолнечныйВладыка",
    "ЗолотойТрон",
    "СияющаяКорона",
    "ЖелтыйСкипетр",
    "СолнечныйОрден",
    "ЗолотойРассвет",
    "ЯркоеУтро",
    "ЖелтыйПолдень",
    "СолнечныйВечер",
    "ЗолотойЗвездопад",
    "СияющаяКомета",
    "ЖелтаяМолния",
    "СолнечныйГром",
    "ЗолотойВулкан",
    "ЯркийМетеор",
    "ЖелтыйТорнадо",
    "СолнечнаяБуря",
    "ЗолотойШторм",
    "СияющийУраган",
    "ЖелтыйЦунами",
    "СолнечноеЗатмение",
  ];

  return (
    <div className="space-y-8">
      {/* Основная мемориальная карточка */}
      <Card className="bg-gradient-to-br from-white/90 to-yellow-50/90 backdrop-blur-sm border-yellow-300 shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-400">
              <Icon name="Pickaxe" size={48} className="text-yellow-600" />
            </div>
          </div>
          <CardTitle className="text-4xl font-montserrat text-yellow-800 mb-2">
            Группа "Шахтеры Желтые"
          </CardTitle>
          <p className="text-lg text-yellow-700 font-open-sans italic">
            "Мы копали не только землю, но и золотую дружбу" 💛
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-xl text-slate-700 font-open-sans mb-4">
              В память о легендарной группе Pony Town, которая объединила сердца
              многих игроков в желтых касках
            </p>
            <div className="flex justify-center gap-2 text-2xl mb-6">
              🕯️ 💛 💔 💛 🕯️
            </div>
          </div>

          {/* Статистика группы */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/60 p-4 rounded-lg text-center border border-yellow-300">
              <div className="text-3xl font-bold text-yellow-600 font-montserrat">
                {participants.length}
              </div>
              <div className="text-sm text-slate-600 font-open-sans">
                Участников
              </div>
            </div>
            <div className="bg-white/60 p-4 rounded-lg text-center border border-yellow-300">
              <div className="text-3xl font-bold text-yellow-600 font-montserrat">
                ∞
              </div>
              <div className="text-sm text-slate-600 font-open-sans">
                Воспоминаний
              </div>
            </div>
            <div className="bg-white/60 p-4 rounded-lg text-center border border-yellow-300">
              <div className="text-3xl font-bold text-yellow-600 font-montserrat">
                💎
              </div>
              <div className="text-sm text-slate-600 font-open-sans">
                Найдено дружбы
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Список участников */}
      <Card className="bg-white/80 backdrop-blur-sm border-yellow-300">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat text-yellow-800 flex items-center gap-2">
            <Icon name="Users" size={24} />
            Вечная память участникам
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-h-96 overflow-y-auto">
            {participants.map((name, index) => (
              <div
                key={name}
                className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-center hover:bg-yellow-100 transition-colors"
              >
                <div className="text-sm font-open-sans text-slate-700">
                  {name}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Участник #{index + 1}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4 text-sm text-yellow-700 font-open-sans">
            Всего участников: {participants.length} золотых душ 💛
          </div>
        </CardContent>
      </Card>

      {/* Книга памяти */}
      <Card className="bg-white/80 backdrop-blur-sm border-yellow-300">
        <CardHeader>
          <CardTitle className="text-2xl font-montserrat text-yellow-800 flex items-center gap-2">
            <Icon name="BookOpen" size={24} />
            Книга памяти
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="italic text-slate-700 font-open-sans">
              "Шахтеры Желтые были не просто группой - они были золотой семьей.
              Каждый день мы собирались в желтых касках, копали вместе, смеялись
              и строили планы на будущее..."
            </p>
            <div className="text-right text-sm text-slate-500 mt-2">
              - Анонимный участник
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="font-open-sans border-yellow-300 text-yellow-700 hover:bg-yellow-50"
            >
              <Icon name="PenTool" size={16} className="mr-2" />
              Оставить воспоминание
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MemorialSection;
