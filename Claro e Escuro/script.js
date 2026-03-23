let toggleContainer =document.querySelector ('togglecontainer');  
const backgroundContainer =document.querySelector('#background-light');

toggleContainer.addEventListener('click', () => {
    toggleContainer.classList.toggle('dark');
    backgroundContainer.classList.toggle('dark');
});