import useAuth from "../hooks/useAuth";
import { Button, Navbar } from "flowbite-react";
import logo from '../assets/logo.png'
import Hero from "../components/Hero";
import Products from "../components/Products";
import FooterBottom from "../components/FooterBottom";

const Home = () => {


    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Log Out Sucessfull', {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                    theme: "light",
                });
            })
    }

    return (
        <div>
            <Navbar className="fixed w-full">
                <Navbar.Brand href="/">
                    <img src={logo} className="w-[110px]" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user && <button className="button" onClick={handleLogout}>Log out</button>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#">Home</Navbar.Link>
                    <Navbar.Link href="#">About Us</Navbar.Link>
                    <Navbar.Link href="#">Blog</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <Hero></Hero>
            <Products></Products>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Home;