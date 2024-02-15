import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/solid";
import LotusImage from "../assets/images/lotus.png"

const Content: React.FC = () => {
    return (
        <div>
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
                <div className="sub-font font-medium text-lg text-[#EEE] leading-none bg-blueInk-8x py-6 text-center rounded-[20px] shadow-sh_Light mx-auto max-w-[312px]">Connect me</div>
            </div>

            <div>
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

            <div>
                <div className="mt-15">
                    <h1 className="primary-font font-bold text-3.5xl tracking-tight leading-snug text-blue-10x">Skill Set</h1>
                </div>
                <div className="mt-5">
                    <p className="sub-font text-blueD-10x">These are the technologies and tools I am <span className="font-medium text-blue-10x">proficient</span> and have hands on experience of practicing them.</p>
                </div>
                <div>
                    <div><h3></h3></div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
   );
}

export default Content