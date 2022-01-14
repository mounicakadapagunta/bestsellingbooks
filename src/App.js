import { useState } from "react";
import './index.css';
//component definition
export default function App() {

  const INITIAL_BOOKS = [
    {
      name: "Think and Grow Rich (DELUXE HARDBOUND EDITION)",
      author: "Napoleon Hill",
      poster: "https://images-eu.ssl-images-amazon.com/images/I/51Yngd0TjFS._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
      rating: 60608,
      booktype: "Hardcover  1 December 2019",
      price: 299,
      delivery: "Monday, Jan 17 on orders over ₹499 shipped by Amazon Details "
    },

  ];
  const [books, setbooks] = useState(INITIAL_BOOKS)
  return (
    <div className="App">
      {/* 
      <Book books={books} setbooks={setbooks} /> */}
      <BookList books={books} setbooks={setbooks} />

    </div>
  );
}

function Book({ name,
  rating,
  booktype,
  poster,
  author,
  delivery,
  price,

}) {


  return (
    <div className="book-container">
      <img src={poster} alt={name} className="book-poster" />
      <div className="book-specs">
        <h3 className="book-name">{name}</h3>
        <p className="book-rating" >⭐{rating} ratings</p>
        <p className="book-author"> By {author}</p>
        <p className="book-booktype">{booktype}</p>
        <p className="book-price">Price: Rs-{price}</p>
        <p className="book-delivery">FREE delivery: {delivery}</p>
      </div>

    </div>
  );
}
function BookList({ books, setbooks }) {

  return (
    <section className="book-list">
      {books.map(({ name,
        rating,
        booktype,
        poster,
        author, price, delivery },) => (
        <Book name={name}
          rating={rating}
          booktype={booktype}
          poster={poster}
          author={author}
          price={price}
          delivery={delivery} />
      ))}
    </section >
  );
}

