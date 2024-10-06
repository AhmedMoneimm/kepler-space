import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import spaceBackground from './assets/space-background2.jpg';
import sateliteImg from './assets/satelite1.jpg';

const About = () => {
  const [activeImage, setActiveImage] = useState(null);

  // Sorting team members by name
  const imageLinks = [
    {
      src: '/data/images/ahmed abdelmoneim.jpg',
      alt: 'Ahmed Abdelmoneim',
      github: 'https://github.com/AhmedMoneimm',
      linkedin: 'https://www.linkedin.com/in/ahmedmoneimm/',
    },
    {
      src: '/data/images/ahmed saleh.jpeg',
      alt: 'Ahmed Saleh',
      github: 'https://github.com/AhmedSaleh627',
      linkedin: 'https://www.linkedin.com/in/ahmed-saleh-a79606219/',
    },
    {
      src: '/data/images/bashar badawi.jpg',
      alt: 'Bashar Badawi',
      github: 'https://github.com/Basharbadawi2',
      linkedin: 'https://www.linkedin.com/in/bashar-badawi-056967223/',
    },
    {
      src: '/data/images/iyad ashraf.jpg',
      alt: 'Iyad Ashraf',
      github: 'https://github.com/eyadashrafkh',
      linkedin: 'https://www.linkedin.com/in/iyad-ashraf-707455229/',
    },
    {
      src: '/data/images/omar metwally.jpg',
      alt: 'Omar Metwally',
      github: 'https://github.com/Omarmahmoud711',
      linkedin: 'https://www.linkedin.com/in/omar-mahmoud-a012402b5/',
    },
    {
      src: '/data/images/ahmed younis.jpg',
      alt: 'Ahmed Younis',
      github: 'https://github.com/Unis1809',
      linkedin: 'https://www.linkedin.com/in/ahmed-younis-835ab4282/',
    },
  ].sort((a, b) => a.alt.localeCompare(b.alt)); // Sort by names

  const toggleDropdown = (index) => {
    setActiveImage(activeImage === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden w-full"
      style={{
        backgroundImage: `url(${spaceBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '4rem 1rem',
      }}
    >
      {/* Background particles */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: 'transparent' },
          fpsLimit: 60,
          particles: {
            number: { value: 100 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.7 },
            size: { value: 3 },
            move: { speed: 0.5 },
          },
        }}
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}
      />

      {/* Title: Space Eagles */}
      <motion.h1
        className="text-6xl font-extrabold text-blue-300 mb-8 z-10 shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Space Eagles
      </motion.h1>

      {/* Vision, Mission, Values Section */}
      <motion.h1
        className="text-6xl font-extrabold text-blue-300 mb-8 z-10 shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Vision, Mission, and Values
      </motion.h1>

      <section className="bg-transparent text-white pb-12 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt="Satellite"
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4 xl:pr-36 p-4 border-r-2 border-b-2 border-r-blue-500 border-b-blue-500">
              {/* WHY (Our Motivation) */}
              <p data-aos="fade-up" data-aos-delay="300" className="text-orange-500 uppercase text-2xl font-bold">
                Our Motivation
              </p>
              <h2 data-aos="fade-up" data-aos-delay="500" className="uppercase text-6xl font-bold">
                Why We Care About Space Education
              </h2>
              <p data-aos="fade-up" data-aos-delay="700" className="text-lg lg:text-xl">
                We believe that space holds the key to igniting imagination and curiosity in everyone.
                Our motivation stems from a desire to make the complex and vast universe accessible and engaging to
                learners of all ages. By transforming education into a fun and interactive experience, we aim to foster
                a new generation of space enthusiasts.
              </p>

              {/* HOW (How We Make a Difference) */}
              <p data-aos="fade-up" data-aos-delay="300" className="text-orange-500 uppercase text-2xl font-bold">
                How We Make a Difference
              </p>
              <h2 data-aos="fade-up" data-aos-delay="500" className="uppercase text-6xl font-bold">
                Making Learning Fun and Accessible
              </h2>
              <p data-aos="fade-up" data-aos-delay="700" className="text-lg lg:text-xl">
                Our platform is designed with one goal in mind: to make learning about space an exciting adventure. We combine the latest
                technology with engaging content, including interactive games and educational tools, that make complex topics easier to
                understand and more enjoyable to learn. By gamifying the learning experience, we bring space exploration closer to home.
              </p>

              {/* WHAT (What Drives Us) */}
              <p data-aos="fade-up" data-aos-delay="300" className="text-orange-500 uppercase text-2xl font-bold">
                What Drives Us
              </p>
              <h2 data-aos="fade-up" data-aos-delay="500" className="uppercase text-6xl font-bold">
                Inspiring the Next Generation
              </h2>
              <p data-aos="fade-up" data-aos-delay="700" className="text-lg lg:text-xl">
                We’re driven by the belief that learning about space should be as vast and exciting as the universe itself.
                By providing immersive and engaging content, we aim to inspire curiosity and spark a lifelong interest in the stars.
                Whether you're a student, a teacher, or a space enthusiast, our mission is to make space exploration fun, educational, and inspiring.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Members Title */}
      <motion.h1
        className="text-6xl font-extrabold text-blue-300 mb-8 z-10 shadow-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Our Team
      </motion.h1>
      {/* Team Member Images */}
      <div className="flex flex-wrap justify-center items-center gap-8 mb-12 z-10">
        {imageLinks.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-2">{image.alt}</h3>
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-48 h-48 object-cover cursor-pointer rounded-lg transition-transform transform hover:scale-105"
            />
            {/* GitHub and LinkedIn buttons always visible */}
            <div className="absolute top-[110%] mt-2 bg-gray-800 rounded-md shadow-lg p-2 z-10">
              <a
                href={image.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={image.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;