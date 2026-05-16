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

  async function fetchCreators() {
    const { data, error } = await supabase.from('creator').select()
    if (error) console.error(error)
    else setCreators(data)
  }

  useEffect(() => {
    fetchCreators()
  }, [])

  const element = useRoutes([
    { path: '/', element: <ShowCreators creators={creators} onDelete={fetchCreators} /> },
    { path: '/creators/:id', element: <ViewCreator /> },
    { path: '/creators/:id/edit', element: <EditCreator onSuccess={fetchCreators} /> },
    { path: '/new', element: <AddCreator onSuccess={fetchCreators} /> },
  ])

  return element
}

export default App
