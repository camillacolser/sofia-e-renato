import React, { useState } from 'react';
import { RSVPFormData } from '../types';
import './Rsvp.css';

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<RSVPFormData>({ name: '', guests: 1 });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const FORMSPREE_URL = 'https://formspree.io/f/mkogdljq';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          guests: formData.guests,
          // Formspree often uses _subject or message for better email formatting
          _subject: `Nuovo RSVP da ${formData.name}`,
          message: `${formData.name} ha confermato la presenza per ${formData.guests} persone.`
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const errorData = await response.json();
        console.error("Formspree error response:", errorData);
        setStatus('error');
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rsvp-success-container">
        <h2 className="rsvp-success-title">Grazie mille!</h2>
        <p className="rsvp-success-message">La tua partecipazione è stata registrata correttamente tramite Formspree.</p>
        <p className="rsvp-success-note">Non vediamo l'ora di vederti!</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div>
        <p className="page-intro">Vi preghiamo di confermare entro il 30 Aprile 2025</p>

        <form
            onSubmit={handleSubmit}
            action={FORMSPREE_URL}
            method="POST"
            className="rsvp-form"
        >
          <div className="rsvp-field">
            <label htmlFor="name" className="rsvp-label">Nome e Cognome</label>
            <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="rsvp-input"
            />
          </div>

          <div className="rsvp-field">
            <label htmlFor="guests" className="rsvp-label">Numero di persone</label>
            <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={(e) => setFormData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                className="rsvp-select"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'persone'}</option>
              ))}
            </select>
          </div>

          <button
              disabled={status === 'submitting'}
              type="submit"
              className="rsvp-button"
          >
            {status === 'submitting' ? (
                <>
                  <div className="rsvp-spinner"></div>
                  <span>Invio in corso...</span>
                </>
            ) : 'Invia conferma'}
          </button>
        </form>

        {status === 'error' && (
            <p className="rsvp-error">Si è verificato un errore durante l'invio. Assicurati che il modulo sia configurato correttamente su Formspree.</p>
        )}
      </div>
      </div>
  );
};

export default RSVP;
