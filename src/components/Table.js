/* This example requires Tailwind CSS v2.0+ */
import DetailsModal from './DetailsModal'

export default function Example({ coins }) {
  return (
    <div className="flex flex-col shadow-xl">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-400 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-sky-100">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Symbol
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
                  >
                    24h %
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Details</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coins.map((coin) => (
                  <tr
                    key={coin.id}
                    className="cursor-pointer hover:bg-sky-100 transition-all"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={coin.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {coin.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{coin.symbol}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {coin.current_price}
                      </div>
                      <div className="text-sm text-gray-500">USD</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {coin.price_change_percentage_24h >= 0 ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-900">
                          % {coin.price_change_percentage_24h}
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-900">
                          % {coin.price_change_percentage_24h}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <DetailsModal coin={coin} />
                      {/* <button class="bg-gradient-to-tr hover:bg-gradient-to-bl from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded-full transition-all shadow-md hover:scale-105 hover:bg-indigo-700">
                        Details
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
