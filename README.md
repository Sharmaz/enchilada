<div align="center">
<p>
<img src="https://raw.githubusercontent.com/Sharmaz/enchilada/refs/heads/main/media/enchilada-js-logo.svg" width="250" alt="enchiladajs logo"/>
</p>

# Building apps with JavaScript — as if they were enchiladas!
</div>

<p align="center">
<a href="https://www.npmjs.com/package/create-enchilada"><img src="https://img.shields.io/npm/v/create-enchilada?logo=npm&color=blue" alt="version"></a>
<a href="https://github.com/Sharmaz/enchilada/actions/workflows/unit_tests.yml"><img src="https://img.shields.io/github/actions/workflow/status/Sharmaz/enchilada/unit_tests.yml?logo=jest&label=Tests" alt="tests"></a>
<a href="https://github.com/Sharmaz/enchilada/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Sharmaz/enchilada" alt="license"></a>
</p>

## Usage
### With npm
```
npm create enchilada@latest
```

### With pnpm
```
pnpm create enchilada@latest
```

### With yarn
```
yarn create enchilada
```

<img src="https://raw.githubusercontent.com/Sharmaz/enchilada/refs/heads/main/media/enchiladajs@latest.gif"  width="100%"  alt="enchiladajs logo"/>
</p>

## CLI Options
### Help:
```
npm create enchilada --help
```
or
```
npm create enchilada -h
```

### Template:
```
npm create enchilada -- --template [template-name] [app-name]
```
or
```
npm create enchilada -- -t [template-name] [app-name]
```
E.g:
```
npm create enchilada -- --template vanilla-js my-app
```

### Template List
| TEMPLATE | DESCRIPTION |
| :------- | :---------- |
| **vanilla-js**            | Vanilla JS + Vite |
| **react**                 | React + Vite |
| **react-webpack**         | React + Webpack |
| **react-typescript**      | React + Vite + TypeScript + ESlint |
| **react-dev**             | React + Vite + Tailwind CSS + ESlint + React Testing Library |
| **react-dev-typescript**  | React + Typescript + Vite + Tailwind CSS + ESlint + React Testing Library |
| **react-dev-webpack**     | React + Webpack + Tailwind CSS + ESlint + React Testing Library |
| **react-rspack**          | React + Rspack |
| **node-express**          | NodeJS + Express + Sequelize + ESlint + Jest |
