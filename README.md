# Chamunda Grahak Suraksha Mandal - Official Website

This repository contains the complete source code for the official website of Chamunda Grahak Suraksha Mandal, a non-governmental organization dedicated to consumer rights and public welfare in Gujarat, India.

The website is built using only **HTML5, CSS3, and modern JavaScript (ES6+)**, with no external frameworks, to ensure fast loading times, maximum performance, and easy maintenance.

## ✨ Features

*   **Fully Responsive Design:** Mobile-first approach ensures a seamless experience on desktops, tablets, and mobile devices.
*   **Modern & Professional UI/UX:** Clean, elegant, and trustworthy design with smooth animations and hover effects.
*   **Dark Mode:** A user-toggleable dark mode for comfortable viewing in low-light environments.
*   **Performance Optimized:** Lazy loading for images, clean code, and no framework bloat for near-instant load times.
*   **Accessibility (A11y):** Enhanced keyboard navigation, ARIA attributes, and semantic HTML for an inclusive user experience.
*   **SEO Friendly:**
    *   Unique meta titles, descriptions, and keywords for each page.
    *   Open Graph and Twitter Card tags for rich social media sharing.
    *   `robots.txt` and `sitemap.xml` for search engine crawlers.
    *   Schema.org structured data for enhanced search result visibility.
*   **Interactive Components:**
    *   Animated counters for achievements.
    *   Fade-in-on-scroll animations.
    *   Accordion-style FAQ section.
    *   Responsive image gallery with a full-screen lightbox.
    *   Client-side validation for the contact form.
    *   Cookie consent banner.
*   **Complaint Registration:** Integrated Google Form for easy submission of consumer complaints and queries.

## 📂 Project Structure

The project follows a clean and intuitive folder structure.

```
cgs-website/
├── assets/
│   ├── icons/      # SVG icons for various sections
│   └── images/     # Placeholder for website images
├── css/
│   └── style.css   # Main stylesheet with CSS variables
├── js/
│   └── script.js   # All JavaScript functionality (ES6 classes)
├── 404.html
├── about.html
├── activities.html
├── consumer-rights.html
├── contact.html
├── gallery.html
├── index.html      # Homepage
├── membership.html
├── news.html
├── privacy-policy.html
├── terms.html
├── README.md       # This file
├── robots.txt
└── sitemap.xml
```

## 🚀 Getting Started

This is a static website and requires no special build process or server-side setup.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/cgs-website.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd cgs-website
    ```
3.  **Open `index.html` in your browser:**
    You can simply double-click the `index.html` file to open it locally in your web browser.

## 🛠️ Customization

### 1. Images

The project currently uses placeholder images from `https://picsum.photos`. To use your own images:

*   Place your images in the `/assets/images/` directory.
*   Update the `src` attributes in the HTML files to point to your new images.

### 2. Complaint Form

The complaint registration form on `contact.html` uses an embedded Google Form.

1.  Create your own Google Form with the desired fields (e.g., Name, Email, Phone, Complaint Details).
2.  In your Google Form, click the "Send" button in the top right.
3.  Go to the `<>` (Embed HTML) tab.
4.  Copy the `<iframe>` code provided.
5.  Paste this code into `contact.html`, replacing the placeholder `<iframe>` inside the `.google-form-container`.

### 3. SEO and Metadata

*   **Domain:** In all HTML files and `sitemap.xml`, replace `https://www.yourwebsite.com` with your actual domain name.
*   **Social Media:** In `index.html`, update the `sameAs` property in the Schema.org script and the social media links in the footer to point to your organization's actual profiles.

---

This project was crafted with a focus on quality, performance, and maintainability, providing a strong foundation for the Chamunda Grahak Suraksha Mandal's online presence.
