import React from 'react';
import './Matrimonio.css';

interface MatrimonioProps {
    onNext: () => void;
}

const Matrimonio: React.FC<MatrimonioProps> = ({onNext}) => {
    return (
        <div className="matrimonio-container">
            <div className="matrimonio-images-wrapper">
                <div className="matrimonio-section">
                    <h3 className="matrimonio-heading">CERIMONIA</h3>
                    <img
                        src="/images/eremo.jpeg"
                        alt="Cerimonia"
                        className="matrimonio-image"
                    />
                    <div className="matrimonio-subtitle-container">
                        <p className="matrimonio-subtitle">EREMO DI SAN ESPEDITO</p>
                        <p className="matrimonio-subtitle">BADAGNANO</p>
                        <p className="matrimonio-subtitle">H 11.30</p>
                    </div>
                </div>

                <div className="matrimonio-section">
                    <h3 className="matrimonio-heading">RICEVIMENTO</h3>
                    <img
                        src="/images/cenerara.jpeg"
                        alt="Ricevimento"
                        className="matrimonio-image"
                    />
                    <div className="matrimonio-subtitle-container">
                        <p className="matrimonio-subtitle">LA CENERARA</p>
                        <p className="matrimonio-subtitle">H 13.00</p>
                    </div>
                </div>
            </div>

            <div className="matrimonio-divider"></div>

            <button onClick={onNext} className="matrimonio-button">
                Conferma Partecipazione
            </button>
        </div>
    );
};

export default Matrimonio;
