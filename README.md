# Project Name

CoPCB built with **Next.js**, **Tailwind CSS v4**, **DaisyUI** and **HeroUI** and other modern frontend tools.


# Getting Started

Follow these steps to run this project on your local machine.

## 1. Clone the repository

```bash
git clone <repository-url>
```

Example:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

Move into the project folder:

```bash
cd your-repo-name
```

---

## 2. Install dependencies

Install all project dependencies:

```bash
npm install
```

This will install all dependencies listed in:

- `package.json`

Including:

```json
@gravity-ui/icons
@tailwindcss/postcss
babel-plugin-react-compiler
daisyui
eslint
eslint-config-next
tailwindcss
```

---

## 3. Install additional packages (if needed)

If the project uses icon libraries, install:

### React Icons

```bash
npm install react-icons
```

### Lucide Icons (optional)

```bash
npm install lucide-react
```

---

## 4. Run development server

Start the development server:

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

in your browser.

Currently it does not have any environment variables, but if you need to add any, create a `.env.local` file in the root of the project and add your variables there.