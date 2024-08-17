import useAuth from "../hooks/useAuth";
import { Button, Navbar } from "flowbite-react";
import logo from '../assets/logo.jpg'
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
                    <img src={logo} className="w-[100px]" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {
                        user && <Button onClick={handleLogout}>Log out</Button>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>Home</Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <Hero></Hero>
            <Products></Products>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Home;