import React, { useEffect } from 'react';
import Particles from "particles.js";

const ParticleEffect = () => {
  useEffect(() => {
    // Initialize particles.js
    Particles.init({
      selector: '.particles',
      color: '#ffffff',
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            // Modify the particle properties for smaller screens if needed
          },
        },
      ],
      // Add any other customization options you desire
    });
  }, []);

  return <div className="particles" />;
};

export default ParticleEffect;
