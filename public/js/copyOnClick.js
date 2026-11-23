document.addEventListener("DOMContentLoaded", () => {
  const cont = document.getElementsByClassName("content")[0]
  
  cont.addEventListener("click", (e) => {
    if (e.target.classList.contains('copy')) {
      try {
        navigator.clipboard.writeText(e.target.textContent);
      } catch (err) {
        console.error('Не удалось скопировать:', err);
      }
    }
  })
});