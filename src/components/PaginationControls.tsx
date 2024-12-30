import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PaginationDirection } from "../lib/types";
import { useJobItemsandSearchTextContext } from "../lib/hooks";

export default function PaginationControls() {
  const { currentPage, totalNumberOfPages, handleChangePage } =
    useJobItemsandSearchTextContext();
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          currentPage={currentPage}
          direction="previous"
          onClick={() => {
            handleChangePage("previous");
          }}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButton
          currentPage={currentPage}
          direction="next"
          onClick={() => {
            handleChangePage("next");
          }}
        />
      )}
    </section>
  );
}

type PaginationButtonPropos = {
  currentPage: number;
  direction: PaginationDirection;
  onClick: () => void;
};
function PaginationButton({
  currentPage,
  direction,
  onClick,
}: PaginationButtonPropos) {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "next" && (
        <>
          {" "}
          Page {currentPage + 1}
          <ArrowRightIcon />
        </>
      )}
      {direction === "previous" && (
        <>
          {" "}
          <ArrowLeftIcon />
          Page {currentPage - 1}
        </>
      )}
    </button>
  );
}
