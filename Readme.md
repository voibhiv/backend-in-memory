# Back-end in memory

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)

## Overview

### Project Overview:
This project is built using Node.js and Express and adheres to Clean Architecture to ensure separation of concerns and maintainability. The code is structured using Object-Oriented Programming (OOP) concepts, which promotes modularity, reusability, and clear abstraction.

### Key Features:

Express is used as the web framework to handle HTTP requests and route management.
Clean Architecture organizes the code into layers, including Use Cases, Controllers, and Repositories.
Data is stored in an in-memory database, meaning no external database like PostgreSQL or MongoDB is used. Instead, data persists only during the application's runtime, making it ideal for lightweight or testing scenarios.
Architecture Layers:

- Use Cases: Business logic implemented using services that interact with the entities.
- Controllers: Handle incoming HTTP requests, interacting with use cases to perform actions and returning responses.
- Repositories: Provide an abstraction over the in-memory data storage, allowing data to be fetched and modified by the use cases.

This setup enables a clean separation of concerns, making the project highly testable and scalable.

## Project structured

```bash
.
├── data #database mock manipulations
│   └── database
│       ├── content
│       │   ├── documents.json
│       │   └── user.json
│       └── db.ts
├── domain
│   ├── interfaces
│   │   └── use-cases
│   │       ├── document
│   │       │   ├── create-document.use-case.interface.ts
│   │       │   ├── delete-document.use-case.interface.ts
│   │       │   ├── get-all-document.use-case.interface.ts
│   │       │   └── update-document.use-case.interface.ts
│   │       └── user
│   │           ├── create-user.use-case.interface.ts
│   │           ├── delete-user.use-case.interface.ts
│   │           ├── get-all-users.use-case.interface.ts
│   │           ├── get-one-user.use-case.interface.ts
│   │           └── update-user.interface.ts
│   ├── models
│   │   ├── document
│   │   │   ├── create-document.ts
│   │   │   └── update-document.ts
│   │   └── user
│   │       ├── create-user.model.ts
│   │       └── get-user.ts
│   ├── repositories
│   │   ├── document-repository.ts
│   │   └── user-repository.ts
│   └── use-cases
│       ├── document
│       │   ├── document-create.use-case.ts
│       │   ├── document-delete.use-case.ts
│       │   ├── document-get-all.use-case.ts
│       │   └── document-update.use-case.ts
│       └── user
│           ├── create-user.use-case.ts
│           ├── delete-user.use-case.ts
│           ├── get-all-users.use-case.ts
│           ├── get-one-user.use-case.ts
│           └── update-user.use-case.ts
├── presentation
│   ├── controllers
│   │   ├── document.controller.ts
│   │   └── user.controller.ts
│   └── routers
│       ├── document.route.ts
│       └── user.route.ts
└── index.ts
```

## Installation

1. Clone the repository:

   ```bash
    git clone git@github.com:voibhiv/backend-in-memory.git
   ```

2. Navigate to the project directory:

   ```bash
    cd backend-in-memory
   ```

3. Create an .env file by example:

   ```bash
    cp .env.example .env
   ```

4. Run npm:
   ```bash
    npm i
   ```

4. Run project:
    ```bash
      npm run dev
    ```
