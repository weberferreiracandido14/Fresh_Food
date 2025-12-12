# 🥗 Fresh Food – Guia de Alimentação Saudável

O **Fresh Food** é um site responsivo e interativo que apresenta informações sobre **alimentação saudável e dicas de bem-estar**.  
O projeto foi desenvolvido com **HTML5, CSS3 e JavaScript puro**, priorizando design moderno, usabilidade e acessibilidade.

---

## 🌱 Funcionalidades

- **Layout Responsivo:** adaptável para dispositivos móveis, tablets e desktops.  
- **Menu interativo e navegação suave:** rolagem fluida entre seções.  
- **Animações de entrada:** cards e seções aparecem gradualmente ao rolar a página.  
- **Efeito Parallax:** leve movimento da imagem principal conforme o scroll.  
- **Página de Dietas (dietas.html):** descrição das principais dietas saudáveis (Mediterrânea, Equilibrada e Plant-Based).  
- **Formulário de Contato:** simula envio de mensagem com alerta visual.  
- **Design Clean e Profissional:** tipografia Poppins, ícones e cores suaves.  

---

## 🧩 Estrutura de Arquivos

```

📁 projeto-fresh-food/
│
├── index.html           # Página principal com seções de Início, Sobre, Dicas e Contato
├── dietas.html          # Página com exemplos de dietas saudáveis
├── style.css            # Estilos globais, layout responsivo e componentes visuais
├── script.js            # Efeitos visuais, animações e interatividade
├── alimentos.png        # Logo do site (referência visual)
├── prato.jpg, detox.jpg # Imagens principais utilizadas no layout
└── upload/search_images/ # Pasta com imagens das dietas

````

---

## 💡 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica do conteúdo  
- **CSS3** – Design, grid layout, media queries e animações  
- **JavaScript (ES6)** – Interatividade e controle de eventos  
- **Google Fonts (Poppins)** – Tipografia moderna  

---

## ⚙️ Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/weberferreiracandido14/fresh-food.git
````

2. **Acesse a pasta do projeto:**

   ```bash
   cd fresh-food
   ```

3. **Abra o arquivo principal no navegador:**

   * Clique duas vezes em `index.html`, **ou**
   * Execute via servidor local:

     ```bash
     npx live-server
     ```

     *(ou use a extensão “Live Server” do VSCode)*

---

## 📱 Layout Responsivo

O design foi construído com **media queries** e **flex/grid layouts** para garantir boa usabilidade em:

* Smartphones
* Tablets
* Monitores de alta resolução

---

## ✨ Destaques do Código

* **Efeitos de Scroll e Animação:**

  * Implementados via `IntersectionObserver` no `script.js`:

    ```js
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    ```

* **Menu mobile dinâmico:**

  * O botão *hamburger* alterna o menu em telas pequenas.

* **Formulário Simulado:**

  * Exibe mensagem de sucesso após “envio” para fins de demonstração.

---

## 📸 Prévia

**Página Inicial (`index.html`)**

> Apresenta o banner principal com chamada para ação e seções de benefícios e dicas.

**Página de Dietas (`dietas.html`)**

> Mostra cards informativos sobre diferentes estilos de alimentação saudável.

---

## 🧑‍💻 Autor

Desenvolvido por **[Weber Ferreira]**
🌐 [https://github.com/weberferreiracandido14](https://github.com/weberferreiracandido14)

---

## ⚠️ Aviso

> As informações contidas neste site têm caráter **educacional e informativo**, não substituindo orientação profissional de um nutricionista ou médico.
> Este projeto é apenas **demonstrativo**, sem vínculo com empresas ou marcas citadas.

---

## 🪪 Licença

Distribuído sob a licença **MIT License**.
Sinta-se livre para usar, modificar e distribuir com os devidos créditos.

---

```
