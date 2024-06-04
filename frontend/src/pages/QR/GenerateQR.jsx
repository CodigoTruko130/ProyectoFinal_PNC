import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import '../../style/QR/GenerateQR.css';

function GenerateQR() {
    // 
    const [qrValue, setQrValue] = useState(
        Math.random().toString(36).substring(7)
    );

    const generateRandomQR = () => {
        const newValue = Math.random().toString(36).substring(7);
        setQrValue(newValue);
    };

    useEffect(() => {
        console.log(qrValue);
    }, [qrValue]);

    return (
        <div className="generateQR-main-container">
            <header className="generateQR-header">
                <p className="generateQR-title">Generar QR</p>
            </header>
            <div className="generateQR-container">
                <QRCode
                    value={qrValue}
                    size={512}
                    bgColor={'#ffffff'}
                    fgColor={'#000000'}
                />
                <button onClick={generateRandomQR} className="generateQR-button">
                    <p className="generate-text">Generar</p>
                </button>
            </div>
        </div>
    );
}

export default GenerateQR;