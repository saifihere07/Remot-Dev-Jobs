import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlsProps = {
  onClick: (direction: "next" | "previous") => void;
  currentPage: number;
  totalNumberOfPages: number;
};
export default function PaginationControls({
  onClick,
  currentPage,
  totalNumberOfPages,
}: PaginationControlsProps) {
  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          currentPage={currentPage}
          direction="previous"
          onClick={() => {
            onClick("previous");
          }}
        />
      )}
      {currentPage < totalNumberOfPages && (
        <PaginationButton
          currentPage={currentPage}
          direction="next"
          onClick={() => {
            onClick("next");
          }}
        />
      )}
    </section>
  );
}

type PaginationButtonPropos = {
  currentPage: number;
  direction: "next" | "previous";
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
