import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import { ErrorPage, ErrorRoute } from '../pages/Errors'
import { Login, Home } from '../pages/Pages'
import ProtectedRoute from './ProtectedRoute'

export const routes = createBrowserRouter(
  createRoutesFromElements([
    <Route key='Login' path='/' Component={Login} errorElement={<ErrorPage />}>
      <Route index Component={Login} errorElement={<ErrorPage />} />
    </Route>,
    <Route
      key='Home'
      path='home'
      Component={ProtectedRoute}
      errorElement={<ErrorPage />}
    >
      <Route index Component={Home} errorElement={<ErrorPage />} />
      <Route path='charts' Component={Home} />
      <Route path='*' Component={ErrorRoute} />
    </Route>
  ])
)
