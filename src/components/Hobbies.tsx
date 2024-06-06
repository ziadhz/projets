// Hobbies.tsx
import React from 'react';

interface HobbiesProps {
  violonDIngres: string[];
}

const Hobbies: React.FC<HobbiesProps> = ({ violonDIngres }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 text-purple-900">VIOLON D’INGRES</h2>
      <ul className="list-disc pl-6">
        {violonDIngres.map((hobby, index) => (
          <li key={index} className="text-gray-700">{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
