// Skills.tsx
import React from 'react';

interface SkillsProps {
  competences: string[];
}

const Skills: React.FC<SkillsProps> = ({ competences }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2 text-purple-900">COMPÉTENCES</h2>
      <ul className="list-disc pl-6">
        {competences.map((competence, index) => (
          <li key={index} className="text-gray-700">{competence}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
