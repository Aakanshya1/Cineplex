import one from'../assets/images/one.jpg'
import two from '../assets/images/two.jpg'
import three from '../assets/images/three.jpg'
import four from '../assets/images/four.jpg'
import first from '../assets/images/strangerthings.webp'
import second from '../assets/images/squid.webp'
import third from '../assets/images/alice.jpg'

import { FaUser } from "react-icons/fa";

import { FaHome } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";

export const herocarousel = [
  {
    id: 1,
    title: "Stranger Things",
    img: first,
  },
  {
    id: 2,
    title: "Squid Game",
    img: second,
  },
  {
    id: 3,
    title: "Alice In Borderland",
    img: third,
  },
];
export const carouselHome = [
  { id: 1, title: "Stranger Things", img: one },
  { id: 2, title: "Squid Game", img: two },
  { id: 3, title: "Alice In Borderland", img: three },
  { id: 4, title: "Stranger Things", img: four },
  { id: 5, title: "Stranger Things", img: one },
  { id: 6, title: "Squid Game", img: two },
  { id: 7, title: "Alice In Borderland", img: three },
  { id: 8, title: "Stranger Things", img: four },
];


export const navLinks = [
  { name: "Home", path: "/home", icon: FaHome },
  { name: "Explore", path: "/explore", icon: FaCompass },
  { name: "Watchlist", path: "/watchlist", icon: MdLibraryAdd },
  { name: "Profile", path: "/profile", icon: FaUser },
];

export const genre =[
  {
    label: 'Action',
    value: 'action'
  },
  {    label: 'Comedy',
    value: 'comedy'
  },
  {    label: 'Drama',
    value: 'drama'
  },  
  {    label: 'Horror',
    value: 'horror'
  },
  {    label: 'Romance',
    value: 'romance'
  },
  {    label: 'Sci-Fi',
    value: 'sci-fi'
  },
  {
    label: 'Thriller',
    value: 'thriller'
  },
  {
    label: 'Fantasy',
    value: 'fantasy',
  }
]

export const channels =[
  {    label: 'Netflix',
    value: 'netflix'
  },
  {    label: 'Amazon Prime',
    value: 'amazon-prime'
  },
  {    label: 'Hulu',
    value: 'hulu'
  },  
  {    label: 'Disney+',
    value: 'disney-plus'
  },
  {    label: 'HBO Max',
    value: 'hbo-max'
  },
  {    label: 'Apple TV+',
    value: 'apple-tv-plus'
  }
]

export const ratings =[
  {
    label:"1 star",
    value:"1"
  },
  {
    label:"2 stars",
    value:"2"
  },
  {    label:"3 stars",
    value:"3"
  },
  {    label:"4 stars",
    value:"4"
  },
  {    label:"5 stars",
    value:"5"
  }
]
export const sortby =[
  {    label:"Popularity",
    value:"popularity"
  },
  {    label:"Release Date",
    value:"release-date"
  },
  {    label:"Alphabetical",
    value:"alphabetical"
  }
  
] 
export const allMovies = [
  { id: 1, title: "Inception", image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", rating: 8.8 },
  { id: 2, title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", rating: 8.6 },
  { id: 3, title: "The Dark Knight", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", rating: 9.0 },
   {
    id: 4,
    title: "Stranger Things",
    image: first,
    rating: 8.7,
  },
  {
    id: 5,
    title: "Squid Game",
    image: second,
    rating: 8.0,
  },
  {
    id: 6,
    title: "Alice In Borderland",
    image: third,
    rating: 7.9,
  },
];
export const dummyWatchlist = [
  {
    id: 1,
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 8.8,
  },
  {
    id: 2,
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
  },
  {
    id: 3,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
  },
  {
    id: 4,
    title: "The Dark Knight",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
  },
];
export const menu =[
  {
    label: 'Remove from Watchlist',
    value: 'remove'
  },
  {
    label: 'View Details',
    value: 'details'
  },
  {
    label:"Watched",
    value:"watched"
  }
]