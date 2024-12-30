import { useJobItemsandSearchTextContext } from "../lib/hooks";

export default function ResultsCount() {
  const { totalNumberOfresults } = useJobItemsandSearchTextContext();
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfresults}</span> results
    </p>
  );
}
