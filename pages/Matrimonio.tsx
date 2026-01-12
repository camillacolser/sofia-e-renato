import React from 'react';

interface MatrimonioProps {
    onNext: () => void;
}

const Matrimonio: React.FC<MatrimonioProps> = ({onNext}) => {
    return (
        <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex flex-col md:flex-row gap-8 mb-12 w-full justify-center items-center">
                <div className="relative flex flex-col items-center w-full md:w-1/2">
                    <h3 className="text-5xl md:text-7xl serif-font font-light mb-4">CERIMONIA</h3>

                    <img
                        src="https://picsum.photos/id/433/1200/800"
                        alt="Matrimonio"
                        className="w-1/2 h-auto object-cover rounded-sm grayscale-[30%] opacity-90 shadow-xl"
                    />
                </div>

                <div className="relative flex flex-col items-center w-full md:w-1/2">
                    <h3 className="text-5xl md:text-7xl serif-font font-light mb-4">RICEVIMENTO</h3>

                    <img
                        src="https://picsum.photos/id/433/1200/800"
                        alt="Matrimonio"
                        className="w-1/2 h-auto object-cover rounded-sm grayscale-[30%] opacity-90 shadow-xl"
                    />
                </div>
            </div>


            <div className="w-16 h-[1px] bg-[#1b3022]/30 mb-12"></div>

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
