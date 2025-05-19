
//--------------------------------------------- JS -------------------------------------------------
const form = document.getElementById("form");
const lista = document.getElementById("lista-alimentos");

let alimentos = JSON.parse(localStorage.getItem("alimentos")) || [];

function renderAlimentos() {
  lista.innerHTML = "";
  alimentos.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${item.nome}</strong><br>
      CPF: ${item.cpf}<br>
      <button onclick="editar(${index})">Editar</button>
      <button onclick="remover(${index})">Remover</button>
    `;
    lista.appendChild(li);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const novoAlimento = {
    nome: form.nome.value.trim(),
    cpf: form.cpf.value.trim()
  };

  if (novoAlimento.nome && novoAlimento.cpf) {
    alimentos.push(novoAlimento);
    localStorage.setItem("alimentos", JSON.stringify(alimentos));
    form.reset();
    renderAlimentos();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

function remover(index) {
  alimentos.splice(index, 1);
  localStorage.setItem("alimentos", JSON.stringify(alimentos));
  renderAlimentos();
}

function editar(index) {
  const alimento = alimentos[index];
  form.nome.value = alimento.nome;
  form.cpf.value = alimento.cpf;
  alimentos.splice(index, 1);
  localStorage.setItem("alimentos", JSON.stringify(alimentos));
  renderAlimentos();
}

renderAlimentos();

//----------------------------------- Correção dos botões -----------------------------------------

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); //impede o envio padrão

  //Aqui você poderia enviar os dados com fetch(), se quiser.

  //Simulando envio com sucesso
  console.log("Formulário enviado!");

  //Redireciona para outra página apos o "envio"
  window.location.href = "cadastrodeconta.html";
});