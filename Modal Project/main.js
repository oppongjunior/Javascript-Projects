
const showModal = document.querySelector(".show-modal");
const closeModal = document.querySelector(".close-modal");
const body = document.getElementById("body")

//show modal
showModal.addEventListener("click",()=>{
    body.classList.add("modal-shower");
})

//close Modal
closeModal.addEventListener("click",()=>{
    body.classList.remove("modal-shower");
})