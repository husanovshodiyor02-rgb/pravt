import Av1 from "../assets/img/av1.png";
import Av2 from "../assets/img/av2.png";
import Av3 from "../assets/img/av3.png";
import Av4 from "../assets/img/av4.png";
import Av5 from "../assets/img/av5.png";

import N1 from "../assets/img/n1.png";
import N2 from "../assets/img/n2.png";
import N3 from "../assets/img/n3.png";

export default function News() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
      
        <div className="flex overflow-x-auto gap-6 mb-10 justify-center md:justify-between">
          {[Av1, Av2, Av3, Av4, Av5].map((i, idx) => (
            <img key={idx} src={i} className="h-14 opacity-80" />
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-2">Новости</h2>
        <p className="text-gray-500 max-w-xl mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          lorem placerat molestie arcu placerat.
        </p>

        
        <div className="flex overflow-x-auto gap-8">
          <Card
            img={N1}
            title="Новинки амортизаторы"
            date="24.06.2022"
            className="w-110 shrink-0"
          />
          <Card
            img={N2}
            title="Ожидаемое поступление на склад — вакуумный усилитель тормозов"
            date="24.06.2022"
            className="w-110 shrink-0"
          />
          <Card
            img={N3}
            title="Вновь на складе"
            date="24.06.2022"
            className="w-110 shrink-0"
          />
        </div>
      </div>
    </section>
  );
}

function Card({ img, title, date }) {
  return (
    <div>
      <div className="bg-white rounded-lg overflow-hidden mb-4">
        <img src={img} className="w-full h-52 object-cover" />
      </div>

      <h3 className="font-bold text-lg mb-3 leading-snug">{title}</h3>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <span>{date}</span>
        <button className="text-red-600 font-semibold flex items-center gap-1">
          Подробнее →
        </button>
      </div>
    </div>
  );
}
