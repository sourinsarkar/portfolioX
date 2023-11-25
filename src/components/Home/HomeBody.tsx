import { Download } from 'iconoir-react/regular';
import PrimeImage from '/images/prime-image.jpg'
import { Twitter, Github } from 'iconoir-react'
import HBIconProp from './HBIconProp';

const HomeBody: React.FC = () => {
    return (
        <div className="flex justify-between primary-font">
            <div className="w-full flex justify-center items-center">
                <div id="prime-image-id" className="flex items-center justify-center">
                    <img src={PrimeImage} alt="Photo" className="h-[450px] w-auto rounded-3xl" />
                </div>
            </div>

            <div className="w-full flex items-center">
                <div className="mx-12">
                    <div className="my-8">
                        <h1 className="text-5xl font-bold">Hi there,<br />Happy to have you.</h1>
                    </div>
                    <div className="my-8 sub-font text-xl">
                        <p>A programming enthusiast with a knack for turning concepts into captivating solutions.</p>
                    </div>
                    <div className="my-8">
                        <ul className="flex items-center list-home-elements">
                            <li><a href="https://twitter.com/sourin_inc" target="_blank" title="Twitter"><HBIconProp><Twitter /></HBIconProp></a> </li>
                            <li><a href="https://github.com/sourinsarkar" target="_blank" title="Github"><HBIconProp><Github /></HBIconProp></a> </li>
                            <li className="flex items-center mono-font font-semibold">
                                <p>Download my</p>
                                <a href="/resume/resume.pdf" download className="flex mx-2 px-5 py-1.5 rounded-full bg-[#27282C] text-white">CV <HBIconProp><Download color="white" /></HBIconProp></a>
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