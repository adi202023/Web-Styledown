particlesJS("particles-js", {
    particles: {
      number: {
        value: 50, // Adjust particle count
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff" // Color of the particles
      },
      shape: {
        type: "circle" // Shape can be "circle", "edge", "triangle", etc.
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3
      },
      move: {
        enable: true,
        speed: 3 // Speed of particle movement
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Interactivity effect, e.g., "repulse" or "grab"
        }
      }
    }
  });
  