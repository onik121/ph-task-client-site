import { useLocation, useNavigate } from "react-router-dom";
// import useAxiosPublic from "../hooks/useAxiosPublic";
import google from '../assets/search.png'
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {

    const { googleSignIn, facebookSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // const axiosPublic = useAxiosPublic();

    const hanldeGoogle = () => {
        googleSignIn()
            .then(async (result) => {
                toast.success('Sign Up Sucessfull', {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                    theme: "light",
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error)
                console.log(error.code)
            })
    }



    return (
        <div className='social flex justify-between gap-5'>
            <button onClick={hanldeGoogle}><img src={google}></img> Google</button>
        </div>
    );
};

export default SocialLogin;