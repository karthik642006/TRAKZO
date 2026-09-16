TRAKZO — Rural Healthcare Access & Quality Platform

«Connect • Understand • Prioritize • Intervene • Follow-up»

TRAKZO is a rural-first healthcare platform designed to improve access to public healthcare services in rural and underserved areas.

The platform connects patients, caregivers, healthcare workers, doctors, and healthcare facilities through a continuous digital healthcare journey.

📌 Project Overview

TRAKZO aims to make healthcare more accessible, connected, and trackable.

The platform is designed to support patients from their first symptom report through consultation, referrals, diagnostic tests, medicine availability, and follow-up.

What TRAKZO does

- Connects patients with healthcare facilities.
- Helps healthcare workers manage patient information.
- Supports digital triage and patient prioritization.
- Enables appointment and queue management.
- Maintains continuous patient health records.
- Tracks referrals and diagnostic workflows.
- Supports vital signs monitoring.
- Enables future offline and multilingual healthcare access.

🎯 Problem Statement

Rural and underserved communities often face difficulties accessing quality healthcare services.

Problems

- Long travel distances to healthcare facilities.
- Limited access to doctors and specialists.
- Fragmented patient medical records.
- Delayed referrals and diagnostic tests.
- Difficulty tracking medicine availability.
- Weak patient follow-up.
- Language and connectivity barriers.
- Difficulty identifying patients who need urgent attention.

These challenges can make healthcare delivery slower and less connected.

💡 Solution

TRAKZO provides a unified healthcare workflow that connects patients, healthcare workers, doctors, and public-health facilities.

Instead of treating every healthcare visit as an isolated event, TRAKZO is designed to connect the patient's information and care activities over time.

Key benefits

- Better healthcare coordination.
- Easier patient record management.
- Improved referral tracking.
- More organized appointments and queues.
- Support for healthcare-worker decision-making.
- Continuous patient follow-up.
- Improved access for rural communities.

TRAKZO is designed to support healthcare professionals, not replace their clinical judgment.

🔄 How TRAKZO Works

Patient / Caregiver
        ↓
Symptom Reporting
        ↓
Digital Triage
        ↓
Appointment / PHC Queue
        ↓
Healthcare Worker / Doctor
        ↓
Assisted Teleconsultation
        ↓
Referral / Diagnostics / Medicine
        ↓
Longitudinal Health Record
        ↓
Patient Follow-up
        ↓
Healthcare Facility Dashboard

Example User Journey

1. A patient opens the TRAKZO application.
2. The patient reports symptoms or requests healthcare support.
3. The system helps organize the case using configured triage rules.
4. The patient requests an appointment or joins a queue.
5. A healthcare worker or doctor reviews the patient.
6. The patient receives consultation or assisted teleconsultation.
7. Referrals, diagnostic tests, and medicine-related tasks can be tracked.
8. Patient health information is updated.
9. Follow-up tasks can be created for continued care.

✨ Main Features

1. Patient Management

TRAKZO is designed to maintain patient information in one place.

Possible patient information:

- Name
- unique patient id
- desease 
- Blood group
- Allergies
- Existing medical conditions
- Connected devices

The current backend includes a User model with patient information fields.

2. Digital Triage

Digital triage helps classify patient cases using symptoms and configured safety rules.

Possible categories:

- Emergency
- Urgent
- Routine
- Preventive / Information

Emergency red flags should take priority over AI recommendations.

Healthcare professionals remain responsible for clinical decisions.

3. Appointment and Queue Management

The planned appointment workflow supports:

- Appointment booking.
- Queue tokens.
- Waiting status.
- Doctor availability.
- Rescheduling.
- No-show handling.
- Consultation completion.

This helps healthcare facilities organize patient visits.

4. Assisted Teleconsultation

Healthcare workers can assist patients in connecting with doctors remotely.

The planned workflow can include:

- Doctor availability.
- Appointment slots.
- Patient information.
- Structured observations.
- Consultation notes.
- Referral requests.
- Follow-up dates.

TRAKZO is not intended to autonomously diagnose patients or prescribe medicines.

5. Longitudinal Health Records

A longitudinal health record maintains a patient's healthcare history over time.

Patient
   ↓
Symptoms / Observations
   ↓
Medicines
   ↓
Care Plans
   ↓
Appointments
   ↓
Referrals
   ↓
Diagnostic Results
   ↓
Follow-up Tasks

This helps healthcare workers understand a patient's history across multiple visits.

6. Vital Signs Monitoring

The current backend supports storing vital information such as:

- Heart rate.
- Average heart rate.
- Blood pressure.
- SpO₂.
- Historical vital readings.
- Recording timestamps.

This provides a foundation for future health monitoring features.

7. Referral Tracking

