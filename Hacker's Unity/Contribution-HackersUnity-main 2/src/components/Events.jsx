import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// Event data
const events = [
  {
    id: 1,
    title: 'HACKSTORM - Code the Storm',
    image: 'images/achivement-Image/HackStormIMG.png', // Using existing image as placeholder
    date: 'Oct 31 - Nov 1, 2025',
    location: 'Kukas, India',
    attendees: 'Team Size: 2-6 members',
    description: 'Join Hacker\'s Unity for an electrifying 24-hour hackathon where your creativity, coding skills, and problem-solving abilities will be put to the ultimate test! 💻🔥 Highlights include swags, goodies, exciting prizes, internship & PPO opportunities, certificates, networking, workshops, and on-site food facility.',
    status: 'Completed',
    registerLink: 'https://hackstrom-1.devfolio.co'
  },
  // {
  //   id: 2,
  //   title: 'Hack Node India By Blockseblock',
  //   image: 'images/achivement-Image/HackNodeIndia.jpg',
  //   date: '10th Aug - 31st Aug',
  //   location: 'Hybrid: Australia, USA, India',
  //   attendees: 'Global Participants',
  //   description: 'Hack Node India presents a hands-on workshop series for students to build with AI, Web3, gaming, and more. Learn from experts, build real projects, win from a $5,000 prize pool, and get a chance to compete for $100,000 and an incubation opportunity in Dubai through the Global Accelerator Program.',
  //   status: 'Completed',
  //   detailsLink: "https://blockseblock.com/hackathon_details/Hack%20Node%20India"
  // },
  {
    id: 3,
    title: 'India Blockchain Month 2025',
    image: 'images/achivement-Image/INBM.png',
    date: 'September 2025',
    location: '20+ Cities Across India',
    attendees: '73,000+ Expected',
    description: 'India Blockchain Month (INBM) is the world\'s largest community-led celebration of Web3, Blockchain, AI, and the Open Internet. Spanning 20+ cities — from tech hubs to emerging Tier 2 & 3 towns.',
    status: 'Completed',
    detailsLink: "https://www.indiablockchainmonth.com/inbm2025/"
  },
  {
    id: 4,
    title: 'WCHL 2025 - World Computer Hacker League',
    image: 'images/achivement-Image/wchl2025event.jpeg',
    date: 'July 1 – July 25, 2025',
    location: '100% Online',
    attendees: 'Global Participants',
    description: 'The World Computer Hacker League (WCHL) 2025 is a global hackathon led by the ICP HUBS Network. This 4-month journey ensures teams deliver polished, mainnet-deployed MVPs with direct access to ICP HUBS and DFINITY engineers.',
    status: 'Completed',
    detailsLink: "https://dorahacks.io/hackathon/wchl25-qualification-round/detail"
  },
];

const Events = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(79, 70, 229, 0.4)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-primary/90 dark:to-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
            Join us at our events to learn, connect, and grow with fellow tech enthusiasts in the blockchain and Web3 space
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              className="glass-effect rounded-2xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              <div className="relative overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover transition-transform duration-700 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                />
                <div className={`absolute top-4 right-4 ${event.status === 'Completed' ? 'bg-gray-600/90' : 'bg-accent/90'} text-white text-sm font-semibold py-1 px-3 rounded-full z-20`}>
                  {event.status}
                </div>
              </div>

              <div className="p-8 relative z-20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {event.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{event.description}</p>

                <div className="space-y-3 text-gray-700 dark:text-gray-200 mb-8">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 mr-3 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 mr-3 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <UserGroupIcon className="h-5 w-5 mr-3 text-accent" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                {event.status !== 'Completed' && (
                  <motion.a
                    href={event.registerLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="btn btn-accent w-full flex items-center justify-center space-x-2 group"
                  >
                    <span>Register Now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.a>
                )}
                {event.status === 'Completed' && (
                  <motion.a
                    href={event.detailsLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="btn btn-secondary w-full flex items-center justify-center space-x-2 group cursor-pointer"
                  >
                    <span>View Details</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          {/* <motion.button
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="btn btn-secondary inline-flex items-center space-x-2"
          > */}
          {/* <span>View All Events</span> */}
          {/* <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" */}
          {/* > */}
          {/* <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              /> */}
          {/* </svg> */}
          {/* </motion.button> */}
        </motion.div>

        <motion.div
          className="w-full mt-24 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="glass-effect rounded-xl border-2 border-accent/40 shadow-2xl overflow-hidden w-full mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left side - Image */}
              <div className="relative h-64 md:h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent z-10"></div>
                <img
                  src="images/achivement-Image/img14.jpeg"
                  alt="Event organization"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 z-20 bg-accent/90 text-white text-sm font-semibold py-1 px-3 rounded-full">
                  Event Organizer
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Want to host an event with us?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Join forces with Hacker's Unity to organize impactful tech events. We provide the platform, community, and expertise to make your event a success.</p>
                <div className="flex flex-col space-y-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>

                    <span className="text-gray-700 dark:text-gray-200">Access to our global tech community</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200">Event promotion and marketing support</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-200">Technical infrastructure and resources</span>
                  </div>
                </div>
                <a href="https://forms.gle/EtWvEkjnxJrmDDFL8" className="inline-block px-8 py-4 bg-accent text-white font-bold text-lg rounded-lg shadow-lg hover:bg-accent/80 transform hover:scale-105 transition-all duration-300 border border-accent/50 relative overflow-hidden group self-start">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/0 via-white/30 to-accent/0 transform -translate-x-full animate-shimmer"></span>
                  Submit your proposal
                  <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div >

      {/* Decorative elements */}
      < div className="absolute -bottom-10 left-0 w-full overflow-hidden z-0 opacity-20 pointer-events-none" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-40">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#4F46E5"></path>
        </svg>
      </div >
    </section >
  );
};

export default Events;