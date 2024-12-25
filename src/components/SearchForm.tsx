type SearchFormprops = {
  searchText: string;
  setSearchText: (searchText: string) => void;
};
export default function SearchForm({
  searchText,
  setSearchText,
}: SearchFormprops) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="search"
    >
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
