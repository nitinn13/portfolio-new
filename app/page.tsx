"use client";
import AboutSection from '@/sections/About';
import ContactSection from '@/sections/Contact';
import EducationSection from '@/sections/Education';
import ExperienceSection from '@/sections/Experience';
import Header from '@/sections/Header';
import ProjectModal from '@/sections/ProjectModel';
import ProjectsSection from '@/sections/Projects';
import SkillsSection from '@/sections/Skills';
import { useState } from 'react';

export default function PortfolioPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const openModal = (type : string) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      
      <div className="min-h-screen bg-white flex flex-col items-center justify-start p-0 w-full">
        <div className="flex flex-col items-center gap-0 w-full max-w-[1200px]">
          <Header />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection onOpenModal={openModal} />
          <SkillsSection />
          <ContactSection />
        </div>
        
        <ProjectModal
          isOpen={modalOpen} 
          onClose={closeModal} 
          type={modalType}
        />
      </div>
    </>
  );
}