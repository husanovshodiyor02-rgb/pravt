import Img1 from "../assets/img/img1.png";
import Img2 from "../assets/img/img2.png";
import Img3 from "../assets/img/img3.png";
import Img4 from "../assets/img/img4.png";
import Img5 from "../assets/img/img5.png";
import Img6 from "../assets/img/img6.png";
import Img7 from "../assets/img/img7.png";
import Img8 from "../assets/img/img8.png";
import Img9 from "../assets/img/img9.png";
import Img10 from "../assets/img/img10.png";
import Img11 from "../assets/img/img11.png";
import Img12 from "../assets/img/img12.png";

const data = [
  {
    title: "Двигатель",
    color: "border-orange-500",
    img: Img1,
    list: ["Картеры масляные", "Крышки клапанов", "Насосы масляные"],
  },
  {
    title: "Система питания",
    color: "border-orange-400",
    img: Img2,
    list: ["Форсунки", "Фильтры", "Топливные насосы"],
  },
  {
    title: "Система охлаждения",
    color: "border-red-500",
    img: Img3,
    list: ["Радиаторы", "Термостаты", "Вентиляторы"],
  },
  {
    title: "Сцепление",
    color: "border-green-500",
    img: Img4,
    list: ["Диски сцепления", "Корзины", "Выжимные подшипники"],
  },
  {
    title: "Коробка передач",
    color: "border-green-500",
    img: Img5,
    list: ["Картеры масляные", "Крышки клапанов", "Насосы масляные"],
  },
  {
    title: "Карданный вал",
    color: "border-green-700",
    img: Img6,
    list: ["Форсунки", "Фильтры", "Топливные насосы"],
  },
  {
    title: "Мост передний и задний",
    color: "border-pink-500",
    img: Img7,
    list: ["Радиаторы", "Термостаты", "Вентиляторы"],
  },
  {
    title: "Подвеска",
    color: "border-red-500",
    img: Img8,
    list: ["Диски сцепления", "Корзины", "Выжимные подшипники"],
  },
  {
    title: "Колеса и ступицы",
    color: "border-red-500",
    img: Img9,
    list: ["Картеры масляные", "Крышки клапанов", "Насосы масляные"],
  },
  {
    title: "Тормоза",
    color: "border-blue-500",
    img: Img10,
    list: ["Форсунки", "Фильтры", "Топливные насосы"],
  },
  {
    title: "Рулевое управление",
    color: "border-blue-300",
    img: Img11,
    list: ["Радиаторы", "Термостаты", "Вентиляторы"],
  },
  {
    title: "Электро-оборудование",
    color: "border-blue-600",
    img: Img12,
    list: ["Диски сцепления", "Корзины", "Выжимные подшипники"],
  },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-10">
        Продажа запасных частей для авто
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className={`relative border-l-4 ${item.color} bg-[#f8f8f8] rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col justify-between`}
          >
            <div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                {item.list.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-end justify-between mt-6">
              <button className="text-red-600 font-semibold flex items-center gap-1">
                Перейти →
              </button>
              <img
                src={item.img}
                className="h-24 opacity-40 pointer-events-none select-none"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
