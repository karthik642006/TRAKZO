# TRAKZO

TRAKZO is a healthcare-focused full-stack project with:
- a **backend API** for user and vitals data
- a **mobile/web frontend** for dashboards, medicine flow, caregivers, and profile views

## Programming languages and technologies used

### Languages
- **JavaScript** (Node.js backend + React Native frontend)
- **TypeScript** (frontend app code)
- **CSS** (Tailwind/NativeWind styling)
- **JSON** (configuration files)

### Main frameworks/libraries
- **Backend:** Express, Mongoose, CORS, dotenv, express-rate-limit
- **Frontend:** Expo, React Native, Expo Router, Axios, NativeWind (Tailwind)
- **Database:** MongoDB

## Repository structure

```text
TRAKZO/
├── backend/                 # Node.js + Express API
│   ├── models/              # Mongoose models (User, Vitals)
│   ├── routes/              # API routes (/api/users, /api/vitals)
│   ├── server.js            # App bootstrap, middleware, DB connection
│   └── package.json
├── frontend/                # Expo React Native app
│   ├── src/
│   │   ├── app/             # Screens and tab layout
│   │   ├── components/      # Reusable UI components
│   │   ├── services/        # API layer (Axios client)
│   │   ├── hooks/           # Custom hooks
│   │   └── constants/       # Theme and constants
│   └── package.json
└── README.md
```

## Backend overview (`/backend`)

The backend exposes REST endpoints under `/api` and connects to MongoDB.

### Implemented endpoints
- `GET /api/health` → health check
- `GET /api/users` → fetch all users
- `POST /api/users` → create user
- `GET /api/vitals/:userId` → get latest vitals for a user
- `POST /api/vitals` → add/update vitals

### Data models
- **User**
  - basic identity fields, role, connected devices, medical profile
- **Vitals**
  - heart rate, blood pressure, SpO2, historical readings, record timestamp

### Backend environment variables
Create `/backend/.env`:

```env
MONGODB_URI=<your_mongodb_connection_string>
PORT=5000
```

## Frontend overview (`/frontend`)

The frontend is an Expo app using tab navigation and healthcare UI flows:
- Home
- Medicine
- Dashboard (includes vitals fetch/log flow)
- Caregivers
- Profile

The API client is in `frontend/src/services/api.ts` and targets:
- Android emulator: `http://10.0.2.2:5000/api`
- iOS/Web: `http://localhost:5000/api`

## How to run the project

## 1) Prerequisites
- Node.js (LTS recommended)
- npm
- MongoDB instance (local or cloud)
- Expo Go app / Android emulator / iOS simulator (for frontend testing)

## 2) Run backend

```bash
cd /home/runner/work/TRAKZO/TRAKZO/backend
npm install
npm run dev
```

For production-style run:

```bash
npm start
```

## 3) Run frontend

Open a new terminal:

```bash
cd /home/runner/work/TRAKZO/TRAKZO/frontend
npm install
npm start
```

Optional platform commands:

```bash
npm run android
npm run ios
npm run web
```

## 4) Lint frontend

```bash
cd /home/runner/work/TRAKZO/TRAKZO/frontend
npm run lint
```

## Notes
- Start backend before using dashboard vitals API features.
- If running on a physical phone, update `baseURL` in `frontend/src/services/api.ts` to your machine's LAN IP.
