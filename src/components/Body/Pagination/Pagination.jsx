import './Pagination.scss'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaEllipsis } from "react-icons/fa6";

const Pagination = ({paginationIndex, setPaginationIndex, last}) => {
    const handleClick = (index) => {
        setPaginationIndex(index)
        window.scrollTo({
            top: 2414,
            behavior: 'smooth',
        })
    }
    return (
        <>
        <div className="pagination-wrapper">
            <div className="pagination-inner">
                <div className="item" onClick={()=>handleClick(paginationIndex<=1 ? 1 : paginationIndex-1)}>
                    <MdKeyboardArrowLeft />
                </div>
                {paginationIndex-1 > 1 && (<div className='item' onClick={()=>handleClick(1)}>1</div>)}
                {paginationIndex-1 > 2 && (<div className='item'><FaEllipsis /></div>)}
                {paginationIndex>1 && (<div className='item' onClick={()=>handleClick(paginationIndex-1)}>{paginationIndex-1}</div>)}
                <div className='item active'>{paginationIndex}</div>
                {paginationIndex<last && (<div className='item' onClick={()=>handleClick(paginationIndex+1)}>{paginationIndex+1}</div>)}
                {paginationIndex+1 < last-1 && (<div className='item'><FaEllipsis /></div>)}
                {paginationIndex+1 < last && (<div className='item' onClick={()=>handleClick(last)}>{last}</div>)}
                <div className="item" onClick={()=>handleClick(paginationIndex>=last ? last : paginationIndex+1)}>
                    <MdKeyboardArrowRight />
                </div>
            </div>
        </div>
        </>
    )
}

export default Pagination