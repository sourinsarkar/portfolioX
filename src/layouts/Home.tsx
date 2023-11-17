import HomeBody from "../components/Home/HomeBody";
import GlobalNav from "../components/Nav/GlobalNav";

const Home: React.FC = () => {
    return (
        <div>
            <div className="mx-12 m-5">
                <GlobalNav />
                <HomeBody />
            </div>
        </div>
    );
}

export default Home