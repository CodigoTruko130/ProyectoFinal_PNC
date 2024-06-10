import { useNavigate } from 'react-router-dom';
import '../../style/GuardView/ListOfVisits.css';

function ListOfVisits() {
    const navigate = useNavigate();

    const navToMainGuardView = () => {
        navigate('/GuardView/');
    };

    return (
        <div className="listVisit-main-container">
            <div className="listVisit-header">
                <button onClick={navToMainGuardView} className="back-list-button">
                    <img src="./GuardView/blackBack.png" className="back-list-img" alt="Boton para ir hacia pagina anterior." />
                </button>
                <p className="list-text">Visitas</p>
            </div>
            <div className="listVisit-main">
                <div className="user-visit-container">
                    <img src="./GuardView/profilePicExample.png" className="profile-pic-img" />
                    <div className="information-container">
                        <p className="user-name-text">Nombre Usuario</p>
                        <p className="invitation-text">Ha invitado a -Nombre de Usuario-</p>
                    </div>
                </div>
                <img src="./GuardView/line.png" className="line-img" />

                <div className="user-visit-container">
                    <img src="./GuardView/profilePicExample.png" className="profile-pic-img" />
                    <div className="information-container">
                        <p className="user-name-text">Nombre Usuario</p>
                        <p className="invitation-text">Ha invitado a -Nombre de Usuario-</p>
                    </div>
                </div>
                <img src="./GuardView/line.png" className="line-img" />

                <div className="user-visit-container">
                    <img src="./GuardView/profilePicExample.png" className="profile-pic-img" />
                    <div className="information-container">
                        <p className="user-name-text">Nombre Usuario</p>
                        <p className="invitation-text">Ha invitado a -Nombre de Usuario-</p>
                    </div>
                </div>
                <img src="./GuardView/line.png" className="line-img" />
                <div className="user-visit-container">
                    <img src="./GuardView/profilePicExample.png" className="profile-pic-img" />
                    <div className="information-container">
                        <p className="user-name-text">Nombre Usuario</p>
                        <p className="invitation-text">Ha invitado a -Nombre de Usuario-</p>
                    </div>
                </div>
                <img src="./GuardView/line.png" className="line-img" />
                <div className="user-visit-container">
                    <img src="./GuardView/profilePicExample.png" className="profile-pic-img" />
                    <div className="information-container">
                        <p className="user-name-text">Nombre Usuario</p>
                        <p className="invitation-text">Ha invitado a -Nombre de Usuario-</p>
                    </div>
                </div>
                <img src="./GuardView/line.png" className="line-img" />
                <div className="user-visit-container">
                    <img src="./GuardView/profilePicExample.png" className="profile-pic-img" />
                    <div className="information-container">
                        <p className="user-name-text">Nombre Usuario</p>
                        <p className="invitation-text">Ha invitado a -Nombre de Usuario-</p>
                    </div>
                </div>
                <img src="./GuardView/line.png" className="line-img" />
                <div className="user-visit-container">
                    <img src="./GuardView/profilePicExample.png" className="profile-pic-img" />
                    <div className="information-container">
                        <p className="user-name-text">Nombre Usuario</p>
                        <p className="invitation-text">Ha invitado a -Nombre de Usuario-</p>
                    </div>
                </div>
                <img src="./GuardView/line.png" className="line-img" />
                <div className="user-visit-container">
                    <img src="./GuardView/profilePicExample.png" className="profile-pic-img" />
                    <div className="information-container">
                        <p className="user-name-text">Nombre Usuario</p>
                        <p className="invitation-text">Ha invitado a -Nombre de Usuario-</p>
                    </div>
                </div>
                <img src="./GuardView/line.png" className="line-img" />
                

                
            </div>
        </div>
    );
}

export default ListOfVisits;