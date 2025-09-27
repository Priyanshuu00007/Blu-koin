# 🤝 Contributing to Blue Carbon Registry Platform

Thank you for your interest in contributing to the Blue Carbon Registry Platform! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Community Guidelines](#community-guidelines)

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of:
- Age, body size, disability, ethnicity
- Gender identity and expression
- Level of experience, nationality
- Personal appearance, race, religion
- Sexual identity and orientation

### Expected Behavior

- **Be respectful** and inclusive in all interactions
- **Be collaborative** and constructive in feedback
- **Be patient** with newcomers and different skill levels
- **Be professional** in all communications
- **Be focused** on the project's environmental mission

### Unacceptable Behavior

- Harassment, discrimination, or inappropriate comments
- Personal attacks or trolling
- Spam or off-topic discussions
- Sharing private information without permission
- Any conduct that could be considered inappropriate

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js** (v14 or higher)
- **Git** for version control
- **Code editor** (VS Code recommended)
- **Basic understanding** of HTML, CSS, and JavaScript
- **Interest in environmental sustainability**

### Fork and Clone

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Blu-koin.git
   cd Blu-koin
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/Blu-koin.git
   ```

### Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Verify setup**:
   - Open `http://localhost:3000` in your browser
   - Ensure all pages load correctly
   - Test basic functionality

## 🔄 Development Workflow

### Branch Strategy

We use a **feature branch workflow**:

```bash
# Create a new feature branch
git checkout -b feature/your-feature-name

# Make your changes
# ... code changes ...

# Commit your changes
git add .
git commit -m "feat: add new feature description"

# Push to your fork
git push origin feature/your-feature-name

# Create a Pull Request
```

### Branch Naming Convention

Use descriptive branch names with prefixes:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/updates
- `chore/` - Maintenance tasks

**Examples:**
- `feature/user-authentication`
- `fix/dashboard-loading-issue`
- `docs/api-documentation`
- `refactor/project-management`

### Commit Message Format

We follow **Conventional Commits** specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

#### Examples:
```bash
feat(auth): add user registration form validation
fix(dashboard): resolve project loading issue
docs(api): update authentication endpoints
style(ui): improve button hover effects
refactor(utils): extract validation functions
test(auth): add login form tests
chore(deps): update dependencies
```

## 📝 Coding Standards

### HTML Standards

- Use **semantic HTML5** elements
- Include proper **accessibility attributes**
- Follow **consistent indentation** (2 spaces)
- Use **descriptive class names**

```html
<!-- Good -->
<section class="project-dashboard" role="main">
  <h1 class="dashboard-title">Project Dashboard</h1>
  <form class="project-form" aria-label="Create new project">
    <!-- form content -->
  </form>
</section>

<!-- Avoid -->
<div class="div1">
  <div class="title">Dashboard</div>
  <div class="form">
    <!-- form content -->
  </div>
</div>
```

### CSS Standards

- Use **Tailwind CSS** utility classes when possible
- Follow **BEM methodology** for custom CSS
- Maintain **consistent spacing** and **color scheme**
- Use **CSS custom properties** for theming

```css
/* Good - BEM methodology */
.project-card {
  @apply bg-white rounded-lg shadow-md p-6;
}

.project-card__title {
  @apply text-xl font-bold text-gray-800 mb-2;
}

.project-card__description {
  @apply text-gray-600 mb-4;
}

.project-card--featured {
  @apply border-2 border-blue-500;
}

/* Avoid */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 24px;
}
```

### JavaScript Standards

- Use **ES6+** features
- Follow **consistent naming conventions**
- Write **self-documenting code**
- Use **async/await** for asynchronous operations

```javascript
// Good
class ProjectManager {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.projects = [];
  }

  async createProject(projectData) {
    try {
      const response = await this.apiClient.post('/projects', projectData);
      this.projects.push(response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to create project:', error);
      throw new Error('Project creation failed');
    }
  }

  validateProjectData(data) {
    const requiredFields = ['name', 'ecosystem', 'location'];
    return requiredFields.every(field => data[field]);
  }
}

// Avoid
function createProject(data) {
  // ... mixed concerns and unclear error handling
}
```

### File Organization

```
📁 src/
├── 📁 components/          # Reusable UI components
│   ├── 📄 Button.js
│   ├── 📄 Modal.js
│   └── 📄 ProjectCard.js
├── 📁 pages/              # Page-specific code
│   ├── 📄 Dashboard.js
│   ├── 📄 Login.js
│   └── 📄 Projects.js
├── 📁 services/           # API and business logic
│   ├── 📄 api.js
│   ├── 📄 auth.js
│   └── 📄 projects.js
├── 📁 utils/              # Utility functions
│   ├── 📄 validation.js
│   ├── 📄 formatting.js
│   └── 📄 constants.js
├── 📁 styles/             # CSS and styling
│   ├── 📄 main.css
│   ├── 📄 components.css
│   └── 📄 utilities.css
└── 📁 assets/             # Images and static files
    ├── 📁 images/
    ├── 📁 icons/
    └── 📁 fonts/
```

## 🧪 Testing Guidelines

### Testing Strategy

We follow a **testing pyramid** approach:

1. **Unit Tests** (70%) - Individual functions and components
2. **Integration Tests** (20%) - Component interactions
3. **E2E Tests** (10%) - Complete user workflows

### Unit Testing

```javascript
// Example unit test
describe('ProjectManager', () => {
  let projectManager;
  let mockApiClient;

  beforeEach(() => {
    mockApiClient = {
      post: jest.fn(),
      get: jest.fn()
    };
    projectManager = new ProjectManager(mockApiClient);
  });

  describe('createProject', () => {
    it('should create a project successfully', async () => {
      // Arrange
      const projectData = {
        name: 'Test Project',
        ecosystem: 'mangrove',
        location: { country: 'India' }
      };
      const expectedResponse = { data: { id: '123', ...projectData } };
      mockApiClient.post.mockResolvedValue(expectedResponse);

      // Act
      const result = await projectManager.createProject(projectData);

      // Assert
      expect(mockApiClient.post).toHaveBeenCalledWith('/projects', projectData);
      expect(result).toEqual(expectedResponse.data);
      expect(projectManager.projects).toContain(expectedResponse.data);
    });

    it('should handle API errors gracefully', async () => {
      // Arrange
      const projectData = { name: 'Test Project' };
      const error = new Error('API Error');
      mockApiClient.post.mockRejectedValue(error);

      // Act & Assert
      await expect(projectManager.createProject(projectData))
        .rejects.toThrow('Project creation failed');
    });
  });
});
```

### Integration Testing

```javascript
// Example integration test
describe('Project Creation Flow', () => {
  it('should create and display a new project', async () => {
    // Test the complete flow from form submission to UI update
    // This would test the interaction between components
  });
});
```

### E2E Testing

```javascript
// Example E2E test using Playwright
test('user can create a new project', async ({ page }) => {
  await page.goto('/dashboard');
  await page.click('[data-testid="create-project-button"]');
  await page.fill('[data-testid="project-name"]', 'Test Project');
  await page.selectOption('[data-testid="ecosystem"]', 'mangrove');
  await page.click('[data-testid="submit-button"]');
  
  await expect(page.locator('[data-testid="project-list"]'))
    .toContainText('Test Project');
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📚 Documentation

### Code Documentation

- **Comment complex logic** and business rules
- **Document function parameters** and return values
- **Include usage examples** for public APIs
- **Keep README files updated**

```javascript
/**
 * Creates a new blue carbon project
 * @param {Object} projectData - Project information
 * @param {string} projectData.name - Project name
 * @param {string} projectData.ecosystem - Ecosystem type (mangrove|seagrass|saltmarsh|wetland)
 * @param {Object} projectData.location - Project location
 * @param {string} projectData.location.country - Country name
 * @param {Object} projectData.location.coordinates - GPS coordinates
 * @param {number} projectData.location.coordinates.latitude - Latitude
 * @param {number} projectData.location.coordinates.longitude - Longitude
 * @returns {Promise<Object>} Created project data
 * @throws {Error} When project creation fails
 * 
 * @example
 * const project = await createProject({
 *   name: 'Sundarbans Restoration',
 *   ecosystem: 'mangrove',
 *   location: {
 *     country: 'India',
 *     coordinates: { latitude: 21.9497, longitude: 88.9201 }
 *   }
 * });
 */
async function createProject(projectData) {
  // Implementation
}
```

### README Updates

When adding new features, update relevant documentation:

- **Main README.md** - Overview and setup instructions
- **API Documentation** - New endpoints and changes
- **Architecture Docs** - System changes and new components
- **Setup Guide** - New dependencies or configuration

## 🔀 Pull Request Process

### Before Submitting

1. **Ensure tests pass**:
   ```bash
   npm test
   npm run lint
   ```

2. **Update documentation** if needed

3. **Test your changes** thoroughly

4. **Rebase on latest main**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing completed

## Screenshots (if applicable)
Add screenshots to help explain your changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] No breaking changes (or documented)
```

### Review Process

1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** by QA team (if applicable)
4. **Approval** from at least one maintainer
5. **Merge** by maintainer

## 🐛 Issue Reporting

### Bug Reports

Use the bug report template:

```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What you expected to happen

**Actual Behavior**
What actually happened

**Screenshots**
If applicable, add screenshots

**Environment**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91]
- Version: [e.g. 1.0.0]

**Additional Context**
Any other context about the problem
```

### Feature Requests

Use the feature request template:

```markdown
**Feature Description**
Clear description of the feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this be implemented?

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Any other context or screenshots
```

## 👥 Community Guidelines

### Getting Help

- **Check existing issues** before creating new ones
- **Use clear, descriptive titles**
- **Provide sufficient context**
- **Be patient** with responses

### Providing Help

- **Be welcoming** to newcomers
- **Provide constructive feedback**
- **Share knowledge** and best practices
- **Recognize contributions** from others

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and ideas
- **Pull Request Comments** - Code review discussions
- **Email** - Security issues and sensitive matters

## 🏆 Recognition

### Contributor Recognition

We recognize contributors in several ways:

- **Contributors list** in README
- **Release notes** for significant contributions
- **Special badges** for different contribution types
- **Community highlights** in project updates

### Contribution Types

- **Code contributions** - Features, bug fixes, refactoring
- **Documentation** - Guides, API docs, tutorials
- **Testing** - Test cases, bug reports, quality assurance
- **Design** - UI/UX improvements, graphics, branding
- **Community** - Helping others, organizing events

## 📞 Contact

For questions about contributing:

- **Email**: contributors@bluecarbonregistry.com
- **GitHub**: Create an issue or discussion
- **Documentation**: Check existing docs first

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

**Thank you for contributing to a sustainable future! 🌊**

*This contributing guide is a living document. Please suggest improvements through issues or pull requests.*

*Last updated: January 2025*
