import { useState } from 'react';
import { useQuery } from 'react-query';
import * as apiClient from '../http';
import ProjectComp from '../Components/ProjectComp';

const Project = () => {
  const [projects, setProjects] = useState([]);

  const { data: fetchProjects } = useQuery('fetchProjects', apiClient.fetchProjects, {
    onSuccess: (data) => {
      setProjects(data);
    },
  });

  console.log(projects);

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Projects</h1>

      {projects ? (
        <p>Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectComp key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;
