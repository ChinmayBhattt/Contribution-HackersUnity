import { motion } from 'framer-motion';

// Sponsor logos - including Hoko Ice Cream
const sponsorLogos = [
  { id: 1, name: 'Google', logo: 'https://cdn-icons-png.flaticon.com/512/2875/2875404.png' },
  { id: 2, name: 'Microsoft', logo: 'images/sponsor/Microsoft.png' },
  // { id: 3, name: 'Hoko Ice Cream', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGQNuA8-teKSw/company-logo_200_200/company-logo_200_200/0/1699446881028/hrpl_restaurants_pvtltd_logo?e=2147483647&v=beta&t=9uP_BHZuSMYfLQQxLQ_xlrgk8EQ0i-qHh8QxUGt3yqM' },
];

// Community Partners logos
const communityPartners = [
  { id: 1, name: 'Blockseblock', logo: 'images/community-partners/blockseblock.jpg' },
  { id: 2, name: 'BlockOn', logo: 'images/community-partners/blockon.png' },
  // { id: 3, name: 'Reskill', logo: 'https://pbs.twimg.com/profile_images/1535225336581206016/38S_3tKb_400x400.jpg' },
];

const Sponsors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="sponsors" className="py-24 bg-gradient-to-b from-primary to-primary/80">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Proud partners who support our mission and community
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mb-16 mx-auto max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        >
          {sponsorLogos.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              whileHover="hover"
              className="flex items-center justify-center p-4 relative overflow-hidden mx-6 my-4"
            >
              <motion.img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-20 w-auto relative z-10"
                whileHover={{ y: -5, scale: 1.15 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-effect rounded-2xl p-10 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary/10 rounded-full"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative z-10"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Become a Sponsor
            </h3>
            <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
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
          </motion.div>
        </motion.div>
        
        {/* Community Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-32 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Community Partners
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Organizations that collaborate with us to build a stronger tech community
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-4 mb-16 mx-auto max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        >
          {communityPartners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover="hover"
              className="flex items-center justify-center p-4 relative overflow-hidden mx-6 my-4"
            >
              <motion.img
                src={partner.logo}
                alt={partner.name}
                className="max-h-32 w-auto relative z-10"
                whileHover={{ y: -5, scale: 1.15 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 text-lg">Interested in becoming a sponsor or partner? Email us at <a href="mailto:hackerunity.community@gmail.com" className="text-accent hover:underline">hackerunity.community@gmail.com</a></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
