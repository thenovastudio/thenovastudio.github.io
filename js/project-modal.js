document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const video = document.getElementById("projectVideo");
  const source = document.getElementById("projectVideoSource");
  const closeBtn = document.querySelector(".modal-close");

  if (!modal || !video || !source || !closeBtn) {
    console.warn("❌ Project modal elements missing on this page");
    return;
  }

  function openModal(src) {
    source.src = src;
    video.load();
    modal.style.display = "flex";
    video.play().catch(() => {});
  }

  function closeModal() {
    video.pause();
    source.src = "";
    video.load();
    modal.style.display = "none";
  }

  document.querySelectorAll(".project-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.dataset.video;
      if (!src) return;
      openModal(src);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
});
