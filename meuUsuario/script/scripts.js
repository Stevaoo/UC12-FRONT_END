document.addEventListener('DOMContentLoaded', () => {
  // Validação do formulário
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    alert('Mensagem enviada com sucesso!');
    form.reset();
  });

  // Consumo de API fictícia para projetos
  fetch('https://api.npoint.io/93bed93a99df4c91044e') // exemplo de JSON temporário
    .then(response => response.json())
    .then(data => {
      const projetosContainer = document.getElementById('projetos');

      data.projects.forEach(proj => {
        const div = document.createElement('div');
        div.classList.add('projeto');
        div.innerHTML = `
          <h3>${proj.name}</h3>
          <p>${proj.description}</p>
          <a href="${proj.link}" target="_blank">Ver Projeto</a>
        `;
        projetosContainer.appendChild(div);
      });
    })
    .catch(error => console.error('Erro ao carregar projetos:', error));
});
