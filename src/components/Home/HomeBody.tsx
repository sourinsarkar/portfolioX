import PrimeImage from '/images/prime-image.jpg'
import CarGif from '/gif/forest-gif.gif'
import "remixicon/fonts/remixicon.css"
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const HomeBody: React.FC = () => {
    return (
        <div className="flex justify-between flex-wrap primary-font">
            <div className="w-full flex justify-center items-start xl:items-center">
                <div id="prime-image-id" className="max-w-[450px] w-auto">
                    <img src={PrimeImage} alt="Photo" className="w-full h-full rounded-3xl" />
                </div>
            </div>

            <div className="w-full flex xl:items-center mt-8">
                <div>
                    <div>
                        <h1 className="text-3xl text-center xl:text-5xl font-bold">Hi there,<br />Happy to have you.</h1>
                    </div>
                    <div className="my-3 mx-2 leading-5 xl:my-8 sub-font text-center xl:text-xl">
                        <p>A programming enthusiast with a knack for turning concepts into captivating solutions.</p>
                    </div>
                    <div className="my-8 flex justify-center items-center">
                        <ul className="flex items-center">
                            <li><a href="https://twitter.com/sourin_inc" target="_blank" title="Twitter"><i className="ri-twitter-fill text-3xl xl:text-[2.5em] p-2 text-primary-color"></i></a> </li>
                            <li><a href="https://github.com/sourinsarkar" target="_blank" title="Github"><i className="ri-github-fill text-3xl xl:text-[2.5em] p-2 text-primary-color"></i></a> </li>
                            <li className="flex items-center mono-font font-semibold text-sm xl:text-base p-2 text-primary-color">
                                <p>Download my</p>
                                <a href="/resume/resume.pdf" download className="flex items-center mx-2 px-4 py-1.5 xl:px-5 4xl:py-2 rounded-full bg-primary-color text-white gap-1">Resume <ArrowDownTrayIcon stroke="currentColor" stroke-width="0.5" className="h-4 w-4" /> </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center rounded-lg py-2 bg-primary-color text-white text-sm font-medium">
                        <a href="mailto:Sourin Sarkar <work@sourin.in>">Contact here</a>
                    </div>
                    <div>
                        <img src={CarGif} className="h-24 my-4 mx-auto" />
                    </div>
                </div>    
            </div>
        </div> 
    );
}

export default HomeBody