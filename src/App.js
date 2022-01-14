import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchArea from './components/SearchArea'
import Table from './components/Table'

const defaultURL = 'https://api.coingecko.com/api/v3/search/trending'
const searchURL = 'https://api.coingecko.com/api/v3/search/'

function App() {
  const [searchText, setSearchText] = useState('')
  const [coins, setCoins] = useState([])
  useEffect(() => {
    // burada istek yapılacak
    axios
      .get(
        searchText === ''
          ? 'https://api.coingecko.com/api/v3/search/trending'
          : `https://api.coingecko.com/api/v3/search?query=${searchText}`
      )
      .then(function (response) {
        const data = response.coins
        // console.log(data.data.coins)
        setCoins(data)
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(() => {
        console.log(coins)
      })
  }, [searchText])
  return (
    <div className="min-h-screen w-full bg-white">
      <SearchArea searchText={searchText} setSearchText={setSearchText} />
      <div className="container mx-auto mt-5 p-5">
        <Table coins={coins} />
      </div>
    </div>
  )
}

export default App
