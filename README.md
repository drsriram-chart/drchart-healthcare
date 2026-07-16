# DrChart Healthcare - Production Website

DrChart Healthcare is a premium, high-performance static website built with React 19, TypeScript, and Tailwind CSS v4, fully optimized for search engines (SEO) and user experience (UX).

It is designed to be 100% serverless, requiring **zero backend, zero database, and zero paid dependencies**, making it **completely FREE to host** on standard static hosting providers.

*   **Domain:** `https://www.drcharthealthcare.com`
*   **Inquiries:** `info@drcharthealthcare.com`
*   **Motto:** *Reduce Documentation Burden. Focus More on Patient Care.*

---

## 🚀 Deployment Instructions

Because this website compiles into a highly optimized, single-page static bundle under the `dist/` folder, you can deploy it free on **GitHub Pages** or **Cloudflare Pages** in minutes.

---

### Option A: Hosting on GitHub Pages (Free)

#### Method 1: Manual Deploy with `gh-pages` branch

1.  **Initialize Git & Add Remote:**
    ```bash
    git init
    git remote add origin https://github.com/YOUR_USERNAME/drcharthealthcare.git
    ```

2.  **Add the `gh-pages` deployment package:**
    ```bash
    npm install gh-pages --save-dev
    ```

3.  **Configure `package.json` scripts:**
    Add a `"predeploy"` and `"deploy"` script to your `package.json` file:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

4.  **Run Deploy:**
    ```bash
    npm run deploy
    ```
    This automatically builds your site into `/dist` and pushes it to a `gh-pages` branch. Under your GitHub Repository Settings > Pages, ensure the source is set to the `gh-pages` branch.

#### Method 2: Automatic GitHub Actions CI/CD (Recommended)

1.  Create a file at `.github/workflows/deploy.yml` with the following content:
    ```yaml
    name: Deploy to GitHub Pages

    on:
      push:
        branches:
          - main # Or your default branch

    permissions:
      contents: write

    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest
        steps:
          - name: Checkout Code
            uses: actions/checkout@v4

          - name: Set up Node.js
            uses: actions/setup-node@v4
            with:
              node-version: 20
              cache: 'npm'

          - name: Install Dependencies
            run: npm ci

          - name: Build Application
            run: npm run build

          - name: Deploy static files
            uses: JamesIves/github-pages-deploy-action@v4
            with:
              folder: dist
              branch: gh-pages
    ```

2.  Commit your code and push to GitHub. Actions will automatically build and publish your site!

---

### Option B: Hosting on Cloudflare Pages (Free - Recommended)

Cloudflare Pages provides global CDN coverage, automatic SSL certificates, fast redirects, and lightning-quick compilation speeds.

1.  **Log in to your Cloudflare Dashboard** and navigate to **Workers & Pages**.
2.  Click **Create Application** > **Pages** > **Connect to Git**.
3.  Select your GitHub repository (`drcharthealthcare`).
4.  **Configure Build Settings:**
    *   **Framework Preset:** `Vite` (or `None`)
    *   **Build Command:** `npm run build`
    *   **Build Output Directory:** `dist`
5.  **Environment Variables (Optional):**
    *   You can set any custom environment variables if needed, though none are mandatory for the static site to operate.
6.  Click **Save and Deploy**. Cloudflare will build and deploy your site, providing you with a custom subdomain (e.g., `drcharthealthcare.pages.dev`).

#### Connecting Your Custom Domain (`www.drcharthealthcare.com`)
1.  In Cloudflare Pages, go to your project > **Custom Domains** tab.
2.  Click **Set up a Custom Domain** and enter `www.drcharthealthcare.com`.
3.  Cloudflare will automatically configure the CNAME records on your behalf to route traffic to your static build.

---

## 🎨 Premium Visual Features Included

1.  **EHR documentation Simulator (`/src/components/EhrSimulator.tsx`):**
    An interactive simulation demonstrating a real-time precharted clinical draft vs a traditional manual charting workflow, helping physicians visually grasp the value.
2.  **AJAX Contact Inquiry Portal (`/src/components/ContactForm.tsx`):**
    Uses a secure, serverless form handler (`FormSubmit.co`) to send all client inquiries directly to `info@drcharthealthcare.com` with zero server databases or pricing licenses, using a clean inline success animation instead of ugly page reloads.
3.  **HIPAA-Conscious Safeguards Dashboard (`/src/components/HIPAABadge.tsx`):**
    Communicates professional computer lockdowns, full-disk BitLocker encryption, multi-factor logins, clean-desk policy, and strict NDAs, explicitly addressing physician compliance concerns.
4.  **Google SEO and Schema.org Metadata (`/index.html`):**
    Pre-configured metadata, OpenGraph cards, Twitter preview cards, and Schema.org business markup JSON-LD for rich snippet visibility on search engines.

---

## 🛠️ Local Development

To run the project locally and inspect changes:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start development server:**
    ```bash
    npm run dev
    ```
    Your portal will be running locally on `http://localhost:3000`.

3.  **Compile production static build:**
    ```bash
    npm run build
    ```
    The static files will be exported to the `/dist` directory.
