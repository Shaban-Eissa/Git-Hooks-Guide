# Git Hooks Workshop

A comprehensive interactive web application for learning Git hooks, lint-staged, commitlint, and modern development workflows. Master the essential tools that power automated code quality and consistent development practices.

## 🌟 Features

### 📚 Comprehensive Learning Modules
- **Pre-Commit Hooks** - Automate code formatting and linting before commits
- **Post-Checkout Hooks** - Sync environment and regenerate files after branch switches  
- **Pre-Push Hooks** - Run tests and checks before pushing to remote repositories
- **lint-staged** - Only lint and format changed files for lightning-fast commits
- **commitlint + commitizen** - Enforce conventional commits with interactive prompts
- **Conventional Commits** - Learn structured, meaningful commit message standards

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shaban-Eissa/Git-Hooks-Guide.git
   cd Git-Hooks-Guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🎯 Learning Path

### Beginner Track
1. Start with **Overview** to understand Git hooks fundamentals
2. Learn **Pre-Commit** hooks for basic code quality automation
3. Explore **lint-staged** for efficient file processing

### Intermediate Track
4. Master **Conventional Commits** for better commit messages
5. Set up **commitlint** for automated message validation
6. Implement **Post-Checkout** hooks for environment sync

### Advanced Track
7. Configure **Pre-Push** hooks for comprehensive testing
8. Combine all tools for a complete development workflow
9. Customize configurations for your team's needs

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 19.2
- **Language**: TypeScript 5.7
- **Styling**: TailwindCSS 4.1

## 📝 Git Hooks Covered

### Pre-Commit Hook
```bash
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

### lint-staged Configuration
```json
{
  "*.ts": [
    "prettier --write",
    "eslint --fix"
  ],
  "*.html": [
    "prettier --write"
  ],
  "*.scss": [
    "prettier --write"
  ]
}
```

### Commit Message Hook
```bash
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Format
This project follows [Conventional Commits](https://conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer(s)]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `build`, `ci`, `chore`

## 📚 Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged GitHub](https://github.com/okonet/lint-staged)
- [commitlint Documentation](https://commitlint.js.org/)
- [Conventional Commits Specification](https://conventionalcommits.org/)
- [Angular Documentation](https://angular.dev/)

## 🐛 Issues & Support

If you encounter any issues or have questions:

1. Check existing [Issues](https://github.com/Shaban-Eissa/Git-Hooks-Guide/issues)
2. Create a new issue with detailed description
3. Use the appropriate issue template

**Built with ❤️ for the developer community**

*Learn once, automate everywhere!*
