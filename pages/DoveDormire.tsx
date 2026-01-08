
import React from 'react';
import { Hotel } from '../types';

const HOTELS: Hotel[] = [
  {
    name: "Albergo del Castello",
    type: "Hotel",
    phone: "+39 06 123 4567",
    mapLink: "https://maps.google.com/?q=Albergo+del+Castello+Bracciano",
    description: "A pochi passi dalla location, offre una vista splendida sul lago."
  },
  {
    name: "B&B La Dolce Vita",
    type: "B&B",
    phone: "+39 333 987 6543",
    mapLink: "https://maps.google.com/?q=B&B+La+Dolce+Vita+Bracciano",
    description: "Piccolo e accogliente nel centro storico di Bracciano."
  },
  {
    name: "Lake View Apartment",
    type: "Airbnb",
    phone: "Contatta via Sito",
    mapLink: "https://maps.google.com/?q=Bracciano+Lake+View",
    description: "Appartamento moderno con terrazza, perfetto per famiglie."
  }
];

const DoveDormire: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <h2 className="text-4xl serif-font text-center mb-6">Dove Dormire</h2>
      <p className="text-center opacity-80 mb-12 italic max-w-xl mx-auto">
        Abbiamo selezionato alcune strutture nelle vicinanze della location per facilitarvi il soggiorno.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {HOTELS.map((hotel, idx) => (
          <div key={idx} className="p-8 border border-[#1b3022]/10 bg-[#fcfaf2] shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] py-1 px-2 border border-[#1b3022]/20 opacity-60">
                {hotel.type}
              </span>
            </div>
            <h3 className="text-2xl serif-font mb-3">{hotel.name}</h3>
            <p className="text-sm opacity-70 mb-6 leading-relaxed">{hotel.description}</p>
            
            <div className="space-y-4 pt-4 border-t border-[#1b3022]/5">
              <div className="flex items-center space-x-3 text-sm">
                <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{hotel.phone}</span>
              </div>
              <a 
                href={hotel.mapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm hover:underline"
              >
                <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Vedi su Google Maps</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoveDormire;
