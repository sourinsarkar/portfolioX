import { ChevronDownIcon } from "@heroicons/react/24/outline";

const GlobalNav: React.FC = () => {
  return (
    <div>
      <div className="primary-font flex-generic justify-between">
        <div className="w-full flex-generic">
          <div className="bg-white ">
            <div>
              <h1 className="font-bold text-xl">
                Sourin <span className="font-medium">Sarkar</span>
              </h1>
            </div>
            <div className="sm:hidden">
              <ChevronDownIcon className="h-6 w-6 text-black" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex-generic justify-center">
            <ul className="flex-generic list-elements bg-white">
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Designs</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <div className="flex-generic justify-end">
            <div className="text-sm px-3 py-2 text-[#0055ff] bg-[#C9DBFF] rounded-lg font-semibold">
              <button>Reach me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNav;
