// Contact.tsx
import React from 'react';

interface ContactProps {
  contact: {
    telephone: string;
    email: string;
    adresse: string;
  };
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 text-purple-900">CONTACTER MOI</h2>
      <p className="text-gray-700">Téléphone: {contact.telephone}</p>
      <p className="text-gray-700">Email: {contact.email}</p>
      <p className="text-gray-700">Adresse: {contact.adresse}</p>
    </div>
  );
};

export default Contact;
