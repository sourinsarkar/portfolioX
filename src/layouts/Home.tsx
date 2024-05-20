import Content from "../components/Content";
import Navbar from "../components/Navbar"

const Home: React.FC = () => {
    return (
        <div className="max-w-lg mx-auto">
            {/* <div className="sm:h-dvh hidden sm:flex justify-center items-center">
                <div className="p-10 rounded-3xl bg-blueL-1x">
                    <h1 className="text-center primary-font font-bold text-3.5xl tracking-tight leading-none text-blue-10x">Coming soon</h1>
                    <p className="text-center sub-font text-blueD-10x mt-5">Website is begin worked on.<br/>For now, please visit via your mobile device.</p>
                </div>
            </div> */}
            <div className="mx-6">
                <Navbar />
                <Content />
            </div>
        </div>
    );
}

export default Home