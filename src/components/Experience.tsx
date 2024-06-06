// Experience.tsx
import React from 'react';

interface ExperienceProps {
  experienceProfessionnelle: string;
}

const Experience: React.FC<ExperienceProps> = ({ experienceProfessionnelle }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 text-purple-900">Expérience Professionnelle</h2>
      <p className="text-gray-700">{experienceProfessionnelle}</p>
    </div>
  );
};

export default Experience;
