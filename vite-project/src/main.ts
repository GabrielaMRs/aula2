const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const senha = document.getElementById('senha') as HTMLInputElement;
    const dataNascimento = document.getElementById('data') as HTMLInputElement;

    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !senha || !dataNascimento) {
      alert('Todos os campos são obrigatórios');
      return;
    }

    // Validação do nome
    if (name.value.length < 3) {
      alert('Nome deve ter pelo menos 3 caracteres.');
      return;
    }

    // Validação do email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    // Validação da senha
    if (senha.value.length < 6) {
      alert('Sua senha deve ter pelo menos 6 caracteres.');
      return;
    }

    // Se todas as validações passarem
    alert('Formulário enviado com sucesso!');
  });
}
