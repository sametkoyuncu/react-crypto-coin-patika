import SearchArea from './components/SearchArea'
import Table from './components/Table'
function App() {
  return (
    <div className="min-h-screen w-ful bg-white">
      <SearchArea />
      <div className="container mx-auto mt-5 p-5">
        <Table />
      </div>
    </div>
  )
}

export default App
