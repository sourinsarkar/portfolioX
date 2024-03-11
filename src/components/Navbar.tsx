import { useContext } from "react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import SourinIcon from "../assets/images/sourin_icon_svg.svg"
import DevBlueIcon from "../assets/icons/dev_blue_icon_svg.svg"
import DevGreenIcon from "../assets/icons/dev_green_icon_svg.svg"
import DevPinkIcon from "../assets/icons/dev_pink_icon_svg.svg"
import { RiGithubFill, RiTwitterFill } from "@remixicon/react";
import { VisibilityContext } from "../context/VisibilityContext";

// Each element has overall height of 28px.
// Dropdown implemented with routes.
    
const Navbar: React.FC = () => {
    const visibilityContext = useContext(VisibilityContext);

    if(!visibilityContext) {
        throw new Error("Navbar must be used within a VisibilityProvider");
    }

    const {isVisible, toggleVisibility} = visibilityContext;
    
    return (
        <div className="my-6 leading-none">
            <div className="flex justify-between items-center">
                <div>
                    <div><img src={SourinIcon} alt="Sourin Logo" className="w-8 h-8 something" /></div>
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
                    <div className="px-3 py-1 rounded-full bg-blueL-1x" onClick={toggleVisibility}><Bars2Icon className="w-6 h-6 text-blue-10x"/></div>
                </div>
            </div>

            {/* Dropdown */}
            {isVisible && <div id="ham-dropdown" className="space-y-8">
                <div className="mt-8">
                    <ul className="primary-font font-bold text-2xl tracking-tight leading-none text-blue-10x space-y-4">
                        <li onClick={toggleVisibility}><a href="./Content#project_section">Projects</a></li>
                        <li onClick={toggleVisibility}><a href="./Content#skill_section">Skill Set</a></li>
                        <li onClick={toggleVisibility}><a href="./Content#brief_section">A brief on me</a></li>
                        <li onClick={toggleVisibility}><a href="./Content#contribution_section">Contributions</a></li>
                    </ul>
                </div>
                <div>
                    <p className="text-sm sub-font text-blueInk-8x font-medium">Explore these</p>
                    <ul className="space-y-4 mt-5">
                        <li>
                            <a className="flex gap-x-2.5" href="" onClick={(event) => event.preventDefault()}>
                                <img src={DevBlueIcon} alt="DevBlueIcon" className="w-7 h-7" />
                                <div>
                                    <h4 className="primary-font font-semibold text-xl tracking-tight leading-sung text-blue-10x flex items-center">Currency <span className="text-xs px-2 py-1.5 leading-none bg-blueD-10x rounded-full text-gray-300 ml-1.5">Coming soon</span></h4>
                                    <p className="text-sm sub-font mt-2">A tool that you’ll need handy whenever you’re on trips to different country.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="flex gap-x-2.5" href="https://fontground.sourin.in">
                                <img src={DevGreenIcon} alt="DevGreenIcon" className="w-7 h-7" />
                                <div>
                                    <h4 className="primary-font font-semibold text-xl tracking-tight leading-sung text-blue-10x">Fontground</h4>
                                    <p className="text-sm sub-font mt-2">A creative platform for designers to try and test different fonts.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a className="flex gap-x-2.5" href="https://safepass.sourin.in">
                                <img src={DevPinkIcon} alt="DevPinkIcon" className="w-7 h-7" />
                                <div>
                                    <h4 className="primary-font font-semibold text-xl tracking-tight leading-sung text-blue-10x">Passwords</h4>
                                    <p className="text-sm sub-font mt-2">Create, save & use strong passwords on the go. Browser extension available.</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3.5">
                        <a href="https://x.com/sourin_inc"><RiTwitterFill className="w-7 h-7 text-blueD-10x" /></a>
                        <a href="https://github.com/sourinsarkar"><RiGithubFill className="w-7 h-7 text-blueD-10x" /></a>
                    </div>
                    <div>
                        <div className="flex items-center"><a href="/resume/resume.pdf" download className="text-sm sub-font leading-none px-3.5 py-2 bg-blueD-10x rounded-lg text-white">Resume</a></div>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Navbar