import React, { useState } from 'react';

const Pagination = ({ data, pageHandler }) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
    pageNumber.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      pageHandler(currentPage - 1); 
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage(currentPage + 1);
      pageHandler(currentPage + 1); 
    }
  };

  return (
    <div className="pagination-container">
      <center>
        <button
          className="btn"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {pageNumber.map((page) => (
          <button
            key={page}
            className={`btn ${currentPage === page ? 'active' : ''}`}
            onClick={() => {
              setCurrentPage(page);
              pageHandler(page);
            }}
          >
            {page}
          </button>
        ))}

        <button
          className="btn"
          onClick={handleNext}
          disabled={currentPage === pageNumber.length}
        >
          Next
        </button>
      </center>
    </div>
  );
};

export default Pagination;
