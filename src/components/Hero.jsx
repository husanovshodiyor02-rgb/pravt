import Her from "../assets/img/hero.png";

export default function Hero() {
  return (
    <section
      className="from-gray-800 to-gray-700 text-white mx-33 rounded-[20px]"
      style={{ backgroundImage: `url(${Her})` }}
    >
      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Автозапчасти</h1>
          <p className="text-xl mb-6">
            для автомобилей марок ГАЗ, ВАЗ, КАМАЗ, ПАЗ и УАЗ
          </p>
          <button className="bg-red-600 px-6 py-3 rounded text-white hover:bg-red-700">
            Перейти →
          </button>
        </div>

        
      </div>
    </section>
  );
}
