import { ChevronDownIcon } from "@heroicons/react/24/solid";

const GlobalNav: React.FC = () => {
  return (
    <div>
      <div className="primary-font flex-generic justify-between">
        <div className="w-full flex-generic">
          <div className="flex items-center gap-1"> 
            <div>
              <h1 className="font-bold xl:text-xl">
                Sourin <span className="font-medium">Sarkar</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full hidden xl:block">
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

        <div className="w-full xl:hidden">
          <div className="flex justify-end">
            <div className="sm:hidden">
              <ChevronDownIcon className="h-4 w-4 text-primary-color" stroke="currentColor" stroke-width="0.8" />
            </div>
          </div>
        </div>

        <div className="w-full hidden xl:block">
          <div className="flex-generic justify-end">
            <div className="flex items-center justify-center">
              <a href="mailto:Sourin Sarkar <work@sourin.in>" className="leading-none px-4 py-1.5 xl:px-4 xl:py-3 text-sm rounded-full bg-primary-color text-white ">Reach me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalNav;
