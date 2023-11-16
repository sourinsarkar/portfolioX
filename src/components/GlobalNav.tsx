import { BellIcon, ScissorsIcon } from "@heroicons/react/24/outline"
import { BellIcon as SolidBellIcon, ScissorsIcon as SolidScissorsIcon } from "@heroicons/react/24/solid"

const GlobalNav: React.FC = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <h1>Sourin <span>Sarkar</span></h1>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
            <SolidBellIcon className="h-6 w-6 text-blue-900" />
            <SolidScissorsIcon className="h-6 w-6 text-blue-900" />
            <ScissorsIcon className="h-6 w-6 text-yellow-300" />
            <BellIcon className="h-6 w-6 text-yellow-300 stroke-1" />
            <BellIcon className="h-6 w-6 text-yellow-300 stroke-2" />
        </div>
    );
}

export default GlobalNav