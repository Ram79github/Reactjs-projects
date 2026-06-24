import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from './components/Card.jsx'

const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY

function App() {
  const [userData,setUserData] = useState([])
  const [index,setIndex] = useState(1)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  useEffect(() => {
    getData()
  }, [index])

  async function getData(){
    if (!PEXELS_API_KEY) {
      setError('Missing Pexels API key. Add VITE_PEXELS_API_KEY in a .env file.')
      setUserData([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/curated?page=${index}&per_page=30`,
        { headers: { Authorization: PEXELS_API_KEY } }
      )
      setUserData(response.data.photos || [])
    } catch (err) {
      console.error(err)
      setError('Unable to load photos. Verify API key and network connectivity.')
      setUserData([])
    } finally {
      setLoading(false)
    }
  }

  let printUserData = (
    <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
      {error || 'Loading...'}
    </h3>
  )

  if (!loading && !error && userData.length === 0) {
    printUserData = (
      <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>
        No photos found.
      </h3>
    )
  }

  if (userData.length > 0) {
    printUserData = userData.map((elem,idx) => {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      )
    })
  }

  return (
  <div className="bg-black min-h-screen text-white">
    <div className="max-w-7xl mx-auto p-6">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-amber-400">
          Pexels Gallery
        </h1>
        <p className="text-gray-400 mt-2">
          Discover beautiful curated photography
        </p>
      </div>

      {/* Gallery */}
      <div className="relative min-h-[70vh]">

        {loading ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-red-400 text-xl font-semibold">
              {error}
            </h2>
          </div>
        ) : userData.length === 0 ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-xl font-bold text-gray-300">
              No Photos Found
            </h2>
            <p className="text-gray-500 mt-2">
              Try another page
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {userData.map((elem) => (
              <div
                key={elem.id}
                className="hover:scale-105 transition-transform duration-300"
              >
                <Card elem={elem} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-10 pb-6">
        <button
          disabled={index === 1}
          className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50 disabled:hover:scale-100"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          ← Prev
        </button>

        <div className="bg-zinc-900 px-6 py-2 rounded-lg border border-zinc-800">
          <span className="text-white font-semibold">
            Page {index}
          </span>
        </div>

        <button
          className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
          onClick={() => {
            setUserData([])
            setIndex(index + 1)
          }}
        >
          Next →
        </button>
      </div>

    </div>
  </div>
)
}

export default App