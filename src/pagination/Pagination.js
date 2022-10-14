import { getPagesArray } from "../utils/Pages";


export const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="page_wrapper">
            {pagesArray.map((p) => 
          <span onClick={() => changePage(p)} key={p} className={page === p ? 'page page_current' : 'page'}>{p}</span>
            )
      }
      </div>
    );
};
