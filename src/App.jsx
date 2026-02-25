import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'
import { Job_context_provider } from './context/Jobs_context'

function App() {
 

  return (
    <>
    <Job_context_provider>
    <RouterProvider router={routes} >
    </RouterProvider>
    </Job_context_provider>
    </>
  )
}

export default App
