
import React, { useState } from 'react';

const ListaNozze: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const IBAN = "IT 12 A 12345 12345 123456789012";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(IBAN);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="text-center animate-in fade-in duration-700">
      <div className="mb-12">
        <svg className="w-16 h-16 mx-auto opacity-30 mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
        </svg>
        <h2 className="text-4xl serif-font mb-8">Viaggio di Nozze</h2>
        <div className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed opacity-80">
          <p>
            Il regalo più grande sarà la vostra presenza nel giorno del nostro sì.
          </p>
          <p>
            Tuttavia, se desiderate farci un pensiero, saremmo grati se voleste contribuire al nostro viaggio di nozze: un tour in Giappone alla scoperta di tradizioni millenarie e paesaggi mozzafiato.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-10 border border-[#1b3022]/10 bg-white/30 backdrop-blur-sm rounded-sm">
        <h3 className="text-sm uppercase tracking-widest opacity-60 mb-4">Coordinate Bancarie</h3>
        <p className="serif-font text-xl md:text-2xl mb-6 font-medium select-all">
          {IBAN}
        </p>
        <div className="text-sm opacity-70 space-y-2 mb-8">
          <p>Intestato a: Giulia Bianchi e Marco Neri</p>
          <p>Causale: Regalo Matrimonio Giulia e Marco</p>
        </div>
        
        <button
          onClick={copyToClipboard}
          className={`px-8 py-3 text-xs uppercase tracking-widest transition-all ${
            copied 
              ? 'bg-[#1b3022] text-[#fcfaf2]' 
              : 'border border-[#1b3022] hover:bg-[#1b3022] hover:text-[#fcfaf2]'
          }`}
        >
          {copied ? 'Copiato!' : 'Copia IBAN'}
        </button>
      </div>

      <p className="mt-16 italic opacity-50 serif-font">Grazie di cuore per ogni gesto di affetto.</p>
    </div>
  );
};

export default ListaNozze;
