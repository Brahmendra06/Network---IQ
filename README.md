# NetworkIQ
## Inventory Optimization Dashboard


<p align="center">

<img src="assets/networkiq-banner.png" width="900">

</p>


## Overview

NetworkIQ is a full-stack inventory optimization and management platform designed to help organizations monitor stock levels, manage inventory operations, optimize product transfers, and provide role-based access control.

The system provides separate dashboards for administrators and users.

Administrators can manage inventory, transfers, and system operations, while users can view inventory information and transfer status without modification access.

The application follows a modern full-stack architecture using React for frontend development and Spring Boot for backend services.


---

# Project Highlights

- Role-based authentication system
- Admin and User dashboards
- Inventory management system
- Transfer management system
- Stock monitoring
- AI agent monitoring module
- Notification management
- Profile management
- Responsive dashboard UI
- REST API architecture


---

# Technology Stack


## Frontend

| Technology | Purpose |
|---|---|
| React.js | User interface development |
| React Router | Page navigation |
| Axios | API communication |
| React Icons | UI icons |
| CSS3 | Styling and responsive design |


## Backend

| Technology | Purpose |
|---|---|
| Java | Backend programming language |
| Spring Boot | REST API development |
| Spring Data JPA | Database operations |
| Hibernate | ORM framework |
| Maven | Dependency management |


## Database

| Technology | Purpose |
|---|---|
| MySQL | Data storage |


## Development Tools

- Visual Studio Code
- IntelliJ IDEA
- Postman
- Git
- GitHub


---

# System Architecture


```
                React Frontend
                     |
                     |
                  Axios API
                     |
                     |
              Spring Boot Backend
                     |
                     |
                  JPA/Hibernate
                     |
                     |
                 MySQL Database

```


---

# User Roles


## Admin Role

Admin has complete control over the system.


### Admin Permissions

✅ Login

✅ View dashboard statistics

✅ Manage inventory

✅ Add products

✅ Edit products

✅ Delete products

✅ View transfers

✅ Edit transfers

✅ Delete transfers

✅ Approve transfers

✅ Monitor AI activities

✅ Manage profile


---

## User Role

Users have limited access.


### User Permissions

✅ Login

✅ View dashboard

✅ View inventory

✅ View transfer status

✅ View AI recommendations

✅ Update profile


### User Restrictions

❌ Cannot add inventory

❌ Cannot edit inventory

❌ Cannot delete inventory

❌ Cannot approve transfers


---

# Application Modules


# 1. Authentication Module


Features:

- User registration
- User login
- Role identification
- Session storage
- Profile update


Authentication flow:


```
Signup
   |
   |
Database Save
   |
   |
Login
   |
   |
Role Verification
   |
   |
Admin Dashboard / User Dashboard

```


---

# 2. Admin Dashboard


Admin dashboard provides complete operational control.


Dashboard cards:

- Total Products
- Total Quantity
- Inventory Value
- Low Stock Items


Admin sections:

- Inventory Management
- Transfer Management
- AI Agent Monitoring
- User Management


Screenshot:

![Admin Dashboard](assets/admin-dashboard.png)



---

# 3. User Dashboard


User dashboard provides read-only information.


Features:

- Product overview
- Available inventory
- Transfer tracking
- AI recommendation view


Screenshot:

![User Dashboard](assets/user-dashboard.png)



---

# 4. Inventory Management


Inventory module manages all products.


## Product Information


Stored details:


- Product ID
- Product Name
- SKU
- Category
- State
- Quantity
- Price
- Supplier



## Admin Operations


Admin can:

- Add inventory
- Edit inventory
- Delete inventory
- Search products
- Filter products


Screenshot:

![Inventory Management](assets/inventory.png)



---

# 5. Transfer Management


Transfer module manages movement of products between locations.


Transfer information:


- Source Location
- Destination Location
- SKU
- Quantity
- Transfer Cost
- Expected Profit
- Status


Transfer statuses:


```
Pending

Approved

Rejected

```


Admin actions:

- View transfer
- Edit transfer
- Delete transfer
- Approve transfer


Screenshot:

![Transfer Management](assets/transfers.png)



---

# 6. AI Agent Monitoring


The system contains AI-based monitoring modules.


AI Agents:


## Stock Optimization Agent

Responsibilities:

- Monitor inventory levels
- Detect low stock
- Suggest inventory increase


## Demand Forecast Agent

Responsibilities:

- Analyze demand patterns
- Prepare future stock requirements


## Transfer Optimization Agent

Responsibilities:

- Detect inventory imbalance
- Generate transfer recommendations



---

# 7. Notification System


The notification module provides alerts.


Notification types:


