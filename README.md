# 🌊 Blue Carbon Registry Platform

> **Smart India Hackathon 2025 Project**  
> A comprehensive platform for tracking, tokenizing, and trading verified Blue Carbon Credits

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

The Blue Carbon Registry Platform is an innovative solution designed to address the critical need for transparent, verifiable, and tradeable blue carbon credits. Blue carbon refers to carbon captured by ocean and coastal ecosystems such as mangroves, seagrasses, and salt marshes, which are among the most efficient carbon sinks on Earth.

### 🎯 Problem Statement

- **Lack of Transparency**: Current carbon credit markets lack transparency in verification and trading
- **Limited Blue Carbon Focus**: Most platforms focus on terrestrial carbon, ignoring the massive potential of blue carbon ecosystems
- **Verification Challenges**: Difficulty in accurately measuring and verifying carbon sequestration in marine environments
- **Market Fragmentation**: No unified platform for blue carbon credit trading and registry

### 💡 Our Solution

A comprehensive platform that provides:
- **Transparent Registry**: Immutable records of blue carbon projects and credits
- **Advanced MRV**: Measurement, Reporting, and Verification system using satellite data and IoT sensors
- **Blockchain Integration**: Smart contracts for secure, transparent trading
- **Multi-Role Support**: Catering to project developers, verifiers, and buyers
- **Real-time Analytics**: Live monitoring of carbon sequestration and project performance

## ✨ Features

### 🔐 Authentication & User Management
- Secure login/signup system with form validation
- Multi-role user support (Project Developer, Verifier, Buyer)
- Session management with localStorage
- Social authentication options

### 📊 Dashboard & Analytics
- Real-time carbon credit tracking
- Project performance metrics
- CO₂ offset calculations
- Marketplace volume monitoring
- Interactive charts and visualizations

### 🌱 Project Management
- Blue carbon project registration
- Ecosystem-specific tracking (Mangroves, Seagrass, Salt Marshes, Wetlands)
- Project status management (Draft, Submitted, Under Review, Verified)
- Location-based project mapping
- Document management and verification

### 🔍 Verification System
- MRV (Measurement, Reporting, Verification) framework
- Third-party verification support
- Audit trail maintenance
- Compliance tracking

### 💰 Marketplace
- Carbon credit trading interface
- Price discovery mechanism
- Transaction history
- Credit tokenization

### 📱 Responsive Design
- Mobile-first approach
- Cross-platform compatibility
- Modern UI/UX with Tailwind CSS
- Accessibility features

## 🛠 Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework
- **Material Symbols** - Icon library

### Development Tools
- **Live Server** - Development server
- **Node.js** - Runtime environment
- **npm** - Package management

### Future Integrations (Planned)
- **Blockchain** - Ethereum/Smart contracts
- **IoT Sensors** - Real-time monitoring
- **Satellite APIs** - Remote sensing data
- **Maps API** - Geographic visualization

## 📁 Project Structure

