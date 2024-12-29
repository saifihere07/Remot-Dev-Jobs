import { createContext } from "react";
import { useJobItems, useLocalStorage } from "../../lib/hooks";
import { jobItemExpanded } from "../../lib/types";

type BookmarksContextProps = {
  bookmarkIds: number[];
  handleToggleBookmark: (id: number) => void;
  bookmarkedJobItems: jobItemExpanded[];
  isLoading: boolean;
};
export const BookmarksContext = createContext<BookmarksContextProps | null>(
  null
);

export default function BookmarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarkIds, setBookmarkIds] = useLocalStorage<number[]>(
    "bookmarkIds",
    []
  );
  const { jobItems: bookmarkedJobItems, isLoading } = useJobItems(bookmarkIds);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkIds.includes(id)) {
      setBookmarkIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkIds,
        handleToggleBookmark,
        bookmarkedJobItems,
        isLoading,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
