import React, { useCallback, useEffect, useMemo } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

const ParticlesBackground = () => {
  const options = useMemo(() => {
    return {
      fpsLimit: 60,
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#ff0000',
          animation: {
            enable: true,
            speed: 40,
            sync: true,
          },
        },
        shape: {
          type: ['circle', 'square', 'triangle', 'star'],
        },
        opacity: {
          value: 1,
        },
        size: {
          value: 30,
          random: {
            enable: true,
            minimumValue: 15,
          },
        },
        rotate: {
          value: 0,
          direction: 'clockwise',
          animation: {
            speed: 10,
            enable: true,
          },
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          out_mode: 'out',
        },
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'light',
          },
          resize: true,
        },
        modes: {
          light: {
            area: {
              gradient: {
                start: '3b5e98',
                stop: '#17163e',
              },
            },
            shadow: {
              color: '#17163e',
            },
          },
        },
      },
      detectRetina: true,
    }
  }, [])

  const particlesInit = useCallback((engine) => {
    loadSlim(engine)
  }, [])
  return (
    <Particles
      options={options}
      init={particlesInit}
      className="tsparticles -z-50 h-full"
    />
  )
}

export default ParticlesBackground
