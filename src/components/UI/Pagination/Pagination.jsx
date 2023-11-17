import { getPagesArray } from "../../../utils/page";


const Pagination = ({totalPages, page, changePage}) => {

    let pagesArray = getPagesArray(totalPages);
    console.log("tp", totalPages);

  return (
    <div className="page__wrapper">
        {pagesArray.map(p => 
            <span
                key={p}
                className={page === p ? 'page page__current' : 'page'}
                onClick={() => changePage(p)}
            >
                {p}
            </span>
        )}
        <p>wadawewae{totalPages}</p>
    </div>
  )
}

export default Pagination