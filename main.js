const inputCheck = document.querySelector(".form-check-input");
const body = document.querySelector("body");

const handleClick =  () => {
    const mode = inputCheck.checked ? "dark" : "light"; 
    body.setAttribute("data-bs-theme", mode);
}

inputCheck.addEventListener("click", handleClick);

