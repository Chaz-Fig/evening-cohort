function toggleTheme() {
    const body = document.body;
    const button = document.querySelector('.js-toggle-theme');
  
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      button.innerHTML = 'Enable Dark Mode';
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      button.innerHTML = 'Enable Light Mode';
    }
  }
  
  document.querySelector('.js-toggle-theme').addEventListener('click', toggleTheme);