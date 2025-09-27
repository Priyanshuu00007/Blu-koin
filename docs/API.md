# 🔌 API Documentation - Blue Carbon Registry Platform

This document provides comprehensive API documentation for the Blue Carbon Registry Platform, including current implementation details and future API specifications.

## 📋 Table of Contents

- [API Overview](#api-overview)
- [Authentication](#authentication)
- [User Management](#user-management)
- [Project Management](#project-management)
- [Carbon Credits](#carbon-credits)
- [Verification System](#verification-system)
- [Marketplace](#marketplace)
- [Analytics](#analytics)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)

## 🌟 API Overview

The Blue Carbon Registry Platform API is designed to provide secure, scalable access to blue carbon credit management functionality. The API follows RESTful principles and uses JSON for data exchange.

### Base URL
```
Development: http://localhost:3000/api
Production: https://api.bluecarbonregistry.com
```

### API Versioning
```
Current Version: v1
Header: Accept: application/vnd.bluecarbon.v1+json
```

### Response Format
All API responses follow a consistent format:

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Operation completed successfully",
  "timestamp": "2025-01-XX T XX:XX:XX.XXXZ",
  "requestId": "req_xxxxxxxxxxxx"
}
```

## 🔐 Authentication

### Authentication Methods

#### 1. JWT Token Authentication (Planned)
```http
Authorization: Bearer <jwt_token>
```

#### 2. API Key Authentication (Planned)
```http
X-API-Key: <api_key>
```

### Authentication Endpoints

#### Register User
```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "contact": "+1234567890",
  "password": "securePassword123",
  "role": "project_developer"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "userId": "user_123456789",
    "email": "john.doe@example.com",
    "role": "project_developer",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  },
  "message": "User registered successfully"
}
```

#### Login User
```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "userId": "user_123456789",
    "email": "john.doe@example.com",
    "role": "project_developer",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  },
  "message": "Login successful"
}
```

#### Refresh Token
```http
POST /api/v1/auth/refresh
Authorization: Bearer <refresh_token>
```

#### Logout
```http
POST /api/v1/auth/logout
Authorization: Bearer <jwt_token>
```

## 👥 User Management

### User Endpoints

#### Get User Profile
```http
GET /api/v1/users/profile
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "userId": "user_123456789",
    "fullName": "John Doe",
    "email": "john.doe@example.com",
    "contact": "+1234567890",
    "role": "project_developer",
    "createdAt": "2025-01-XX T XX:XX:XX.XXXZ",
    "lastLogin": "2025-01-XX T XX:XX:XX.XXXZ",
    "profile": {
      "organization": "Blue Carbon Solutions",
      "bio": "Environmental scientist focused on blue carbon",
      "location": "Mumbai, India"
    }
  }
}
```

#### Update User Profile
```http
PUT /api/v1/users/profile
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "fullName": "John Doe Updated",
  "contact": "+1234567891",
  "profile": {
    "organization": "Updated Organization",
    "bio": "Updated bio"
  }
}
```

#### Get User Projects
```http
GET /api/v1/users/projects
Authorization: Bearer <jwt_token>
Query Parameters:
- page: 1
- limit: 10
- status: verified|pending|draft
- ecosystem: mangrove|seagrass|saltmarsh|wetland
```

## 🌱 Project Management

### Project Endpoints

#### Create Project
```http
POST /api/v1/projects
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "Sundarbans Mangrove Restoration",
  "description": "Large-scale mangrove restoration project in Sundarbans",
  "ecosystem": "mangrove",
  "location": {
    "country": "India",
    "state": "West Bengal",
    "coordinates": {
      "latitude": 21.9497,
      "longitude": 88.9201
    },
    "area": 1000
  },
  "projectType": "restoration",
  "startDate": "2025-01-01",
  "expectedDuration": 365,
  "estimatedCredits": 50000,
  "documents": [
    {
      "type": "environmental_impact_assessment",
      "url": "https://storage.example.com/docs/eia.pdf",
      "uploadedAt": "2025-01-XX T XX:XX:XX.XXXZ"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "projectId": "proj_123456789",
    "name": "Sundarbans Mangrove Restoration",
    "status": "draft",
    "createdAt": "2025-01-XX T XX:XX:XX.XXXZ",
    "projectCode": "BCRA-2025-001"
  },
  "message": "Project created successfully"
}
```

#### Get Projects
```http
GET /api/v1/projects
Authorization: Bearer <jwt_token>
Query Parameters:
- page: 1
- limit: 20
- status: draft|submitted|under_review|verified|rejected
- ecosystem: mangrove|seagrass|saltmarsh|wetland
- country: India
- sortBy: createdAt|name|credits
- sortOrder: asc|desc
```

**Response:**
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "projectId": "proj_123456789",
        "name": "Sundarbans Mangrove Restoration",
        "ecosystem": "mangrove",
        "location": {
          "country": "India",
          "state": "West Bengal"
        },
        "status": "verified",
        "credits": 50000,
        "createdAt": "2025-01-XX T XX:XX:XX.XXXZ"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "totalPages": 8
    }
  }
}
```

