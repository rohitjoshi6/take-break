/* eslint-disable jsx-a11y/alt-text */
import React , {useState , useEffect} from 'react';
// import { Input } from 'antd';
import axios from 'axios';

const Books = () => {

    const [input , setInput] = useState("");

    const [books , setBooks] = useState([]);

    useEffect( () => {
        async function getData (){
            const res = await axios.get(`https://hapi-books.p.rapidapi.com/week/${input}`,{
                headers : {
                    'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
                    'x-rapidapi-key': 'cac7e3696cmsh3059b09f00d8b64p156133jsnab64b22f9377'
                }
            });
            //console.log(res);
            setBooks(res.data[0]);
            console.log(books);
        }

        getData();

    });
    

    //console.log(input);

    return (
        <div>
          <input id="input" placeholder="" />
            <button onClick = {() => setInput(document.getElementById('input').value)}>Search</button>
            {/* <div id="results" className='bookCard'>
                
                     <div className='img' key={books[0].book_id}>
                        <img src={books[0].cover}  />
                        <p>{books[0].name}</p>
                    </div>
                
        </div> */}
        </div>
    )
}

export default Books
