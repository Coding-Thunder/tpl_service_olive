import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import _routes from "./utils/_routes"
import Home from "./components/Home/Home"

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={_routes.root} Component={Home} />
        </Routes>
      </Layout>

    </>
  )
}

export default App