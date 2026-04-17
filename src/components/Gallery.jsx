import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootcampPhotos = [
  {
    id: 1,
    src: '/images/bootcamp/HUBootcamp.jpg',
    title: 'HU Bootcamp Kickoff',
    caption: 'Where it all begins — hackers unite for an unforgettable experience',
  },
  {
    id: 2,
    src: '/images/bootcamp/HUBootcamp1.jpg',
    title: 'Hands-On Learning',
    caption: 'Building, breaking, and learning together at Hacker\'s Unity bootcamp',
  },
  {
    id: 3,
    src: '/images/bootcamp/HUBootcamp2.jpg',
    title: 'Community & Collaboration',
    caption: 'The energy of 10,000+ hackers collaborating under one roof',
  },
  {
    id: 4,
    src: '/images/bootcamp/HUBootcamp3.jpg',
    title: 'Bootcamp Highlights',
    caption: 'Memories forged through code, creativity, and camaraderie',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="gallery" className="pt-12 pb-24 bg-gradient-to-b from-gray-50 to-white dark:from-primary dark:to-primary/90 overflow-hidden">
      <div className="container-custom">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
            Relive the energy, passion, and innovation from our bootcamp sessions
          </p>
        </motion.div>

        {/* Masonry-style Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {bootcampPhotos.map((photo, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden ${isLarge ? 'md:row-span-1 aspect-[16/10]' : 'aspect-[16/10]'}`}
                onMouseEnter={() => setHoveredId(photo.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedImage(photo)}
              >
                {/* Image */}
                <motion.img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  animate={{
                    scale: hoveredId === photo.id ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />

                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  animate={{
                    opacity: hoveredId === photo.id ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Accent border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{
                    boxShadow: hoveredId === photo.id
                      ? 'inset 0 0 0 3px rgba(255, 87, 34, 0.7)'
                      : 'inset 0 0 0 0px rgba(255, 87, 34, 0)',
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Corner decorations */}
                <motion.div
                  className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-accent/60 rounded-tl-lg"
                  animate={{
                    width: hoveredId === photo.id ? 48 : 32,
                    height: hoveredId === photo.id ? 48 : 32,
                    opacity: hoveredId === photo.id ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-accent/60 rounded-br-lg"
                  animate={{
                    width: hoveredId === photo.id ? 48 : 32,
                    height: hoveredId === photo.id ? 48 : 32,
                    opacity: hoveredId === photo.id ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 z-10"
                  animate={{
                    y: hoveredId === photo.id ? 0 : 8,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.h4
                    className="text-xl md:text-2xl font-bold text-white mb-1"
                    animate={{
                      y: hoveredId === photo.id ? 0 : 4,
                    }}
                    transition={{ duration: 0.4, delay: 0.05 }}
                  >
                    {photo.title}
                  </motion.h4>
                  <motion.p
                    className="text-gray-200 text-sm md:text-base"
                    animate={{
                      y: hoveredId === photo.id ? 0 : 16,
                      opacity: hoveredId === photo.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {photo.caption}
                  </motion.p>
                </motion.div>

                {/* Expand icon */}
                <motion.div
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm"
                  animate={{
                    opacity: hoveredId === photo.id ? 1 : 0,
                    scale: hoveredId === photo.id ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.2 }}
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Image container */}
            <motion.div
              className="relative max-w-5xl max-h-[85vh] w-full"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-2xl"
              />

              {/* Caption overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-1">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.caption}</p>
              </motion.div>
            </motion.div>

            {/* Navigation arrows */}
            <motion.button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = bootcampPhotos.findIndex(p => p.id === selectedImage.id);
                const prevIndex = (currentIndex - 1 + bootcampPhotos.length) % bootcampPhotos.length;
                setSelectedImage(bootcampPhotos[prevIndex]);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = bootcampPhotos.findIndex(p => p.id === selectedImage.id);
                const nextIndex = (currentIndex + 1) % bootcampPhotos.length;
                setSelectedImage(bootcampPhotos[nextIndex]);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
