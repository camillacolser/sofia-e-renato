
import React from 'react';

interface MatrimonioProps {
  onNext: () => void;
}

const Matrimonio: React.FC<MatrimonioProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-12 relative">
        <img 
          src="https://picsum.photos/id/433/1200/800" 
          alt="Matrimonio" 
          className="w-full h-[400px] object-cover rounded-sm grayscale-[30%] opacity-90 shadow-xl"
        />
        <div className="absolute inset-0 border-[20px] border-[#fcfaf2]/10 m-4 pointer-events-none"></div>
      </div>

      <h1 className="text-5xl md:text-7xl serif-font font-light mb-4">Giulia & Marco</h1>
      <p className="text-lg md:text-xl uppercase tracking-[0.3em] opacity-80 mb-12">Si Sposano</p>
      
      <div className="w-16 h-[1px] bg-[#1b3022]/30 mb-12"></div>

      <div className="space-y-6 text-lg max-w-2xl mx-auto leading-relaxed">
        <p>
          Siamo felici di invitarvi a celebrare con noi il giorno più bello della nostra vita.
        </p>
        <div className="py-8 border-y border-[#1b3022]/10 my-10">
          <p className="serif-font text-3xl mb-2">24 Giugno 2025</p>
          <p className="uppercase tracking-widest text-sm opacity-70">Ore 11:00 • Castello Odescalchi, Bracciano</p>
        </div>
        <p>
          Dopo la cerimonia saremo lieti di accogliervi per un rinfresco e un pranzo conviviale.
        </p>
      </div>

      <button 
        onClick={onNext}
        className="mt-16 px-10 py-4 border border-[#1b3022] hover:bg-[#1b3022] hover:text-[#fcfaf2] transition-all uppercase tracking-widest text-sm"
      >
        Conferma Partecipazione
      </button>
    </div>
  );
};

export default Matrimonio;
