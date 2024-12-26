import Experience from "../Components/Experience";

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

        {/* University of Windsor */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-bold">Graduate Student</h2>
          </div>
          <p className="text-sm text-gray-200">
            University of Windsor - Windsor, Ontario, Canada
          </p>
          <p className="text-sm text-gray-200">
            Jan 2023 - June 2024
          </p>
        </div>

        {/* TOPS Technologies */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <h2 className="text-lg font-bold">React Developer (Internship)</h2>
          </div>
          <p className="text-sm text-gray-200">
            TOPS Technologies Pvt. Ltd - Ahmedabad
          </p>
          <p className="text-sm text-gray-200">
            Nov 2021 - Nov 2022 · 1 yr 1 mo
          </p>
          <p className="text-sm text-gray-200">
            Technology Used: ReactJS, NodeJS, Linux, AWS, HTML, CSS, Agile
            Methodologies
          </p>
          <ul className="list-disc ml-6">
            <li>Led planning and development of three client projects.</li>
            <li>
              Managed agile sprints and implemented feedback for enhanced
              usability.
            </li>
            <li>
              Collaborated with a cross-functional team to launch a web
              application using React and Redux.
            </li>
            <li>Designed and implemented RESTful API endpoints in NodeJS.</li>
            <li>Conducted regular code reviews to ensure quality and security.</li>
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
