
export enum Page {
  Matrimonio = 'MATRIMONIO',
  RSVP = 'RSVP',
  DoveDormire = 'DOVE DORMIRE',
  ListaNozze = 'LISTA NOZZE'
}

export interface Hotel {
  name: string;
  type: 'Hotel' | 'B&B' | 'Airbnb';
  phone: string;
  mapLink: string;
  description: string;
}

export interface RSVPFormData {
  name: string;
  guests: number;
}
