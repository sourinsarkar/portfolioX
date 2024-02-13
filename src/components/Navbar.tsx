import { Bars2Icon } from "@heroicons/react/24/outline";
import SourinIcon from "../assets/images/sourin_icon_svg.svg"


const Navbar: React.FC = () => {
    return (
        <div>
            <div>
                <div>
                    <div><img src={SourinIcon} alt="Sourin Logo" /></div>
                </div>
                <div hidden>
                    <ul>
                        <li>A brief on me</li>
                        <li>Skill Set</li>
                        <li>Bits & Buds</li>
                        <li>Things I have built</li>
                    </ul>
                </div>
                <div>
                    <button hidden>Contact me</button>
                    <div><Bars2Icon className="w-6 h-6" /> </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar