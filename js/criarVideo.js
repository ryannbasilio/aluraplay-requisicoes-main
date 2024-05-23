import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
  evento.preventDefault();

  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  const descricao = Math.floor(Math.random() * 10).toString();

  try {
    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
  } catch (e) {
    alert(e);
  }
}

formulario.addEventListener("submit", (evento) => criarVideo(evento));

function mensagemDeErro(mensagem) {
  const containerMensagem = document.querySelector("#error");
  containerMensagem.style.display = "flex";

  const mensagemDeErro = document.querySelector("#error-mensagem");
  mensagemDeErro.textContent = mensagem;

  setTimeout(function () {
    containerMensagem.style.display = "none";
  }, 5000);
}
