# 🚀 NetworkIQ

# AI Powered Inventory Optimization Dashboard


<p align="center">

<img src="assets/networkiq-banner.png" width="900">

</p>


---

# 👥 Team Details


| Details | Information |
|---|---|
| Team ID | T191 |
| Team Name | TEAM 191 |
| Team Lead | Gorantla Sri Sai Brahmendra |
| GitHub Repository | https://github.com/Brahmendra06/NetworkIQ |



---

# 📌 Project Overview


NetworkIQ is a full-stack **AI Powered Inventory Optimization Dashboard** developed to help organizations efficiently manage inventory, monitor stock levels, optimize product movement, and provide intelligent recommendations.

The platform provides a centralized inventory management solution with separate access control for administrators and users.

The system allows administrators to perform complete inventory and transfer management operations, while users have restricted view-only access to inventory information.

NetworkIQ is designed with a scalable architecture using modern frontend technologies, REST APIs, backend services, and database integration.



---

# 🎯 Problem Statement


Traditional inventory management systems face several challenges:


- Manual stock tracking
- Overstocking problems
- Stock shortages
- Poor inventory visibility
- Difficulty managing multiple products
- Inefficient transfer decisions
- Lack of real-time information
- No role-based access control


NetworkIQ solves these problems by providing a centralized digital inventory optimization platform.



---

# 🎯 Project Objectives


The main objectives of NetworkIQ are:


- Build a complete inventory management system
- Provide real-time inventory visibility
- Manage products efficiently
- Track product transfers
- Provide role-based access control
- Reduce manual inventory operations
- Generate intelligent inventory recommendations
- Create a foundation for AI-based optimization



---

# ✨ Features Implemented



# 🔐 Authentication System


Implemented:


✅ User Registration

✅ User Login

✅ Logout

✅ Role-based authentication

✅ Session management

✅ Profile management

✅ Profile name update



Supported Roles:


```
ADMIN

USER

```



---

# 👨‍💼 Admin Features


Administrators have complete system access.



## Admin Dashboard


Dashboard displays:


- Total Products
- Total Quantity
- Inventory Value
- Low Stock Items



---

## Inventory Management


Admin can:


✅ Add Products

✅ View Products

✅ Edit Products

✅ Delete Products

✅ Search Products

✅ Filter Products



Inventory Information:


- Product Name
- SKU
- Category
- State
- Quantity
- Price
- Supplier



---

## Transfer Management


Admin can:


✅ View Transfers

✅ Edit Transfers

✅ Delete Transfers

✅ Approve Transfers



Transfer Information:


- Source Location
- Destination Location
- SKU
- Quantity
- Transfer Cost
- Expected Profit
- Status



Transfer Status:


```
Pending

Approved

Rejected

```



---

## AI Agent Monitoring


Admin can monitor:


### Stock Optimization Agent


Functions:


- Detect low stock products
- Suggest inventory increase



### Demand Forecast Agent


Functions:


- Analyze demand patterns
- Forecast future stock requirements



### Transfer Optimization Agent


Functions:


- Detect inventory imbalance
- Recommend product transfers



---

## Notification Management


System provides alerts for:


- Low stock alerts
- Transfer recommendations
- AI analysis updates
- Forecast updates



Features:


- View notifications
- Delete notifications
- Track notification status



---

# 👤 User Features


Users have limited access.



Available:


✅ User Dashboard

✅ View Inventory

✅ View Transfer Status

✅ View AI Recommendations

✅ Update Profile



Restricted:


❌ Add Products

❌ Edit Products

❌ Delete Products

❌ Approve Transfers



---

# 📊 Dashboard Modules



# Admin Dashboard


Contains:


- Inventory statistics
- Inventory management
- Transfer management
- AI monitoring



Screenshot:


