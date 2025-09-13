import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';

// Define the type for a single project
interface Project {
  title: string;
  description: string;
  list?: string[];
  extraInfo?: string;
  image: string;
}

// Data arrays for projects and events
const projectsData: Project[] = [
  {
    title: 'ICT Innovation Hubs',
    description: 'We establish fully-equipped digital centers in rural communities that provide:',
    list: [
      'Computer and internet access',
      'Digital literacy training',
      'Coding and programming classes',
      'Innovation and entrepreneurship workshops',
      'Research resources for students',
    ],
    extraInfo: 'These hubs serve as community resources where youth can access technology, learn new skills, and develop innovative solutions to local challenges.',
    image: '../image/hub.png',
  },
  {
    title: 'Digital Skills Training Program',
    description: 'Our comprehensive training curriculum includes:',
    list: [
      'Basic computer literacy',
      'Office software proficiency',
      'Web development fundamentals',
      'Digital marketing skills',
      'Graphic design basics',
      'Data analysis introduction',
    ],
    extraInfo: 'We offer both beginner and advanced tracks, with certifications recognized by local employers and educational institutions.',
    image: '../image/intel.png',
  },
  {
    title: 'Youth Innovation Challenge',
    description: 'An annual competition that encourages young people to:',
    list: [
      'Develop tech solutions to community problems',
      'Work in teams to create prototypes',
      'Receive mentorship from industry professionals',
      'Compete for seed funding to implement their ideas',
    ],
    extraInfo: 'Past winners have developed apps for agricultural market access, educational platforms, and healthcare information systems.',
    image: '../image/yic.png'
  },
];

const Projects: React.FC = () => {
  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="page projects-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="container">
          {/* Page Header Section */}
          <motion.header
            className="page-header relative overflow-hidden rounded-lg"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              backgroundImage: `url('/image/projects.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            {/* Text content, ensuring it's above the overlay */}
            
          </motion.header>

          <motion.div
            className="main-content-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Projects Section */}
            <motion.section className="projects-section" variants={itemVariants}>
              <h2>Current Initiatives</h2>
              <div className="projects-paragraphs">
                {projectsData.map((project, index) => (
                  <motion.div
                    key={index}
                    className="project-paragraph"
                    variants={itemVariants}
                  >
                    <div className="project-content">
                      <div className="project-text">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.list && (
                          <ul>
                            {project.list.map((item: string, index: number) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        )}
                        {project.extraInfo && <p className="extra-info">{project.extraInfo}</p>}
                      </div>
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Youth Participation Section */}
            <motion.section className="participation-section" variants={itemVariants}>
              <h2>Opportunities for Youth Participation</h2>
              <div className="opportunities-grid">
                <motion.div className="opportunity-card" variants={itemVariants}>
                  <h3>Volunteer Programs</h3>
                  <p>Youth can volunteer at our ICT hubs as teaching assistants, tech support, or community ambassadors. Gain valuable experience while giving back to your community.</p>
                  <motion.a
                    href="#"
                    className="btn btn-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </motion.div>
                <motion.div className="opportunity-card" variants={itemVariants}>
                  <h3>Internship Opportunities</h3>
                  <p>We offer internships in program coordination, digital content creation, and community outreach. Perfect for students and recent graduates.</p>
                  <motion.a
                    href="#"
                    className="btn btn-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.a>
                </motion.div>
                <motion.div className="opportunity-card" variants={itemVariants}>
                  <h3>Youth Advisory Board</h3>
                  <p>Join our youth advisory board to help shape our programs and ensure they meet the needs of young people in rural communities.</p>
                  <motion.a
                    href="#"
                    className="btn btn-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
                <motion.div className="opportunity-card" variants={itemVariants}>
                  <h3>Digital Champions</h3>
                  <p>Become a digital champion in your community by helping others learn digital skills and promoting the use of technology for development.</p>
                  <motion.a
                    href="#"
                    className="btn btn-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Now
                  </motion.a>
                </motion.div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;