#### Get Project Details
```http
GET /api/v1/projects/{projectId}
Authorization: Bearer <jwt_token>
```

#### Update Project
```http
PUT /api/v1/projects/{projectId}
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "name": "Updated Project Name",
  "description": "Updated description",
  "estimatedCredits": 60000
}
```

#### Submit Project for Verification
```http
POST /api/v1/projects/{projectId}/submit
Authorization: Bearer <jwt_token>
```

#### Delete Project
```http
DELETE /api/v1/projects/{projectId}
Authorization: Bearer <jwt_token>
```

## 🏷️ Carbon Credits

### Carbon Credit Endpoints

#### Get Carbon Credits
```http
GET /api/v1/credits
Authorization: Bearer <jwt_token>
Query Parameters:
- projectId: proj_123456789
- status: available|sold|retired
- ecosystem: mangrove|seagrass|saltmarsh|wetland
- minPrice: 10
- maxPrice: 100
- page: 1
- limit: 20
```

**Response:**
```json
{
  "success": true,
  "data": {
    "credits": [
      {
        "creditId": "cred_123456789",
        "projectId": "proj_123456789",
        "projectName": "Sundarbans Mangrove Restoration",
        "ecosystem": "mangrove",
        "amount": 1000,
        "price": 25.50,
        "status": "available",
        "verifiedAt": "2025-01-XX T XX:XX:XX.XXXZ",
        "expiresAt": "2030-01-XX T XX:XX:XX.XXXZ",
        "certificate": {
          "certificateId": "cert_123456789",
          "url": "https://certificates.example.com/cert_123456789.pdf"
        }
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 500,
      "totalPages": 25
    }
  }
}
```

#### Purchase Carbon Credits
```http
POST /api/v1/credits/purchase
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "creditId": "cred_123456789",
  "amount": 100,
  "paymentMethod": "blockchain_wallet",
  "walletAddress": "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6"
}
```

#### Retire Carbon Credits
```http
POST /api/v1/credits/{creditId}/retire
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "reason": "Corporate sustainability commitment",
  "retirementCertificate": true
}
```

## ✅ Verification System

### Verification Endpoints

#### Submit for Verification
```http
POST /api/v1/verification/submit
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "projectId": "proj_123456789",
  "verificationType": "initial|periodic|final",
  "documents": [
    {
      "type": "satellite_imagery",
      "url": "https://storage.example.com/satellite/2025-01-01.tiff",
      "description": "Pre-project satellite imagery"
    },
    {
      "type": "field_survey",
      "url": "https://storage.example.com/surveys/field_survey_2025.pdf",
      "description": "Field survey report"
    }
  ],
  "measurements": {
    "area": 1000,
    "carbonStock": 50000,
    "measurementDate": "2025-01-01",
    "methodology": "IPCC_2013"
  }
}
```

#### Get Verification Status
```http
GET /api/v1/verification/{projectId}/status
Authorization: Bearer <jwt_token>
```

#### Assign Verifier
```http
POST /api/v1/verification/{projectId}/assign
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "verifierId": "verifier_123456789",
  "assignedBy": "admin_123456789"
}
```

#### Complete Verification
```http
POST /api/v1/verification/{projectId}/complete
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "status": "approved|rejected",
  "creditsAwarded": 50000,
  "comments": "Project meets all verification criteria",
  "certificate": {
    "certificateId": "cert_123456789",
    "validUntil": "2030-01-01"
  }
}
```

## 🛒 Marketplace

### Marketplace Endpoints

#### Get Marketplace Data
```http
GET /api/v1/marketplace
Authorization: Bearer <jwt_token>
Query Parameters:
- ecosystem: mangrove|seagrass|saltmarsh|wetland
- priceRange: 10-100
- sortBy: price|credits|date
- sortOrder: asc|desc
```

