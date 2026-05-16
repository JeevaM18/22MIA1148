# Backend Microservices System

This project implements a **Vehicle Maintenance Scheduler** and a **Campus Notification System** with a fully integrated **Logging Middleware**, built as part of the backend evaluation.

---

## Features

-  Logging Middleware (centralized logging system)
-  Vehicle Maintenance Scheduling (Knapsack optimization)
-  Notification Priority System (Top 10 important alerts)
-  API Integration with external test server
-  Clean microservice architecture

---

##  Project Structure

```
22MIA1148/
│
├── logging_middleware/
│   ├── auth.js
│   ├── config.js
│   ├── logger.js
│   ├── middleware.js
│   └── retry.js
│
├── vehicle_maintenance_scheduler/
│   ├── controllers/
│   │   └── schedulerController.js
│   ├── routes/
│   │   └── schedulerRoutes.js
│   ├── services/
│   │   ├── apiService.js
│   │   └── schedulerService.js
│   ├── utils/
│   │   └── knapsack.js
│   ├── app.js
│   └── routes.js
│
├── notification_app_be/
│   ├── controllers/
│   │   └── notificationController.js
│   ├── routes/
│   │   └── notificationRoutes.js
│   ├── services/
│   │   └── notificationService.js
│   └── app.js
│
├── frontend/
│   └── index.html
│
├── assets/
│   ├── A11.png
│   ├── A12.png
│   ├── A21.png
│   ├── B1.png
│   └── B2.png
│
├── .env
├── .gitignore
├── notification_system_design.md
├── package.json
└── README.md
```

---

##  Setup Instructions

```bash
npm install
```

### Run Scheduler Service
```bash
node vehicle_maintenance_scheduler/app.js
```

### Run Notification Service
```bash
node notification_app_be/app.js
```

### Run Frontend
Open:
```
frontend/index.html
```

---

##  Logging Middleware

Centralized logging function:

```
Log(stack, level, package, message)
```

---

##  Screenshots

### 🔹 Logging Middleware Output

<p align="center">
  <img src="assets/A11.png" width="850"/>
</p>

<p align="center">
  <img src="assets/A12.png" width="850"/>
</p>

<p align="center">
  <img src="assets/A21.png" width="850"/>
</p>

---

### 🔹 Vehicle Scheduler API Output

<p align="center">
  <img src="assets/B2.png" width="850"/>
</p>

---

### 🔹 Notification API Output

<p align="center">
  <img src="assets/B1.png" width="850"/>
</p>

---

## ⚙️ Algorithms Used

- 0/1 Knapsack Algorithm
- Priority Sorting (Placement > Result > Event)

---

##  API Endpoints

### Vehicle Scheduler
GET /api/schedule

### Notifications
GET /api/notifications

---

##  Logging Flow

1. Request hits route  
2. Controller logs entry  
3. Service logs processing  
4. Middleware logs response  

This ensures complete traceability of each request.

---

##  Innovations

- 🔹 Centralized Logging Middleware (reusable across services)
- 🔹 Request ID tracking for debugging
- 🔹 Retry mechanism for log API failures
- 🔹 Token auto-refresh handling
- 🔹 Clean microservice separation

---

##  Tech Stack

- Node.js
- Express.js
- Axios
- REST APIs
- JavaScript (ES6)

---

##  Conclusion

Scalable backend system with logging, optimization, and API integration.


##  Vehicle Maintenance Output

<details>
<summary>Click to expand full output</summary>

