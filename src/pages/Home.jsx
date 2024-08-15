import useAuth from "../hooks/useAuth";


const Home = () => {


    const { user, logOut, loading } = useAuth();
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
            This is home page <br></br>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default Home;