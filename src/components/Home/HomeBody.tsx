import PrimeImage from '/images/prime-image.jpg'
import ForestGif from '/gif/forest-gif.gif'
import "remixicon/fonts/remixicon.css"
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const HomeBody: React.FC = () => {
    return (
        <div className="flex justify-between flex-wrap xl:flex-nowrap primary-font">
            <div className="w-full flex justify-center xl:items-center">
                <div id="prime-image-id" className="max-w-[400px] xl:max-w-[450px] w-auto">
                    <img src={PrimeImage} alt="Photo" className="w-full h-full rounded-3xl" />
                </div>
            </div>

            <div className="w-full flex xl:items-center mt-8 xl:mt-0">
                <div className="text-center xl:text-left">
                    <div>
                        <h1 className="text-3xl mq-4:text-4xl xl:text-5xl font-bold">Hi there,<br />Happy to have you.</h1>
                    </div>
                    <div className="my-3 mx-2 xl:mx-0 xl:my-8 sub-font mq-4:text-lg xl:text-xl">
                        <p>A programming enthusiast with a knack for turning concepts into captivating solutions.</p>
                    </div>
                    <div className="my-8 flex justify-center items-center xl:justify-start">
                        <ul className="flex items-center">
                            <li><a href="https://twitter.com/sourin_inc" target="_blank" title="Twitter"><i className="ri-twitter-fill text-3xl mq-4:text-4xl xl:text-[2.5em] p-2 text-primary-color"></i></a> </li>
                            <li><a href="https://github.com/sourinsarkar" target="_blank" title="Github"><i className="ri-github-fill text-3xl mq-4:text-4xl xl:text-[2.5em] p-2 text-primary-color"></i></a> </li>
                            <li className="flex items-center mono-font font-semibold text-sm mq-4:text-base xl:text-base p-2 text-primary-color">
                                <p>Download my</p>
                                <a href="/resume/resume.pdf" download className="flex items-center mx-2 px-4 py-1.5 xl:px-5 4xl:py-2 rounded-full bg-primary-color xl:font-normal text-white gap-1">Resume <ArrowDownTrayIcon stroke="currentColor" stroke-width="0.5" className="h-4 w-4" /> </a>
                            </li>
                        </ul>
                    </div>
                    <a href="mailto:Sourin Sarkar <work@sourin.in>">
                        <div className="xl:hidden flex justify-center items-center rounded-lg py-2 bg-primary-color text-white font-medium max-w-[300px] mx-auto">
                        Reach here
                        </div>
                    </a>
                    <div className="xl:hidden">
                        <img src={ForestGif} className="h-24 my-4 mx-auto" />
                    </div>
                </div>    
            </div>
        </div> 
    );
}

export default HomeBody