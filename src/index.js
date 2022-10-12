import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './styles.css'
import Counter from './01/Counter'
import UserList from './01/UserList'
import Timer from './04/Timer'
import SearchUserList from './04/SearchUserList'
import ThemeSwitch from './04/ThemeSwitch'
import UseCounter from './06/UseCounter'
import UseAsync from './06/UseAsyncSample'
import UseScroll from './06/UseScroll'
import BlogList from './06/BlogList'
import PureRedux from './07/PureRedux'
import ReduxCounter from './07/ReduxCounter'
import PriceInput from './08/PriceInput'
import SearchBox from './08/SearchBox'
import FilterList from './08/FilterList'
import ArticleView from './09/ArticleView'
import UserList2 from './10/UserList'
import CounterRenderProps from './10/CounterRenderProps'
import ListWithMore from './10/ListWithMore'
import ToggleButton from './11/ToggleButton'
import UseKeyPress from './11/UseKeyPress'
import UncontrolledForm from './13/UncontrolledForm'
import UseForm from './13/UseForm'
import UsersLayout from './14/UsersLayout'
import NiceModalExample from './14/NiceModalExample'
import MyRouter from './15/MyRouter'
import NestedRouting from './15/NestedRouting'
// import TabsPage from './15/TabsPage'
import RouterAuth from './15/RouterAuth'
import LazyLoad from './16/LazyLoad'
import Debounce from './19/Debounce'

// const routes = [
//   { path: '/', name: 'Home', element: <Home />, nodeRef: createRef() },
//   { path: '/about', name: 'About', element: <About />, nodeRef: createRef() },
//   {
//     path: '/contact',
//     name: 'Contact',
//     element: <Contact />,
//     nodeRef: createRef(),
//   },
// ]

const routes = [
  {
    path: '01 Counter',
    name: '111',
    element: <Counter />,
    nodeRef: createRef(),
  },

  ['01 UserList', UserList],
  ['04 Timer', Timer],
  ['04 SearchUserList', SearchUserList],
  ['04 ThemeSwitch', ThemeSwitch],
  ['06 UseCounter', UseCounter],
  ['06 UseAsync', UseAsync],
  ['06 UseScroll', UseScroll],
  ['06 BlogList', BlogList],
  ['07 PureRedux', PureRedux],
  ['07 ReduxCounter', ReduxCounter],
  ['08 FilterList', FilterList],
  ['08 SearchBox', SearchBox],
  ['08 PriceInput', PriceInput],
  ['09 ArticleView', ArticleView],
  ['10 UserList2', UserList2],
  ['10 CounterRenderProps', CounterRenderProps],
  ['10 ListWithMore', ListWithMore],
  ['11 ToggleButton', ToggleButton],
  ['11 UseKeyPress', UseKeyPress],
  ['13 UncontrolledForm', UncontrolledForm],
  ['13 UseForm', UseForm],
  ['14 NiceModalExample', NiceModalExample],
  ['14 UsersLayout', UsersLayout],
  ['15 MyRouter', MyRouter],
  ['15 NestedRouting', NestedRouting],
  // ['15 TabsPage', TabsPage, '/:activeTab?'],
  ['15 RouterAuth', RouterAuth],
  ['16 LazyLoad', LazyLoad],
  ['19 Debounce', Debounce],
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Example />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function Example() {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>
      <Navbar bg='light'>
        <Nav className='mx-auto'>
          {routes.map((route) => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
      <Container className='container'>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames='page'
            unmountOnExit
          >
            {(state) => (
              <div
                ref={nodeRef}
                className='page'
              >
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </Container>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<RouterProvider router={router} />)
