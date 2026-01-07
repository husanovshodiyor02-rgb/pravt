import { useState } from "react";
import Logo from "../assets/img/logo.png";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow text-sm relative z-50">
      {/* TOP BAR */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-4">
          <p className="text-gray-600 hidden md:block">
            ПРОДАЖА ЗАПАСНЫХ ЧАСТЕЙ ГАЗ, ВАЗ, УАЗ, КАМАЗ
          </p>

          <div className="flex items-center gap-6 text-gray-700">
            <p className="flex items-center gap-1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.3586 23.138V27.5894C30.3603 28.0026 30.2761 28.4116 30.1114 28.7902C29.9467 29.1689 29.7051 29.5087 29.4022 29.7881C29.0992 30.0675 28.7416 30.2801 28.3521 30.4125C27.9627 30.5449 27.55 30.5941 27.1406 30.5569C22.5981 30.0608 18.2347 28.5006 14.401 26.0017C10.8343 23.7236 7.81034 20.6841 5.54389 17.0991C3.04909 13.2282 1.49653 8.8211 1.01198 4.23477C0.975093 3.82446 1.02361 3.41092 1.15443 3.02049C1.28526 2.63005 1.49554 2.27128 1.77187 1.967C2.04821 1.66273 2.38455 1.41962 2.75948 1.25316C3.13441 1.0867 3.53972 1.00053 3.9496 1.00014H8.37817C9.09458 0.993057 9.7891 1.24805 10.3323 1.7176C10.8755 2.18714 11.2303 2.8392 11.3306 3.55223C11.5175 4.97675 11.8641 6.37545 12.3639 7.72163C12.5625 8.25271 12.6055 8.82989 12.4877 9.38477C12.37 9.93965 12.0965 10.449 11.6996 10.8524L9.82484 12.7368C11.9263 16.4515 14.9863 19.5272 18.682 21.6394L20.5567 19.755C20.9581 19.3561 21.4648 19.0812 22.0169 18.9628C22.5689 18.8445 23.1431 18.8877 23.6715 19.0873C25.0108 19.5897 26.4024 19.9381 27.8196 20.126C28.5367 20.2277 29.1916 20.5907 29.6597 21.1461C30.1279 21.7014 30.3766 22.4104 30.3586 23.138Z"
                  stroke="#C82132"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              7 (831) 418-58-57
            </p>
            <p className="flex items-center gap-1">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7619 30.6755C23.9147 30.6755 30.5238 24.0324 30.5238 15.8377C30.5238 7.64308 23.9147 1 15.7619 1C7.60913 1 1 7.64308 1 15.8377C1 24.0324 7.60913 30.6755 15.7619 30.6755Z"
                  stroke="#C82132"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.7617 6.93512V15.8378L21.6665 18.8053"
                  stroke="#C82132"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              8:30 - 16:30
            </p>
            <p className="flex items-center gap-1">
              <svg
                width="29"
                height="35"
                viewBox="0 0 29 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.5714 14.354C27.5714 24.7404 14.2857 33.643 14.2857 33.643C14.2857 33.643 1 24.7404 1 14.354C1 10.8123 2.39974 7.41563 4.89129 4.91128C7.38285 2.40693 10.7621 1 14.2857 1C17.8093 1 21.1886 2.40693 23.6801 4.91128C26.1717 7.41563 27.5714 10.8123 27.5714 14.354Z"
                  stroke="#C82132"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.286 18.8052C16.7319 18.8052 18.7146 16.8123 18.7146 14.3539C18.7146 11.8955 16.7319 9.90259 14.286 9.90259C11.8402 9.90259 9.85742 11.8955 9.85742 14.3539C9.85742 16.8123 11.8402 18.8052 14.286 18.8052Z"
                  stroke="#C82132"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              г. Нижний Новгород
            </p>
            <div className="flex items-center">
              <svg
                width="34"
                height="22"
                viewBox="0 0 34 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1H33V20.6129H1V1Z" fill="#D22F27" />
                <path d="M1 1H33V7.70968H1V1Z" fill="white" />
                <path d="M1 7.70966H33V13.9032H1V7.70966Z" fill="#1E50A0" />
                <path
                  d="M1 1H33V20.6129H1V1Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <select>
                <option value="Ru">RU</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={Logo} className="h-12" />

          <button
            onClick={() => setOpen(!open)}
            className="border border-red-600 text-red-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-red-50"
          >
            ☰ КАТАЛОГ
          </button>
        </div>

        <nav className="hidden lg:flex gap-8 font-semibold">
          <a href="#">ГЛАВНАЯ</a>
          <a href="#">О КОМПАНИИ</a>
          <a href="#">ПАРТНЕРАМ</a>
          <a href="#">НОВОСТИ</a>
          <a href="#">КОНТАКТЫ</a>
        </nav>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Menu
              title="Двигатель"
              items={["Картеры", "Насосы", "Клапанные крышки"]}
            />
            <Menu
              title="Система питания"
              items={["Форсунки", "Фильтры", "Насосы"]}
            />
            <Menu
              title="Охлаждение"
              items={["Радиаторы", "Термостаты", "Вентиляторы"]}
            />
            <Menu
              title="Сцепление"
              items={["Диски", "Корзины", "Подшипники"]}
            />
          </div>
        </div>
      )}
    </header>
  );
}

function Menu({ title, items }) {
  return (
    <div>
      <h3 className="font-bold mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {items.map((i, idx) => (
          <li key={idx} className="hover:text-red-600 cursor-pointer">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
