import { FiPhone, FiClock, FiMapPin, FiMail } from "react-icons/fi";
import { FaVk, FaTelegramPlane } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
     
      <p className="text-sm text-gray-400 mb-3">
        Главная <span className="mx-1">•</span> Контакты
      </p>

      <h1 className="text-3xl font-bold mb-8">Контакты</h1>

     
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        
        <div className="space-y-6">
          <InfoItem
            icon={<FiPhone />}
            title="Отдел продаж:"
            content={
              <>
                <p>7 (831) 418-58-57</p>
                <p>7 (831) 418-58-56</p>
              </>
            }
          />

          <InfoItem
            icon={<FiClock />}
            title="Время работы:"
            content={
              <>
                <p>8:30 - 16:30</p>
                <p className="text-gray-500">сб, вс - выходной</p>
              </>
            }
          />

          <InfoItem
            icon={<FiMapPin />}
            title="Адрес:"
            content={
              <>
                <p>г. Нижний Новгород</p>
                <p>Надежды 1/1</p>
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Проложить маршрут
                </a>
              </>
            }
          />

          <InfoItem
            icon={<FiMail />}
            title="Email:"
            content={
              <a
                href="mailto:pravto@pravto.biz"
                className="text-blue-500 hover:underline"
              >
                pravto@pravto.biz
              </a>
            }
          />

          <div className="flex gap-4 text-blue-600 text-xl">
            <FaVk className="cursor-pointer" />
            <FaTelegramPlane className="cursor-pointer" />
          </div>
        </div>

        
        <div className="w-full h-[400px] rounded overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c6a4c7f6d3a0d8f3d4f7f0c3f0f4d6a&amp;source=constructor"
            frameBorder="0"
          ></iframe>
        </div>
      </div>

    
      <div className="mt-14 space-y-10">
        <Section title="Контакты сотрудников">
          <SubTitle text="Директора" />
          <div className="grid md:grid-cols-2 gap-6">
            <Person name="ЕДАПИН" full="ВИТАЛИЙ ГЕННАДЬЕВИЧ" role="Директор" />
            <Person
              name="ЖДАНКИН"
              full="АЛЕКСЕЙ ВАСИЛЬЕВИЧ"
              role="Коммерческий директор"
            />
          </div>
        </Section>

        <Section>
          <SubTitle text="Отдел продаж" />
          <Grid4>
            <Person
              name="КРАСИЛЬНИКОВА"
              full="ВИКТОРИЯ АЛЕКСАНДРОВНА"
              role="Рук. отдела продаж"
              phone="+7 930 626 08 89"
            />
            <Person
              name="САВУНОВА"
              full="ЕКАТЕРИНА ЕВГЕНЬЕВНА"
              role="Менеджер по продажам"
              phone="+7 904 794 98 82"
            />
            <Person
              name="ГУЛЯЕВА"
              full="НАДЕЖДА АНДРЕЕВНА"
              role="Менеджер по продажам"
              phone="+7 987 559 04 48"
            />
            <Person
              name="МАКАРЕНКОВА"
              full="ЕЛЕНА ВЛАДИМИРОВНА"
              role="Менеджер по продажам"
              phone="+7 (831) 418-58-57"
            />
          </Grid4>
        </Section>

        <Grid4>
          <Section title="Отдел снабжения">
            <Person
              name="ИСАЕВ"
              full="АНДРЕЙ ИГОРЕВИЧ"
              role="Рук. отдела снабжения"
              phone="+7 910 104 92 61"
            />
          </Section>

          <Section title="Транспортный отдел">
            <Person
              name="ЛЕДНЕВ"
              full="ДМИТРИЙ ИГОРЕВИЧ"
              role="Рук. складского комплекса"
              phone="+7 952 779 21 20"
            />
          </Section>

          <Section title="КРО">
            <Person
              name="КУВШИНОВА"
              full="СВЕТЛАНА ВАЛЕРЬЕВНА"
              role="Рук. отдела развития"
              phone="+7 920 295 25 10"
            />
          </Section>

          <Section title="Отдел развития">
            <Person
              name="ЦАРЕВ"
              full="АЛЕКСЕЙ СЕРГЕЕВИЧ"
              role="Рук. отдела развития"
              phone="+7 999 076 36 89"
            />
          </Section>
        </Grid4>
      </div>
    </div>
  );
}


const InfoItem = ({ icon, title, content }) => (
  <div className="flex gap-4">
    <div className="text-red-500 text-xl mt-1">{icon}</div>
    <div>
      <p className="font-semibold">{title}</p>
      <div className="text-gray-700">{content}</div>
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div>
    {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
    {children}
  </div>
);

const SubTitle = ({ text }) => (
  <h4 className="text-red-500 font-semibold mb-4">{text}</h4>
);

const Grid4 = ({ children }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{children}</div>
);

const Person = ({ name, full, role, phone }) => (
  <div className="relative pl-4 border-l-4 border-red-500">
    <p className="font-bold">{name}</p>
    <p className="text-sm">{full}</p>
    <p className="text-red-500 text-sm mb-1">{role}</p>
    {phone && (
      <>
        <p className="text-sm">{phone}</p>
        <p className="text-xs text-gray-500">Viber, WhatsApp, Telegram</p>
      </>
    )}
  </div>
);
