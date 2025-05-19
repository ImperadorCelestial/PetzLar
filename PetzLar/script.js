// --------------------------->  CPF 1  <-------------------------------

  const cpfInput = document.getElementById('cpf');
  
  cpfInput.addEventListener('input', function () 
  {
    let value = cpfInput.value.replace(/\D/g, ''); // Remove tudo que não for número
  
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos
  
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  
    cpfInput.value = value;
  });
  
  // --------------------------->  Telefone  <-------------------------------

  const telefoneInput = document.getElementById('telefone');
  
  telefoneInput.addEventListener('input', function () 
  {
    let value = telefoneInput.value.replace(/\D/g, ''); // Remove tudo que não for número
  
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos
    
    value = value.replace(/(\d{0})(\d)/, '$1($2');
    value = value.replace(/(\d{2})(\d)/, '$1)$2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
  
    telefoneInput.value = value;
  });

  

//--------------------------------------- Foto do Pet -------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const dropArea = document.getElementById("drop-area");
  const fileElem = document.getElementById("fileElem");
  const previewText = document.getElementById("preview-text");
  const previewImg = document.getElementById("preview-img");
  const removeBtn = document.getElementById("remove-btn");

  if (!dropArea || !fileElem || !previewImg || !previewText || !removeBtn) {
    console.error("Erro: Elementos não encontrados no DOM.");
    return;
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, e => {
      e.preventDefault();
      dropArea.classList.add('highlight');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, e => {
      e.preventDefault();
      dropArea.classList.remove('highlight');
    }, false);
  });

  dropArea.addEventListener('drop', e => {
    const files = e.dataTransfer.files;
    processImageFiles(files);
  });

  fileElem.addEventListener('change', () => {
    processImageFiles(fileElem.files);
  });

  removeBtn.addEventListener("click", function () {
    previewImg.src = "";
    previewImg.style.display = "none";
    previewText.style.display = "inline";
    removeBtn.style.display = "none";
    fileElem.value = "";
  });

  function processImageFiles(files) {
    if (!files.length) return;
    const file = files[0];
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      previewImg.src = e.target.result;
      previewImg.style.display = "block";
      previewText.style.display = "none";
      removeBtn.style.display = "inline-block";
    };
    reader.readAsDataURL(file);
  }
});


// --------------------------->  Buscador de CEP  <-------------------------------

const cepInput = document.getElementById('cep');
const ruaInput = document.getElementById('rua');
const bairroInput = document.getElementById('bairro');
const cidadeInput = document.getElementById('cidade');
const estadoInput = document.getElementById('estado');

cepInput.addEventListener('blur', function () {
  const cep = cepInput.value.replace(/\D/g, '');

  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          ruaInput.value = data.logradouro;
          bairroInput.value = data.bairro;
          cidadeInput.value = data.localidade;
          estadoInput.value = data.uf;
        } else {
          alert('CEP não encontrado.');
        }
      })
      .catch(() => alert('Erro ao buscar o CEP.'));
  }
});

  //--------------------------------------- animal -------------------------------------------

    animais.forEach(animal => 
      {
      const card = document.createElement("div");
      card.className = "animal-card";
      card.innerHTML = 
      `
        <img src="${animal.imagem}" alt="${animal.nome}">
        <h3>${animal.nome}</h3>
        <p>${animal.especie}</p>
        <button>Adotar</button>
      `;
      listaAnimais.appendChild(card);
    });

  //--------------------------------------- Funções do Submit  -------------------------------------------

  function adocao()
  {
      window.location.href = "adocao.html";
  }
    
  function irparapaginacadastro()
  {
      window.location.href = "cadastrodeconta.html";
  }

  
  
  

  //----------------------------------- Correção dos botões -----------------------------------------

  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); //impede o envio padrão

    //Aqui você poderia enviar os dados com fetch(), se quiser.

    //Simulando envio com sucesso
    console.log("Formulário enviado!");

    //Redireciona para outra página apos o "envio"
    window.location.href = "cadastrodeconta.html";
  });

  //-------------------------------------- JS -------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const lista = document.getElementById("lista-cadastro");
  
    let cadastro = JSON.parse(localStorage.getItem("cadastro")) || [];
  
    function renderCadastro() {
      lista.innerHTML = "";
      cadastro.forEach((item, index) => {
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
  
      const novoCadastro = {
        nome: form.nome.value,
        cpf: form.cpf.value
      };
  
      cadastro.push(novoCadastro);
      localStorage.setItem("cadastro", JSON.stringify(cadastro));
      form.reset();
      renderCadastro();
    });
  
    window.remover = function (index) {
      cadastro.splice(index, 1);
      localStorage.setItem("cadastro", JSON.stringify(cadastro));
      renderCadastro();
    };
  
    window.editar = function (index) {
      const cadastro = cadastro[index];
      form.nome.value = cadastro.nome;
      form.cpf.value = cadastro.cpf;
      cadastro.splice(index, 1);
      localStorage.setItem("cadastro", JSON.stringify(cadastro));
      renderCadastro();
    };
  
    renderCadastro();
  });



