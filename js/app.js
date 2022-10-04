let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789,.;?!@#$%&*()-_=+{[}]/|<>:";
let novaSenha = " ";

sizePassword.innerHTML = sliderElement.value;

slider.oninput =()=>{
    sizePassword.innerHTML = this.value;
  }

generatePassword=()=>{
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    console.log(pass)
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
  }
  

copyPassword=()=>{
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}