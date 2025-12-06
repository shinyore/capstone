document.addEventListener('DOMContentLoaded', function () {
  const bookBtn = document.getElementById('book-btn');
  const bookMsg = document.getElementById('book-msg');
  if (!bookBtn) return;

  bookBtn.addEventListener('click', function () {
    const text = 'Your appointment request has been submitted!';
    if (bookMsg) {
      bookMsg.textContent = text;
      bookMsg.style.color = '#064e3b';
      bookMsg.style.fontWeight = '600';
      bookMsg.style.padding = '8px 10px';
      bookMsg.style.background = '#e6fffa';
      bookMsg.style.borderRadius = '6px';
      
      setTimeout(() => { bookMsg.textContent = ''; }, 4000);
    } else {
      alert(text);
    }
  });
});
