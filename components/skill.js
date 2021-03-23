import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function Skill({ tech, icon }) {
  return (
    <article
      className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
    >
      <a data-tip data-for={tech}>
        {icon}
      </a>
      <ReactTooltip id={tech} type='dark'>
        <span className={`hidden lg:block`}>{tech}</span>
      </ReactTooltip>
    </article>
  );
}
