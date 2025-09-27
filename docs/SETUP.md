# 🚀 Setup Guide - Blue Carbon Registry Platform

This guide will help you set up and run the Blue Carbon Registry Platform on your local machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** (v14.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (v6.0.0 or higher)
  - Usually comes with Node.js
  - Verify installation: `npm --version`
- **Git** (for version control)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

### Recommended Software
- **VS Code** or any modern code editor
- **Chrome DevTools** or similar browser debugging tools
- **Live Server Extension** (if using VS Code)

## 🛠 Installation Steps

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <repository-url>
cd Blu-koin

# Verify you're in the correct directory
ls -la
```

### Step 2: Install Dependencies

```bash
# Install all required dependencies
npm install

# This will install:
# - live-server (for development server)
# - Other dependencies listed in package.json
```

### Step 3: Verify Installation

```bash
# Check if all dependencies are installed
npm list

# Verify package.json scripts
npm run
```

## 🏃‍♂️ Running the Application

### Development Mode

```bash
# Start the development server
npm run dev

# Alternative command
npm start
```

This will:
- Start a local server on `http://localhost:3000`
- Automatically open your default browser
- Enable live reload for development

### Manual Setup (Without Node.js)

If you don't have Node.js installed:

1. **Open the project folder** in your file explorer
2. **Navigate to the root directory** (`Blu-koin/`)
3. **Double-click on `welcome.html`** to open in your browser
4. **Use the navigation links** to explore the platform

## 🌐 Accessing the Platform

### Entry Points

1. **Welcome Page**: `welcome.html`
   - Landing page with project overview
   - Entry point to the platform

2. **Main Interface**: `index.html`
   - Main application interface
   - Dashboard and navigation

3. **Authentication**: `login.html`
   - User login and registration
   - Form validation and authentication

4. **Dashboard**: `dashboard.html`
   - Main dashboard after login
   - Project management interface

### Navigation Flow

```
welcome.html → index.html → login.html → dashboard.html
     ↓              ↓           ↓            ↓
  Overview    Main App    Auth System   User Dashboard
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (for future backend integration):

```env
# Development Environment
NODE_ENV=development
PORT=3000

# API Configuration (Future)
API_BASE_URL=http://localhost:3000/api
BLOCKCHAIN_NETWORK=testnet

# Database Configuration (Future)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=blue_carbon_registry
```

### Browser Configuration

For optimal experience, use:
- **Chrome** (recommended)
- **Firefox**
- **Safari**
- **Edge**

Enable JavaScript and allow local file access if prompted.

## 🐛 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Error: Port 3000 is already in use
# Solution: Use a different port
npm run dev -- --port=3001
```

#### 2. Node.js Version Issues
```bash
# Check Node.js version
node --version

# If version is too old, update Node.js
# Download latest version from nodejs.org
```

#### 3. Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

#### 4. Browser Compatibility Issues
- Ensure JavaScript is enabled
- Clear browser cache
- Try incognito/private mode
- Check browser console for errors

#### 5. File Path Issues
- Ensure you're in the correct directory
- Check file permissions
- Verify all files are present

### Debug Mode

Enable debug logging:

```bash
# Run with debug information
DEBUG=* npm run dev

# Or set environment variable
export DEBUG=*
npm run dev
```

## 📱 Mobile Development

### Testing on Mobile Devices

1. **Find your computer's IP address**:
   ```bash
   # Windows
   ipconfig
   
   # macOS/Linux
   ifconfig
   ```

2. **Start server with host binding**:
   ```bash
   npm run dev -- --host=0.0.0.0
   ```

3. **Access from mobile device**:
   - Connect to same WiFi network
   - Open browser and go to `http://[YOUR_IP]:3000`

### Responsive Testing

- Use browser developer tools
- Test on different screen sizes
- Verify touch interactions work properly

## 🔒 Security Considerations

### Development Security

- Never commit sensitive data to version control
- Use environment variables for configuration
- Enable HTTPS in production
- Implement proper authentication

### Browser Security

- Enable CORS for API calls
- Use secure cookies for sessions
- Implement CSRF protection
- Validate all user inputs

## 📊 Performance Optimization

### Development Performance

```bash
# Monitor bundle size
npm run build -- --analyze

# Check for unused dependencies
npm audit

# Update dependencies
npm update
```

### Browser Performance

- Enable browser caching
- Optimize images and assets
- Minimize HTTP requests
- Use CDN for external resources

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Forms validate correctly
- [ ] Responsive design works
- [ ] Cross-browser compatibility
- [ ] Authentication flow
- [ ] Dashboard functionality

### Automated Testing (Future)

```bash
# Run unit tests (when implemented)
npm test

# Run integration tests (when implemented)
npm run test:integration

# Run e2e tests (when implemented)
npm run test:e2e
```

## 📈 Monitoring & Analytics

### Development Monitoring

- Use browser developer tools
- Monitor network requests
- Check console for errors
- Use performance profiling

### Production Monitoring (Future)

- Implement error tracking
- Add performance monitoring
- Set up uptime monitoring
- Configure log aggregation

## 🔄 Updates & Maintenance

### Keeping Dependencies Updated

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update to latest versions (use with caution)
npm install package@latest
```

### Regular Maintenance

- Review and update documentation
- Test after dependency updates
- Monitor security advisories
- Backup important data

## 📞 Support

If you encounter issues not covered in this guide:

1. **Check the main README.md** for general information
2. **Review the troubleshooting section** above
3. **Check browser console** for error messages
4. **Verify all prerequisites** are installed correctly
5. **Create an issue** in the project repository

## 🎯 Next Steps

After successful setup:

1. **Explore the platform** using the navigation guide
2. **Test all features** to ensure everything works
3. **Review the code structure** to understand the architecture
4. **Check the API documentation** for future integrations
5. **Contribute improvements** to the project

---

**Happy coding! 🌊**

*For more information, refer to the main [README.md](../README.md) file.*
