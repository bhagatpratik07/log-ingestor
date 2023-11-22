# Log Ingestor and Query Interface

## Overview

This project provides a log ingestor system and a query interface for efficiently handling vast volumes of log data. It leverages Elasticsearch and MongoDB to store and retrieve log information. The system includes a log ingestor that ingests logs in a specified format and a user-friendly query interface for searching and filtering logs based on various criteria.

## Features

- **Log Ingestor:**

  - Mechanism to ingest logs in a specified format.
  - Scalability to handle high volumes of logs efficiently.
  - Integration with MongoDB for persistent storage.
  - Asynchronous indexing into Elasticsearch using `mongoosastic`.
  - HTTP server for log ingestion.

- **Query Interface:**
  - User-friendly interface for full-text search.
  - Filters based on log properties such as level, message, timestamp, etc.
  - Efficient and quick search results.
  - Integration with Elasticsearch for querying indexed log data.

## Technologies

- **Elasticsearch:** Integral for efficient indexing and searching of log data. Elasticsearch is used to store logs in a manner that facilitates fast and powerful full-text search capabilities, enhancing the retrieval of relevant information.

- **MongoDB:** The chosen NoSQL database for persistent storage of log data. MongoDB is used to store logs with flexibility, accommodating diverse log structures, and providing a scalable solution for managing large volumes of data.

- **Node.js:** Powering the log ingestor and query interface, Node.js serves as the server-side runtime. It enables the development of scalable and performant applications, handling the logic for receiving logs, serving queries, and managing overall system interactions.

- **Express.js:** Employed as the web application framework for Node.js, Express.js is used to build the HTTP server. It streamlines the creation of robust server-side components, ensuring efficient handling of incoming log data through RESTful endpoints and managing user interactions.

- **@elastic/elasticsearch:** The official Elasticsearch client for Node.js plays a crucial role in interacting with the Elasticsearch engine. It is utilized for actions such as indexing logs into Elasticsearch, executing queries, and facilitating seamless communication between the Node.js application and the Elasticsearch cluster.

- **mongoose:** An elegant MongoDB object modeling tool, mongoose simplifies the interaction with the MongoDB database. It is used to define the schema for log structures, model data, and execute MongoDB queries, ensuring a smooth integration between the application and MongoDB.

- **mongoosastic:** As a middleware for Mongoose, mongoosastic automates the integration between MongoDB and Elasticsearch. It is specifically employed for indexing MongoDB data into Elasticsearch, streamlining the synchronization of log data between the two databases and optimizing search capabilities.

## System Diagram

![System Diagram](system-img.png)

## Log Schema

The log schema defines the structure of the log data that can be ingested into the system. Here's an example schema:

```javascript

  level: { type: String, required: true },
  message: { type: String, required: true },
  resourceId: { type: String, required: true },
  timestamp: { type: Date, required: true },
  traceId: { type: String, required: true },
  spanId: { type: String, required: true },
  commit: { type: String, required: true },
  metadata: {
    parentResourceId: { type: String, required: true },
  },

```

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB and Elasticsearch servers set up and running.

## Installation

### Server

1. Navigate to the server directory:

   ```bash
   cd server
   npm install
   npm run server
   ```

## Ingesting Logs

To ingest logs into the system, you can use the provided HTTP endpoint. Send a POST request to http://localhost:3000/api/log with the log data in the specified format. You can use tools like curl or Postman, or integrate it into your application.

### Example using curl

```bash
curl -X POST -H "Content-Type: application/json" -d '{
  "level": "error",
  "message": "Failed to connect to DB",
  "resourceId": "server-1234",
  "timestamp": "2023-09-15T08:00:00Z",
  "traceId": "abc-xyz-123",
  "spanId": "span-456",
  "commit": "5e5342f",
  "metadata": {
    "parentResourceId": "server-0987"
  }
}' http://localhost:3000/api/log
```

2. Client (In Development)

   ```bash
   cd client
   npm install
   npm run dev
   ```