```
Blu-koin/
├── 📄 README.md                    # Main project documentation
├── 📄 package.json                 # Project dependencies and scripts
├── 📄 package-lock.json           # Dependency lock file
├── 📄 index.html                  # Main landing page
├── 📄 welcome.html                # Welcome/entry page
├── 📄 login.html                  # Authentication page
├── 📄 login.css                   # Login page styles
├── 📄 login.js                    # Authentication logic
├── 📄 dashboard.html              # Main dashboard interface
├── 📁 node_modules/               # Dependencies
└── 📁 My Webcrumbs Plugin_files/  # Static assets and images
    ├── 📄 styles.css              # Additional styles
    ├── 📄 tailwind-config.js      # Tailwind configuration
    └── 📁 [image files]           # Project images and assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Blu-koin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application will automatically open in your default browser

### Alternative Setup (Without Node.js)

If you don't have Node.js installed, you can run the project directly:

1. Open `welcome.html` in your web browser
2. Navigate through the platform using the provided links

## 📖 Usage Guide

### 1. Getting Started
- Visit the welcome page (`welcome.html`)
- Click "Enter Platform" to access the main interface

### 2. Authentication
- **New Users**: Click "Sign Up" to create an account
- **Existing Users**: Use "Sign In" to access your dashboard
- Fill in required information with real-time validation

### 3. Dashboard Navigation
- **Dashboard**: Overview of your projects and metrics
- **My Projects**: Manage your blue carbon projects
- **Verification**: Submit projects for verification
- **MRV & Analytics**: View detailed analytics and reports
- **Marketplace**: Trade carbon credits

### 4. Project Management
- Click "Register New Project" to add a new blue carbon project
- Fill in project details including ecosystem type and location
- Upload supporting documents
- Submit for verification

### 5. Role-Based Access
- **Project Developer**: Create and manage projects
- **Verifier**: Review and verify submitted projects
- **Buyer**: Purchase verified carbon credits

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Start production server
npm start
```

### Code Structure

- **HTML Files**: Define the structure and layout
- **CSS Files**: Handle styling and responsive design
- **JavaScript Files**: Implement interactive functionality
- **Assets**: Images, icons, and static resources

### Adding New Features

1. Create new HTML pages in the root directory
2. Add corresponding CSS files for styling
3. Implement JavaScript functionality
4. Update navigation and routing
5. Test across different browsers and devices

## 🌐 API Documentation

### Authentication Endpoints (Planned)

```javascript
// User Registration
POST /api/auth/register
{
  "fullName": "string",
  "email": "string",
  "contact": "string",
  "password": "string"
}

// User Login
POST /api/auth/login
{
  "email": "string",
  "password": "string"
}
```

### Project Management Endpoints (Planned)

```javascript
// Create Project
POST /api/projects
{
  "name": "string",
  "ecosystem": "mangrove|seagrass|saltmarsh|wetland",
  "location": "string",
  "area": "number",
  "description": "string"
}

// Get Projects
GET /api/projects
GET /api/projects/:id

// Update Project
PUT /api/projects/:id

// Delete Project
DELETE /api/projects/:id
```

### Carbon Credits Endpoints (Planned)

```javascript
// Get Carbon Credits
GET /api/credits
GET /api/credits/:id

// Trade Credits
POST /api/credits/:id/trade
{
  "buyerId": "string",
  "amount": "number",
  "price": "number"
}
```

## 🤝 Contributing

We welcome contributions to improve the Blue Carbon Registry Platform! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Areas for Contribution

- **Frontend Development**: UI/UX improvements, new features
- **Backend Development**: API development, database integration
- **Blockchain Integration**: Smart contract development
- **Documentation**: Improving guides and API docs
- **Testing**: Unit tests, integration tests
- **Design**: UI/UX design, graphics, branding

### Development Guidelines

- Follow existing code style and conventions
- Write clear, commented code
- Test your changes thoroughly
- Update documentation as needed
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Smart India Hackathon 2025

This project is developed for the Smart India Hackathon 2025, focusing on innovative solutions for environmental sustainability and carbon credit management.

### Hackathon Theme
- **Environmental Sustainability**
- **Climate Change Mitigation**
- **Blue Carbon Conservation**
- **Blockchain for Social Good**

### Team Information
- **Project Name**: Blue Carbon Registry Platform
- **Team**: Blue Carbon Team
- **Category**: Software Development
- **Problem Statement**: Blue Carbon Credits Trading and Registry

## 📞 Contact & Support

- **Email**: [team-email@example.com]
- **GitHub**: [repository-url]
- **Documentation**: [docs-url]

## 🙏 Acknowledgments

- Smart India Hackathon 2025 organizers
- Blue carbon research community
- Open source contributors
- Environmental conservation organizations

---

**Made with ❤️ for a sustainable future**

*Last updated: January 2025*
