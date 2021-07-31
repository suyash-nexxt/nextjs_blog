import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectMore = ({ title, src }) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <p className="">{title} </p>
      <a href={src} target="blank" rel="noopener">
        <FaGithub size="30px" />
      </a>
    </div>
  );
};

export default ProjectMore;
