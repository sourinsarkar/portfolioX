import { Bars2Icon } from "@heroicons/react/24/outline";
import SourinIcon from "../assets/images/sourin_icon_svg.svg"

// Each element has overall height of 28px.

const Navbar: React.FC = () => {
    return (
        <div className="my-6 leading-none">
            <div className="flex justify-between items-center">
                <div>
                    <div><img src={SourinIcon} alt="Sourin Logo" className="w-8 h-8" /></div>
                </div>

                <div hidden className="mid-lg:block">
                    <ul className="flex">
                        <li className="hover:bg-blueL-1x hover:font-medium px-5 py-2">A brief on me</li>
                        <li className="hover:bg-blueL-1x hover:font-medium px-5 py-2">Skill Set</li>
                        <li className="hover:bg-blueL-1x hover:font-medium px-5 py-2">Bits & Buds</li>
                        <li className="hover:bg-blueL-1x hover:font-medium px-5 py-2">Things I have built</li>
                    </ul>
                </div>

                <div>
                    <button hidden>Contact me</button>
                    <div className="px-3 py-1 rounded-full bg-blueL-1x"><Bars2Icon className="w-6 h-6 text-blue-10x"/></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar