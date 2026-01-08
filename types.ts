
export enum Page {
  Matrimonio = 'Matrimonio',
  RSVP = 'RSVP',
  DoveDormire = 'Dove dormire',
  ListaNozze = 'Lista nozze'
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
