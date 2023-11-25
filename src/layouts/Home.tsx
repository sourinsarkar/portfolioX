import HomeBody from "../components/Home/HomeBody";
import GlobalNav from "../components/Nav/GlobalNav";

const Home: React.FC = () => {
    return (
        <div className="h-screen flex flex-col mx-12">
            <div className="my-5"><GlobalNav /></div>
            <div className="grow flex items-center"><HomeBody /></div>
        </div>
    );
}

export default Home