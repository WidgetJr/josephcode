window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('copy-email-btn');
  const textSpan = document.getElementById('email-text');

  if (btn && textSpan) {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(textSpan.innerText);
      textSpan.innerText = 'Copied!';
      setTimeout(() => {
        textSpan.innerText = 'josephpaiz007@gmail.com';
      }, 1500);
    });
  }
});
