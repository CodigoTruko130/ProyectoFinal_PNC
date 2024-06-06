import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../style/GuardView/RegisterVisit.css';

function RegisterVisit() {
    const navigate = useNavigate();
    const [visitInfo, setVisitInfo] = useState('');
    const textareaRef = useRef(null);

    const navToMainGuardView = () => {
        navigate('/GuardView');
    };

    useEffect(() => {
        if (textareaRef.current) {
            adjustTextareaHeight(textareaRef.current);
        }
    }, [visitInfo]);

    const adjustTextareaHeight = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    const handleTextareaChange = (event) => {
        setVisitInfo(event.target.value);
        adjustTextareaHeight(event.target);
    };

    return (
        <div className="regVisit-main-container">
            <div className="regVisit-header">
                <button onClick={ navToMainGuardView } className="back-reg-button">
                    <img src="./GuardView/blackBack.png" className="back-reg-img" alt="Boton para ir hacia pagina anterior." />
                </button>
            </div>
            <div className="regVisit-main">
                <p className="reg-text">Registrar Visita</p>
                <input className="regVisit-input" placeholder="Nombre" />
                <textarea
                    className="regVisit-reason-input"
                    placeholder="Asunto de visita"
                    value={ visitInfo }
                    onChange={handleTextareaChange}
                    ref={ textareaRef }
                    rows="1"
                />
                <button className="regVisit-button">
                    <p className="regVisit-button-text">Registrar</p>
                </button>
            </div>
        </div>
    );
}

export default RegisterVisit;
