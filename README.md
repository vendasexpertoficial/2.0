# VENDAS EXPERT 2.0 — Landing Page de Conversão

## Visão Geral

Landing page altamente persuasiva, emocional e focada em conversão para o produto digital **VENDAS EXPERT 2.0**. O objetivo principal é conduzir o visitante emocionalmente até a escolha e clique em um dos 4 agentes de vendas individuais.

---

## ✅ Funcionalidades Implementadas

### Barra de Urgência Fixa
- Barra sticky no topo (sempre visível ao rolar)
- Cronômetro regressivo de 8 minutos (08:00 → 00:00, loop automático)
- Efeito de pulsação animado
- Cor vermelha que muda ao rolar a página

### Hero Section
- Imagem de capa com overlay premium
- Título emocional impactante
- Subtítulo de identificação imediata
- Botão animado com efeito glow e link âncora para seção de agentes

### Seção de Dor (Identificação)
- 3 cards com objeções reais de vendas ("Tá caro", "Vou pensar", "Vi mais barato")
- Animação sequencial de entrada ao rolar
- Conclusão emocional de impacto

### Transição Persuasiva
- Separador com frase de transição
- Destaque da solução com tipografia premium

### Gatilho de Escolha
- Direcionamento claro para os agentes
- Animação de bouncing na seta

### Seção de Agentes (Foco Total)
- **4 cards premium** com imagens reais de cada agente
- Efeito hover com glow dourado e zoom na imagem
- Botão individual por agente ("Quero Este Agente")
- Links de checkout individuais e independentes
- Efeito de partículas cintilantes no hover
- Efeito ripple no clique do botão

### Gatilho Final
- Frase de pressão leve abaixo dos cards

### Prova Social
- Estrelas animadas
- Badges de credibilidade

### Quebra de Objeção
- Mensagem tranquilizadora
- Botão de retorno aos agentes

---

## 📁 Estrutura de Arquivos

```
index.html              → Página principal
css/
  style.css             → Estilos premium (dark + gold theme)
js/
  main.js               → Cronômetro, animações, interatividade
images/
  capa.png              → Imagem hero de fundo
  lucas.png             → Foto Agente 1 — Lucas Montenegro
  caio.png              → Foto Agente 2 — Caio Ventura
  rafael.png            → Foto Agente 3 — Rafael Mendonça
  victor.png            → Foto Agente 4 — Eng. Victor Almeida
README.md
```

---

## 🔗 Links de Checkout (a configurar)

Abra `index.html` e localize as marcações `SEU_LINK_CHECKOUT_*` para substituir pelos links reais:

| Agente              | Atributo href do botão                  |
|---------------------|-----------------------------------------|
| Lucas Montenegro    | `SEU_LINK_CHECKOUT_LUCAS_AQUI`          |
| Caio Ventura        | `SEU_LINK_CHECKOUT_CAIO_AQUI`           |
| Rafael Mendonça     | `SEU_LINK_CHECKOUT_RAFAEL_AQUI`         |
| Eng. Victor Almeida | `SEU_LINK_CHECKOUT_VICTOR_AQUI`         |

---

## 🎨 Design

- **Paleta**: Fundo preto (#080808) + dourado (#C9A84C / #F0C85A)
- **Tipografia**: Cinzel (títulos elegantes) + Inter (corpo) + Playfair Display (ênfase)
- **Efeitos**: Glow, pulsação, scroll reveal, hover transform, ripple, partículas
- **Responsivo**: Mobile-first, breakpoints em 768px e 480px

---

## ⚙️ Próximos Passos Recomendados

1. **Substituir os links de checkout** de cada agente no `index.html`
2. **Adicionar pixel de rastreamento** (Facebook Pixel, Google Tag Manager) no `<head>`
3. **Adicionar depoimentos reais** na seção de prova social
4. **Testar no mobile** — verificar altura da barra de urgência e espaçamento
5. **Configurar SEO básico** — meta description, og:image, og:title
6. **Publicar** via aba Publish

---

## 🌐 Entrada Principal

| Rota | Descrição |
|------|-----------|
| `/` ou `index.html` | Página única de conversão |

---

## 📊 Estrutura de Dados

Este projeto não utiliza banco de dados. É uma landing page estática pura com HTML/CSS/JS.
