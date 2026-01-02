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