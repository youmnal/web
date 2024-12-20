const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
AOS.init({
	duration: 1000, // Animation duration in milliseconds
	once: true, // Animation happens only once
});
document.getElementById("year").textContent = new Date().getFullYear();

    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('open');
    }

