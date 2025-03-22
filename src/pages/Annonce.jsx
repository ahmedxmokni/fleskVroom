import { Link } from 'react-router-dom';
import { Navbar } from '../components';
import { FaExclamationCircle } from 'react-icons/fa'; // Import the icon

const Annonce = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center">Publier une Annonce</h1>
                <hr />
                <div className="row my-4">
                    <div className="col-md-8 col-lg-6 col-sm-10 mx-auto">
                        <div className="alert alert-info text-center" role="alert">
                            <FaExclamationCircle className="mb-2" size={30} /> {/* Add the icon */}
                            <h4 className="alert-heading">Créer un Compte</h4>
                            <p>Pour publier une annonce, vous devez avoir un compte. Veuillez vous <Link to="/register" className="text-decoration-underline">inscrire</Link> si vous n'avez pas encore de compte.</p>
                            <hr />
                            <p className="mb-0">Vous avez déjà un compte ? <Link to="/login" className="text-decoration-underline">Connectez-vous</Link> pour publier votre annonce.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Annonce;