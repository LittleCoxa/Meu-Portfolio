
document.addEventListener('DOMContentLoaded', function () {
    const radioInputs = document.querySelectorAll('input[type="radio"][name="slider"]');
    const titulotext = document.getElementById('titulo')
    const descriptionText = document.getElementById('texto02');

    radioInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.checked) {
                const selectedProjectId = input.getAttribute('id');
                atualizarDescricao(selectedProjectId);
            }
        });
    });

    function atualizarDescricao(idProjeto) {
        switch (idProjeto) {
            case 'item-1':
                titulotext.textContent = "Pokedex"
                descriptionText.textContent = "Esse projeto foi oque eu mais me aprofundei na programação de javascript e css, nesse projeto executei tudo que eu tinha aprendido ate o momento para criar o melhor projeto possivel com minhas habilidade no momento."
                break;
            case 'item-2':
                titulotext.textContent = "Site do GoogleGlass"
                descriptionText.textContent = "Projeto criado durante a execução do meu curso de HTML5, esse foi meu primeiro projeto criado foi apartir dele que eu consegui aprender o basico para poder efetuar a criação de todos os meus outros projetos.";
                break;
            case 'item-3':
                titulotext.textContent = "Relógio Digital"
                descriptionText.textContent = "Projeto criado para aprendizado de JavaScript";
                break;
            default:
                descriptionText.textContent = "Descrição padrão";
                break;
        }
    }
});


window.gtranslateSettings = {
    "default_language":"pt",
    "detect_browser_language":true,
    "languages":["pt","es","en"],
    "globe_color":"#66aaff",
    "wrapper_selector":".gtranslate_wrapper",
    "horizontal_position":"left",
    "vertical_position":"bottom",
    "alt_flags":{"en":"usa","pt":"brazil"}}
