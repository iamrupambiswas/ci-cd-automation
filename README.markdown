# 🚀 CI/CD Automation Tool

A self-hosted CI/CD platform to automate deployments, manage GitHub webhooks, and monitor builds — built with **Spring Boot**, **React**, **PostgreSQL**, and **Docker**.

> ✅ Phase 2 Complete: Backend Auth, GitHub Webhook Listener, Frontend Setup, Frontend Auth, Role-based Dashboard

---

## 📌 Features (So Far)

- 🔐 JWT-based authentication (Login/Register)
- 🧑‍💻 Role-based access control (ADMIN, DEVELOPER)
- 🔗 GitHub webhook endpoint (`push` event listener)
- 📊 Frontend auth integration with JWT
- 📈 Role-based dashboard views
- 🏗️ Clean monorepo project architecture
- 🌐 Frontend bootstrapped with Vite + Tailwind CSS

---

## 🧱 Tech Stack

| Layer       | Technology                                |
|-------------|--------------------------------------------|
| Frontend    | React, Vite, Tailwind CSS                  |
| Backend     | Spring Boot 3.x, Spring Security (JWT)     |
| Database    | PostgreSQL                                 |
| Webhooks    | GitHub webhook listener (REST endpoint)    |
| Build Engine| Docker (for future build triggers)         |
| Deployment  | AWS EC2 (planned), S3/SES for logs/emails  |

---

## 📁 Monorepo Project Structure

```
ci-cd-tool/
├── backend/                    # Spring Boot + PostgreSQL
│   ├── controller/             # REST controllers
│   ├── model/                  # Data models
│   ├── repository/             # Database repositories
│   ├── service/                # Business logic
│   ├── security/               # JWT and Spring Security config
│   ├── webhook/                # GitHub webhook handlers
│   └── application.properties  # Configuration file
│
├── frontend/                   # React + Vite + Tailwind
│   ├── assets/                 # Static assets (images, fonts, etc.)
│   ├── auth/                   # Authentication-related components
│   ├── components/             # Reusable UI components
│   ├── dashboard/              # Dashboard-related components
│   ├── utils/                  # Utility functions and helpers
│   ├── admin/                  # Admin panel components
│   └── App.jsx, main.jsx       # Main React entry points
│
├── README.md                   # Project documentation
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT License file
└── docker-compose.yml          # Planned Docker setup
```

---

## ⚙️ How to Run

### 🚀 Backend
```bash
cd backend
./mvnw spring-boot:run
```
* Ensure PostgreSQL is running and configured in `backend/application.properties`.

### 💻 Frontend
```bash
cd frontend
npm install
npm run dev
```
* Opens the app at `http://localhost:5173` (default Vite port).

### 📮 GitHub Webhook Endpoint
```
POST /api/webhook/github
Accepts: application/json
```
* Tested with: `push` event
* Currently logs payload to console (Phase 3 will store events and trigger builds)

**Development Tip**: Use `ngrok` for webhook testing:
```bash
ngrok http 8080
```

---

## 🛣️ Roadmap

| Phase | Features | Status |
|-------|----------|--------|
| 0     | Project planning, architecture, repo setup | ✅ Done |
| 1     | JWT auth, webhook endpoint, frontend scaffold | ✅ Done |
| 2     | Frontend auth integration, role-based dashboard views | ✅ Done |
| 3     | Register repos via UI, receive webhooks on push, store trigger data in DB | 🔜 Next |
| 4     | Clone repo from GitHub, build Docker image on push, run container locally | ⏳ Planned |
| 5     | Deploy Docker container to AWS EC2, upload logs to S3, email status via SES | ⏳ Planned |
| 6     | Show build status/logs, admin panel for managing repos, improve responsiveness | ⏳ Planned |
| 7     | Host frontend (Netlify/S3) and backend (EC2), final README with demo | ⏳ Planned |

---

## 🧑‍💻 Author
Rupam Biswas  
🔗 [Medium](https://medium.com/@your-medium-handle) | [LinkedIn](https://linkedin.com/in/your-linkedin-handle)

---

## 🙌 Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code adheres to the project's coding standards.

---

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.