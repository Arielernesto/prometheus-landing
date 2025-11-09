import gsap from 'gsap'


export const scroll = () => {
  const panels = Array.from(document.querySelectorAll(".sticky-section_panel"));

  panels.forEach((panel, index) => {
    const isLast = index === panels.length - 1;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          scrub: true,
        },
      })
      // Animate panel
      .to(
        panel,
        {
          ease: "none",
          startAt: { filter: "brightness(100%) blur(0px)" },
          filter: isLast ? "none" : "brightness(50%) blur(10px)",
          borderRadius: 40,
        },
        "<"
      )
  });
};
