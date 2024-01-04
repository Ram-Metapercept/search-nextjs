import { useState } from "react";
import Link from "next/link";

const Search = ({ data }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open,setOpen] = useState(true);
  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  const handleClick = () => {
    // Your handling logic here
    // Close the modal when the Link is clicked
    setOpen(false)
  };

  return (
    <>    <style jsx global>
      {`
      .input-search-box{
        width: 400%;
        border:none;
        border-bottom:1px solid black;
      }
      
  
.modal-backdrop{
z-index:0;
}

      
    `}
    </style>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
          className="input-search-box"
        />
        <ul>
          {results.map((item) => (
            <li key={item.id}>
              <Link href={item.link} onClick={handleClick}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
