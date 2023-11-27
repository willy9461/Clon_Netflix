import { RouterProvider } from "react-router-dom"
import { appRouter } from "./core/routes/app_routes"
import RootProvider from "./core/providers/root_provider"
import FetchData from "./core/datasource/remote/fetch_data"
// import Swiper 
import { register as registerSwiper } from 'swiper/element/bundle';
registerSwiper();


function App() {
  

  return (
    <>
    <RootProvider>
    <RouterProvider router={appRouter}/>
    </RootProvider>
    <FetchData/>
    </>
  )
}

export default App
