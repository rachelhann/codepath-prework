import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { supabase } from './client'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import AddCreator from './pages/AddCreator'
import './App.css'

function App() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from('creator').select()
      if (error) console.error(error)
      else setCreators(data)
    }
    fetchCreators()
  }, [])

  const element = useRoutes([
    { path: '/', element: <ShowCreators creators={creators} /> },
    { path: '/creators/:id', element: <ViewCreator /> },
    { path: '/creators/:id/edit', element: <EditCreator /> },
    { path: '/new', element: <AddCreator /> },
  ])

  return element
}

export default App
