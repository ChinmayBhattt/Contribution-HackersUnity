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
    </section>
  );
};

export default Sponsors;
