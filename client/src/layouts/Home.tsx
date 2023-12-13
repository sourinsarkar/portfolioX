import HomeBody from "../components/Home/HomeBody";
import GlobalNav from "../components/Nav/GlobalNav";

const Home: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="h-screen flex flex-col mx-5 xl:mx-12">
                <div className="py-5"><GlobalNav /></div>
                <div className="flex items-center xl:grow"><HomeBody /></div>
            </div>
        </div>
    );
}

export default Home