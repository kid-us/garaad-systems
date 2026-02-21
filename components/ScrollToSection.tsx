"use client";

import { useEffect } from "react";

/**
 * Reads a "scrollTo" key from sessionStorage after the page mounts and
 * smoothly scrolls to the matching element. This is used so that clicking
 * a hash nav-link (e.g. #services) from a non-home page first navigates
 * home, and then this component handles the scroll once the DOM is ready.
 */
const ScrollToSection = () => {
  useEffect(() => {
    const id = sessionStorage.getItem("scrollTo");
    if (!id) return;

    sessionStorage.removeItem("scrollTo");

    // Use a small rAF-based loop to wait until the element is rendered.
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 20) {
        requestAnimationFrame(() => tryScroll(attempts + 1));
      }
    };

    // Start trying after a brief paint settle.
    requestAnimationFrame(() => tryScroll());
  }, []);

  return null;
};

export default ScrollToSection;
