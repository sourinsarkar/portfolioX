import { Download } from 'iconoir-react/regular';
import PrimeImage from '../../assets/images/prime-image.jpg'
import { Twitter, Github } from 'iconoir-react'
import HBIconProp from './HBIconProp';

const HomeBody: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between primary-font">
                <div className="w-full">
                    <div>
                        <img src={PrimeImage} alt="Photo" />
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
                                <li><HBIconProp><Twitter /></HBIconProp></li>
                                <li><HBIconProp><Github /></HBIconProp></li>
                                <li className="flex items-center mono-font font-semibold">
                                    <p>Download my</p>
                                    <button className="flex mx-2 px-5 py-1.5 rounded-full bg-[#27282C] text-[#FFFAFF]">CV <HBIconProp><Download color="#FFFAFF" /></HBIconProp></button>
                                </li>
                            </ul>
                        </div>
                        <div className="my-8">
                            
                        </div>
                    </div>    
                </div>
            </div>
        </div> 
    );
}

export default HomeBody