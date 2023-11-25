import { ChevronDownIcon } from "@heroicons/react/24/outline";

const GlobalNav: React.FC = () => {
  return (
    <div>
      <div className="primary-font flex-generic justify-between">
        <div className="w-full flex-generic">
          <div> 
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
            <ul className="flex-generic list-nav-elements font-medium text-sm">
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
            <div>
              <a href="mailto:Sourin Sarkar <work@sourin.in>" className="leading-none px-4 py-3 rounded-full bg-[#27282C] text-white font-medium text-sm">Reach me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNav;
