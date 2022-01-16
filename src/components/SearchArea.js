import { useState } from 'react'
function SearchArea({ searchText, setSearchText }) {
  // searchText dışarıdan gelen, _searchText compponent içerisindeki state
  const [_searchText, _setSearchText] = useState(searchText)
  const handleSubmit = (e) => {
    if (e.keyCode === 13) setSearchText(_searchText)
  }
  return (
    <div className="w-full h-32 flex items-center bg-gradient-to-tr from-cyan-500 to-blue-500 justify-center z-50 shadow-md sticky top-0">
      <div className="md:w-2/3">
        <input
          class="bg-white appearance-none border-2 shadow-md rounded-full border-transparent w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none hover:shadow-lg focus:shadow-xl transition-all"
          id="search"
          value={_searchText}
          onChange={(e) => _setSearchText(e.target.value)}
          onKeyDown={(e) => handleSubmit(e)}
          placeholder="Type something and press enter to search coins.."
        />
      </div>
    </div>
  )
}

export default SearchArea
