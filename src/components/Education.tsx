// Education.tsx
import React from 'react';

interface EducationProps {
  diplomesFormations: string[];
}

const Education: React.FC<EducationProps> = ({ diplomesFormations }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 text-purple-900">Diplômes et formations</h2>
      <ul className="list-disc pl-6">
        {diplomesFormations.map((formation, index) => (
          <li key={index} className="text-gray-700">{formation}</li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
