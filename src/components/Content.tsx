import { useContext } from "react"
import { ChatBubbleOvalLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import LotusImage from "../assets/images/lotus.png"
import HaraDharaImage from "../assets/images/hara_dhara.svg"
import { HznlCtn } from "../utils/Horizontal_Small_Container"
import { RiGithubFill } from "@remixicon/react"
import PrjShowCtn from "../utils/Projects_Showcase_Container"
import { VisibilityContext } from "../context/VisibilityContext"

const Content: React.FC = () => {
    const visibilityContext = useContext(VisibilityContext);

    if(!visibilityContext) {
        throw new Error ("Component must bw used within a VisibilityProvider");
    }

    const { isVisible } = visibilityContext;
    
    return (
        <div>
            {!isVisible && <div>
                {/* Hero */}
                <div>
                    <h1 className="text-center primary-font font-bold text-3.5xl tracking-tight leading-snug text-blue-10x mt-15">Hi there,<br/>Happy to have you.</h1>
                    <p className="text-center sub-font text-blueD-10x mt-5">I am a developer based in India.</p>
                    <div className="mt-8 flex flex-col space-y-2">
                        <div className="flex justify-end">
                            <div className="relative text-sm sub-font leading-tight px-4 py-3 bg-blueL-1x rounded-2xl max-w-fit text-blueD-10x">
                                <div className='absolute right-[-5%] top-[-15%]'>
                                    <ChatBubbleOvalLeftIcon className="w-10 h-10 transform scale-x-[-1] text-blueInk-8x" />
                                </div>
                                <p>Precisely,<br />my interests for now reside<br />around <span className="font-medium text-blue-10x">TypeScript</span> and <span className="font-medium text-blue-10x">JavaScript</span></p>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="text-sm sub-font leading-tight px-4 py-3 bg-blueL-1x rounded-2xl max-w-fit text-blueD-10x">
                                <p>Is that it?</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="text-sm sub-font leading-tight px-4 py-3 bg-blueL-1x rounded-2xl max-w-fit text-blueD-10x">
                                <p><span className="font-medium text-blue-10x">Scroll down</span> for more.</p>
                            </div>
                        </div>
                    </div>
                    <div><img src={LotusImage} alt="Lotus" className="w-45 h-45 mx-auto my-5" /></div>
                    <a href="mailto:Sourin Sarkar <work@sourin.in>"><div className="sub-font font-medium text-lg text-[#EEE] leading-none bg-blueInk-8x py-6 text-center rounded-[20px] shadow-sh_Light mx-auto max-w-[312px]">Connect me</div></a>
                </div>

                {/* Brief */}
                <div id="brief_section">
                    <div className="mt-15">
                        <h1 className="primary-font font-bold text-3.5xl tracking-tight leading-snug text-blue-10x">A brief on me</h1>
                    </div>
                    <div className="mt-5">
                        <p className="sub-font text-blueD-10x">Currently, I am a <span className="font-medium text-blue-10x">Computer Science</span> undergrad. <span className="font-medium text-blue-10x">Design</span> and <span className="font-medium text-blue-10x">development</span> of web apps are two of the things that I am proficient in. I try to present the aesthetics of design via technology, that's where my <span className="font-medium text-blue-10x">expertise</span> lies.</p>
                    </div>
                    <div className="mt-8 flex flex-col space-y-2">
                        <div className="flex justify-start">
                            <div className="relative text-sm sub-font leading-tight pl-6 pr-4 py-3 bg-blueL-1x rounded-2xl max-w-fit text-blueD-10x">
                                <div className='absolute left-[-5%] top-[-15%]'>
                                    <ChatBubbleOvalLeftIcon className="w-10 h-10 text-blueInk-8x" />
                                </div>
                                <p>Any good memory from<br />school days?</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="text-sm sub-font leading-tight px-4 py-3 bg-blueL-1x rounded-2xl max-w-fit text-blueD-10x">
                                <p>Yes, there were many but not<br />everyone gets to be a<br /><span className="font-medium text-blue-10x">school captain</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skill Set */}
                <div id="skill_section">
                    <div className="mt-15">
                        <h1 className="primary-font font-bold text-3.5xl tracking-tight leading-snug text-blue-10x">Skill Set</h1>
                    </div>
                    <div className="mt-5">
                        <p className="sub-font text-blueD-10x">These are the technologies and tools I am <span className="font-medium text-blue-10x">proficient</span> and have hands on experience of practicing them.</p>
                    </div>
                    <div className="my-6">
                        <div className="mt-7 mb-5"><h3 className="primary-font font-bold text-xl tracking-tight leading-snug text-blueInk-8x">Programming languages</h3></div>
                        <div className="flex flex-wrap gap-2">
                            <HznlCtn content="C++" />
                            <HznlCtn content="TypeScript" />
                            <HznlCtn content="JavaScript" />
                            <HznlCtn content="SQL" />
                            <HznlCtn content="HTML" />
                            <HznlCtn content="CSS" />
                        </div>
                        <div className="mt-7 mb-5"><h3 className="primary-font font-bold text-xl tracking-tight leading-snug text-green-8x">Software and technologies</h3></div>
                        <div className="flex flex-wrap gap-2">
                            <HznlCtn content="Next.js" />
                            <HznlCtn content="React.js" />
                            <HznlCtn content="Turborepo" />
                            <HznlCtn content="Node.js" />
                            <HznlCtn content="Express.js" />
                            <HznlCtn content="Postgres" />
                            <HznlCtn content="Prisma" />
                            <HznlCtn content="MongoDB" />
                            <HznlCtn content="Mongoose" />
                            <HznlCtn content="Git" />
                            <HznlCtn content="GitHub" />
                            <HznlCtn content="MySQL" />
                            <HznlCtn content="Postman" />
                            <HznlCtn content="Linux" />
                            <HznlCtn content="Figma" />
                            <HznlCtn content="Vercel" />
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col space-y-2">
                        <div className="flex justify-start">
                            <div className="relative text-sm sub-font leading-tight pl-6 pr-4 py-3 bg-blueL-1x rounded-2xl max-w-fit text-blueD-10x">
                                <div className='absolute left-[-5%] top-[-15%]'>
                                    <ChatBubbleOvalLeftIcon className="w-10 h-10 text-blueInk-8x" />
                                </div>
                                <p>Tell me one <span className="font-medium text-blue-10x">fun fact</span> about<br />any programming <span className="font-medium text-blue-10x">language</span><br />you’ve <span className="font-medium text-blue-10x">mentioned</span>.</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="text-sm sub-font leading-tight px-4 py-3 bg-blueL-1x rounded-2xl max-w-fit text-blueD-10x">
                                <p>How much is <span className="font-medium text-blue-10x">1 + '1' - 1</span>?<br />Confused?<br />That's <span className="font-medium text-blue-10x">JavaScript 😀.</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contributions */}
                <div id="contribution_section">
                    <div>
                        <div className="mt-15">
                            <img src={HaraDharaImage} alt="Hara Dhara" className="w-auto h-12 m-auto" />
                            <p className="text-center sub-font text-blueD-10x mt-5">An initiative taken on a personal capacity to plant a plant.</p>
                        </div>
                        <div className="flex flex-col mt-12">
                            <h3 className="text-center primary-font font-extrabold text-8xl tracking-tight leading-none text-blue-10x">133</h3>
                            <div className="mx-auto mt-3"><HznlCtn content="Planted till date." /></div>
                        </div>
                    </div>
                    <div>
                        <div className="mt-15">
                            <div className="flex justify-center items-center space-x-1">
                                <RiGithubFill size={40} className="text-blue-10x" />
                                <h3 className="primary-font font-bold text-xl tracking-tight leading-snug text-blue-10x">Contributions</h3>
                            </div>
                            <p className="text-center sub-font text-blueD-10x mt-5">This year’s total public contributions on GitHub.</p>
                        </div>
                        <div className="flex flex-col mt-12">
                            <h3 className="text-center primary-font font-extrabold text-8xl tracking-tight leading-none text-blue-10x">328</h3>
                            <div className="mx-auto mt-3">
                                <div>
                                    <a href="https://github.com/sourinsarkar" className="text-sm sub-font leading-none px-3.5 py-2 bg-blue-10x rounded-full max-w-fit text-[#EEE] space-x-1 flex items-center">Take me to Github <span><ChevronRightIcon className="w-5 h-6" /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div id="project_section">
                    <div className="mt-15">
                        <h1 className="primary-font font-bold text-3.5xl tracking-tight leading-snug text-blue-10x">Things<br />I have built</h1>
                    </div>
                    <div className="mt-5">
                        <p className="sub-font text-blueD-10x">These projects have taken days to complete. Don’t just view code but use and experience them.</p>
                    </div>
                    <div className="space-y-8 mt-15">
                        <PrjShowCtn
                        title="Sourin Sarkar"
                        description="A personal address on the web where people can make a visit to get insights about me."
                        siteStatus="Live"
                        siteLink="https://sourin.in"
                        codeBaseLink="https://github.com/sourinsarkar/portfoliox"
                        tags={["React", "TypeScript", "JavaScript", "Tailwind CSS"]} />
                        
                        <PrjShowCtn
                        title="Fontground"
                        description="A playground for designers and web developers to try and test various fonts."
                        siteStatus="Live"
                        siteLink="https://fontground.sourin.in"
                        codeBaseLink="https://github.com/sourinsarkar/fontground"
                        tags={["React", "TypeScript", "JavaScript", "Node JS", "Express JS", "Tailwind CSS"]} />

                        <PrjShowCtn
                        title="Phoenix"
                        description="A search engine supercharged with an AI engine and built on a foundation of publicly available APIs."
                        siteStatus=""
                        siteLink="https://sourin.in"
                        codeBaseLink="https://github.com/sourinsarkar/portfoliox"
                        tags={["React", "TypeScript", "JavaScript", "Node JS", "Express JS", "MongoDB", "Tailwind CSS"]} />
                    </div>
                </div>
            </div>}
        </div>
   );
}

export default Content
