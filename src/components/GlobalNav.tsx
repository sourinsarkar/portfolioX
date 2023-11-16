import { ChevronDownIcon } from "@heroicons/react/24/outline"
// import { ChevronDown as SolidChevronDown } from "@heroicons/react/24/solid"

const GlobalNav: React.FC = () => {
    return (
        <div>
            <div className="flex-generic justify-between">
                <div>
                    <div className="flex-generic">
                        <div>
                            <h1>Sourin <span>Sarkar</span></h1>
                        </div>
                        <div>
                            <ChevronDownIcon className="h-6 w-6 text-black"/>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <ul className="flex-generic list-elements">
                            <li><a href="/">Projects</a></li>
                            <li><a href="/">Designs</a></li>
                            <li><a href="/">About</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <button>Reach me</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlobalNav