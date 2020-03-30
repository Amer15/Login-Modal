const openModal = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');

//Function to Add or Remove close class on Modal
const toggleClass = (e) => {
    console.log(e.target)
    document.querySelector('.modal').classList.toggle('close');
}

openModal.addEventListener('click', toggleClass );
closeBtn.addEventListener('click', toggleClass);
