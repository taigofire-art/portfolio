# tcarvalho · Portfolio

## Como subir no Vercel

### 1. Instale o Node.js (se não tiver)
https://nodejs.org — baixe a versão LTS

### 2. Suba para o GitHub
```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/tcarvalho-portfolio.git
git push -u origin main
```

### 3. Conecte ao Vercel
1. Acesse vercel.com e faça login com GitHub
2. Clique em "Add New Project"
3. Selecione o repositório tcarvalho-portfolio
4. Framework: **Create React App**
5. Clique em Deploy

Pronto! O site vai estar no ar em ~2 minutos.

## Estrutura
```
src/
  pages/
    Home.js         ← Página inicial
    CaseBV.js       ← Case Banco BV
    CaseMAAR.js     ← Case Petrobras
    CaseComingSoon  ← Placeholder casos pendentes
    Sobre.js        ← Página sobre
    Contato.js      ← Página contato
  components/
    Nav.js          ← Navegação compartilhada
  App.js            ← Rotas
```

## Para adicionar imagens futuras
As imagens dos cases estão em base64 dentro dos arquivos .js.
Para substituir por arquivo externo, coloque em /public/assets/ e use:
`src="/assets/nome-do-arquivo.webp"`
