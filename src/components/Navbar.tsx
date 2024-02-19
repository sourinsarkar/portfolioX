import { Bars2Icon } from "@heroicons/react/24/outline";
import SourinIcon from "../assets/images/sourin_icon_svg.svg"
import DevBlueIcon from "../assets/icons/dev_blue_icon_svg.svg"
import DevGreenIcon from "../assets/icons/dev_green_icon_svg.svg"
import DevPinkIcon from "../assets/icons/dev_pink_icon_svg.svg"

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

            {/* Dropdown */}
            <div>
                <div>
                    <ul className="primary-font font-bold text-2xl tracking-tight leading-snug text-blue-10x">
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Skills">Skill Set</a></li>
                        <li><a href="#About">A brief on me</a></li>
                        <li><a href="#Contributions">Contributions</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-sm sub-font">Explore these</p>
                    <ul className="space-y-4">
                        <li className="flex">
                            <div className="flex justify-center items-start"><img src={DevBlueIcon} alt="DevBlueIcon" className="w-7 h-7" /></div>
                            <div>
                                <h4 className="primary-font font-semibold text-xl tracking-tight leading-snug text-blue-10x">Currency</h4>
                                <p className="text-sm sub-font">A tool that you’ll need handy whenever you’re on trips to different country.</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex justify-center items-start"><img src={DevGreenIcon} alt="DevGreenIcon" className="w-7 h-7" /></div>
                            <div>
                                <h4 className="primary-font font-semibold text-xl tracking-tight leading-snug text-blue-10x">Fontground</h4>
                                <p className="text-sm sub-font">A creative platform for designers to try and test different fonts.</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex justify-center items-start"><img src={DevPinkIcon} alt="DevPinkIcon" className="w-7 h-7" /></div>
                            <div>
                                <h4 className="primary-font font-semibold text-xl tracking-tight leading-snug text-blue-10x">Passwords</h4>
                                <p className="text-sm sub-font">Create, save & use strong passwords on the go. Browser extension available.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar