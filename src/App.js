import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchArea from './components/SearchArea'
import Table from './components/Table'

// const defaultURL = 'https://api.coingecko.com/api/v3/search/trending'
// const searchURL = 'https://api.coingecko.com/api/v3/search/'

//  searchText === ''
//    ? 'https://api.coingecko.com/api/v3/search/trending'
//    : `https://api.coingecko.com/api/v3/search?query=${searchText}`

function App() {
  const [searchText, setSearchText] = useState('')
  const [coins, setCoins] = useState([])
  useEffect(() => {
    // burada istek yapılacak
    axios
      .get('https://api.coingecko.com/api/v3/search?query=trending')
      .then(function (response) {
        // const data = response.data.coins
        console.log(response)
        // setCoins(response)
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(() => {
        // console.log(coins)
      })
  }, [searchText])
  return (
    <div className="min-h-screen w-full bg-white">
      <SearchArea searchText={searchText} setSearchText={setSearchText} />
      <div className="container mx-auto mt-5 p-5">
        {/* <Table coins={coins} /> */}
      </div>
    </div>
  )
}

export default App
