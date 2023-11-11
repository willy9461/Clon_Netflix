import { RouterProvider } from "react-router-dom"
import { appRouter } from "./core/routes/app_routes"
import RootProvider from "./core/providers/root_provider"


function App() {
  

  return (
    <>
    <RootProvider>
    <RouterProvider router={appRouter}/>
    </RootProvider>
    </>
  )
}

export default App