- Inventory alerts
- Transfer recommendations
- AI agent updates
- Demand forecast alerts


Features:

- View notifications
- Delete notifications
- Notification status tracking


---

# 8. Profile Management


Available for Admin and Users.


Features:

- View profile
- Update name
- View email
- Display role


Screenshot:

![Profile](assets/profile.png)



---

# Frontend Folder Structure


```
frontend

src
│
├── api
│   ├── auth.js
│   ├── dashboard.js
│   ├── inventory.js
│   ├── transfers.js
│   └── notifications.js
│
├── components
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── DashboardCard.jsx
│   ├── InventoryTable.jsx
│   ├── TransferTable.jsx
│   ├── AddInventory.jsx
│   └── EditInventory.jsx
│
├── pages
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── AdminDashboard.jsx
│   ├── UserDashboard.jsx
│   ├── Inventory.jsx
│   ├── UserInventory.jsx
│   ├── Transfers.jsx
│   ├── Profile.jsx
│   ├── Settings.jsx
│   └── Analytics.jsx
│
├── styles
│   ├── Dashboard.css
│   ├── Inventory.css
│   ├── Profile.css
│   ├── Navbar.css
│   ├── Sidebar.css
│   └── Table.css
│
└── App.jsx

```


---

# Backend Folder Structure


```
backend

src/main/java/com/networkiq

│
├── controller
│
│   ├── AuthController
│   ├── InventoryController
│   ├── TransferController
│   └── NotificationController
│
├── entity
│
│   ├── User
│   ├── Inventory
│   ├── Transfer
│   ├── Notification
│   └── Settings
│
├── repository
│
│   ├── UserRepository
│   ├── InventoryRepository
│   ├── TransferRepository
│   └── NotificationRepository
│
├── service
│
│   ├── UserService
│   ├── InventoryService
│   ├── TransferService
│   ├── NotificationService
│   └── AIEngineService
│
└── dto

```


---

# Database Design


## Users Table


Stores:

- ID
- Name
- Email
- Password
- Role


---

## Inventory Table


Stores:

- Product details
- SKU
- Category
- Quantity
- Price
- Supplier
- Location


---

## Transfer Table


Stores:

- Transfer details
- Quantity
- Cost
- Profit
- Status


---

## Notification Table


Stores:

- Title
- Message
- Type
- Priority
- Status
- Created Time


---

# API Documentation


## Authentication APIs


### Signup

```
POST

/api/auth/signup

```


### Login

```
POST

/api/auth/login

```


### Update Profile

```
PUT

/api/auth/profile

```



---

# Inventory APIs


### Get Inventory

```
GET

/api/inventory

```


### Add Inventory

```
POST

/api/inventory

```


### Update Inventory

```
PUT

/api/inventory/{id}

```


### Delete Inventory

```
DELETE

/api/inventory/{id}

```



---

# Transfer APIs


### Get Transfers

```
GET

/api/transfers

```


### Create Transfer

```
POST

/api/transfers

```


### Update Transfer

```
PUT

/api/transfers/{id}

```


### Delete Transfer

```
DELETE

/api/transfers/{id}

```



---

# Installation Guide


## Clone Repository


```bash
git clone https://github.com/yourusername/networkiq.git
```


---

# Backend Setup


Go to backend folder:


```bash
cd backend
```


Configure database:


`application.properties`


Example:


```properties
spring.datasource.url=jdbc:mysql://localhost:3306/networkiq

spring.datasource.username=root

spring.datasource.password=your_password


spring.jpa.hibernate.ddl-auto=update

```


Run backend:


```bash
mvn spring-boot:run
```


Backend:


```
http://localhost:8080

```



---

# Frontend Setup


Go to frontend folder:


```bash
cd frontend
```


Install packages:


```bash
npm install
```


Run project:


```bash
npm run dev
```


Frontend:


```
http://localhost:5175

```



---

# Screenshots


## Login

![Login](assets/login.png)



## Signup

![Signup](assets/signup.png)



## Admin Dashboard

![Admin Dashboard](assets/admin-dashboard.png)



## User Dashboard

![User Dashboard](assets/user-dashboard.png)



## Inventory

![Inventory](assets/inventory.png)



## Transfers

![Transfers](assets/transfers.png)



## Profile

![Profile](assets/profile.png)



---

# Future Improvements


Planned enhancements:


- JWT authentication
- Password encryption
- Advanced analytics charts
- AI demand prediction
- Machine learning stock forecasting
- Email notifications
- Cloud deployment
- Mobile application
- Docker containerization


---

# Author


Developed by:

## Brahmi


Project:

## NetworkIQ - Inventory Optimization Dashboard


---

# License


This project is developed for learning and portfolio purposes.