TRAKZO is designed to track referrals through different stages.

Draft
  ↓
Sent
  ↓
Accepted
  ↓
Scheduled
  ↓
Attended
  ↓
Completed
  ↓
Closed

This helps healthcare workers identify pending referrals and follow up with patients.

8. Diagnostic Coordination

The planned diagnostic workflow can track:

- Diagnostic requests.
- Laboratory selection.
- Sample collection.
- Test in progress.
- Result ready.
- Clinician review.

9. Medicine Availability

Healthcare facilities can provide medicine availability information.

Possible stock statuses:

- Available.
- Low Stock.
- Out of Stock.

This can help healthcare workers and patients identify medicine availability.

10. High-Risk Follow-up

TRAKZO is designed to help healthcare workers identify cases requiring additional attention.

Possible signals:

- Worsening symptoms.
- Missed follow-up.
- Delayed referral.
- Poor adherence.
- Repeated failed contact.

The priority system should explain why a case was highlighted.

11. Offline and Feature-Phone Access

The broader TRAKZO vision includes support for users with limited internet access.

Planned access methods:

- Offline-first application.
- USSD.
- IVR.
- SMS.
- Multilingual interaction.
- Voice assistance.

These features are part of the future healthcare-access vision and are not fully implemented in the current backend.

12. AI Health Assistant

The proposed AI assistant is designed to support healthcare navigation and approved health information.

Voice / Text Input
       ↓
Intent Detection
       ↓
Red-Flag Safety Rules
       ↓
Approved Knowledge Base
       ↓
Local AI Model
       ↓
Safe Guidance / Human Escalation

The AI assistant should not autonomously diagnose, prescribe, or make final clinical decisions.

🏗️ System Architecture

Patient App / Web App
        ↓
REST API
        ↓
User & Health Records
        ↓
Safety and Triage
        ↓
AI Intelligence
        ↓
Healthcare Worker Dashboard
        ↓
Doctor / PHC Facility
        ↓
Referral / Diagnostics / Medicine
        ↓
Continuous Follow-up

Architecture Layers

Layer| Responsibility
Frontend| Patient and healthcare-worker interface
Backend| API and application logic
Database| Store users and healthcare data
Triage| Organize cases using configured safety rules
AI Layer| Support information and prioritization
Healthcare Dashboard| Help staff manage patient workflows
Follow-up| Track ongoing patient care

The current backend implements the user and vital signs foundation of this architecture.

💻 Technology Stack

Technology| Purpose
Node.js| Backend runtime
Express.js| REST API server
MongoDB| Database
Mongoose| MongoDB object modeling
JavaScript| Backend development
CORS| Frontend-backend communication
dotenv| Environment configuration
Nodemon| Development server
bcryptjs| Password hashing dependency
jsonwebtoken| JWT dependency

Backend Repository

"health_care-app-backend" (https://github.com/balajikarthik2004/health_care-app-backend)

📁 Project Structure

health_care-app-backend/
│
├── models/
│   ├── User.js
│   └── Vitals.js
│
├── routes/
│   ├── userRoutes.js
│   └── vitalsRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
├── .env
└── .gitignore

File Explanation

"server.js"

Main backend entry point.

Responsibilities:

- Load environment variables.
- Create the Express server.
- Enable CORS.
- Enable JSON request parsing.
- Connect to MongoDB.
- Register API routes.
- Start the server.

"models/User.js"

Defines the MongoDB user schema.

Includes fields such as:

- Name.
- unique patient id
- Role.
- Avatar URL.
- Connected devices.
- Medical profile.
- Created date.

"models/Vitals.js"

Defines the vital signs schema.

Stores:

- Heart rate.
- Average heart rate.
- Heart rate history.
- Blood pressure.
- Blood pressure history.
- SpO₂.
- SpO₂ history.
- Recording date.

"routes/userRoutes.js"

Handles user-related API operations.

"routes/vitalsRoutes.js"

Handles vital signs API operations.

🔌 API Documentation

Base URL

http://localhost:5000

Health Check

Check whether the backend is running.

GET /api/health

Example Response

{
  "status": "ok",
  "message": "VitalCare API is running"
}

---

Users API

Get All Users

GET /api/users

Returns the users stored in MongoDB.

Create a User

POST /api/users
Content-Type: application/json

Request Body

{
  "name": "Example Patient",
  "unique patientid ": "1384 2335 1649",
  "role": "patient",
  "medicalProfile": {
    "bloodType": "O+",
    "allergies": [],
    "conditions": []
  }
}

Supported Roles

patient
family
clinician

---

Vitals API

Get Latest Vitals

GET /api/vitals/:userId

Example:

GET /api/vitals/USER_ID_HERE

Returns the latest vital record for a user.

Add or Update Vitals

POST /api/vitals
Content-Type: application/json

Request Body

{
  "userId": "USER_ID_HERE",
  "heartRate": 78,
  "bloodPressure": {
    "systolic": 120,
    "diastolic": 80
  },
  "spO2": 98
}

«Note: The current vitals API is a basic backend implementation. It is not a complete clinical monitoring or emergency alert system.»

🚀 How to Install and Run

Prerequisites

Install the following:

- Node.js LTS.
- npm.
- MongoDB.
- Git.
- VS Code or another code editor.

Step 1 — Clone the Repository

Open your terminal:

git clone https://github.com/balajikarthik2004/health_care-app-backend.git

Navigate into the project:

cd health_care-app-backend

Step 2 — Install Dependencies

npm install

This installs the dependencies defined in "package.json".

Step 3 — Configure Environment Variables

Create a file named ".env" in the backend root directory.

PORT=5000
MONGODB_URI=mongodb://localhost:27017/trakzo

If you use MongoDB Atlas, replace the MongoDB URI with your own connection string.

Example:

PORT=5000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

Important: Never upload database passwords, API keys, or other secrets to GitHub.

Step 4 — Start the Backend

Development Mode

npm run dev

Normal Mode

npm start

Step 5 — Verify the Backend

Open your browser:

http://localhost:5000/api/health

Expected response:

{
  "status": "ok",
  "message": "VitalCare API is running"
}

If you receive this response, the backend health-check endpoint is working.

🔗 Connecting the Frontend with the Backend

Your frontend must use the backend API base URL.

const API_BASE_URL = "http://localhost:5000";

Example: Check Backend Connection

fetch(`${API_BASE_URL}/api/health`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Backend connection failed:", error);
  });

