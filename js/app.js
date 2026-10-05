import {
  homeTemplate,
  projectsTemplate,
  registerTemplate,
} from "./templates.js";

import { validateForm } from "./validation.js";

import { saveRegistration } from "./storage.js";

const container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
    const headerNav = document.getElementById("headerNav");
    
    if (menuToggle && headerNav) {
        menuToggle.addEventListener("click", () => {
          headerNav.classList.toggle("active");
        });     
    }

});

function showHome() {
  container.innerHTML = homeTemplate();
}

function showProjects() {
  container.innerHTML = projectsTemplate();
}

function showRegister() {
  container.innerHTML = registerTemplate();

  const form = document.getElementById("registerForm");

    const formMessage = document.getElementById("formMessage");
    
    if (!form || !formMessage) {
        return;
    }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm(form)) {
      formMessage.textContent =
        "Verifique os campos obrigatórios antes de continuar.";

      formMessage.className = "form-message error";
      return;
    }

    const data = {
      name: document.getElementById("nome").value,
      cpf: document.getElementById("cpf").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("telefone").value,
      birthDate: document.getElementById("nascimento").value,
      cep: document.getElementById("cep").value,
      address: document.getElementById("endereco").value,
      city: document.getElementById("cidade").value,
      state: document.getElementById("state").value,
      area: document.getElementById("area").value,
      message: document.getElementById("message").value,
      };
      
      saveRegistration(data);

    formMessage.textContent = "Cadastro realizado com sucesso!";

    formMessage.className = "form-message success";

      form.reset();
  });
}

// Permite que os onclick do HTML encontrem essas funções
window.showHome = showHome;
window.showProjects = showProjects;
window.showRegister = showRegister;

showHome();
