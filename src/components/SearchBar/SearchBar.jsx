import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { searchMovies } from "../../api/actions/movies";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    searchMovies({ keyword: searchQuery }).then((results) => {
      setSearchResults(results.films ?? []);
    });
  }, [searchQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      
      {searchResults.length > 0  && isFocused && (
        <div className={styles.searchPreview}>
          {searchResults?.slice(0, 10).map((result) => (
            <div key={result.id}>{result.nameRu}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
