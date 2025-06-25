import { useState } from 'react';

// Define a map for technology icons and colors using provided shield.io URLs
const techIcons = {
  // Languages
  "Java": {
    icon: <img src="https://img.shields.io/badge/Java-%23007396.svg?style=flat&logo=java&logoColor=white" alt="Java Logo" className="h-4 w-auto" />,
    colors: "bg-[#007396] text-white"
  },
  "C#": { // Mapping C# skill to C# badge
    icon: <img src="https://img.shields.io/badge/C%23-%23239120.svg?style=flat&logo=c-sharp&logoColor=white" alt="C# Logo" className="h-4 w-auto" />,
    colors: "bg-[#239120] text-white"
  },
  "TypeScript": {
    icon: <img src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white" alt="TypeScript Logo" className="h-4 w-auto" />,
    colors: "bg-[#007ACC] text-white"
  },
  "JavaScript": {
    icon: <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black" alt="JavaScript Logo" className="h-4 w-auto" />,
    colors: "bg-[#F7DF1E] text-black"
  },
  "SQL": { // Using MySQL logo for generic SQL from reference
    icon: <img src="https://img.shields.io/badge/SQL-%2300B4DB.svg?style=flat&logo=mysql&logoColor=white" alt="SQL Logo" className="h-4 w-auto" />,
    colors: "bg-[#00B4DB] text-white"
  },

  // Frontend
  "Angular": {
    icon: <img src="https://img.shields.io/badge/Angular-%23DD0031.svg?style=flat&logo=angular&logoColor=white" alt="Angular Logo" className="h-4 w-auto" />,
    colors: "bg-[#DD0031] text-white"
  },
  "React": {
    icon: <img src="https://img.shields.io/badge/React-%2361DAFB.svg?style=flat&logo=react&logoColor=black" alt="React Logo" className="h-4 w-auto" />,
    colors: "bg-[#61DAFB] text-black"
  },
  "Vue.js": {
    icon: <img src="https://img.shields.io/badge/Vue.js-%234FC08D.svg?style=flat&logo=vue.js&logoColor=white" alt="Vue.js Logo" className="h-4 w-auto" />,
    colors: "bg-[#4FC08D] text-white"
  },
  "Dart": { // Reusing Flutter's badge for Dart as no specific Dart badge was provided
    icon: <img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=flat&logo=flutter&logoColor=white" alt="Dart (Flutter) Logo" className="h-4 w-auto" />,
    colors: "bg-[#02569B] text-white"
  },
  "Flutter": {
    icon: <img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=flat&logo=flutter&logoColor=white" alt="Flutter Logo" className="h-4 w-auto" />,
    colors: "bg-[#02569B] text-white"
  },

  // Backend / API
  "JAVA Spring Boot": { // Key matches skill/experience data
    icon: <img src="https://img.shields.io/badge/Spring_Boot-%236DB33F.svg?style=flat&logo=spring-boot&logoColor=white" alt="Spring Boot Logo" className="h-4 w-auto" />,
    colors: "bg-[#6DB33F] text-white"
  },
  "C# .NET Core": { // Key matches skill/experience data
    icon: <img src="https://img.shields.io/badge/.NET_Core-%23512BD4.svg?style=flat&logo=dotnet&logoColor=white" alt=".NET Core Logo" className="h-4 w-auto" />,
    colors: "bg-[#512BD4] text-white"
  },
  "Node.js": {
    icon: <img src="https://img.shields.io/badge/Node.js-%23339933.svg?style=flat&logo=node.js&logoColor=white" alt="Node.js Logo" className="h-4 w-auto" />,
    colors: "bg-[#339933] text-white"
  },
  "REST APIs": { // Key matches skill/experience data, badge is "REST API"
    icon: <img src="https://img.shields.io/badge/REST-API-blue.svg?style=flat" alt="REST API Badge" className="h-4 w-auto" />,
    colors: "bg-blue-600 text-white" // Using Tailwind default blue for generic "blue" badge
  },

  // Databases
  "MySQL": {
    icon: <img src="https://img.shields.io/badge/MySQL-%234479A1.svg?style=flat&logo=mysql&logoColor=white" alt="MySQL Logo" className="h-4 w-auto" />,
    colors: "bg-[#4479A1] text-white"
  },
  "SQL Server": {
    icon: <img src="https://img.shields.io/badge/SQL_Server-%23CC2927.svg?style=flat&logo=microsoft-sql-server&logoColor=white" alt="SQL Server Logo" className="h-4 w-auto" />,
    colors: "bg-[#CC2927] text-white"
  },
  "MongoDB": {
    icon: <img src="https://img.shields.io/badge/MongoDB-%2347A248.svg?style=flat&logo=mongodb&logoColor=white" alt="MongoDB Logo" className="h-4 w-auto" />,
    colors: "bg-[#47A248] text-white"
  },
  "NoSQL": { // Using MongoDB's badge for NoSQL as it's the specific NoSQL example provided
    icon: <img src="https://img.shields.io/badge/MongoDB-%2347A248.svg?style=flat&logo=mongodb&logoColor=white" alt="NoSQL (MongoDB) Logo" className="h-4 w-auto" />,
    colors: "bg-[#47A248] text-white"
  },

  // Tools & DevOps
  "Docker": {
    icon: <img src="https://img.shields.io/badge/Docker-%232496ED.svg?style=flat&logo=docker&logoColor=white" alt="Docker Logo" className="h-4 w-auto" />,
    colors: "bg-[#2496ED] text-white"
  },
  "Git": {
    icon: <img src="https://img.shields.io/badge/Git-%23F05032.svg?style=flat&logo=git&logoColor=white" alt="Git Logo" className="h-4 w-auto" />,
    colors: "bg-[#F05032] text-white"
  },
  "GitHub Actions": {
    icon: <img src="https://img.shields.io/badge/GitHub_Actions-%232671E5.svg?style=flat&logo=github-actions&logoColor=white" alt="GitHub Actions Logo" className="h-4 w-auto" />,
    colors: "bg-[#2671E5] text-white"
  },
  "Agile": {
    icon: <img src="https://img.shields.io/badge/Agile-Development-green.svg?style=flat" alt="Agile Badge" className="h-4 w-auto" />,
    colors: "bg-green-600 text-white"
  },
  "Scrum": { // Mapping Scrum to Agile badge for consistency
    icon: <img src="https://img.shields.io/badge/Agile-Development-green.svg?style=flat" alt="Scrum (Agile) Badge" className="h-4 w-auto" />,
    colors: "bg-green-600 text-white"
  },
  "Microservices": { // Key matches skill/experience data, badge is "Microservices-Architecture"
    icon: <img src="https://img.shields.io/badge/Microservices-Architecture-orange.svg?style=flat" alt="Microservices Architecture Badge" className="h-4 w-auto" />,
    colors: "bg-orange-600 text-white"
  },
  // Generic placeholders/reused badges for other specific skills from your data not directly listed in shields.io references
  "Real-time Chat": {
    icon: <img src="https://placehold.co/16x16/fuchsia/white?text=Chat" alt="Real-time Chat Placeholder" className="h-4 w-auto" />,
    colors: "bg-fuchsia-700 text-fuchsia-100"
  },
  "E-commerce": {
    icon: <img src="https://placehold.co/16x16/lime/white?text=Shop" alt="E-commerce Placeholder" className="h-4 w-auto" />,
    colors: "bg-lime-700 text-lime-100"
  },
  "IoT Protocols": {
    icon: <img src="https://placehold.co/16x16/amber/white?text=IoT" alt="IoT Protocols Placeholder" className="h-4 w-auto" />,
    colors: "bg-amber-700 text-amber-100"
  },
  "Vanilla JavaScript": { // Reusing general JavaScript badge
    icon: <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black" alt="Vanilla JavaScript Logo" className="h-4 w-auto" />,
    colors: "bg-[#F7DF1E] text-black"
  },
};


