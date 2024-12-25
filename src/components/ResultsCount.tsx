type ResultsCountProps = {
  totalNumberOfresults: number;
};

export default function ResultsCount({
  totalNumberOfresults,
}: ResultsCountProps) {
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfresults}</span> results
    </p>
  );
}
