# create-enchilada (for AI agents)

A CLI scaffolding tool that generates web application projects from templates.

## Usage

```bash
# Interactive mode
npx create-enchilada

# Non-interactive (recommended for agents)
npx create-enchilada --template <template> <project-name>

# List all templates with full stack details
npx create-enchilada --list
```

## Flags

| Flag | Alias | Description |
|------|-------|-------------|
| `--template NAME` | `-t` | Use a specific template by name |
| `--list` | `-l` | Print all templates with stack details, then exit |
| `--help` | `-h` | Print usage summary, then exit |

## Templates

| Template | Category | Stack |
|----------|----------|-------|
| `vanilla-js` | Frontend | Vanilla JS + Vite |
| `react` | Frontend | React 19 + Vite |
| `react-dev` | Frontend | React 19 + Vite + Tailwind CSS + ESLint + Jest + React Testing Library |
| `react-webpack` | Frontend | React + Webpack |
| `react-dev-webpack` | Frontend | React + Webpack + Tailwind CSS + ESLint + Jest + React Testing Library |
| `react-typescript` | Frontend | React 19 + Vite + TypeScript |
| `react-dev-typescript` | Frontend | React 19 + Vite + TypeScript + Tailwind CSS + ESLint + Jest + React Testing Library |
| `react-rspack` | Frontend | React + Rspack |
| `node-express` | Backend | Express + Sequelize + PostgreSQL + JWT + Passport + ESLint + Jest |

## Examples

```bash
# Scaffold a React + Vite project
npx create-enchilada --template react my-app

# Scaffold a full-featured React project with TypeScript
npx create-enchilada --template react-dev-typescript my-app

# Scaffold a Node.js REST API
npx create-enchilada --template node-express my-api

# Scaffold into the current directory (directory must already exist)
npx create-enchilada --template vanilla-js .
```

## Notes

- The `<project-name>` becomes both the directory name and the `name` field in `package.json`.
- Use `.` as `<project-name>` to scaffold into the current directory. The directory must already exist; the parent directory name is used as the `name` in `package.json`.
- The target directory must not already exist (unless using `.`).
- After scaffolding, run `cd <project-name> && npm install` to get started.
