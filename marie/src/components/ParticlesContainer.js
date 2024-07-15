import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const ParticlesContainer = () => {
  const customInit = useCallback(async (engine) => {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  }, []);

  const options = {
    preset: 'stars',
    background: {
      color: {
        value: '#000'
      }
      ,opacity: 0
    },
    
  };

  return <Particles options={options} init={customInit}/>;
};

export default ParticlesContainer;