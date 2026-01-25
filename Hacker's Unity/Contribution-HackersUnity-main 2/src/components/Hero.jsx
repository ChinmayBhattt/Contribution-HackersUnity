import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import { useState, useEffect } from 'react';

const sliderImages = [
  "images/hackstorm/DSC04395.JPG",
  "images/hackstorm/IMG_0478.JPG",
  "images/hackstorm/IMG_0531.JPG",
  "images/hackstorm/IMG_0549.JPG",
  "images/hackstorm/IMG_0587.JPG"
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode='wait'>
        <motion.img
          key={index}
          src={sliderImages[index]}
          alt={`Slide ${index}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const { isSignedIn } = useAuth();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const buttonHover = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(79, 70, 229, 0.4)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const statsItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 dark:from-primary dark:via-primary/95 dark:to-primary-900 relative overflow-hidden py-16 md:py-24 min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Circle 1 */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-secondary opacity-10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />

        {/* Animated Gradient Circle 2 */}
        <motion.div
          className="absolute top-1/3 -right-20 w-80 h-80 bg-accent opacity-10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />

        {/* Animated Code Pattern Background */}
        <motion.div
          className="code-pattern"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        />

        {/* Digital Grid Lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001
                }
              }}
              className="inline-block mb-4 px-4 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary"
            >
              <span className="mr-2">✨</span> India's Fastest-Growing Community
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Hacker's Unity</span>
            </h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Hacker’s Unity is India’s leading tech community, uniting developers, innovators, and technology enthusiasts across the nation.
              Hacker’s Unity is driven by a mission to empower students with real-world skills and connect them with industry opportunities.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {isSignedIn ? (
                <motion.div variants={fadeInUp}>
                  <Link to="/dashboard">
                    <motion.button
                      // className="btn btn-primary inline-flex items-center space-x-2"
                      variants={buttonHover}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {/* <span>Go to Dashboard</span> */}
                      {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg> */}
                    </motion.button>
                  </Link>
                </motion.div>
              ) : (
                <motion.div variants={fadeInUp}>
                  <Link to="/sign-up">
                    <motion.button
                      className="btn btn-primary inline-flex items-center space-x-2"
                      variants={buttonHover}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <span>Join the Community</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </Link>
                </motion.div>
              )}

              <motion.div variants={fadeInUp}>
                <Link to="/events">
                  <motion.button
                    className="btn btn-secondary inline-flex items-center space-x-2"
                    variants={buttonHover}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span>Upcoming Events</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              delay: 0.2
            }}
            className="lg:w-1/2 relative"
          >
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-80 flex items-center justify-center relative">
                <div className="relative w-[320px] h-[220px] md:w-[480px] md:h-[320px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                  <Slider />
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section with Thanos Snap Effect */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 p-8 glass-effect rounded-2xl"
        >
          <motion.div
            variants={statsItem}
            className="text-center"
            initial={{ opacity: 1 }}
            animate={{
              opacity: [0, 1],
              filter: ["blur(10px)", "blur(0px)"],
              scale: [0.8, 1]
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: "easeInOut"
            }}
          >
            <motion.p
              className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
              animate={{
                opacity: [0, 1],
                y: [20, 0]
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut"
              }}
            >
              10,000+
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              animate={{
                opacity: [0, 1],
                y: [10, 0]
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: "easeOut"
              }}
            >
              Community Members
            </motion.p>
          </motion.div>

          <motion.div
            variants={statsItem}
            className="text-center"
            initial={{ opacity: 1 }}
            animate={{
              opacity: [0, 1],
              filter: ["blur(10px)", "blur(0px)"],
              scale: [0.8, 1]
            }}
            transition={{
              duration: 1.5,
              delay: 0.4,
              ease: "easeInOut"
            }}
          >
            <motion.p
              className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
              animate={{
                opacity: [0, 1],
                y: [20, 0]
              }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: "easeOut"
              }}
            >
              15+
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              animate={{
                opacity: [0, 1],
                y: [10, 0]
              }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: "easeOut"
              }}
            >
              Events Hosted
            </motion.p>
          </motion.div>

          <motion.div
            variants={statsItem}
            className="text-center"
            initial={{ opacity: 1 }}
            animate={{
              opacity: [0, 1],
              filter: ["blur(10px)", "blur(0px)"],
              scale: [0.8, 1]
            }}
            transition={{
              duration: 1.5,
              delay: 0.6,
              ease: "easeInOut"
            }}
          >
            <motion.p
              className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
              animate={{
                opacity: [0, 1],
                y: [20, 0]
              }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: "easeOut"
              }}
            >
              20+
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              animate={{
                opacity: [0, 1],
                y: [10, 0]
              }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease: "easeOut"
              }}
            >
              Projects Completed
            </motion.p>
          </motion.div>

          <motion.div
            variants={statsItem}
            className="text-center"
            initial={{ opacity: 1 }}
            animate={{
              opacity: [0, 1],
              filter: ["blur(10px)", "blur(0px)"],
              scale: [0.8, 1]
            }}
            transition={{
              duration: 1.5,
              delay: 0.8,
              ease: "easeInOut"
            }}
          >
            <motion.p
              className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
              animate={{
                opacity: [0, 1],
                y: [20, 0]
              }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease: "easeOut"
              }}
            >
              11+
            </motion.p>
            <motion.p
              className="text-gray-600 dark:text-gray-300"
              animate={{
                opacity: [0, 1],
                y: [10, 0]
              }}
              transition={{
                duration: 0.8,
                delay: 1.3,
                ease: "easeOut"
              }}
            >
              Partner Companies
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;