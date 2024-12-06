import Router from "./router/router";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

const App = () => {
    return (
        <div className="bg-bgprimary bg-hero dark:bg-white">
            <Navbar />
            <Router />
            <Footer />
        </div>
    );
};

export default App;
