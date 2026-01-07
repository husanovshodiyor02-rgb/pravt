import Img14 from "../assets/img/img14.png";
import Img15 from "../assets/img/img15.png";

export default function CatalogBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-16">
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
    
        <div className="bg-[#f8f8f8] border rounded-lg p-6 flex flex-col justify-between">
          <div className="flex items-start gap-4">
            <div className="w-1 bg-blue-600"></div>
            <h3 className="font-bold text-lg">
              Отопление <br /> и вентиляция
            </h3>
          </div>

          <img src={Img14} className="mt-6 opacity-60" />
        </div>

    
        <div className="md:col-span-2 bg-[#c83642] rounded-lg p-8 flex flex-col justify-between text-white relative overflow-hidden">
          <h2 className="text-3xl font-bold">Каталог запасных частей</h2>

          <button className="flex items-center gap-2 font-semibold">
            Перейти →
          </button>

          <div className="absolute right-0 bottom-0 opacity-20 text-[180px] leading-none font-bold">
            <img src={Img15} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
