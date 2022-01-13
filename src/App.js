import { useState, useEffect } from 'react'
import SearchArea from './components/SearchArea'
import Table from './components/Table'
function App() {
  const [searchText, setSearchText] = useState('')
  useEffect(() => {
    // burada istek yapılacak
    console.log(searchText)
  }, [searchText])
  return (
    <div className="min-h-screen w-ful bg-white">
      <SearchArea searchText={searchText} setSearchText={setSearchText} />
      <div className="container mx-auto mt-5 p-5">
        <Table />
      </div>
    </div>
  )
}

export default App
