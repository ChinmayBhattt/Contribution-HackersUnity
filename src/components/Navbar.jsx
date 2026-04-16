import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isOrganizerDropdownOpen, setIsOrganizerDropdownOpen] = useState(false); // Temporarily disabled - Organizer feature coming soon


  // Define navigation links for reuse
  const navLinks = [
    { to: '/achievements', label: 'Achievements' },
    { to: '/sponsors', label: 'Sponsors' },
    { to: '/partners', label: 'Partners' },
    { to: '/events', label: 'Events' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    hover: {
      scale: 1.05,
      color: "#4f46e5",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: 'hidden' },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(79, 70, 229, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-primary/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mr-3 relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary to-accent rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden border-2 border-secondary flex items-center justify-center bg-primary">
                  <img
                    src="/logo.png"
                    alt="HU Logo"
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
              </div>
              <motion.span
                className="text-xl sm:text-2xl font-bold gradient-text whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{
                  scale: 1.03,
                  textShadow: "0 0 8px rgba(0, 163, 255, 0.6), 0 0 12px rgba(255, 87, 34, 0.4)"
                }}
              >
                Hacker's Unity
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-10"
            variants={navbarVariants}
          >
            {navLinks.map((link) => (
              <motion.div key={link.to} variants={linkVariants}>
                <Link
                  to={link.to}
                  className="text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-white cursor-pointer relative group font-medium"
                >
                  <motion.span
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                  </motion.span>
                </Link>
              </motion.div>
            ))}

            {/* Organizer dropdown - Temporarily disabled, feature coming soon
            <motion.div variants={linkVariants} className="relative group">
              <button
                className="flex items-center text-gray-900 dark:text-gray-200 hover:text-accent dark:hover:text-accent cursor-pointer font-medium py-2 transition-colors duration-300"
                onMouseEnter={() => setIsOrganizerDropdownOpen(true)}
                onMouseLeave={() => setIsOrganizerDropdownOpen(false)}
              >
                Organizer
                <motion.svg
                  className="ml-1.5 w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-accent transition-colors duration-300"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  animate={{ rotate: isOrganizerDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                </motion.svg>
              </button>

              <AnimatePresence>
                {isOrganizerDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 mt-1 w-56 bg-white/95 dark:bg-primary-900/95 backdrop-blur-xl rounded-xl shadow-2xl py-2 border border-gray-100 dark:border-white/10 overflow-hidden"
                    onMouseEnter={() => setIsOrganizerDropdownOpen(true)}
                    onMouseLeave={() => setIsOrganizerDropdownOpen(false)}
                  >
                    <Link
                      to="/work-with-hu"
                      className="flex items-center px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-accent dark:hover:text-accent transition-all duration-200"
                      onClick={() => setIsOrganizerDropdownOpen(false)}
                    >
                      <svg className="w-5 h-5 mr-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      Work With HU
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            */}

            <div className="flex items-center space-x-6">
              <div className="scale-75">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>

          {/* Mobile Menu Button & Toggle (toggle before hamburger) */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="scale-75">
              <ThemeToggle />
            </div>

            <motion.button
              className="text-gray-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden py-4 bg-white/90 dark:bg-primary-950/90 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200 dark:border-white/10"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={mobileLinkVariants}>
                  <Link
                    to={link.to}
                    className="block py-2 px-4 text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-secondary/20 rounded-md mx-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Organizer section - Temporarily disabled, feature coming soon
              <motion.div variants={mobileLinkVariants} className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-800/50">
                <p className="px-6 py-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Organizer
                </p>
                <Link
                  to="/work-with-hu"
                  className="block py-2 px-6 text-gray-900 dark:text-gray-200 hover:text-accent dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-secondary/20 rounded-md mx-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Work With HU
                </Link>
              </motion.div>
              */}


            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;