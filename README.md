# Ganesh Reddy Katla - Portfolio

Modern, high-performance portfolio website of **Ganesh Reddy Katla**, Senior Frontend Engineer and AI Enthusiast specializing in React, Enterprise SaaS, Design Systems, and Developer AI Tooling.

---

## 🚀 Free Deployment to GitHub Pages (100% Free Public Visibility)

This project is pre-configured with **GitHub Actions** (`.github/workflows/deploy.yml`) for automated free hosting on **GitHub Pages**.

### Step 1: Export or Push to GitHub
1. In the AI Studio top navigation bar, click the **Settings / Menu** icon.
2. Select **Export to GitHub** (or download as ZIP and push to a new GitHub repo: `https://github.com/Ganeshreddykatla/portfolio`).
3. If pushing manually from your computer:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/Ganeshreddykatla/portfolio.git
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages in your Repository
1. Go to your repository on GitHub: `https://github.com/Ganeshreddykatla/portfolio`
2. Click on **Settings** (tab at the top of the repo).
3. In the left sidebar under *Code and automation*, click **Pages**.
4. Under **Build and deployment > Source**, select:
   - **GitHub Actions**
5. That's it! As soon as you push or select GitHub Actions, the included workflow (`.github/workflows/deploy.yml`) will build your Vite app and deploy it automatically.
6. Your portfolio will be publicly live at:
   ```
   https://Ganeshreddykatla.github.io/portfolio/
   ```
   *(Or `https://Ganeshreddykatla.github.io/` if your repository is named `Ganeshreddykatla.github.io`)*

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🛠️ Tech Stack
- **Framework:** React 19, Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (`motion/react`)
- **Icons:** Lucide React
- **Hosting:** GitHub Pages (Free via GitHub Actions)
