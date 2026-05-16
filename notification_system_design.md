# Notification System Design

## Stage 1: API Design

### Overview
The notification system enables users (students) to receive real-time updates such as placements, results, and events.

---

### Core APIs

#### 1. Get Notifications
GET /api/notifications

**Response**
```json
[
  {
    "ID": "uuid",
    "Type": "Placement",
    "Message": "Company hiring",
    "Timestamp": "2026-04-22 17:51:30"
  }
]
```

#### 2. Mark Notification as Read
PATCH /api/notifications/:id

#### 3. Create Notification (Admin/System)
POST /api/notifications

### Headers
Authorization: Bearer <token>  
Content-Type: application/json

### Real-Time Mechanism
- WebSockets or Server-Sent Events (SSE)
- Event-driven push notifications

---

## Stage 2: Database Design

### Recommended DB
PostgreSQL (Relational DB)

### Schema: notifications

| Column     | Type      | Description              |
|------------|----------|--------------------------|
| id         | UUID     | Primary Key              |
| studentId  | INT      | User ID                  |
| type       | ENUM     | Event / Result / Placement |
| message    | TEXT     | Notification content     |
| isRead     | BOOLEAN  | Read status              |
| createdAt  | TIMESTAMP| Creation time            |

### Challenges
- Large data volume
- Frequent reads
- Sorting overhead

### Solutions
- Indexing
- Partitioning
- Archiving

---

## Stage 3: Query Optimization

### Given Query
```sql
SELECT * FROM notifications
WHERE studentID = 1042 AND isRead = false
ORDER BY createdAt DESC;
```

### Issues
- Full table scan
- No indexing

### Optimized Query
```sql
SELECT id, type, message, createdAt
FROM notifications
WHERE studentID = 1042 AND isRead = false
ORDER BY createdAt DESC;
```

### Index
```sql
CREATE INDEX idx_notifications_student_read
ON notifications(studentID, isRead, createdAt DESC);
```

### Additional Query
```sql
SELECT *
FROM notifications
WHERE type = 'Placement'
AND createdAt >= NOW() - INTERVAL '7 days';
```

### Note
Avoid indexing every column due to write overhead.

---

## Stage 4: Scaling Strategy

### Problem
Frequent notification fetch → DB overload

### Solutions
- Redis caching
- Pagination (`/notifications?page=1&limit=10`)
- Lazy loading
- Load balancing

---

## Stage 5: System Reliability

### Problem
Sequential execution causes failure and delays.

### Solution
Use message queue (Kafka/RabbitMQ)

### Flow
1. Save to DB
2. Push to queue
3. Workers process async

### Pseudocode
```
function notify_all(student_ids, message):
    for student_id in student_ids:
        save_to_db(student_id, message)
        push_to_queue(student_id, message)
```

Worker:
```
process_queue():
    send_email()
    push_notification()
```

---

## Stage 6: Priority Notification System

### Priority Rules
| Type       | Weight |
|------------|--------|
| Placement  | 3      |
| Result     | 2      |
| Event      | 1      |

### Logic
```js
notifications.sort((a, b) => {
    const weightA = TYPE_WEIGHT[a.Type];
    const weightB = TYPE_WEIGHT[b.Type];

    if (weightA !== weightB) return weightB - weightA;

    return new Date(b.Timestamp) - new Date(a.Timestamp);
});

return notifications.slice(0, 10);
```

---

## Conclusion
The system is scalable, efficient, and fault-tolerant, leveraging microservices, logging, and optimized querying.

---

## Optional Frontend
A simple frontend is included for visualization of outputs.
