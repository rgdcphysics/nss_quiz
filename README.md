# NSS Live Team Quiz Platform

A real-time, synchronized team quiz application tailored for **NSS Unit 1 (Introduction and Basic concepts of NSS)** under the Assam University syllabus.

---

## 🚀 How it Works

1. **Student Registration (`index.html`)**:
   - Students open the quiz URL on their smartphones.
   - Enter their Name and Roll Number to enter the waiting room / lobby.
2. **Step 1: Group Division (Groups A, B, C, D)**:
   - When the teacher triggers group division (via `admin.html` or setting Firebase node `quiz_state/groupsFormed = true`), students are randomly and evenly divided into 4 teams (**Group A, Group B, Group C, Group D**).
   - Each student's phone displays their assigned team badge and an **expandable accordion listing their own team members**.
   - Other groups show only the headcount (individual names are masked).
3. **Step 2: Synchronized 30-Question Live Quiz**:
   - When the teacher starts the quiz (`admin.html` or `quiz_state/quizStarted = true`), Question 1 appears simultaneously on all student screens with a **30-second live countdown timer**.
   - Questions feature 2, 3, or 4 options from Unit 1.
   - Answers and individual scores sync automatically in real-time.
4. **Step 3: Final Results & Winning Podium**:
   - After question 30, the winning group is crowned with victory confetti, podium rankings (1st to 4th place), and individual scorecards.

---

## 🛠️ Step 1: Create a Free Firebase Realtime Database

1. Go to the [Firebase Console](https://console.firebase.google.com/) and click **Add Project** (e.g. `nss-quiz`).
2. In the left menu under **Build**, click **Realtime Database** > **Create Database**.
3. Choose a server location (e.g. `Singapore` or `United States`) and select **Start in test mode**.
4. Go to the **Rules** tab in Realtime Database and paste the following open rules:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
5. Click **Publish**.
6. Copy your Realtime Database URL (e.g. `https://nss-quiz-default-rtdb.firebaseio.com/`).

---

## ⚙️ Step 2: Configure the App

You can either:
- **Option A (Via Web Browser UI)**: Open `index.html` or `admin.html`, click **⚙️ Config** in the top right, paste your Firebase Database URL, and click **Save**.
- **Option B (In Code)**: Open [`firebase-config.js`](file:///f:/My%20Folder/RGDC/DD/Python/.NonPython/NSS/Quiz/firebase-config.js) and replace `databaseURL` with your database URL.

---

## 🌐 Step 3: Deploy to GitHub Pages

1. Push or upload the `Quiz` folder to your GitHub repository.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`), folder: `/` (or `/Quiz`).
4. Click **Save**. GitHub will generate your public live URL (e.g. `https://username.github.io/repository-name/Quiz/`).

---

## 📱 Session URLs
- **Student Quiz Link**: `https://<username>.github.io/<repo>/Quiz/index.html`
- **Instructor Dashboard**: `https://<username>.github.io/<repo>/Quiz/admin.html`
