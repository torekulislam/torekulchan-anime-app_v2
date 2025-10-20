import NumBtn from "./NumBtn";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, basePath, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 flex-wrap mb-2 my-10">
      {currentPage > 1 && (
        <div className="flex items-center gap-2">
          <Link to={`${basePath}page=1`}>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
            >
              «
            </button>
          </Link>
          <Link to={`${basePath}page=${currentPage - 1}`}>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ‹
            </button>
          </Link>
        </div>
      )}

      {currentPage > 2 && (
        <NumBtn
          isCrrount={false}
          num={currentPage - 2}
          basePath={basePath}
          // onPageChange={onPageChange}
        />
      )}
      {currentPage > 1 && (
        <NumBtn
          isCrrount={false}
          num={currentPage - 1}
          basePath={basePath}
          // onPageChange={onPageChange}
        />
      )}

      <NumBtn
        isCrrount={true}
        num={currentPage}
        basePath={basePath}
        // onPageChange={onPageChange}
      />

      {currentPage <= totalPages - 1 && (
        <NumBtn
          isCrrount={false}
          num={currentPage + 1}
          basePath={basePath}
          // onPageChange={onPageChange}
        />
      )}

      {currentPage <= totalPages - 2 && (
        <NumBtn
          isCrrount={false}
          num={currentPage + 2}
          basePath={basePath}
          // onPageChange={onPageChange}
        />
      )}

      {currentPage < totalPages && (
        <div className="flex items-center gap-2">
          <Link to={`${basePath}page=${currentPage + 1}`}>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </Link>

          <Link to={`${basePath}page=${totalPages}`}>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1f1f2f] text-gray-400 hover:text-white"
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Pagination;
