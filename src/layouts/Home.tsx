import Content from "../components/Content";
import Navbar from "../components/Navbar"

const Home: React.FC = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="mx-6">
                <Navbar />
                <Content />
            </div>
        </div>
    );
}

export default Home