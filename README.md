# 📚 Alex's Book Finder App: College Search Tool

This application was developed to address the "Book Finder" user need from the Take-Home Challenge. It provides a fast, flexible, and precise searching tool optimized for a college student persona (Alex).

---

## 🌟 Project Goal & User Persona

The primary goal was to ensure **efficiency** and **accuracy** for Alex. A college student needs more than a general search; they need specific ways to find textbooks and reference materials.

| Persona Feature | Implementation Rationale |
| :--- | :--- |
| **College Student** | Focus on clean, academic-style UI for minimal distraction. |
| **Need for Precision** | Implemented four distinct, tab-separated search modes (Title, Author, Subject, **ISBN**). |
| **Quick Identification** | Prioritized displaying the Book Cover, ISBN, and Publish Year prominently. |

---

## 🛠️ Technology Stack

| Component | Technology | Role in Project |
| :--- | :--- | :--- |
| **Framework** | **React** (via Vite) | Building the component-based, interactive user interface. |
| **Styling** | **Tailwind CSS** | Used for rapid, utility-first styling and ensuring mobile responsiveness. |
| **State Management** | **React Hooks** (`useState`, `useCallback`) | Managing search query, results array, and loading/error states. |
| **Data Source** | **Open Library Search API** | Public, no-auth API used to retrieve all book metadata. |

---

## 🚀 Getting Started (Local Setup)

To run this application on your local machine, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/shilpa826/book-finder-app
    cd book-finder-app
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Application:**
    ```bash
    npm run dev
    ```
    The app will typically open in your browser at `http://localhost:5173/`.

---

## 💡 Solution Design & Component Breakdown

### Design Notes (Addressing Alex's Needs)

The core feature is the **four-mode search** powered by distinct Open Library API parameters, allowing Alex to find books efficiently:

* **ISBN Search:** Necessary for finding exact textbook editions quickly.
* **Subject Search:** Useful for finding required reading for a course (e.g., "geology").
* **Cover Display:** Ensures quick visual confirmation of the correct book.

### Component Structure

| Component | Purpose | Key Functionality |
| :--- | :--- | :--- |
| **`App.js`** | Main Logic | Dynamically constructs the API URL based on the user's selected search type (`title=`, `author=`, `subject=`, `isbn=`). |
| **`SearchForm.js`** | Input UI | Manages the active search type state and passes the query/type up to `App.js`. |
| **`BookCard.js`** | Single Result Display | Extracts the book cover ID (`cover_i`) to construct the separate Open Library Covers API URL for image display. |
** `BookCard.js`** |Single Result Display	Extracts the book cover ID (cover_i) to construct the separate Open Library Covers API URL for image display.

---

## 🔗  Links

* **AI Conversation Log (Level 1):**
    * https://gemini.google.com/share/a427e08521a0

    * **Live Application (Level 2):**
    * https://425nmx-5173.csb.app/
