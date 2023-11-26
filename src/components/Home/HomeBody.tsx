import PrimeImage from '/images/prime-image.jpg'
import "remixicon/fonts/remixicon.css"
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const HomeBody: React.FC = () => {
    return (
        <div className="flex justify-between flex-wrap primary-font">
            <div className="w-full flex justify-center items-start xl:items-center">
                <div id="prime-image-id" className="w-auto">
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
                            <li><a href="https://twitter.com/sourin_inc" target="_blank" title="Twitter"><i className="ri-twitter-fill text-3xl xl:text-[2.5em] p-2"></i></a> </li>
                            <li><a href="https://github.com/sourinsarkar" target="_blank" title="Github"><i className="ri-github-fill text-3xl xl:text-[2.5em] p-2"></i></a> </li>
                            <li className="flex items-center mono-font font-semibold text-sm xl:text-base p-2">
                                <p>Download my</p>
                                <a href="/resume/resume.pdf" download className="flex items-center mx-2 px-4 py-1.5 xl:px-5 xl:py-2 rounded-full bg-[#27282C] text-white gap-1">CV <ArrowDownTrayIcon stroke="currentColor" stroke-width="0.5" className="h-5 w-5" /> </a>
                            </li>
                        </ul>
                    </div>
                    <div className="my-8">
                        
                    </div>
                </div>    
            </div>
        </div> 
    );
}

export default HomeBody