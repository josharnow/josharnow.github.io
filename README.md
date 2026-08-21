# My Personal Website

Welcome to the repo for [my personal site](https://josharnow.com)! This project is a work in progress and will be updated as I continue to develop it.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Languages / Frameworks / Libraries Used](#languages--frameworks--libraries-used)
- [Project Management System](#project-management-system)
- [License](#license)

## Getting Started

Use Node.js 22 and install the locked dependencies:

```bash
npm ci --legacy-peer-deps
```

Then, run the development server:

```bash
npm run dev
```

Before opening a pull request, run the same lint, type-check, and production build checks used by CI:

```bash
npm run check
```

### Cloudflare deployment

The production build is a static Next.js export in `out/`. Cloudflare Workers Static Assets serves that directory directly; no runtime Worker code is required.

To preview the production export through Wrangler locally:

```bash
npm run preview:cloudflare
```

To deploy it from an authenticated local machine:

```bash
npx wrangler login
npm run deploy:cloudflare
```

The GitHub Actions deployment runs when a release is published or when the workflow is started manually. Configure these repository secrets before running it:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN` with Workers edit permission
- `NEXT_PUBLIC_WEB3FORMS_API_KEY`
- `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses IBM Plex Sans, an open-source font. I opted not to use the Google Fonts version because it doesn't exist as a variable font, so I instead used a `woff2` file from [this](https://github.com/IBM/plex) official repo.

## Features

- [Blog](https://github.com/josharnow/josharnow.github.io/issues/39)
- [3D Animations](https://github.com/josharnow/josharnow.github.io/issues/40)
- Portfolio/About/Contact Sections
- Project Management System [[on GitHub](https://github.com/users/josharnow/projects/2/views/1)]
- Server Components [where possible]
- _TBD_

## Languages / Frameworks / Libraries Used

- TypeScript
  - React.js
    - Next.js
- Tailwind CSS
- Three.js
- PrimeReact
- _TBD_


## Project Management System

To organize my ideas, set goals, and keep track of findings and progress on this project, I have leveraged `GitHub Projects`, GitHub's project managment system.

I'm used to using Jira in a professional setting but GitHub's built-in system has impressed me... although I am the only one using it here 😅. The only notable downside is the inability to "relate" issues on the project board to one another, like setting one as a blocker to another.

My project board can be found [here](https://github.com/users/josharnow/projects/2).

## License

This project is licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) (AGPL), a copyleft license that ensures the freedom to use, modify, and distribute the software. It is specifically designed for software that is used over a network, such as web applications.

The AGPL requires that any modifications or additions made to the software must also be released under the same license, ensuring that the source code remains open and accessible to the community. This promotes collaboration and encourages developers to contribute back to the project.

Please see the [LICENSE](LICENSE) file for more details.
