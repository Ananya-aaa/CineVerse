const trendingMovies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    description:
      "A former pilot joins a mission through a wormhole to find a new home for humanity as Earth's crops fail.",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    id: 2,
    title: "Dune",
    year: 2021,
    rating: 8.0,
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
    description:
      "A young noble's family takes control of a desert planet that holds the universe's most valuable resource, and war follows.",
    trailer: "https://www.youtube.com/watch?v=n9xhJrPXop4",
  },
  {
    id: 3,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.3,
    genre: "Biography",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    description:
      "The story of J. Robert Oppenheimer and the creation of the atomic bomb during World War II.",
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg",
  },
  {
    id: 4,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    description:
      "A thief who steals secrets through dreams is given the task of planting an idea in someone's mind.",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    id: 5,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    description:
      "Batman faces the Joker, a criminal mastermind who pushes Gotham into chaos and tests the hero's limits.",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    id: 6,
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/ilRyazdMJwN05exqhwK4tMKBYZs.jpg",
    description:
      "A young blade runner uncovers a long-buried secret that leads him to search for a missing former blade runner.",
    trailer: "https://www.youtube.com/watch?v=gCcx85zbxz4",
  },
  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    description:
      "A hacker discovers that reality is a simulation and joins a rebellion against the machines that control it.",
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
  },
];

const popularMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    description:
      "A banker sentenced to prison for a crime he says he didn't commit builds an unlikely friendship and holds onto hope.",
    trailer: "https://www.youtube.com/watch?v=PLl99DlL6b4",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    description:
      "The aging head of a mafia family passes control of his empire to his reluctant youngest son.",
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    description:
      "Several interlinked stories of hitmen, a boxer and a gangster's wife unfold across Los Angeles.",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
  },
  {
    id: 4,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    description:
      "An insomniac office worker and a soap salesman start an underground club that spirals out of control.",
    trailer: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
  },
  {
    id: 5,
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    genre: "Thriller",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
    description:
      "A poor family schemes its way into the lives of a wealthy household, with unexpected consequences.",
    trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
  },
  {
    id: 6,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
    description:
      "A betrayed Roman general is forced into slavery and rises as a gladiator to take revenge on the emperor.",
    trailer: "https://www.youtube.com/watch?v=owK1qxDselE",
  },
  {
    id: 7,
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    genre: "Drama",
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/6bbZ6XyvgfjhQwbplnZeBjAkRAp.jpg",
    description:
      "A driven young drummer is pushed to his limits by a ruthless music instructor.",
    trailer: "https://www.youtube.com/watch?v=7d_jQycdQGo",
  },
];

const tvShows = [
  {
    id: 1,
    title: "Breaking Bad",
    year: 2008,
    rating: 9.5,
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    description:
      "A high school chemistry teacher diagnosed with cancer turns to making drugs to secure his family's future.",
    trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
  },
  {
    id: 2,
    title: "Game of Thrones",
    year: 2011,
    rating: 9.2,
    genre: "Fantasy",
    poster: "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg",
    description:
      "Noble families fight for control of the Iron Throne while an ancient threat gathers in the north.",
    trailer: "https://www.youtube.com/watch?v=BpJYNVhGf1s",
  },
  {
    id: 3,
    title: "Stranger Things",
    year: 2016,
    rating: 8.7,
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    description:
      "When a boy vanishes, his friends and family uncover secret experiments and a terrifying parallel dimension.",
    trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
  },
  {
    id: 4,
    title: "The Boys",
    year: 2019,
    rating: 8.7,
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
    description:
      "A group of vigilantes sets out to take down corrupt superheroes who abuse their powers.",
    trailer: "https://www.youtube.com/watch?v=M1bhOaLV4FU",
  },
  {
    id: 5,
    title: "Peaky Blinders",
    year: 2013,
    rating: 8.7,
    genre: "Crime",
    poster: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/wiE9doxiLwq3WCGamDIOb2PqBqc.jpg",
    description:
      "A ruthless gangster family rises through the criminal underworld of post-war Birmingham.",
    trailer: "https://www.youtube.com/watch?v=oVzVdvGIC7U",
  },
  {
    id: 6,
    title: "Money Heist",
    year: 2017,
    rating: 8.2,
    genre: "Thriller",
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/gFZriCkpJYsApPZEF3jhxL4yLzG.jpg",
    description:
      "A mastermind known as the Professor recruits a crew to pull off an elaborate robbery on the Royal Mint of Spain.",
    trailer: "https://www.youtube.com/watch?v=p_PJbmrX4uk",
  },
  {
    id: 7,
    title: "Black Mirror",
    year: 2011,
    rating: 8.7,
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/7PRddO7z7mcPi21nZTCMGShAyy1.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/6jTZxM2ihN5iKFlUXPxcMBhJWvu.jpg",
    description:
      "An anthology series exploring the dark and unexpected consequences of modern technology.",
    trailer: "https://www.youtube.com/watch?v=jDiYGjp5iFg",
  },
];

export { trendingMovies, popularMovies, tvShows };