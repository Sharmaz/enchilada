# Contributing to Create Enchilada

Thank you for your interest in contributing to Create Enchilada! We welcome contributions from everyone, whether you're fixing a bug, adding a feature, improving documentation, or helping with community support.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Community](#community)

## Code of Conduct

This project adheres to our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [irae45@gmail.com](mailto:irae45@gmail.com).

## Getting Started

### Prerequisites

- Node.js 18+ and npm 8+
- Git
- A GitHub account

### First-time Contributors

If you're new to open source, check out:
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)

Look for issues labeled `good first issue` or `help wanted` to get started.

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

**🐛 Bug Reports**: Help us identify and fix issues

**✨ Feature Requests**: Suggest new functionality

**📝 Documentation**: Improve our docs, README, or code comments

**🧪 Testing**: Add or improve test coverage

**🎨 Design**: UI/UX improvements and accessibility enhancements

**💬 Community Support**: Help answer questions in discussions

### Before You Start

1. **Search existing issues** to avoid duplicates
2. **Discuss major changes** by opening an issue first
3. **Check our roadmap** to align with project direction

## Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/Sharmaz/enchilada
   cd enchilada
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a branch** for your work:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-number
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **NPM Linking** to "install" locally as a global dependency:
    ```bash
    npm link
    ```

7. **Review your changes**
    ```
    create-enchilada
    ```


## Coding Standards

### Style Guide

- Use **2 spaces** for indentation
- Follow **ESLint** configuration (run `npm run lint`)
- Use **Prettier** for formatting (run `npm run format`)
- Write **meaningful commit messages** following [Conventional Commits](https://www.conventionalcommits.org/)

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Examples:
- `feat(auth): add OAuth2 integration`
- `fix(api): resolve memory leak in user service`
- `docs(readme): update installation instructions`

### Code Quality

- **Write self-documenting code** with clear variable names
- **Add comments** for complex logic
- **Follow existing patterns** in the codebase
- **Keep functions small** and focused on single responsibility

## Testing

### Running Tests

```bash
# Run unit tests
npm run test:unit

# Run end to end tests
npm run test:e2e
```

### Writing Tests

- Write tests for **new features** and **bug fixes**
- Aim for **80%+ code coverage**
- Use **descriptive test names** that explain the expected behavior
- Follow the **Arrange-Act-Assert** pattern

Example:
```javascript
describe('UserService', () => {
  it('should create user with valid email and password', () => {
    // Arrange
    const userData = { email: 'test@example.com', password: 'password123' };
    
    // Act
    const user = UserService.create(userData);
    
    // Assert
    expect(user.email).toBe('test@example.com');
    expect(user.id).toBeDefined();
  });
});
```

## Pull Request Process

### Before Submitting

- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Documentation is updated if needed
- [ ] Commit messages follow convention
- [ ] Branch is up to date with main

### PR Guidelines

1. **Use a clear title** that describes the change
2. **Fill out the PR template** completely
3. **Link related issues** using keywords (e.g., "Closes #123")
4. **Add screenshots** for UI changes
5. **Request review** from relevant maintainers

### PR Template

When creating a PR, include:

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Other (please describe)

## Testing
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
```

### Review Process

1. **Automated checks** must pass
2. **At least one maintainer** must approve
3. **Address feedback** promptly and respectfully
4. **Squash commits** if requested before merge

## Issue Reporting

### Bug Reports

Use the bug report template and include:

- **Clear title** and description
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Environment details** (OS, browser, version)
- **Screenshots or error logs** if applicable

### Feature Requests

Use the feature request template and include:

- **Clear description** of the proposed feature
- **Use case** and motivation
- **Possible implementation** approach
- **Alternatives considered**

### Issue Labels

We use labels to categorize issues:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to docs
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed
- `priority: high/medium/low`: Issue priority
- `status: needs-info/in-progress/blocked`: Current status

## Community

### Getting Help

- **GitHub Discussions**: Ask questions and share ideas

### Recognition

Contributors are recognized in:
- `CONTRIBUTORS.md` file
- Release notes for significant contributions
- Social media shout-outs

## Development Resources

### Useful Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run test:unit    # Run unit tests
npm run test:e2e     # Run end to end tests
npm run lint         # Check code style
```

### Project Structure

```
__tests__/              # Test files
│ ├── __mocks__
│ ├── e2e
│ └── unit
media/                  # Images, gifs or videos
src/
├── templateList.js     # Template CLI Structure
├── utils/              # Helper functions
│   ├── colors.js       # Colors for CLI messages
│   └── helpMessage.js  # CLI --help or -h argument
└── templates/          # Template files
```

## Questions?

Don't hesitate to ask! You can:
- Open a discussion on GitHub
- Join our community chat
- Email the maintainers

Thank you for contributing to Create Enchilada! 🎉
