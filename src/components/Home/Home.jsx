import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location);
    return (
        <div className="w-full mx-auto text-center">
            <Header/>
            {
                navigation.state === 'loading' ? <p>Loading...</p>
                :
                <Outlet/>

            }
            <Footer/>
        </div>
    );
};

export default Home;