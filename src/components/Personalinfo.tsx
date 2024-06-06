// PersonalInfo.tsx
import React from 'react';

interface PersonalInfoProps {
  nom: string;
  bio: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ nom, bio }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2 text-purple-900">{nom}</h1>
      <p className="text-lg text-gray-700">{bio}</p>
    </div>
  );
};

export default PersonalInfo;
