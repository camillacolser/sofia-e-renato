
import React, { useState } from 'react';
import { RSVPFormData } from '../types';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({ name: '', guests: 1 });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // REPLACE THIS URL with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'YOUR_COPIED_APPS_SCRIPT_URL_HERE';
    
    try {
      if (GOOGLE_SCRIPT_URL === 'YOUR_COPIED_APPS_SCRIPT_URL_HERE') {
        // Fallback for demo if URL isn't set yet
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Essential for Apps Script
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      }
      setStatus('success');
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-20 animate-in zoom-in duration-500">
        <h2 className="text-4xl serif-font mb-6">Grazie mille!</h2>
        <p className="text-lg opacity-80">La tua partecipazione è stata registrata correttamente.</p>
        <p className="mt-4 italic">Non vediamo l'ora di vederti!</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto animate-in fade-in duration-700">
      <h2 className="text-4xl serif-font text-center mb-10">Conferma la tua presenza</h2>
      <p className="text-center mb-12 opacity-80 italic">Vi preghiamo di confermare entro il 30 Aprile 2025</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-2 opacity-70">Nome e Cognome</label>
          <input
            required
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full bg-transparent border-b border-[#1b3022]/40 p-3 focus:outline-none focus:border-[#1b3022] transition-colors"
            placeholder="es. Mario Rossi"
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-xs uppercase tracking-widest mb-2 opacity-70">Numero di persone</label>
          <select
            id="guests"
            value={formData.guests}
            onChange={(e) => setFormData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
            className="w-full bg-transparent border-b border-[#1b3022]/40 p-3 focus:outline-none focus:border-[#1b3022] transition-colors"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'persone'}</option>
            ))}
          </select>
        </div>

        <button
          disabled={status === 'submitting'}
          type="submit"
          className={`w-full py-4 uppercase tracking-[0.2em] text-sm border border-[#1b3022] transition-all flex items-center justify-center space-x-2 ${
            status === 'submitting' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1b3022] hover:text-[#fcfaf2]'
          }`}
        >
          {status === 'submitting' ? (
            <>
              <svg className="animate-spin h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
              <span>Invio in corso...</span>
            </>
          ) : 'Invia conferma'}
        </button>
      </form>

      {status === 'error' && (
        <p className="mt-4 text-red-700 text-sm text-center">Si è verificato un errore. Riprova più tardi.</p>
      )}
    </div>
  );
};

export default RSVP;