```json
[
  {
    "depotId": 2,
    "maxHours": 135,
    "maxImpact": 199,
    "tasks": [
      {
        "TaskID": "df72d529-5e80-4979-b548-786b3faa7390",
        "Duration": 5,
        "Impact": 10
      },
      {
        "TaskID": "816c682f-6943-42ea-9857-99b21cb58320",
        "Duration": 1,
        "Impact": 9
      },
      {
        "TaskID": "03c7dc2f-e332-4fa6-bd6b-0df4a8f93552",
        "Duration": 5,
        "Impact": 9
      },
      {
        "TaskID": "e3347db9-ff99-4877-850f-eabac72d2e95",
        "Duration": 7,
        "Impact": 9
      },
      {
        "TaskID": "f79d77b2-ecb5-4244-a708-4c0f1dfce18d",
        "Duration": 4,
        "Impact": 9
      },
      {
        "TaskID": "c5764b0d-1712-494c-8437-dd061ba9869d",
        "Duration": 6,
        "Impact": 10
      },
      {
        "TaskID": "f759813d-5de8-4f8f-a5cd-2dc9d5abb971",
        "Duration": 4,
        "Impact": 4
      },
      {
        "TaskID": "6f1abe22-b2a5-4394-88ac-768291ba9480",
        "Duration": 8,
        "Impact": 10
      },
      {
        "TaskID": "676108da-7d48-418a-8a83-3bd2f55614d5",
        "Duration": 5,
        "Impact": 7
      },
      {
        "TaskID": "8b2d21d7-5400-4d77-a2a0-0297f01e904b",
        "Duration": 4,
        "Impact": 5
      },
      {
        "TaskID": "23fe9b9e-24b2-4d6c-8ffa-a61ba1ffdbed",
        "Duration": 1,
        "Impact": 6
      },
      {
        "TaskID": "776cb9d2-ecdc-46e7-9a08-05e5806a21ee",
        "Duration": 6,
        "Impact": 10
      },
      {
        "TaskID": "5336508f-ff32-4a0a-beb5-292fd665f9f4",
        "Duration": 4,
        "Impact": 6
      },
      {
        "TaskID": "282ea16d-f9e0-4472-a20e-6738e1759ba1",
        "Duration": 5,
        "Impact": 9
      },
      {
        "TaskID": "437ab661-85da-4f3c-8938-d7e43ef7925c",
        "Duration": 4,
        "Impact": 2
      },
      {
        "TaskID": "47268ec2-b4cf-4290-b20a-dc77706e3f16",
        "Duration": 6,
        "Impact": 8
      },
      {
        "TaskID": "b6946fd0-41fd-4e7a-a6b8-9baabd981fca",
        "Duration": 8,
        "Impact": 3
      },
      {
        "TaskID": "4fc575b4-2f88-4a0e-b30c-dae916f3cfaf",
        "Duration": 2,
        "Impact": 5
      },
      {
        "TaskID": "4db3e747-4fb8-4a51-9962-54680e47a84e",
        "Duration": 1,
        "Impact": 8
      },
      {
        "TaskID": "924a1655-7a07-4e90-955c-8e5f58f3400a",
        "Duration": 1,
        "Impact": 9
      },
      {
        "TaskID": "c8e5ce81-5374-430f-98fe-8f6100a05fb4",
        "Duration": 4,
        "Impact": 7
      },
      {
        "TaskID": "cac89478-aaef-4ab0-96b3-f65e739c7543",
        "Duration": 8,
        "Impact": 2
      },
      {
        "TaskID": "e208cfba-5893-47d9-95ba-145d357c66f0",
        "Duration": 6,
        "Impact": 5
      },
      {
        "TaskID": "f843ca23-8bf2-457f-866c-538ef68b7f78",
        "Duration": 3,
        "Impact": 6
      },
      {
        "TaskID": "b3b47e85-774d-48af-929f-70d24e1ef23d",
        "Duration": 3,
        "Impact": 7
      },
      {
        "TaskID": "bd189004-f8f6-45bb-bddb-18631396fd28",
        "Duration": 8,
        "Impact": 4
      },
      {
        "TaskID": "7619f95e-3e09-480c-a32e-3c4ee852cc05",
        "Duration": 3,
        "Impact": 4
      },
      {
        "TaskID": "85a08f82-938a-4f0c-93e4-80af78151703",
        "Duration": 6,
        "Impact": 8
      },
      {
        "TaskID": "8b5a13df-daa5-48b6-96b8-4842104460dd",
        "Duration": 7,
        "Impact": 8
      }
    ]
  },
  {
    "depotId": 3,
    "maxHours": 188,
    "maxImpact": 204,
    "tasks": [
      {
        "TaskID": "df72d529-5e80-4979-b548-786b3faa7390",
        "Duration": 5,
        "Impact": 10
      },
      {
        "TaskID": "816c682f-6943-42ea-9857-99b21cb58320",
        "Duration": 1,
        "Impact": 9
      },
      {
        "TaskID": "03c7dc2f-e332-4fa6-bd6b-0df4a8f93552",
        "Duration": 5,
        "Impact": 9
      },
      {
        "TaskID": "e3347db9-ff99-4877-850f-eabac72d2e95",
        "Duration": 7,
        "Impact": 9
      },
      {
        "TaskID": "f79d77b2-ecb5-4244-a708-4c0f1dfce18d",
        "Duration": 4,
        "Impact": 9
      },
      {
        "TaskID": "c5764b0d-1712-494c-8437-dd061ba9869d",
        "Duration": 6,
        "Impact": 10
      },
      {
        "TaskID": "f759813d-5de8-4f8f-a5cd-2dc9d5abb971",
        "Duration": 4,
        "Impact": 4
      },
      {
        "TaskID": "6f1abe22-b2a5-4394-88ac-768291ba9480",
        "Duration": 8,
        "Impact": 10
      },
      {
        "TaskID": "4f882db8-7e69-489c-918e-c36659371374",
        "Duration": 5,
        "Impact": 2
      },
      {
        "TaskID": "676108da-7d48-418a-8a83-3bd2f55614d5",
        "Duration": 5,
        "Impact": 7
      },
      {
        "TaskID": "8b2d21d7-5400-4d77-a2a0-0297f01e904b",
        "Duration": 4,
        "Impact": 5
      },
      {
        "TaskID": "23fe9b9e-24b2-4d6c-8ffa-a61ba1ffdbed",
        "Duration": 1,
        "Impact": 6
      },
      {
        "TaskID": "776cb9d2-ecdc-46e7-9a08-05e5806a21ee",
        "Duration": 6,
        "Impact": 10
      },
      {
        "TaskID": "9e15f7bf-734e-4c3b-9e11-47f2165e61ff",
        "Duration": 6,
        "Impact": 1
      },
      {
        "TaskID": "5336508f-ff32-4a0a-beb5-292fd665f9f4",
        "Duration": 4,
        "Impact": 6
      },
      {
        "TaskID": "282ea16d-f9e0-4472-a20e-6738e1759ba1",
        "Duration": 5,
        "Impact": 9
      },
      {
        "TaskID": "437ab661-85da-4f3c-8938-d7e43ef7925c",
        "Duration": 4,
        "Impact": 2
      },
      {
        "TaskID": "7c59b136-4d1e-41fa-b1cf-79855a879c0f",
        "Duration": 7,
        "Impact": 1
      },
      {
        "TaskID": "47268ec2-b4cf-4290-b20a-dc77706e3f16",
        "Duration": 6,
        "Impact": 8
      },
      {
        "TaskID": "b6946fd0-41fd-4e7a-a6b8-9baabd981fca",
        "Duration": 8,
        "Impact": 3
      },
      {
        "TaskID": "4fc575b4-2f88-4a0e-b30c-dae916f3cfaf",
        "Duration": 2,
        "Impact": 5
      },
      {
        "TaskID": "4db3e747-4fb8-4a51-9962-54680e47a84e",
        "Duration": 1,
        "Impact": 8
      },
      {
        "TaskID": "924a1655-7a07-4e90-955c-8e5f58f3400a",
        "Duration": 1,
        "Impact": 9
      },
      {
        "TaskID": "c8e5ce81-5374-430f-98fe-8f6100a05fb4",
        "Duration": 4,
        "Impact": 7
      },
      {
        "TaskID": "cac89478-aaef-4ab0-96b3-f65e739c7543",
        "Duration": 8,
        "Impact": 2
      },
      {
        "TaskID": "e208cfba-5893-47d9-95ba-145d357c66f0",
        "Duration": 6,
        "Impact": 5
      },
      {
        "TaskID": "f843ca23-8bf2-457f-866c-538ef68b7f78",
        "Duration": 3,
        "Impact": 6
      },
      {
        "TaskID": "b3b47e85-774d-48af-929f-70d24e1ef23d",
        "Duration": 3,
        "Impact": 7
      },
      {
        "TaskID": "bd189004-f8f6-45bb-bddb-18631396fd28",
        "Duration": 8,
        "Impact": 4
      },
      {
        "TaskID": "a1a16f7a-17ac-4eba-90b2-dd4a47e792a3",
        "Duration": 8,
        "Impact": 1
      },
      {
        "TaskID": "7619f95e-3e09-480c-a32e-3c4ee852cc05",
        "Duration": 3,
        "Impact": 4
      },
      {
        "TaskID": "85a08f82-938a-4f0c-93e4-80af78151703",
        "Duration": 6,
        "Impact": 8
      },
      {
        "TaskID": "8b5a13df-daa5-48b6-96b8-4842104460dd",
        "Duration": 7,
        "Impact": 8
      }
    ]
  },
  {
    "depotId": 4,
    "maxHours": 97,
    "maxImpact": 179,
    "tasks": [
      {
        "TaskID": "df72d529-5e80-4979-b548-786b3faa7390",
        "Duration": 5,
        "Impact": 10
      },
      {
        "TaskID": "816c682f-6943-42ea-9857-99b21cb58320",
        "Duration": 1,
        "Impact": 9
      },
      {
        "TaskID": "03c7dc2f-e332-4fa6-bd6b-0df4a8f93552",
        "Duration": 5,
        "Impact": 9
      },
      {
        "TaskID": "e3347db9-ff99-4877-850f-eabac72d2e95",
        "Duration": 7,
        "Impact": 9
      },
      {
        "TaskID": "f79d77b2-ecb5-4244-a708-4c0f1dfce18d",
        "Duration": 4,
        "Impact": 9
      },
      {
        "TaskID": "c5764b0d-1712-494c-8437-dd061ba9869d",
        "Duration": 6,
        "Impact": 10
      },
      {
        "TaskID": "6f1abe22-b2a5-4394-88ac-768291ba9480",
        "Duration": 8,
        "Impact": 10
      },
      {
        "TaskID": "676108da-7d48-418a-8a83-3bd2f55614d5",
        "Duration": 5,
        "Impact": 7
      },
      {
        "TaskID": "8b2d21d7-5400-4d77-a2a0-0297f01e904b",
        "Duration": 4,
        "Impact": 5
      },
      {
        "TaskID": "23fe9b9e-24b2-4d6c-8ffa-a61ba1ffdbed",
        "Duration": 1,
        "Impact": 6
      },
      {
        "TaskID": "776cb9d2-ecdc-46e7-9a08-05e5806a21ee",
        "Duration": 6,
        "Impact": 10
      },
      {
        "TaskID": "5336508f-ff32-4a0a-beb5-292fd665f9f4",
        "Duration": 4,
        "Impact": 6
      },
      {
        "TaskID": "282ea16d-f9e0-4472-a20e-6738e1759ba1",
        "Duration": 5,
        "Impact": 9
      },
      {
        "TaskID": "47268ec2-b4cf-4290-b20a-dc77706e3f16",
        "Duration": 6,
        "Impact": 8
      },
      {
        "TaskID": "4fc575b4-2f88-4a0e-b30c-dae916f3cfaf",
        "Duration": 2,
        "Impact": 5
      },
      {
        "TaskID": "4db3e747-4fb8-4a51-9962-54680e47a84e",
        "Duration": 1,
        "Impact": 8
      },
      {
        "TaskID": "924a1655-7a07-4e90-955c-8e5f58f3400a",
        "Duration": 1,
        "Impact": 9
      },
      {
        "TaskID": "c8e5ce81-5374-430f-98fe-8f6100a05fb4",
        "Duration": 4,
        "Impact": 7
      },
      {
        "TaskID": "f843ca23-8bf2-457f-866c-538ef68b7f78",
        "Duration": 3,
        "Impact": 6
      },
      {
        "TaskID": "b3b47e85-774d-48af-929f-70d24e1ef23d",
        "Duration": 3,
        "Impact": 7
      },
      {
        "TaskID": "7619f95e-3e09-480c-a32e-3c4ee852cc05",
        "Duration": 3,
        "Impact": 4
      },
      {
        "TaskID": "85a08f82-938a-4f0c-93e4-80af78151703",
        "Duration": 6,
        "Impact": 8
      },
      {
        "TaskID": "8b5a13df-daa5-48b6-96b8-4842104460dd",
        "Duration": 7,
        "Impact": 8
      }
    ]
  },
  {
    "depotId": 5,
    "maxHours": 164,
    "maxImpact": 204,
    "tasks": [
      {
        "TaskID": "df72d529-5e80-4979-b548-786b3faa7390",
        "Duration": 5,
        "Impact": 10
      },
      {
        "TaskID": "816c682f-6943-42ea-9857-99b21cb58320",
        "Duration": 1,
        "Impact": 9
      },
      {
        "TaskID": "03c7dc2f-e332-4fa6-bd6b-0df4a8f93552",
        "Duration": 5,
        "Impact": 9
      },
      {
        "TaskID": "e3347db9-ff99-4877-850f-eabac72d2e95",
        "Duration": 7,
        "Impact": 9
      },
      {
        "TaskID": "f79d77b2-ecb5-4244-a708-4c0f1dfce18d",
        "Duration": 4,
        "Impact": 9
      },
      {
        "TaskID": "c5764b0d-1712-494c-8437-dd061ba9869d",
        "Duration": 6,
        "Impact": 10
      },
      {
        "TaskID": "f759813d-5de8-4f8f-a5cd-2dc9d5abb971",
        "Duration": 4,
        "Impact": 4
      },
      {
        "TaskID": "6f1abe22-b2a5-4394-88ac-768291ba9480",
        "Duration": 8,
        "Impact": 10
      },
      {
        "TaskID": "4f882db8-7e69-489c-918e-c36659371374",
        "Duration": 5,
        "Impact": 2
      },
      {
        "TaskID": "676108da-7d48-418a-8a83-3bd2f55614d5",
        "Duration": 5,
        "Impact": 7
      },
      {
        "TaskID": "8b2d21d7-5400-4d77-a2a0-0297f01e904b",
        "Duration": 4,
        "Impact": 5
      },
      {
        "TaskID": "23fe9b9e-24b2-4d6c-8ffa-a61ba1ffdbed",
        "Duration": 1,
        "Impact": 6
      },
      {
        "TaskID": "776cb9d2-ecdc-46e7-9a08-05e5806a21ee",
        "Duration": 6,
        "Impact": 10
      },
      {
        "TaskID": "9e15f7bf-734e-4c3b-9e11-47f2165e61ff",
        "Duration": 6,
        "Impact": 1
      },
      {
        "TaskID": "5336508f-ff32-4a0a-beb5-292fd665f9f4",
        "Duration": 4,
        "Impact": 6
      },
      {
        "TaskID": "282ea16d-f9e0-4472-a20e-6738e1759ba1",
        "Duration": 5,
        "Impact": 9
      },
      {
        "TaskID": "437ab661-85da-4f3c-8938-d7e43ef7925c",
        "Duration": 4,
        "Impact": 2
      },
      {
        "TaskID": "7c59b136-4d1e-41fa-b1cf-79855a879c0f",
        "Duration": 7,
        "Impact": 1
      },
      {
        "TaskID": "47268ec2-b4cf-4290-b20a-dc77706e3f16",
        "Duration": 6,
        "Impact": 8
      },
      {
        "TaskID": "b6946fd0-41fd-4e7a-a6b8-9baabd981fca",
        "Duration": 8,
        "Impact": 3
      },
      {
        "TaskID": "4fc575b4-2f88-4a0e-b30c-dae916f3cfaf",
        "Duration": 2,
        "Impact": 5
      },
      {
        "TaskID": "4db3e747-4fb8-4a51-9962-54680e47a84e",
        "Duration": 1,
        "Impact": 8
      },
      {
        "TaskID": "924a1655-7a07-4e90-955c-8e5f58f3400a",
        "Duration": 1,
        "Impact": 9
      },
      {
        "TaskID": "c8e5ce81-5374-430f-98fe-8f6100a05fb4",
        "Duration": 4,
        "Impact": 7
      },
      {
        "TaskID": "cac89478-aaef-4ab0-96b3-f65e739c7543",
        "Duration": 8,
        "Impact": 2
      },
      {
        "TaskID": "e208cfba-5893-47d9-95ba-145d357c66f0",
        "Duration": 6,
        "Impact": 5
      },
      {
        "TaskID": "f843ca23-8bf2-457f-866c-538ef68b7f78",
        "Duration": 3,
        "Impact": 6
      },
      {
        "TaskID": "b3b47e85-774d-48af-929f-70d24e1ef23d",
        "Duration": 3,
        "Impact": 7
      },
      {
        "TaskID": "bd189004-f8f6-45bb-bddb-18631396fd28",
        "Duration": 8,
        "Impact": 4
      },
      {
        "TaskID": "a1a16f7a-17ac-4eba-90b2-dd4a47e792a3",
        "Duration": 8,
        "Impact": 1
      },
      {
        "TaskID": "7619f95e-3e09-480c-a32e-3c4ee852cc05",
        "Duration": 3,
        "Impact": 4
      },
      {
        "TaskID": "85a08f82-938a-4f0c-93e4-80af78151703",
        "Duration": 6,
        "Impact": 8
      },
      {
        "TaskID": "8b5a13df-daa5-48b6-96b8-4842104460dd",
        "Duration": 7,
        "Impact": 8
      }
    ]
  }
]
</details>```