// Helper function to get tech details (icon and colors)
const getTechDetails = (techName) => techIcons[techName] || { icon: null, colors: "bg-gray-600 text-gray-200" };


// Main App Component
const App = () => {
  return (
    // เปลี่ยนพื้นหลังหลักเป็นสีเทาเข้มเกือบดำ และสีข้อความหลักเป็นสีอ่อน
    <div className="font-['Inter'] antialiased bg-gray-950 text-gray-100 min-h-screen">
      {/* Container for the entire portfolio */}
      <div className="max-w-4xl mx-auto py-12 px-6 lg:px-8">

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Work Experience Section */}
        <ExperienceSection />

        {/* Education Section */}
        <EducationSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;

// --- Component: HeroSection ---
const HeroSection = () => {
  const contactInfo = {
    email: "Ravarich@gmail.com",
    telephone: "0894030236",
    address: "45/767 Ramkhamhaeng 58/3, Huamark, Bangkapi, Bangkok 10240",
  };

  return (
    // ปรับ gradient ให้เข้มขึ้นและโทนสีดูเป็น programmer/geek มากขึ้น, shadow และเพิ่ม ring on hover
    <section className="mb-12 p-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 hover:ring-offset-gray-950">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          {/* ปรับสีชื่อให้ดู 'Geek' ขึ้นด้วย gradient text */}
          <h1 className="text-5xl font-extrabold mb-2 leading-tight drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-green-300">Ravarich Clongcot</h1>
          <p className="text-2xl font-light opacity-90 text-gray-300">Full Stack Developer</p> {/* ปรับสีข้อความ */}
        </div>
        <div className="text-sm text-center md:text-right space-y-1 text-gray-400"> {/* ปรับสีข้อความ */}
          <p className="flex items-center justify-center md:justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
          </p>
          <p className="flex items-center justify-center md:justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
            <a href={`tel:${contactInfo.telephone}`} className="hover:underline">{contactInfo.telephone}</a>
          </p>
          <p className="flex items-start justify-center md:justify-end text-right">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314 0A10.001 10.001 0 0017.657 6.343M6.343 17.657A10.001 10.001 0 016.343 6.343m0 11.314L4.929 19.071a3 3 0 01-4.243-4.243L4.05 13.5m1.949-1.949A10.001 10.001 0 0017.657 6.343m-9.193 0A10.001 10.001 0 016.343 17.657m0-11.314L4.929 4.929a3 3 0 014.243-4.243L10.5 4.05m2.448 1.949A10.001 10.001 0 006.343 17.657m9.193 0A10.001 10.001 0 0117.657 6.343m-5.418 9.193L19.071 4.929a3 3 0 01-4.243 4.243L13.5 10.5M6 12a6 6 0 1112 0 6 6 0 01-12 0z" />
            </svg>
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Component: AboutSection ---
const AboutSection = () => {
  return (
    // ปรับพื้นหลัง, shadow, border และสีข้อความ
    <section className="mb-12 p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold mb-4 text-teal-400">Professional Summary</h2> {/* ปรับสีหัวข้อ */}
      <p className="text-gray-300 leading-relaxed">
        Highly accomplished Full Stack Developer with over <span className="font-semibold text-cyan-400">7 years of dedicated experience</span> in designing, developing, and optimizing high-performance web and mobile applications. Proven expertise across the entire stack, including modern frontend frameworks (Angular, React, Vue.js), robust backend technologies (JAVA Spring Boot, .NET Core, Node.js), and diverse database systems (SQL, NoSQL). A natural leader adept at steering cross-functional teams, enhancing system architecture, integrating complex third-party services, and crafting intuitive RESTful APIs that significantly boost functionality, performance, and user experience.
      </p>
    </section>
  );
};

// --- Component: SkillsSection ---
const SkillsSection = () => {
  const skills = {
    backend: [
      { name: "JAVA Spring Boot", level: "Proficient" },
      { name: "C# .NET Core", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "JavaScript", level: "Proficient" },
      { name: "Node.js", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
      { name: "NoSQL", level: "Familiar" },
    ],
    frontend: [
      { name: "Angular", level: "Proficient" },
      { name: "React", level: "Proficient" },
      { name: "Vue.js", level: "Proficient" },
      { name: "Dart", level: "Familiar" },
      { name: "Flutter", level: "Familiar" },
    ],
  };

  return (
    // ปรับพื้นหลัง, shadow, border และสีข้อความ
    <section className="mb-12 p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-teal-400">Technical Skills</h2> {/* ปรับสีหัวข้อ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center"> {/* ปรับสีหัวข้อย่อย */}
            {/* Using a placeholder SVG icon for Backend category header as a general representation */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Backend
          </h3>
          <ul className="space-y-2 text-gray-300">
            {skills.backend.map((skill, index) => {
              const details = getTechDetails(skill.name); // ดึง icon และ colors จาก techIcons
              return (
                <li key={index} className="flex items-center p-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
                  {details.icon && <span className="mr-2">{details.icon}</span>} {/* แสดง icon (ซึ่งตอนนี้เป็น img) */}
                  {skill.name} <span className="ml-2 text-sm text-gray-400">({skill.level})</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center"> {/* ปรับสีหัวข้อย่อย */}
            {/* Using a placeholder SVG icon for Frontend category header as a general representation */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-1-3m-6.938-1.562L10 5m-5 5L10 10m11-4v4m0 0v4m0-4h-4m4 0h-4m-9-4h4m-4 0v4m0 0h4m-9-4v4" />
            </svg>
            Frontend
          </h3>
          <ul className="space-y-2 text-gray-300">
            {skills.frontend.map((skill, index) => {
              const details = getTechDetails(skill.name); // ดึง icon และ colors จาก techIcons
              return (
                <li key={index} className="flex items-center p-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
                  {details.icon && <span className="mr-2">{details.icon}</span>} {/* แสดง icon (ซึ่งตอนนี้เป็น img) */}
                  {skill.name} <span className="ml-2 text-sm text-gray-400">({skill.level})</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

// --- Component: ExperienceSection ---
const ExperienceSection = () => {
  const experiences = [
    {
      company: "EXTEND IT RESOURCE CO., LTD (On-site at TMBThanachart Bank Public Company Limited)",
      title: "Full Stack Developer",
      dates: "Jan 2023 – Present",
      projects: [
        {
          name: "Mutual Fund Trading System",
          description: [
            "Collaborated on designing technical specifications, database structures, and data flows to ensure system integrity and scalability.",
            "Architected and implemented Microservice Architecture, significantly enhancing system scalability and performance.",
            "Integrated critical third-party services via REST APIs, substantially improving overall system functionality and data exchange.",
            "Contributed across all layers of development, including frontend, backend, and full-stack tasks.",
          ],
          technologies: ["JAVA Spring Boot", "Microservices", "REST APIs", "SQL"]
        },
      ],
    },
    {
      company: "DOSETECH CO., LTD",
      title: "Full Stack Developer",
      dates: "2017 – 2022",
      projects: [
        {
          name: "PDPA System (2020-2022)",
          description: [
            "Spearheaded the system architecture design, optimizing data protection processes and ensuring comprehensive compliance.",
            "Enhanced data handling efficiency and developed robust RESTful APIs using .NET Core and MySQL.",
            "Managed project sprints and facilitated cross-functional team collaboration, resulting in 95% on-time delivery of project milestones.",
          ],
          technologies: ["C# .NET Core", "MySQL", "REST APIs", "Scrum"]
        },
        {
          name: "Stock Management Mobile App (2019)",
          description: [
            "Developed cross-platform mobile applications using Flutter and Dart, which led to a 25% reduction in inventory errors.",
            "Designed optimized database schemas and efficient API endpoints, significantly improving data processing capabilities and speed.",
          ],
          technologies: ["Flutter", "Dart", "REST APIs", "NoSQL"]
        },
        {
          name: "Exhibition System Remote Controller (2019)",
          description: [
            "Engineered seamless cross-platform mobile applications with Flutter and Dart, elevating system control and user experience.",
            "Improved system response times through the strategic integration of IoT communication protocols.",
          ],
          technologies: ["Flutter", "Dart", "IoT Protocols"]
        },
        {
          name: "Chat and Shop, E-Commerce (2019)",
          description: [
            "Designed and developed a highly responsive e-commerce website using Vue.js, leading to improved customer interaction and retention.",
            "Integrated real-time chat functionalities, significantly enhancing user engagement and satisfaction.",
          ],
          technologies: ["Vue.js", "Real-time Chat", "E-commerce", "JavaScript"]
        },
        {
          name: "Flight and Trip Booking (2018-2019)",
          description: [
            "Optimized database structures and workflows, increasing query performance by 30%.", // Corrected this line to be a single string
            "Built RESTful APIs using Node.js, TypeScript, and MySQL, and developed React frontend components, driving user satisfaction." // Corrected this line to be a single string
          ],
          technologies: ["Node.js", "TypeScript", "MySQL", "React", "REST APIs"]
        },
        {
          name: "Customer Relationship Management (CRM) (2017-2018)",
          description: [
            "Developed efficient RESTful APIs using .NET Core and MySQL to streamline customer data management.",
            "Created intuitive frontend interfaces using Vanilla JavaScript, significantly enhancing the overall user experience.",
          ],
          technologies: ["C# .NET Core", "MySQL", "REST APIs", "Vanilla JavaScript"]
        },
      ],
    },
  ];

  return (
    // ปรับพื้นหลัง, shadow, border และสีข้อความ
    <section className="mb-12 p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-teal-400">Work Experience</h2> {/* ปรับสีหัวข้อ */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <JobCard key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

// --- Component: JobCard (Sub-component of ExperienceSection) ---
const JobCard = ({ company, title, dates, projects }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage project list visibility

  return (
    // ปรับพื้นหลัง, shadow, border และสีข้อความ
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 transform hover:scale-[1.01] transition-transform duration-200 hover:shadow-xl hover:border-blue-600"> {/* เพิ่ม hover effect */}
      <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
      <p className="text-lg text-blue-400 mb-2">{company}</p> {/* ปรับสีข้อความบริษัท */}
      <p className="text-gray-400 text-sm mb-4">{dates}</p>

      {projects.length > 0 && (
        <>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center text-cyan-400 hover:text-cyan-200 text-sm font-medium focus:outline-none py-1 px-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-200" // ปรับสไตล์ปุ่ม
          >
            {isOpen ? 'Hide Projects' : 'Show Projects'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-4">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// --- Component: ProjectCard (Sub-component of JobCard) ---
const ProjectCard = ({ name, description, technologies }) => { // รับ prop technologies เข้ามา
  return (
    // ปรับพื้นหลัง, shadow, border และสีข้อความ
    <div className="bg-gray-700 p-5 rounded-md shadow-inner border border-gray-600 hover:shadow-md hover:border-teal-500 transition-all duration-200"> {/* เพิ่ม hover effect */}
      <h4 className="text-xl font-medium text-teal-300 mb-2">{name}</h4> {/* ปรับสีชื่อโปรเจกต์ */}
      <ul className="list-disc list-inside space-y-1 text-gray-200">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {technologies && technologies.length > 0 && ( // แสดงเทคโนโลยีถ้ามี
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech, index) => {
            const details = getTechDetails(tech); // ใช้ helper function เพื่อดึง icon และสี
            return (
              <span
                key={index}
                className={`flex items-center px-3 py-1 text-xs font-semibold rounded-full shadow-sm transition-colors duration-150 cursor-default ${details.colors}`} // ใช้สีจาก details.colors
                title={tech} // เพิ่ม tooltip เมื่อ hover เพื่อบอกชื่อเทคโนโลยี
              >
                {details.icon && <span className="mr-1">{details.icon}</span>} {/* แสดง icon */}
                {tech} {/* แสดงชื่อเทคโนโลยี */}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

// --- Component: EducationSection ---
const EducationSection = () => {
  const education = {
    degree: "Bachelor of Science (B.S.) in Computer Science",
    university: "King Mongkut's University of Technology Thonburi",
    years: "2014 – 2017",
  };

  return (
    // ปรับพื้นหลัง, shadow, border และสีข้อความ
    <section className="mb-12 p-8 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h2 className="text-3xl font-bold mb-4 text-teal-400">Education</h2> {/* ปรับสีหัวข้อ */}
      <div className="text-gray-300">
        <p className="text-xl font-semibold mb-1 text-gray-100">{education.degree}</p>
        <p className="text-lg text-blue-400">{education.university}</p> {/* ปรับสีมหาวิทยาลัย */}
        <p className="text-gray-400 text-sm mt-1">{education.years}</p>
      </div>
    </section>
  );
};

// --- Component: Footer ---
const Footer = () => {
  return (
    // ปรับสีข้อความและ border
    <footer className="text-center text-gray-400 text-sm mt-12 py-4 border-t border-gray-700">
      <p>&copy; {new Date().getFullYear()} Ravarich Clongcot. All rights reserved.</p>
    </footer>
  );
};
