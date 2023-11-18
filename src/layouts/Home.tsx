import HomeBody from "../components/Home/HomeBody";
import GlobalNav from "../components/Nav/GlobalNav";

const Home: React.FC = () => {
    return (
        <div>
            <div className="mx-12">
                <div className="my-5">
                    <GlobalNav />
                </div>
                <HomeBody />
            </div>
        </div>
    );
}

export default Home