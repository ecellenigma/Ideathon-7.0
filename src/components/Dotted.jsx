import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const DottedParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#030B15",
        },
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 450,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#00E0FF",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.8,
          random: false,
        },
        size: {
          value: { min: 0.7, max: 0.8 },
          random: true,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};

export default DottedParticles;
