CineVerse

Discover your next favorite movie or TV series.

CineVerse is a responsive movie and TV-series discovery web application built with React. It provides an interactive interface for exploring titles, viewing details, searching for content, and saving favorites to a personal watchlist.

Features

- Browse Movies & TV Series — Explore a curated collection of movies and series.
- Search — Find titles quickly using the search functionality.
- Detailed Information — View information about individual movies and series.
- My List — Save movies and TV series to a personal list, with saved items persisted between visits.
- Trailer Access — Access trailer links from supported titles.
- Responsive Design — Enjoy the interface across desktop, tablet, and mobile screens.

Tech Stack

- React — Component-based user interface
- JavaScript — Application logic and data handling
- CSS — Styling and responsive layouts
- Vite — Development server and build tool
- Browser Storage — Persistence for My List

Screenshots

- Homepage
![CineVerse Homepage] (screenshots/homepage.png)

- Movie details
![Movie Details] (screenshots/details.png)

- My List
![My List] (screenshots/my-list.png)

- Moviespage
![Movies Page] (screenshots/movies.png)

- Trending Section
![Trending Section] (screenshots/trending.png)

- TV Shows Page
![TV Shows Page] (screenshots/tv-shows.png)

- Mobile View
![Mobile View] (screenshots/mobile.png)

Project Structure

CineVerse/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   │   └── movies.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md


Getting Started

Prerequisites

- Node.js
- npm

Installation

1. Clone the repository:
   
   git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project directory:
   
   cd CineVerse

3. Install dependencies:
   
   npm install

4. Start the development server:
   
   npm run dev

5. Open the local URL displayed in your terminal.

Data

CineVerse currently uses a local JavaScript dataset ("movies.js") to provide movie and TV-series information. The application does not require a live movie API to display its current dataset.

What I Learned

Building CineVerse helped me practice:

- Creating reusable React components
- Passing data through props
- Managing state with React hooks
- Rendering lists from JavaScript arrays
- Implementing search and watchlist functionality
- Persisting user selections in browser storage
- Building responsive user interfaces
- Organizing a React project into components, pages, and data modules

Future Improvements

- Integrate a live movie and TV-series API
- Expand the movie and series catalogue
- Improve filtering and sorting options
- Add richer movie recommendations
- Enhance accessibility and user experience

Author

Built as a personal project to strengthen my React and front-end development skills.

---

CineVerse — Find something worth watching.
