import React, { useRef } from 'react'

const Pagination = ({arrayPages, currentPage, setCurrentPage, quantityPages}) => {

    const listNumber = useRef()

    const prevPage= ()=>{
        if(currentPage - 1 !== 0){
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage= ()=>{
        if(currentPage + 1 > quantityPages){
            setCurrentPage(quantityPages)
        }else{
            setCurrentPage(currentPage + 1)
        }
    }

    const changePageTo = (n)=>{
        setCurrentPage(n)
    }

   

  return (
    <div className='pagination-container'>
        <div onClick={prevPage} className="pagination-prev-next">
           &#60;
        </div>
        <ul ref={listNumber} className='pagination-number-container'>
            {
             arrayPages?.map(num => (
                 <li 
                 onClick={()=> changePageTo(num)} 
                 key={num} 
                 className={currentPage === num ? `page-number page-active` : 'page-number'}
                 >{num}</li>
             ))   
            }
        </ul>
        <div onClick={nextPage} className="pagination-prev-next">
          &#62;
        </div>
    </div>
  )
}

export default Pagination