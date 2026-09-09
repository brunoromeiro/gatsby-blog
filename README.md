# Bruno Romeiro Blog

Nova geração do blog pessoal de Bruno Romeiro.

## Stack

- Next.js 16
- React 19
- TypeScript
- Payload CMS
- Lexical
- PostgreSQL

## Objetivo

Construir uma plataforma editorial própria para compartilhar conteúdo sobre engenharia de software, frontend, arquitetura, liderança técnica, IA, tecnologia e aprendizados pessoais.

O Gatsby atual permanece como referência histórica durante a migração. Esta branch é a fundação do rewrite e não altera a produção.

## Desenvolvimento

1. Instale Node.js 20.9+.
2. Copie `.env.example` para `.env.local`.
3. Preencha `DATABASE_URL` e `PAYLOAD_SECRET`.
4. Instale as dependências com `npm install`.
5. Rode `npm run dev`.
6. Acesse `/` para o site e `/admin` para o CMS.

## Próximas etapas

- consolidar schema editorial;
- configurar PostgreSQL de desenvolvimento;
- implementar design system;
- migrar conteúdo e URLs do Gatsby;
- adicionar busca, SEO e métricas;
- configurar storage de mídia para produção;
- configurar CI/CD e previews.
