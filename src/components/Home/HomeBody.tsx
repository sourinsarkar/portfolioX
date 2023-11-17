import { Download } from 'iconoir-react/regular';
import PrimeImage from '../../assets/images/prime-image.jpg'
import { Twitter, Github } from 'iconoir-react'

const HomeBody: React.FC = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src={PrimeImage} alt="Photo" />
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <h1>Hi there,<br />Happy to have you.</h1>
                        </div>
                        <div>
                            <p>A programming enthusiast with a knack for turning concepts into captivating solutions.</p>
                        </div>
                        <div>
                            <ul>
                                <li><Twitter /></li>
                                <li><Github /></li>
                                <li>
                                    <p>Download my <span>CV <Download /></span> </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            
                        </div>
                    </div>    
                </div>
            </div>
        </div> 
    );
}

export default HomeBody