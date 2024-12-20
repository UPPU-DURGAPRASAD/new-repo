import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Pagination from './Pagination';

const App = () => {
  const [data, setData] = useState([]); 
  const [perpage, setPerpage] = useState([]); 

 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      (res) => {
        setData(res.data); 
        setPerpage(res.data.slice(0, 10)); 
      }
    );
  }, []);

  
  const pageHandler = (pageNumber) => {
    setPerpage(data.slice((pageNumber - 1) * 10, pageNumber * 10)); 
  };

  return (
    <div>
      {data.length >= 1 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {perpage.map((post) => (
                <tr  key={post.id}>
                  <td className='table-data'>{post.id}</td>
                  <td className='table-data'>{post.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination data={data} pageHandler={pageHandler} />
        </>
      ) : (
        <p>Data not load</p>
      )}
    </div>
  );
};

export default App;
