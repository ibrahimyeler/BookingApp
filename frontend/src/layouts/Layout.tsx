import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";

interface Props {
    children: React.ReactNode;

}

const Layout = ({children}: Props ) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Hero />
            <div className="container mx-auto py-10 flex-1">
                {children}
            </div>
            <Footer/>
        </div>
    );
};
export default Layout;