#### Create Listing
```http
POST /api/v1/marketplace/listings
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "creditId": "cred_123456789",
  "price": 25.50,
  "quantity": 1000,
  "listingType": "auction|fixed_price",
  "duration": 30,
  "minimumBid": 20.00
}
```

#### Place Bid
```http
POST /api/v1/marketplace/bids
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "listingId": "list_123456789",
  "bidAmount": 26.00,
  "quantity": 500
}
```

#### Get Trading History
```http
GET /api/v1/marketplace/history
Authorization: Bearer <jwt_token>
Query Parameters:
- userId: user_123456789
- type: purchase|sale|bid
- dateFrom: 2025-01-01
- dateTo: 2025-12-31
```

## 📊 Analytics

### Analytics Endpoints

#### Get Dashboard Analytics
```http
GET /api/v1/analytics/dashboard
Authorization: Bearer <jwt_token>
Query Parameters:
- period: 7d|30d|90d|1y
- userId: user_123456789 (optional)
```

**Response:**
```json
{
  "success": true,
  "data": {
    "overview": {
      "totalProjects": 143,
      "verifiedCredits": 1200000,
      "co2Offset": 856432,
      "marketplaceVolume": 4200000
    },
    "trends": {
      "creditsOverTime": [
        {
          "date": "2025-01-01",
          "credits": 10000
        }
      ],
      "ecosystemDistribution": {
        "mangrove": 45,
        "seagrass": 30,
        "saltmarsh": 15,
        "wetland": 10
      }
    },
    "performance": {
      "growthRate": 12,
      "verificationRate": 85,
      "averagePrice": 25.50
    }
  }
}
```

#### Get Project Analytics
```http
GET /api/v1/analytics/projects/{projectId}
Authorization: Bearer <jwt_token>
```

#### Get Market Analytics
```http
GET /api/v1/analytics/market
Authorization: Bearer <jwt_token>
Query Parameters:
- period: 7d|30d|90d|1y
- ecosystem: mangrove|seagrass|saltmarsh|wetland
```

## ❌ Error Handling

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  },
  "timestamp": "2025-01-XX T XX:XX:XX.XXXZ",
  "requestId": "req_xxxxxxxxxxxx"
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Input validation failed |
| `UNAUTHORIZED` | 401 | Authentication required |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `CONFLICT` | 409 | Resource already exists |
| `RATE_LIMITED` | 429 | Too many requests |
| `SERVER_ERROR` | 500 | Internal server error |

### Error Handling Examples

#### Validation Error
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": [
      {
        "field": "password",
        "message": "Password must be at least 8 characters"
      },
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

#### Authentication Error
```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired token"
  }
}
```

## 🚦 Rate Limiting

### Rate Limit Headers
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

### Rate Limit Tiers

| Tier | Requests per Hour | Description |
|------|------------------|-------------|
| Free | 100 | Basic API access |
| Developer | 1,000 | Development and testing |
| Professional | 10,000 | Production applications |
| Enterprise | 100,000 | High-volume applications |

### Rate Limit Exceeded Response
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Rate limit exceeded. Try again later.",
    "retryAfter": 3600
  }
}
```

## 🔧 SDK and Libraries

### JavaScript SDK (Planned)
```javascript
import { BlueCarbonAPI } from '@bluecarbon/sdk';

const api = new BlueCarbonAPI({
  apiKey: 'your-api-key',
  baseURL: 'https://api.bluecarbonregistry.com'
});

// Create a project
const project = await api.projects.create({
  name: 'My Blue Carbon Project',
  ecosystem: 'mangrove',
  location: {
    country: 'India',
    coordinates: { latitude: 21.9497, longitude: 88.9201 }
  }
});
```

### Python SDK (Planned)
```python
from bluecarbon import BlueCarbonAPI

api = BlueCarbonAPI(api_key='your-api-key')

# Get projects
projects = api.projects.list(
    ecosystem='mangrove',
    status='verified',
    limit=20
)
```

## 📚 Additional Resources

- [Main README](../README.md) - Project overview
- [Setup Guide](SETUP.md) - Installation instructions
- [Architecture Documentation](ARCHITECTURE.md) - System architecture
- [Postman Collection](postman/BlueCarbon-API.postman_collection.json) - API testing

## 🆘 Support

For API support and questions:
- **Email**: api-support@bluecarbonregistry.com
- **Documentation**: https://docs.bluecarbonregistry.com
- **Status Page**: https://status.bluecarbonregistry.com

---

**API documentation is continuously updated. Check back regularly for the latest changes.**

*Last updated: January 2025*