---


##  Top Notifications Output

<details>
<summary>Click to expand full output</summary>

```json
[
  {
    "ID": "2bc704c8-e162-47e6-a7c6-cd38ec094d02",
    "Type": "Placement",
    "Message": "Marvell Technology Inc. hiring",
    "Timestamp": "2026-05-16 09:04:42"
  },
  {
    "ID": "44661446-8262-4eba-863a-03b26486c9a4",
    "Type": "Placement",
    "Message": "Tesla Inc. hiring",
    "Timestamp": "2026-05-16 07:05:59"
  },
  {
    "ID": "04534f0e-6757-43b9-a431-802b4b17523d",
    "Type": "Placement",
    "Message": "Advanced Micro Devices Inc. hiring",
    "Timestamp": "2026-05-16 01:36:32"
  },
  {
    "ID": "e88c1a22-3d39-42e5-9f5c-4326d0746213",
    "Type": "Placement",
    "Message": "Apple Inc. hiring",
    "Timestamp": "2026-05-15 22:05:15"
  },
  {
    "ID": "fcc0fcfc-0e85-4214-9d1c-30e79cadca43",
    "Type": "Placement",
    "Message": "Apple Inc. hiring",
    "Timestamp": "2026-05-15 19:36:21"
  },
  {
    "ID": "f0a5b29c-3cdb-4d1d-b49f-0cd5d297a9f6",
    "Type": "Placement",
    "Message": "Alphabet Inc. Class A hiring",
    "Timestamp": "2026-05-15 13:36:54"
  },
  {
    "ID": "2097e4fa-9efa-4396-9806-2c1d02b23591",
    "Type": "Placement",
    "Message": "Meta Platforms Inc. hiring",
    "Timestamp": "2026-05-15 12:37:16"
  },
  {
    "ID": "dd1b974e-9d04-4c88-a27c-9cc7c010ebc0",
    "Type": "Result",
    "Message": "end-sem",
    "Timestamp": "2026-05-16 09:36:43"
  },
  {
    "ID": "96b62e44-626a-4ee3-a1b8-e64a34d41078",
    "Type": "Result",
    "Message": "external",
    "Timestamp": "2026-05-15 22:04:31"
  },
  {
    "ID": "8e63b725-7517-4b47-adc3-3ddd280ce6c7",
    "Type": "Result",
    "Message": "mid-sem",
    "Timestamp": "2026-05-15 20:36:10"
  }
]
</details>```


---


