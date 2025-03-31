import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import "./css/BookStore.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Bookstore(){
   const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');
    const categories = ['all', 'biography', 'Personal development', 'cryptography', 'computer science', 'programming languages'];
    const [allBooks,setAllBooks] = useState([]);
    
    useEffect(() => {
        getAllBooks();
    });

    const getAllBooks = async() => {
       const allBooks = (await axios.get("http://localhost:8080/api/book/allBooks")).data;
       setAllBooks(allBooks);
      }
    
    // not working  now 
    const filteredBooks = activeCategory === 'all' 
      ? allBooks
      : allBooks.filter(book => book.category === activeCategory);

    return(
        <>
        <div className="container-books">
            <div className='title-container'>
                <h1 className="title">Best Books</h1>
                <p className="title-discover">
                    Discover the books everyone's talking about
                </p>
            </div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"2rem",overflow:"auto",paddingBottom:"0.5rem"}}>
                <div style={{display:"flex",marginLeft:"0.5rem"}}>
                    {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        style={activeCategory === category ?{backgroundColor:"red",color:"white"} : {backgroundColor:"#f3f4f6",color:"#374151",}}
                        className='book-tags'
                        >
                        {category.replace('-', ' ')}
                    </button>
                ))}
                </div>
            </div>
            <div className="books">
                    {filteredBooks.map(book => (
                        <>
                        <div onClick={() => navigate("/bookDetails",{state : {book : book}})}>
                            <BookCard key={book.id} book={book} />
                        </div>
                        </>
                    ))}
            </div>
        </div>
        </>
    )
}

export default Bookstore;