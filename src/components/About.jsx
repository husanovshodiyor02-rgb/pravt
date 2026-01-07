import Im1 from "../assets/img/im1.png";


export default function About() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img src={Im1} className="w-full rounded-lg shadow" />

          <div className="flex gap-2 mt-4">
            <span className="w-6 h-0.75 bg-red-600 rounded"></span>
            <span className="w-6 h-0.75 bg-gray-300 rounded"></span>
            <span className="w-6 h-0.75 bg-gray-300 rounded"></span>
            <span className="w-6 h-0.75 bg-gray-300 rounded"></span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">О компании</h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            На протяжении 6 лет компания «Автомастер» занимается поставками
            автозапчастей ГАЗ, УАЗ, ПАЗ, ВАЗ, Камаз. Мы специализируемся на
            продвижение своего бренда ТМ PRAVT – сертифицированная торговая
            марка российской компании.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            На сегодняшний день ассортимент нашей продукции более 600 позиций.
            Производственные мощности, партнеры компании расположены на
            территории КНР.
          </p>

          <button className="text-red-600 font-semibold flex items-center gap-2">
            Подробнее →
          </button>
        </div>
      </div>
    </section>
  );
}
