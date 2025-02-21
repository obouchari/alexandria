# **Bookmark Manager Web App**

A modern web application to manage bookmarks with AI-powered search and automatic categorization. Built with **Next.js**, **TypeScript**, **TailwindCSS**, **Catalyst UI**, **Better-Auth**, and **Convex**.

![App Screenshot](/public/screenshot.png) <!-- Add a screenshot here once the app is ready -->

---

## **Features**

- **AI-Powered Search**: Find relevant bookmarks using natural language queries.
- **Automatic Scraping**: Add a link, and the app fetches the title, description, image, and keywords.
- **Smart Categorization**: Automatically detects or creates categories for bookmarks.
- **User Authentication**: Secure login and signup with **Better-Auth**.
- **Responsive UI**: Built with **TailwindCSS** and **Catalyst UI** for a clean and modern design.
- **Backend Powered by Convex**: Scalable database and serverless functions.

---

## **Tech Stack**

- **Frontend**:
  - Next.js
  - TypeScript
  - TailwindCSS
  - Catalyst UI
- **Backend**:
  - Convex (Database & Serverless Functions)
- **Authentication**:
  - Better-Auth
- **AI Integration**:
  - OpenAI API (for keyword extraction, categorization, and search)
- **Scraping**:
  - `cheerio` or `puppeteer` for metadata extraction.

---

## **Getting Started**

### **Prerequisites**

- Node.js (v18 or higher)
- Convex account (for backend)
- OpenAI API key (for AI features)

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bookmark-manager.git
   cd bookmark-manager
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_CONVEX_URL="your-convex-url"
   NEXT_PUBLIC_OPENAI_API_KEY="your-openai-api-key"
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## **Folder Structure**

```
/bookmark-manager
├── app/                  # Next.js app router
│   ├── api/              # API routes
│   ├── bookmarks/        # Bookmarks pages
│   ├── categories/       # Categories pages
│   ├── search/           # Search functionality
│   └── auth/             # Authentication pages
├── components/           # Reusable UI components
├── lib/                  # Utility functions and libraries
├── public/               # Static assets
├── styles/               # Custom styles
├── convex/               # Convex backend functions
└── README.md             # Project documentation
```

---

## **How It Works**

1. **Adding a Bookmark**:

   - Users input a URL.
   - The app scrapes the page for metadata (title, description, image, keywords).
   - AI suggests or creates a category for the bookmark.
   - The bookmark is saved to the database.

2. **AI-Powered Search**:

   - Users enter a natural language query.
   - The app uses OpenAI embeddings to find relevant bookmarks.

3. **Category Management**:
   - Users can create, edit, or delete categories.
   - AI helps auto-assign categories to new bookmarks.

---

## **Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- [Convex](https://convex.dev) for the backend.
- [OpenAI](https://openai.com) for AI integration.
- [TailwindCSS](https://tailwindcss.com) and [Catalyst UI](https://catalyst.tailwindui.com) for styling.

---

## **Contact**

For questions or feedback, reach out to:

- **Your Name**
- Email: your.email@example.com
- GitHub: [your-username](https://github.com/your-username)

---

Feel free to customize this `README.md` to better suit your project. Let me know if you need further assistance! 🚀
