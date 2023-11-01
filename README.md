## caipora-portifolio

This project represents an advanced endeavor in full-stack application programming as part of the IT Bachelor's program at the IPT, Portugal. The driving objective is to ensure the design remains modular and current with the latest full-stack technologies.

The website is themed around the concept of "Building in Public," where users can showcase their ongoing and past projects. It serves as an interactive portfolio for potential employers, colleagues, or other interested parties.

As a commitment to the developer community, all source code will be open-sourced. Comprehensive documentation will be provided to explain the architectural structure and potential customizations that could be made for personalized portfolios.

Here's a glance at the key features the project offers:

## Features

### World App
![alt text](https://github.com/caipora-cs/caipora/blob/master/public/screenshot1.png?raw=true)
- WebGL GPU acceleration 👾
- Type enforced and secured ✍🏿
- Modular, change models, camera, lights easily 🎥
- Animated 🎇
- Async loading  ♻️
- Camera controls 📹
- Diagnostic tools for the models 📊

### dev_mode (Terminal)
![alt text](https://github.com/caipora-cs/caipora/blob/master/public/screenshot2.png?raw=true)
- Responsive Design 📱💻
- Multiple themes 🎨
- Autocomplete feature ✨ (TAB | Ctrl + i)
- Go previous and next command ⬆️⬇️
- View command history 📖
- Tests ✅

### API
![alt text](https://github.com/caipora-cs/caipora/blob/master/public/screenshot3.png?raw=true)
- MongoDB Atlas cloud deployment ☁️
- Model View Controller (code-first) based 📚
- Cookie based authentication (No raw pass) 🍪
- CRUD ready 📨

## Tech Stack
**Frontend** - [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Three.js](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene), [gsap](https://greensock.com/gsap/) , [Vite](https://vitejs.dev/) , [MaterialUI](https://mui.com/)
**Styling** - [Styled-Components](https://styled-components.com/)  
**State Management** - [ContextAPI](https://reactjs.org/docs/context.html)  
**Testing** - [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/)  
**Backend**- [Express](https://expressjs.com/), [Mongoose](https://mongoosejs.com/), [lodash](https://lodash.com/), [Nodemon](https://nodemon.io/)  
**DevDependencies**- [husky](https://typicode.github.io/husky/), [Prettier](https://prettier.io/), [Eslint](https://eslint.org/)  
**Deployment** - [Vercel](https://vercel.com/)

## Running Locally
*Can always check package.json scripts*

Clone the project

```bash
git clone https://github.com/caipora-cs/caipora.git```

Go to the project directory

```bash
cd terminal-portfolio
```

Remove remote origin

```bash
git remote remove origin
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
npx vite
```

Test dev_mode

```bash
vitest run
```

Format code

```bash
prettier --check
prettier --write
```

Node

```bash
nodemon
npm start
```

## Inspiration and Credits
- [Monster Plant](https://sketchfab.com/3d-models/monster-plant-b7e677ebca4e4b6ea247fba10a356bd4)
- [Smol Ame](https://sketchfab.com/3d-models/smol-ame-in-an-upcycled-terrarium-hololiveen-490cecc249d242188fda5ad3160a4b24)
- [Coffemat](https://threejs.org/examples/#webgl_loader_gltf_compressed)
- [Coding Garden](https://github.com/CodingGarden/intro-to-typescript/tree/examples/examples/express-api)
- [joeythelantern](https://github.com/joeythelantern/Mongoose-Typescript-In-Depth/tree/main/src)
- [term m4tt72](https://term.m4tt72.com/)
- [Forrest](https://fkcodes.com/)
- [satnaing](https://satnaing.dev)

