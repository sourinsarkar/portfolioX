import HomeBody from "../components/Home/HomeBody";
import GlobalNav from "../components/Nav/GlobalNav";

const Home: React.FC = () => {
    return (
        <div className="h-screen flex flex-col xl:block mx-5">
            <div className="py-5"><GlobalNav /></div>
            <div className="flex xl:items-center xl:grow"><HomeBody /></div>
        </div>
    );
}

export default Home