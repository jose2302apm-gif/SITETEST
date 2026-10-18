# Segurança — Vitrine 3.0

## O que foi aplicado no front-end

- Política CSP para restringir scripts, estilos, fontes, imagens, mídia e conexões às origens necessárias.
- Cabeçalhos de segurança preparados para Netlify/Cloudflare Pages (`_headers`), Netlify (`netlify.toml`), Vercel (`vercel.json`) e Apache (`.htaccess`). Use somente a configuração correspondente à sua hospedagem.
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy` e `Cross-Origin-Opener-Policy`.
- URLs de imagens validadas contra uma lista de origens permitidas; links de afiliado e mídia precisam usar HTTPS e não podem conter credenciais.
- Texto variável escapado antes de entrar em templates HTML; políticas e mensagens inseridas com `textContent`.
- Estado do `localStorage` tratado como dado não confiável: estrutura, IDs e quantidades são validados e limitados.
- Links de saída usam `noopener`, `noreferrer` e `sponsored`.
- Sem scripts de terceiros, bibliotecas JavaScript externas ou fontes remotas; usa fontes do sistema para reduzir dependências e requisições externas.
- Sem login, formulários de envio, API, banco de dados ou processamento de pagamentos no projeto atual.

## Limites importantes

Este é um site estático. Essas medidas reduzem riscos no navegador, mas não tornam um site invulnerável e não protegem, por si só, a conta da hospedagem, DNS, domínio, repositório, computador do desenvolvedor, disponibilidade contra DDoS ou os sites de afiliados. Não existe autenticação, servidor ou banco de dados neste projeto; portanto, não armazene segredos, senhas ou chaves de API no HTML/JavaScript.

Os cabeçalhos HTTP só são aplicados se a hospedagem reconhecer a configuração correspondente. A meta CSP do HTML é uma camada de apoio, mas não substitui o cabeçalho HTTP — em especial para `frame-ancestors`. Depois da publicação, confira os cabeçalhos efetivamente enviados com as ferramentas do navegador ou um verificador de cabeçalhos.

## Antes de publicar

1. Hospede somente por HTTPS e confirme que o certificado TLS está válido.
2. Escolha **apenas** a configuração da sua plataforma: `_headers` (Netlify/Cloudflare Pages), `netlify.toml`, `vercel.json` ou `.htaccess` (Apache com `mod_headers`). Não copie todos para servidores que não os utilizam.
3. Teste a política CSP no site publicado. Se adicionar uma fonte de imagens, fontes, vídeo, analytics ou outro serviço, permita somente a origem necessária na política. Evite `unsafe-inline`, `unsafe-eval` e curingas `*` em `script-src`.
4. Só ative HSTS depois de confirmar HTTPS estável no domínio e em todos os subdomínios que seriam abrangidos. Não foi habilitado por padrão para evitar bloquear subdomínios que ainda usem HTTP.
5. Substitua os produtos, preços, descontos, links de afiliados, links sociais e textos legais demonstrativos.
6. Não aceite HTML de terceiros nem dados externos diretamente em `innerHTML`. Se integrar API no futuro, valide os dados e use `textContent`/criação de elementos sempre que possível.
7. Atualize e revise dependências antes de adicionar bibliotecas; atualmente, o projeto não usa dependências JavaScript externas.
8. Proteja a conta da hospedagem e do domínio com senha exclusiva, autenticação multifator e permissões mínimas.
9. Mantenha cópias de segurança e monitore alertas de segurança da plataforma.
10. Faça uma revisão independente antes de usar dados pessoais, contas de clientes ou pagamentos.

## URLs permitidas atualmente

- Imagens: mesma origem e `https://images.unsplash.com`.
- Fontes: fontes nativas do sistema; nenhuma origem externa é necessária.
- Links de afiliado: HTTPS; atualize manualmente para URLs legítimas de parceiros.
- Vídeo: HTTPS. Caso use vídeos de domínios específicos, restrinja `media-src` a esses domínios em vez de liberar mais origens que o necessário.

## Reportar vulnerabilidade

Antes da publicação, adicione um canal de contato válido no site para receber relatos de problemas. Não publique informações pessoais ou segredos em relatórios públicos.


Nota da versão 3.2: a tipografia usa Google Fonts (`fonts.googleapis.com` e `fonts.gstatic.com`), explicitamente permitidos na CSP. Caso queira eliminar a dependência externa, remova os links de fonte do `index.html` e volte a restringir `style-src` e `font-src` a `self`.
