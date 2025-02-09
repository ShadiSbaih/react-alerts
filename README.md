# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

Alert Notification System
This project is a React-based alert notification system designed to provide users with clear and visually distinct alerts for different scenarios such as errors, warnings, information, success, and default notices. The system is built using modern React practices and styled with SCSS for a clean and responsive design.
Features
Multiple Alert Types: Supports error, warning, information, success, and default alerts, each with unique styling and icons.
Customizable Content: Easily change the title, description, and icon for each alert type to suit your application's needs.
Responsive Design: Alerts are styled using SCSS to ensure they look great on all devices.
Icon Integration: Utilizes the lucide-react library for a wide range of icons to enhance the visual appeal of alerts.
Technologies Used
React: A JavaScript library for building user interfaces.
SCSS: A CSS preprocessor for more efficient and organized styling.
Lucide-React: A library of icons for React applications.
Getting Started
Clone the repository:
2. Install dependencies:
3. Run the application:
Open in browser:
Navigate to http://localhost:3000 to view the application.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.
