import { Link } from 'react-router-dom';
import { Navbar } from '../components';
import { FaExclamationCircle } from 'react-icons/fa'; // Import the icon

const Annonce = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center">Post an Ad</h1>
                <hr />
                <div className="row my-4">
                    <div className="col-md-8 col-lg-6 col-sm-10 mx-auto">
                        <div className="alert alert-info text-center" role="alert">
                            <FaExclamationCircle className="mb-2" size={30} /> {/* Add the icon */}
                            <h4 className="alert-heading">Create an Account</h4>
                            <p>To post an ad, you need to have an account. Please <Link to="/register" className="text-decoration-underline">register</Link> if you don't have an account yet.</p>
                            <hr />
                            <p className="mb-0">Already have an account? <Link to="/login" className="text-decoration-underline">Login</Link> to post your ad.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Annonce;