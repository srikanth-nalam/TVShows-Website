import './footer.css';

const body = document.querySelector('body');
const footer = document.createElement('footer');
body.append(footer);

footer.innerHTML = '<div class="license">© Copyrights 2022, Created by <a href="https://github.com/srikanth-nalam">Srikanth</a></div>';

export default footer;