// Definição do widget de tradução
(function () {
    var gt = window.gtranslateSettings || {};
    gt = gt[document.currentScript.getAttribute('data-gt-widget-id')] || gt;

    // Dados de idiomas
    var lang_array_english = {
        // Lista de idiomas em inglês
    };

    var lang_array_native = {
        // Lista de idiomas nativos
    };

    var default_language = gt.default_language || 'auto';
    var languages = gt.languages || Object.keys(lang_array_english);
    var alt_flags = gt.alt_flags || {};
    var flag_style = gt.flag_style || '2d';
    var flags_location = gt.flags_location || 'https://cdn.gtranslate.net/flags/';
    var url_structure = gt.url_structure || 'none';
    var custom_domains = gt.custom_domains || {};
    var switcher_horizontal_position = gt.switcher_horizontal_position || 'left';
    var switcher_vertical_position = gt.switcher_vertical_position || 'bottom';
    var float_switcher_open_direction = gt.float_switcher_open_direction || 'top';
    var native_language_names = gt.native_language_names || false;
    var detect_browser_language = gt.detect_browser_language || false;
    var wrapper_selector = gt.wrapper_selector || '.gtranslate_wrapper';
    var custom_css = gt.custom_css || '';
    var lang_array = native_language_names && lang_array_native || lang_array_english;

    var u_class = '.gt_container-' + Array.from('float' + wrapper_selector).reduce(function (h, c) {
        return 0 | (31 * h + c.charCodeAt(0));
    }, 0).toString(36);

    // Código do widget
    var widget_code = '<!-- GTranslate: https://gtranslate.com -->';
    var widget_css = custom_css;
    flags_location += (flag_style == '3d' ? 32 : 'svg') + '/';
    var flag_ext = flag_style == '3d' ? '.png' : '.svg';

    // Função para obter a URL da bandeira de um idioma
    function get_flag_src(lang) {
        // Implementação da função
    }

    // Função para obter o URL de tradução para um idioma
    function get_lang_href(lang) {
        // Implementação da função
    }

    // Obtenção do idioma atual
    var current_lang = document.querySelector('html').getAttribute('lang') || default_language;

    // Verificação de estrutura de URL
    if (url_structure == 'none') {
        // Criação do elemento do Google Translate
        widget_code += '<div id="google_translate_element2"></div>';
        widget_css += "div.skiptranslate,#google_translate_element2{display:none!important}";
        widget_css += "body{top:0!important}";
        widget_css += "font font{background-color:transparent!important;box-shadow:none!important;position:initial!important}";
    }

    // Configurações de estilo do widget
    widget_css += '.gt_float_switcher{font-family:Arial;font-size:20px;border-radius:2px;color:#555;display:inline-block;line-height:20px;box-shadow:rgba(0,0,0,0.15) 0 5px 15px;background:#fff;overflow:hidden;transition:all .5s cubic-bezier(0.4, 0, 1, 1)}';
    widget_css += '.gt_float_switcher img{vertical-align:middle;display:inline-block;width:33px;height:auto;margin:0 5px 0 0;border-radius:3px}';
    // ...

    // Inclusão do CSS no cabeçalho
    var add_css = document.createElement('style');
    add_css.classList.add('gtranslate_css');
    add_css.textContent = widget_css;
    document.head.appendChild(add_css);

    // Adicionar o código do widget aos seletores correspondentes
    document.querySelectorAll(wrapper_selector).forEach(function (e) {
        e.classList.add(u_class.substring(1));
        e.innerHTML += widget_code;
    });

    // Tratamento de URL
    if (url_structure == 'none') {
        // Função para obter o idioma atual
        function get_current_lang() {
            // Implementação da função
        }

        // Função para disparar um evento
        function fire_event(element, event) {
            // Implementação da função
        }

        // Carregar a biblioteca de tradução do Google
        function load_tlib() {
            // Implementação da função
        }

        // Função para traduzir o idioma
        window.doGTranslate = function (lang_pair) {
            // Implementação da função
        }

        // Inicialização do elemento de tradução do Google
        window.googleTranslateElementInit2 = function () {
            // Implementação da função
        }

        if (current_lang != default_language)
            load_tlib();
        else
            document.querySelectorAll(u_class).forEach(function (e) {
                e.addEventListener('pointerenter', load_tlib)
            });
    }

    // Variável para controle do estado do widget
    var gt_float_open = false;

    // Função para lidar com rolagem horizontal
    function gt_hscroll(evt) {
        // Implementação da função
    }

    // Função para exibir o widget de tradução flutuante
    function gt_show_float_switcher(el) {
        // Implementação da função
    }

    // Função para ocultar o widget de tradução flutuante
    function gt_hide_float_switcher() {
        // Implementação da função
    }

    // Função para atualizar o idioma no widget de tradução flutuante
    function gt_update_float_language(el) {
        // Implementação da função
    }

    // ... (continuação do código)

    // Adicionar eventos aos elementos do widget
    setTimeout(function () {
        document.querySelectorAll(u_class + ' .gt_float_switcher').forEach(function (e) {
            e.style.opacity = 1
        })
    }, 20);

    // ...

    // Adicionar eventos aos elementos do widget
    document.querySelectorAll(u_class + ' a[data-gt-lang]').forEach(function (e) {
        e.addEventListener('click', function (evt) {
            // Implementação do evento de clique
        });
    });

    document.querySelectorAll(u_class + ' div.gt-selected').forEach(function (e) {
        // Implementação do evento de clique e outros eventos
    });

    // ...

    document.addEventListener('click', function () {
        if (gt_float_open) gt_hide_float_switcher()
    });

    if (detect_browser_language && window.sessionStorage && window.navigator && sessionStorage.getItem('gt_autoswitch') == null && !/bot|spider|slurp|facebook/i.test(navigator.userAgent)) {
        // Implementação da detecção automática de idioma
    }
})();
