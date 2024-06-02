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

First, install dependencies:

```bash
npm i --legacy-peer-deps
```

The flag is necessary to work around false positives for dependency conflicts due to using Release Candidate versions of React 19 and Next.js 15.

Then, run the development server:

```bash
npm i --legacy-peer-deps
```
The flag is necessary to work around false positives for dependency conflicts due to using Release Candidate versions of React 19 and Next.js 15.


Then, run the development server:
```bash
npm run dev
```


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
