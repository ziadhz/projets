import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import PersonalInfo from './Personalinfo';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Hobbies from './Hobbies';
import Skills from './Skills';

const PortfolioPage: React.FC = () => {
  const portfolioData = {
    nom: "Elève ingénieur Officier de réserve",
    bio: "Futur ingénieur de l'Ecole Mohammadia d'ingénieurs en génie réseau & télécom, jeune étudiant veillant à atteindre ses objectifs et accomplir ses rêves et en recherche d'un stage d'observation.",
    diplomesFormations: [
      "2018-2019 : Baccalauréat section SM mention B, Lycée Hassan 2, Tétouan",
      "2019-2021 : Classe préparatoire aux grandes écoles CPGE MP, CPGE Tétouan"
    ],
    
    experienceProfessionnelle: "Projet en cours : Déployer Eduroam au sein de l’EMI",
    contact: {
      telephone: "0621601642",
      email: "laila000093@gmail.com",
      adresse: "Tétouan, AV Mohammad Al Khatib imm 08 n 2"
    },
    violonDIngres: ["Dessin (digital)", "Lecture", "Sport"],
    competences: ["Python", "C++", "Photoshop"],
    projects: [
      { name: "E-commerce Website", description: "Developed a fully functional e-commerce website using React and Node.js. Implemented features such as user authentication, product search, and shopping cart functionality." },
      { name: "Task Management App", description: "Built a task management application with React and Firebase. Users can create, edit, and delete tasks, and the application updates in real-time." }
    ],
    networking: [
      { name: "Académie Cisco Networking", description: "Cours terminés en CCNA Routing and Switching, couvrant des sujets tels que les fondamentaux du réseau, la commutation LAN, les technologies de routage, les technologies WAN, les services d'infrastructure et la sécurité de l'infrastructure." },
      { name: "Simulation réseau avec Packet Tracer", description: "Développé des simulations réseau à l'aide de Packet Tracer pour concevoir et mettre en œuvre diverses topologies réseau, dépanner les problèmes réseau et optimiser les performances réseau." }
    ]
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-cyan-900 flex flex-col items-center py-8">
      <header className="bg-transparent text-white py-4 w-full">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href ="https://ziadhz.github.io/formulaire/"> Visite Formulaire</a></li>
              <li><a href="#personalInfo" className="hover:text-gray-200">Personal Info</a></li>
              <li><a href="#education" className="hover:text-gray-200">Education</a></li>
              <li><a href="#experience" className="hover:text-gray-200">Experience</a></li>
              <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
              <li><a href="#hobbies" className="hover:text-gray-200">Hobbies</a></li>
              <li><a href="#skills" className="hover:text-gray-200">Skills</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container mx-auto text-center mt-6">
        <section id="personalInfo" className="bg-white p-6 shadow-lg rounded-lg mb-6">
          <PersonalInfo nom={portfolioData.nom} bio={portfolioData.bio} />
        </section>
        <section id="education" className="bg-white p-6 shadow-lg rounded-lg mb-6">
          <Education diplomesFormations={portfolioData.diplomesFormations} />
        </section>
        <section id="experience" className="bg-white p-6 shadow-lg rounded-lg mb-6">
          <Experience experienceProfessionnelle={portfolioData.experienceProfessionnelle} />
        </section>
        <section id="contact" className="bg-white p-6 shadow-lg rounded-lg mb-6">
          <Contact contact={portfolioData.contact} />
          <div className="flex justify-center mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-2"><FaLinkedin size="1.5em" /></a>
            <a href="#" className="text-gray-800 hover:text-gray-600 mx-2"><FaGithub size="1.5em" /></a>
            <a href="#" className="text-blue-400 hover:text-blue-600 mx-2"><FaTwitter size="1.5em" /></a>
          </div>
          
        </section>
        <section id="hobbies" className="bg-white p-6 shadow-lg rounded-lg mb-6">
          <Hobbies violonDIngres={portfolioData.violonDIngres} />
        </section>
        <section id="skills" className="bg-white p-6 shadow-lg rounded-lg mb-6">
          <Skills competences={portfolioData.competences} />
        </section>
        <section id="networking" className="bg-white p-6 shadow-lg rounded-lg mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Networking</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.networking.map((network, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{network.name}</h3>
                <p className="text-gray-700">{network.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
