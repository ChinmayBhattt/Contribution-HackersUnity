import { motion } from 'framer-motion';

// Title Sponsors
const titleSponsors = [
  { id: 'title-1', name: 'BlackHat', logo: 'images/sponsor/BlackHat.jpg' },
];

// Principle Sponsors
const principleSponsors = [
  { id: 'principle-1', name: 'Free Website Guys', logo: 'images/sponsor/Freewebsiteguy.png' },
];

// In-Kind Sponsors
const inKindSponsors = [
  { id: 'inkind-1', name: 'Gully Meals', logo: 'images/sponsor/GullyMeals.png' },
  { id: 'inkind-2', name: 'Hive Bharat', logo: 'images/sponsor/HiveBharat.jpg' },
  { id: 'inkind-3', name: 'Financial Friend', logo: 'images/sponsor/FinancialFrined.jpg' },
];

// Platform Partners
const platformPartners = [
  { id: 'platform-1', name: 'Devfolio', logo: 'images/sponsor/Devfolio.png' },
];

// Track Partners
const trackPartners = [
  { id: 'track-1', name: 'ETHIndia', logo: 'images/sponsor/ETHIndia.jpg' },
  { id: 'track-2', name: 'Sa Re Ga Re', logo: 'images/sponsor/saregare.jpeg' },
];

// Community Partners logos
const communityPartners = [
  { id: 'community-1', name: 'INBM', logo: 'images/sponsor/INBM.png' },
  { id: 'community-2', name: 'Chain Chapter', logo: 'images/sponsor/Chain Chapter.jpg' },
  { id: 'community-3', name: 'Noida Nerds', logo: 'images/sponsor/NoidaNerds.png' },
  { id: 'community-4', name: 'Nerds Room', logo: 'images/sponsor/nerds_room_logo.jpeg' },
  { id: 'community-5', name: 'Henu OS', logo: 'images/sponsor/HENU OS.png' },
  { id: 'community-6', name: 'AI Interview Agents', logo: 'images/sponsor/AIInterviewAgents.png' },
];

// Combined list of all sponsors/partners
const allSponsors = [
  ...titleSponsors,
  ...principleSponsors,
  ...inKindSponsors,
  ...platformPartners,
  ...trackPartners,
  ...communityPartners,
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-primary dark:to-primary/80 overflow-hidden">
      <div className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Partners & Sponsors
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
            Proudly supported by organizations who share our vision.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-10">

        {/* Gradient overlays for smooth fade effect at edges */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent dark:from-primary dark:via-primary/80 dark:to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent dark:from-primary dark:via-primary/80 dark:to-transparent z-10 pointer-events-none"></div>

        <div className="flex">
          {/* First set of logos */}
          <motion.div
            className="flex flex-shrink-0 flex-nowrap items-center gap-20 px-12"
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 60, // Slower for smoother motion
              repeat: Infinity
            }}
          >
            {allSponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex-shrink-0 flex items-center justify-center h-48 w-64 grayscale hover:grayscale-0 transition-all duration-300 mx-4"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-full w-full object-contain max-h-36"
                />
              </div>
            ))}
          </motion.div>

          {/* Duplicate set of logos for seamless loop */}
          <motion.div
            className="flex flex-shrink-0 flex-nowrap items-center gap-20 px-12"
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 60,
              repeat: Infinity
            }}
          >
            {allSponsors.map((sponsor) => (
              <div
                key={`${sponsor.id}-duplicate`}
                className="flex-shrink-0 flex items-center justify-center h-48 w-64 grayscale hover:grayscale-0 transition-all duration-300 mx-4"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-full w-full object-contain max-h-36"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container-custom mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-effect rounded-2xl p-10 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary/10 rounded-full"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Become a Sponsor
            </h3>
            <p className="text-gray-600 dark:text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
              Support our community and gain visibility among tech enthusiasts and
              innovators. Reach out to explore sponsorship opportunities.
            </p>
            <motion.a
              href="https://forms.gle/FrMc5LyjYvFKv6vB6"
              className="btn btn-accent inline-flex items-center space-x-2 group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg">Interested in becoming a sponsor or partner? Email us at <a href="mailto:hackerunity.community@gmail.com" className="text-accent hover:underline">hackerunity.community@gmail.com</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
