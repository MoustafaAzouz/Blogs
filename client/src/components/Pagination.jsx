import React from 'react';

const Pagination = ({ onpagechange, currentPage, blogs, pageSize }) => {
  const totalpages = Math.ceil(blogs.length / pageSize);

  const renderingPagination = () => {
    return Array.from({ length: totalpages }, (_, i) => i + 1).map((pagenumber) => (
      <li className={pagenumber === currentPage ? 'activerpagnation' : ''} key={pagenumber}>
        {/* Use a button or span instead of an anchor */}
        <a className='cursor-pointer' onClick={() => onpagechange(pagenumber)}>{pagenumber}</a>
      </li>
    ));
  };

  return (
    <ul className='pagination flex-wrap my-8 gap-6'>
      <li>
        <button onClick={() => onpagechange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
      </li>
      <div className='flex gap-1'>{renderingPagination()}</div>
      <li>
        <button onClick={() => onpagechange(currentPage + 1)} disabled={currentPage === totalpages}>
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
