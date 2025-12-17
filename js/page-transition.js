document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("http") ||
      link.target === "_blank"
    ) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 200);
    });
  });
});
