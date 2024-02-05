const changeColor = (event) =>{
  document.documentElement.style.setProperty('--color-primary', event.target.value);
}

const darkMode = () => {
  const body = document.body;
  body.classList.toggle('dark');
}

// @media (prefers-color-

document.getElementById('themeToggle').onclick = darkMode;