![Admin Dashboard](https://github.com/Brahmendra06/Network---IQ/blob/main/Screenshots/admin-dashboard.png)



---

# User Dashboard


Contains:


- Inventory overview
- Transfer status
- Recommendations



Screenshot:


![User Dashboard](https://github.com/Brahmendra06/Network---IQ/blob/main/Screenshots/user-dashboard.png)


---

# 📦 Inventory Management Module



## Product Operations


Completed:


✅ Create Product

✅ Read Products

✅ Update Product

✅ Delete Product



Product Details:


| Field | Description |
|-|-|
| Product Name | Product identification |
| SKU | Stock keeping unit |
| Category | Product category |
| State | Product location |
| Quantity | Available stock |
| Price | Product cost |
| Supplier | Supplier information |



---

# 🔎 Search And Filtering


Implemented:


- Product search
- SKU search
- Supplier search
- Category filtering
- State filtering



---

# 🚚 Transfer Management Module


Transfer system manages product movement between locations.



Information stored:


- From Location
- To Location
- SKU
- Quantity
- Cost
- Profit
- Status



Admin workflow:


```
Create Transfer

      ↓

Pending

      ↓

Approve

      ↓

Completed

```



---

# 👤 Profile Management


Available for Admin and Users.



Features:


- View profile
- Display username
- Display email
- Display role
- Update name



Screenshot:


![Profile](https://github.com/Brahmendra06/Network---IQ/blob/main/Screenshots/Screenshot%202026-08-08%20123624.png)



---

# ⚙️ Settings Module


System settings include:


- Notification preferences
- Theme settings
- User preferences



---

# 🏗️ System Architecture



```
                 User

                  |

                  |

           React Frontend

                  |

                  |

             Axios API

                  |

                  |

        Spring Boot Backend

                  |

                  |

          Spring Data JPA

                  |

                  |

            MySQL Database


```



---

# 🛠️ Technology Stack



# Frontend


- React.js
- React Router DOM
- Axios
- React Icons
- CSS3



# Backend


- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- Maven



# Database


- MySQL



# Development Tools


- VS Code
- IntelliJ IDEA
- Postman
- Git
- GitHub



---

# 📂 Project Structure



```
NetworkIQ


│

├── BACKEND

│

│── src/main/java/com/networkiq

│

│   ├── controller

│   ├── service

│   ├── repository

│   ├── entity

│   ├── dto

│

│

└── frontend

    │

    ├── src

    │

    ├── components

    │

    ├── pages

    │

    ├── api

    │

    └── styles


```



---

# 🗄️ Database Design



# Users Table


| Column | Type |
|-|-|
| id | Long |
| name | String |
| email | String |
| password | String |
| role | String |



---

# Inventory Table


| Column | Type |
|-|-|
| id | Long |
| productName | String |
| sku | String |
| category | String |
| state | String |
| quantity | Integer |
| price | Double |
| supplier | String |



---

# Transfer Table


| Column | Type |
|-|-|
| id | Long |
| fromLocation | String |
| toLocation | String |
| sku | String |
| quantity | Integer |
| cost | Double |
| profit | Double |
| status | String |



---

# Notification Table


| Column | Type |
|-|-|
| id | Long |
| title | String |
| message | String |
| type | String |
| priority | String |
| status | String |
| createdAt | DateTime |



---

# 🔌 Backend API Documentation



# Authentication APIs


## Register User


```
POST

/api/auth/signup

```


## Login User


```
POST

/api/auth/login

```


## Update Profile


```
PUT

/api/auth/profile

```



---

# Inventory APIs



## Get Inventory


```
GET

/api/inventory

```



## Add Product


```
POST

/api/inventory

```



## Update Product


```
PUT

/api/inventory/{id}

```



## Delete Product


```
DELETE

/api/inventory/{id}

```



---

# Transfer APIs



## Get Transfers


```
GET

/api/transfers

```



## Create Transfer


```
POST

/api/transfers

```



## Update Transfer


```
PUT

/api/transfers/{id}

```



## Delete Transfer


```
DELETE

/api/transfers/{id}

```



---

# ⚙️ Installation And Setup



# Backend Setup



Navigate:


```bash
cd BACKEND
```


Run:


```bash
mvn spring-boot:run
```


Backend URL:


```
http://localhost:8080

```



---

# Frontend Setup



Navigate:


```bash
cd frontend
```


Install dependencies:


```bash
npm install

```


Run:


```bash
npm run dev

```


Frontend URL:


```
http://localhost:5175

```



---

# 🔄 Application Workflow



```
User Registration

        ↓

Login

        ↓

Role Verification

        ↓

Dashboard Access

        ↓

Inventory / Transfer Operations

        ↓

Database Update

        ↓

Updated Dashboard View

```



---

# 📸 Screenshots



## Login Page

![Login](assets/login.png)



## Signup Page

![Signup](assets/signup.png)



## Admin Dashboard

![Admin](assets/admin-dashboard.png)



## User Dashboard

![User](assets/user-dashboard.png)



## Inventory Management

![Inventory](assets/inventory.png)



## Transfer Management

![Transfer](assets/transfers.png)



## Profile

![Profile](assets/profile.png)



---

# 🚀 Future Enhancements



## AI Inventory Optimization


Planned:


- Demand prediction
- Smart restocking
- Stock optimization
- Automated recommendations



## Analytics Dashboard


Planned:


- Inventory charts
- Sales trends
- Category analysis
- Performance reports



## Smart Planner


Planned:


- AI-based inventory planning
- Future demand forecasting



## Security Improvements


Planned:


- JWT Authentication
- Password encryption
- Advanced authorization



## Deployment


Planned:


- Cloud deployment
- Docker support
- CI/CD pipeline



---

# 📌 Current Project Status



✅ Frontend Completed

✅ Backend Completed

✅ MySQL Database Completed

✅ Authentication Completed

✅ Role Based Access Completed

✅ Inventory CRUD Completed

✅ Transfer Management Completed

✅ Search Completed

✅ Filtering Completed

✅ Profile Management Completed

✅ Notification System Completed

✅ Settings Module Completed



---

# ⭐ Conclusion


NetworkIQ provides a complete inventory optimization solution combining modern frontend technologies, Spring Boot backend services, and database-driven operations.

The project creates a strong foundation for future AI-powered inventory prediction, smart planning, and intelligent decision-making systems.



---

# 👨‍💻 Developed By



# TEAM 191


Team ID:

**T191**


Team Lead:

**Gorantla Sri Sai Brahmendra**


GitHub:

https://github.com/Brahmendra06/NetworkIQ

