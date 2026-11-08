# Portfólio de Matheus Evangelista — 3 idiomas (offline)

Site estático em **HTML, CSS e JavaScript puro**, sem Tailwind, CDN, Google Fonts, dependências de terceiros ou build. As fotos, o currículo, o favicon e as bandeiras SVG são **arquivos locais**. Os links de redes sociais e da empresa Scutiganimedes continuam externos somente quando clicados.

## Ajustes visuais desta versão

- **Navegação:** texto em negrito, sem depender de fontes externas.
- **Página inicial:** títulos menos pesados, setas circulares com SVG centralizado, faixa de separação entre *Sobre Mim* e os destaques, além de dois painéis com cabeçalhos destacados em caixas.
- **Experiência:** títulos das funções maiores e centralizados; responsabilidades em fonte ampliada, utilizando a largura do cartão branco. As áreas flexíveis de fotos continuam disponíveis.
- **Projetos e cursos:** títulos principais com peso visual reduzido.
- **Rodapé:** layout compacto em três partes (nome, redes sociais e direitos autorais), inspirado na primeira referência enviada. A opção *Voltar ao topo* permanece acessível.
- Os ajustes afetam português, inglês e espanhol e ficam documentados nos arquivos CSS.

## Abrir

Abra `index.html` no navegador. É possível navegar pelas versões em **português (🇧🇷)**, **inglês (🇺🇸)** e **espanhol (🇪🇸)** usando as bandeiras do cabeçalho, inclusive offline. As outras páginas continuarão no idioma selecionado.

## Pastas e páginas

- `index.html`, `exp.html`, `projeto.html`, `cursos.html` — português.
- `en/` — quatro páginas completas em inglês, mais a página-modelo de detalhes.
- `es/` — quatro páginas completas em espanhol, mais a página-modelo de detalhes.
- `detalhes-projeto.html` — página-modelo para futuros detalhes de projetos (português).
- `css/` — estilos globais, páginas e responsividade.
- `js/main.js` — menu móvel, botão de voltar ao topo e ano no rodapé.
- `js/carousel.js` — carrossel acessível e independente de bibliotecas.
- `js/project-details.js` — lê o slug e identifica o projeto na página-modelo.
- `assets/images/` — todas as imagens do site.
- `assets/images/flags/` — bandeiras de Brasil, Espanha e Estados Unidos em SVG.
- `assets/images/experiencias/` — adicione fotos de trabalhos/experiências.
- `assets/docs/` — currículo PDF local.

## Adicionar uma foto em cada experiência

Há um espaço reservado em **cada uma das nove experiências**; a primeira já mostra uma fotografia. Abra `exp.html` (e também `en/exp.html` e `es/exp.html`), procure `data-photo-slot="experiencia-02"` (altere o número conforme necessário) e substitua o `div` com a classe `experience-photo-placeholder` por:

```html
<img src="assets/images/experiencias/experiencia-02.jpg" alt="Minha equipe no trabalho" loading="lazy">
```

Nas versões em inglês/espanhol, use `../assets/images/experiencias/experiencia-02.jpg`.

Se quiser, remova a classe `experience-photo--placeholder` do `<figure>` ao inserir sua imagem. As regras de `css/experience.css` usam **width/height automáticos e object-fit: contain**: fotos verticais, quadradas ou panorâmicas mantêm proporções, sem cortes. Você pode trocar `.jpg` por `.png` ou `.webp`. Não há necessidade de ter todas as imagens agora.

## Detalhes dos projetos

Cada card tem **GitHub** e **Detalhes**. GitHub aponta para a lista de repositórios já usada no projeto original, pois ainda não foram informadas URLs individuais. O botão de detalhes leva a uma **página local funcional de “Em breve”**, com endereço no formato `detalhes-projeto.html?projeto=slug` (ou `en/`, `es/`). Quando construir uma página detalhada, poderá manter o mesmo slug, alterar o link para a página específica ou substituir esse modelo.

Os títulos usados pelo modelo são mantidos em `js/project-details.js`. Nenhuma documentação técnica inexistente foi inventada.

## Editar textos e traduções

Os textos estão diretamente no HTML de cada idioma, para que **cada página tenha conteúdo próprio mesmo sem JavaScript**. Ao mudar informações profissionais, atualize as três versões correspondentes. O cabeçalho e rodapé são consistentes entre páginas. Não há plugins de tradução nem arquivos JSON baixados pela internet.

## Observações antes de publicar

- A imagem inicial da equipe foi recuperada da referência visual e deve ser substituída pela original quando possível.
- Revise datas e status de certificações, que foram preservados como enviados (alguns agendamentos são anteriores à data atual).
- Verifique os endereços de GitHub por projeto quando você disponibilizar repositórios específicos.
- O conteúdo do **currículo PDF** foi mantido no original enviado, em português. O botão Download CV baixa o mesmo PDF em todas as versões.
