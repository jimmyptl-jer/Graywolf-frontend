const About = () => {
  return (
    <div className="container mx-auto p-8 md:p-16 text-justify  text-white">
      <div className="text-zone animate-fadeIn space-y-6">
        {/* Header Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gradient">
          About Me
        </h1>

        {/* Paragraphs with subtle animations */}
        <p className="text-lg md:text-xl mb-4 animate-slideIn">
          <strong className="text-orange-400">Meet Jimmy</strong>, a <span className="highlight">Certified AWS Solutions Architect</span> with a strong focus on <span className="text-orange-400 font-semibold">Backend Development</span> and <span className="text-orange-400 font-semibold">Cloud Expertise</span>. My journey in the tech world is fueled by a passion for crafting efficient, scalable solutions and a dedication to continuous learning. Armed with certifications like <strong>AWS Solutions Architect - Associate</strong> and progressing toward <span className="text-orange-400 font-semibold">Terraform</span> and <span className="text-orange-400 font-semibold">Kubernetes</span>, I am well-equipped to navigate the ever-evolving tech landscape.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-fadeIn delay-100">
          I thrive at the intersection of <strong>Software Development</strong> and <strong>DevOps</strong>, bringing a blend of creativity and precision to every project I undertake. My expertise spans technologies such as <span className="text-orange-400 font-semibold">AWS</span>, <span className="text-orange-400 font-semibold">Terraform</span>, <span className="text-orange-400 font-semibold">Kubernetes</span>, <span className="text-orange-400 font-semibold">Docker</span>, and <span className="text-orange-400 font-semibold">CI/CD pipelines</span>.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-slideIn delay-200">
          Recently, I have been diving deeper into the <span className="highlight">MERN stack</span> and utilizing <strong>TypeScript</strong> with <strong>Node.js</strong> for backend development. I’ve deployed full-stack applications on <strong>Kubernetes</strong> and integrated them with robust <strong>CI/CD pipelines</strong>. My portfolio includes projects where I’ve designed cloud architectures with <span className="text-orange-400">Terraform</span>, built scalable APIs, and implemented automated testing and linting workflows to ensure quality and efficiency.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-fadeIn delay-300">
          Beyond technical expertise, I excel in <span className="highlight">problem-solving</span> and <span className="text-orange-400 font-semibold">collaboration</span>. Whether debugging intricate code or optimizing deployment pipelines, I approach every challenge with a positive mindset, practical solutions, and a passion for teamwork.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-slideIn delay-400">
          I am well-versed in <strong>Software Development Life Cycle (SDLC)</strong> methodologies like <span className="highlight">Agile</span> and <span className="text-orange-400">Scrum</span>. My ability to contribute to all stages of a project ensures seamless progress, whether planning sprints, managing tasks, or delivering milestones.
        </p>

        <p className="text-lg md:text-xl mb-4 animate-fadeIn delay-500">
          As I continue to expand my expertise, I aim to establish myself as a <strong>Backend Developer with Cloud Expertise</strong>, building robust, scalable solutions for businesses. <span className="highlight">The future holds limitless possibilities</span>, and I am ready to take on new challenges with innovation and determination.
        </p>
      </div>

      {/* Experience Component */}
      {/* Experience Section */}
      <div className="mt-12 animate-slideInUp">
        <h1 className="text-3xl font-bold mb-6">Experience</h1>

        {/* TOPS Technologies */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-bold">Developer</h2>
          </div>
          <p className="text-sm text-gray-200">
            Vertex Agility - Ahmedabad
          </p>
          <p className="text-sm text-gray-200">
            Aug 2021 - Nov 2022 · 1 yr 1 mo
          </p>
          <p className="text-sm text-gray-200">
            Tech Used: Python, React.js, Node.js, MongoDB, Linux, AWS, GitHub Actions, Terraform, Docker, Agile Methodologies
          </p>
          <ul className="list-disc ml-6">
            <li>Developed and automated end-to-end CI/CD pipelines, integrating GitHub Actions, Docker, and Terraform, which reduced deployment time and improved delivery efficiency. </li>
            <li>
              Coded and optimized application components using Python and MERN stack while designing CI/CD pipelines to streamline deployments and improve system reliability.
            </li>
            <li>
              Integrated AWS Serverless and automated build pipelines to enhance cloud-based deployment processes, reducing downtime.
            </li>
            <li>
              Delivered greenfield projects using the MERN stack, focusing on performance, scalability, and seamless integration with cloud environments.
            </li>
            <li>
              Developed and implemented RESTful API endpoints in Python and Node.js, enhancing client application functionality and ensuring robust data handling.
            </li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div>
          <h2 className="text-xl font-bold mb-4">Technical Skills</h2>
          <div className="flex flex-wrap">
            {
              [
                "Node.js (TypeScript)",
                "ReactJS",
                "AWS Cloud Services (EC2, S3, RDS, Lambda, CloudFormation)",
                "Terraform (Infrastructure as Code)",
                "Kubernetes (Deployments, NodePort, Helm)",
                "Docker (Docker Compose, Multi-stage Builds, CVE Scanning)",
                "CI/CD Pipelines (GitHub Actions, Jenkins)",
                "API Development (RESTful, GraphQL)",
                "MongoDB (NoSQL Databases)",
                "MySQL (RDBMS)",
                "Python (Automation, Scripting)",
                "Shell Scripting",
                "Linux (Ubuntu, CentOS)",
                "Git, GitHub",
                "Agile Methodologies (Scrum, Kanban)",
                "Container Orchestration",
                "Testing & Linting in CI/CD",
                "Security (Image Vulnerability Scanning, IAM Policies)",
                "UI/UX Tools (Figma, AdobeXD)"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-amber-400 text-black rounded-full px-4 py-2 m-1"
                >
                  {skill}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Animated Footer Message */}
      <div className="mt-12 text-center">
        <p className="text-lg md:text-xl font-semibold text-orange-300 animate-bounce">
          Let’s build something incredible together!
        </p>
      </div>
    </div>
  );
};

export default About;
