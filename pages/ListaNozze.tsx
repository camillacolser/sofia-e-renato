import React, { useState } from 'react';
import './ListaNozze.css';

const ListaNozze: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const IBAN = "IT 12 A 12345 12345 123456789012";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(IBAN);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-container">
      <div className="page-intro">
        <p>
          Se desiderate farci un pensiero, saremmo grati se voleste contribuire al nostro viaggio di nozze. Meta TBD.
        </p>
      </div>

      <div className="lista-nozze-card">
        <h3 className="lista-nozze-heading">Coordinate Bancarie</h3>
        <p className="lista-nozze-iban">
          {IBAN}
        </p>
        <div className="lista-nozze-details">
          <p>Intestato a: Giulia Bianchi e Marco Neri</p>
          <p>Causale: Regalo Matrimonio Giulia e Marco</p>
        </div>

        <button
          onClick={copyToClipboard}
          className={`lista-nozze-button ${copied ? 'copied' : 'default'}`}
        >
          {copied ? 'Copiato!' : 'Copia IBAN'}
        </button>
      </div>
    </div>
  );
};

export default ListaNozze;
