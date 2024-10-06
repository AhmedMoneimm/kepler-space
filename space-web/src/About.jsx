import React, { useState } from 'react';

const About = () => {
  const [activeImage, setActiveImage] = useState(null);

  const toggleDropdown = (index) => {
    setActiveImage(activeImage === index ? null : index);
  };

  const imageLinks = [
    {
      src: '/data/images/ahmed abdelmoneim.jpg', // Replace with your image paths
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
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {imageLinks.map((image, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Name of the person */}
            <h3 className="text-xl font-semibold mb-2">{image.alt}</h3>
            
            {/* Image */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-48 h-48 object-cover cursor-pointer rounded-lg transition-transform transform hover:scale-105"
              onClick={() => toggleDropdown(index)}
            />
            
            {/* Dropdown links */}
            {activeImage === index && (
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
