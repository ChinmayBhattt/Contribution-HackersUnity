import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, rotate: 5, color: '#f59e0b' }
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={footerVariants}
      className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-primary-900 dark:to-primary-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-accent/10 blur-3xl"></div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-5"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center mb-4"
            >
              <motion.div
                // initial={{ rotate: 0 }}
                // animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-12 h-12 mr-3 rounded-full overflow-hidden bg-primary border-2 border-secondary flex items-center justify-center"
              >
                <img
                  src="/logo.png"
                  alt="Hacker's Unity"
                  className="w-10 h-10 object-contain"
                />
              </motion.div>
              <div>
                <motion.h3
                  variants={itemVariants}
                  className="text-xl font-bold bg-gradient-to-r from-secondary via-gray-800 to-accent dark:from-secondary dark:via-white dark:to-accent bg-clip-text text-transparent"
                >
                  Hacker's Unity
                </motion.h3>
                <motion.div
                  variants={itemVariants}
                  className="h-0.5 w-full bg-gradient-to-r from-secondary to-accent"
                ></motion.div>
              </div>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-300 mb-6 glass-effect p-4 rounded-lg border border-gray-200 dark:border-gray-700/30"
            >
              A global tech and non-tech community bringing together innovators, creators, and problem-solvers. Join us to collaborate, learn, and build the future together.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex space-x-4"
            >
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/hackerunity/"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="text-gray-600 dark:text-white p-2 bg-gray-200 dark:bg-primary-dark/50 rounded-full border border-gray-300 dark:border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.231.585 1.786 1.14.568.568.902 1.132 1.152 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.152 1.786c-.554.555-1.12.902-1.786 1.152-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.786-1.152 4.902 4.902 0 01-1.152-1.786c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.152-1.786A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://chat.whatsapp.com/JqVKrBiZIdND1n40ffErw3"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="text-gray-600 dark:text-white p-2 bg-gray-200 dark:bg-primary-dark/50 rounded-full border border-gray-300 dark:border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" clipRule="evenodd" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/hackerunity/"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="text-gray-600 dark:text-white p-2 bg-gray-200 dark:bg-primary-dark/50 rounded-full border border-gray-300 dark:border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>

              {/* Twitter/X */}
              <motion.a
                href="https://x.com/Hackers_Unity"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="text-gray-600 dark:text-white p-2 bg-gray-200 dark:bg-primary-dark/50 rounded-full border border-gray-300 dark:border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/Hackers-Unity"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="text-gray-600 dark:text-white p-2 bg-gray-200 dark:bg-primary-dark/50 rounded-full border border-gray-300 dark:border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>

              {/* Discord */}
              <motion.a
                href="https://discord.com/invite/xcNNqdDhce"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                className="text-gray-600 dark:text-white p-2 bg-gray-200 dark:bg-primary-dark/50 rounded-full border border-gray-300 dark:border-gray-700/30 hover:border-accent/50 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.385-.39.774-.53 1.162a16.98 16.98 0 0 0-5.058 0 10.09 10.09 0 0 0-.524-1.162.077.077 0 0 0-.08-.036 18.334 18.334 0 0 0-4.884 1.491.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 18.51 18.51 0 0 0 5.55 2.78.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 12.293 12.293 0 0 1-1.743-.83.077.077 0 0 1-.008-.128c.118-.088.236-.18.348-.271a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.112.092.23.184.347.271a.077.077 0 0 1-.006.129 12.134 12.134 0 0 1-1.744.83.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 18.454 18.454 0 0 0 5.55-2.78.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect p-6 rounded-lg border border-gray-200 dark:border-gray-700/30 w-full col-span-1 md:col-span-3">
            <motion.h4
              variants={itemVariants}
              className="text-lg font-bold mb-4 bg-gradient-to-r from-gray-900 to-secondary dark:from-white dark:to-secondary bg-clip-text text-transparent"
            >
              Quick Links
            </motion.h4>
            <motion.ul variants={itemVariants} className="space-y-3">
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#"
                  className="text-gray-800 dark:text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Home
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#achievements"
                  className="text-gray-800 dark:text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Achievements
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#sponsors"
                  className="text-gray-800 dark:text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Sponsors
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#partners"
                  className="text-gray-800 dark:text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Partners
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#events"
                  className="text-gray-800 dark:text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Events
                </motion.a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <motion.a
                  href="#team"
                  className="text-gray-800 dark:text-gray-300 hover:text-accent transition-colors flex items-center"
                  whileHover={{ x: 5, color: '#f59e0b' }}
                >
                  <span className="text-accent mr-2">→</span> Team
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-effect p-6 rounded-lg border border-gray-200 dark:border-gray-700/30 w-full col-span-1 md:col-span-4">
            <motion.h4
              variants={itemVariants}
              className="text-xl font-bold mb-5 bg-gradient-to-r from-gray-900 to-secondary dark:from-white dark:to-secondary bg-clip-text text-transparent"
            >
              Contact Us
            </motion.h4>
            <motion.ul variants={itemVariants} className="space-y-5">
              <motion.li variants={itemVariants} className="flex items-start group">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2.5 bg-primary-dark/70 rounded-full mr-4 text-accent group-hover:text-white group-hover:bg-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </motion.div>
                <a href="mailto:hackerunity.community@gmail.com"><span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors font-medium text-base">hackerunity.community@gmail.com</span></a>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start group">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2.5 bg-gray-200 dark:bg-primary-dark/70 rounded-full mr-4 text-accent group-hover:text-white group-hover:bg-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </motion.div>
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors font-medium text-base">Rajasthan, Jaipur, India</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start group">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2.5 bg-gray-200 dark:bg-primary-dark/70 rounded-full mr-4 text-accent group-hover:text-white group-hover:bg-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </motion.div>
                <div>
                  <a href="tel:+91 9324264950"><span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors font-medium text-base" >+91 9324264950</span></a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Founder</p>
                </div>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start group">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-2.5 bg-gray-200 dark:bg-primary-dark/70 rounded-full mr-4 text-accent group-hover:text-white group-hover:bg-accent transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </motion.div>
                <div>
                  <a href="tel:+91 8852924002"><span className="text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-white transition-colors font-medium text-base">+91 8852924002</span></a>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Co-Founder</p>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">&copy; {currentYear} Hacker's Unity. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
