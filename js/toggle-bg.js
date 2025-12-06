document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('bg-toggle-btn');
  if (!btn) return;

  btn.onclick = () => {
    if (document.body.style.background) {
      document.body.style.background = '';
      document.body.style.color = '';
      btn.textContent = 'Change Theme';
    } else {
      document.body.style.background = '#0b1220';
      document.body.style.color = '#fff';
      btn.textContent = 'Light';
    }
  };
});
