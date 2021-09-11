import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiNextDotJs } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { SiSketch } from 'react-icons/si';

import FadeInSection from '../components/fadeInSection';
import Skill from '../components/skill';

export default function SkillsGallery() {
  return (
    <section className={`mt-28 lg:mt-44 mx-5 md:mx-20 lg:mx-32 pb-20`}>
      <h2
        className={`dark:text-gray-100 text-5xl lg:text-7xl font-black mb-10`}
      >
        Skills
      </h2>
      <FadeInSection>
        <main className="flex flex-wrap justify-center p-4 lg:mt-20">
          <Skill icon={<SiJavascript />} tech="Javascript" />
          <Skill icon={<FaReact />} tech="React" />
          <Skill icon={<SiRedux />} tech="Redux" />
          <Skill icon={<SiFirebase />} tech="Firebase" />
          <Skill icon={<FaNode />} tech="NodeJS" />
          <Skill icon={<SiPostgresql />} tech="PostgreSQL" />
          <Skill icon={<SiNextDotJs />} tech="NextJS" />
          <Skill icon={<SiGatsby />} tech="Gatsby" />
          <Skill icon={<SiSketch />} tech="Sketch" />
          <Skill icon={<FaHtml5 />} tech="HTML5" />
          <Skill icon={<FaCss3 />} tech="CSS3" />
          <Skill icon={<SiTailwindcss />} tech="Tailwind" />
        </main>
      </FadeInSection>
    </section>
  );
}
