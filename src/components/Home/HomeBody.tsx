import { Download } from 'iconoir-react/regular';
import PrimeImage from '../../assets/images/prime-image.jpg'
import { Twitter, Github } from 'iconoir-react'

const HomeBody: React.FC = () => {
    return (
        <div>
            <div className="flex justify-between bg-green-400 primary-font">
                <div className="w-full">
                    <div>
                        <img src={PrimeImage} alt="Photo" />
                    </div>
                </div>

                <div className="w-full flex items-center">
                    <div className="bg-blue-400 mx-12">
                        <div className="my-8">
                            <h1 className="text-5xl font-bold">Hi there,<br />Happy to have you.</h1>
                        </div>
                        <div className="my-8">
                            <p>A programming enthusiast with a knack for turning concepts into captivating solutions.</p>
                        </div>
                        <div className="my-8">
                            <ul className="flex">
                                <li><Twitter /></li>
                                <li><Github /></li>
                                <li className="flex">
                                    <p>Download my</p>
                                    <button className="flex">CV <Download /></button>
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