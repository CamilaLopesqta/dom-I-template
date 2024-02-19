const pegarNome = () => {
  const nomeDoInput = document.getElementById("nome");
  console.log(nomeDoInput.value);
};

const limparNome = () => {
  const nomeDoInput = document.getElementById("nome");
  nomeDoInput.value = "";
};

const pegarEndereco = () => {
  const enderecoDoInput = document.getElementById("endereco");
  console.log(enderecoDoInput.value);
};

const limparEndereco = () => {
  const enderecoDoInput = document.getElementById("endereco");
  enderecoDoInput.value = "";
};

const pegarEmail = () => {
  const emailDoInput = document.getElementById("email");
  console.log(emailDoInput.value);
};

const limparEmail = () => {
  const emailDoInput = document.getElementById("email");
  emailDoInput.value = "";
};