Example: Get Users

fetch(`${API_BASE_URL}/api/users`)
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.error(error);
  });

Example: Get Patient Vitals

const userId = "USER_ID_HERE";

fetch(`${API_BASE_URL}/api/vitals/${userId}`)
  .then((response) => response.json())
  .then((vitals) => {
    console.log(vitals);
  });

Android Emulator

If the frontend runs inside an Android Studio emulator and the backend runs on your computer, you may need:

http://10.0.2.2:5000

For a physical Android device, use your computer's local network IP address and ensure both devices can communicate.

🔐 Security and Privacy

Healthcare information is sensitive. TRAKZO is designed with privacy and security in mind.

Security considerations

- Role-based access control.
- Least-privilege access.
- Secure data transmission.
- Encrypted offline storage.
- Audit logs.
- Consent-aware access.
- De-identified or synthetic data for prototype testing.

Important

Do not use real patient medical information in an unvalidated prototype.

Never commit the following to GitHub:

- Database passwords.
- API keys.
- JWT secrets.
- Private credentials.
- Real patient records.

📊 Current Implementation Status

This section distinguishes the current backend code from the broader TRAKZO project vision.

✅ Currently Implemented in the Backend

- Express server.
- MongoDB connection.
- User model.
- Vitals model.
- User API routes.
- Vitals API routes.
- Health-check endpoint.
- Environment configuration.

🚧 Planned / Not Fully Implemented

- Complete digital triage engine.
- Appointment and queue management.
- Assisted teleconsultation.
- Referral tracking.
- Diagnostic coordination.
- Medicine inventory.
- Offline synchronization.
- USSD / IVR / SMS.
- Local AI assistant.
- Full healthcare dashboard.
- FHIR / ABDM integration.

The current backend is a foundation for the larger TRAKZO healthcare platform.

🛣️ Future Roadmap

Phase 1 — Core Healthcare MVP

- Patient application.
- Healthcare-worker dashboard.
- User management.
- Vital signs.
- Patient records.
- Basic appointments.

Phase 2 — Healthcare Workflows

- Digital triage.
- Queue management.
- Assisted teleconsultation.
- Referral tracking.
- Diagnostic coordination.
- Medicine availability.

Phase 3 — Rural Accessibility

- Offline-first operation.
- Multilingual interface.
- Voice assistance.
- USSD / IVR / SMS.

Phase 4 — AI and Intelligence

- Explainable patient prioritization.
- Local AI health assistant.
- Approved healthcare knowledge base.
- Follow-up support for human review.

Phase 5 — Interoperability and Deployment

- FHIR-aligned data model.
- Consent workflows.
- ABDM integration preparation.
- PHC pilot.
- Security and usability validation

📌 Project Summary

TRAKZO is a rural healthcare platform designed to connect patients, healthcare workers, doctors, and public-health facilities into one continuous care journey.

The project combines patient management, vital monitoring, healthcare workflows, digital triage, referrals, diagnostics, medicine availability, and future AI-assisted healthcare support.

TRAKZO — Connecting rural healthcare into one continuous care journey.
