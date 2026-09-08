# Modernization plan

## Phase 1 — Foundation

- Upgrade Gatsby 2 to Gatsby 5.
- Upgrade React to 19.
- Standardize Node.js on 24.
- Replace deprecated Gatsby image stack with `gatsby-plugin-image`.
- Remove legacy plugins where practical.
- Preserve existing article URLs.
- Fix dynamic page generation and pagination.

## Phase 2 — SEO and accessibility

- Migrate SEO to Gatsby Head API.
- Add canonical URLs and article structured data.
- Review Open Graph and Twitter metadata.
- Improve semantic HTML and accessibility.

## Phase 3 — Search and content

- Review Algolia client/API usage.
- Evaluate Netlify CMS migration/removal.
- Formalize Markdown frontmatter schema.

## Phase 4 — Quality and delivery

- Add CI with build and formatting checks.
- Add dependency/security checks.
- Introduce TypeScript selectively in application code.
- Document local development and deployment.
