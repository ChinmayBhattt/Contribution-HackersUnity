import { motion } from 'framer-motion';

const BecomeSponsor = () => {
    return (
        <section className="pb-24 pt-10 bg-gradient-to-b from-white to-gray-50 dark:from-primary/90 dark:to-primary">
            <div className="container-custom">
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

export default BecomeSponsor;
