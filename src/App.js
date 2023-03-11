import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Account from './components/Account'
import Popular from './components/Popular'
import MovieDetails from './components/MovieDetails'
import MovieContext from './Context/MovieContext'
import Search from './components/Search'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

class App extends Component {
  state = {username: '', password: ''}

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  triggerLogout = props => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
    this.setState({username: '', password: ''})
  }

  render() {
    const {username, password} = this.state

    return (
      <MovieContext.Provider
        value={{
          username,
          password,
          changeUsername: this.changeUsername,
          changePassword: this.changePassword,
          triggerLogout: this.triggerLogout,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/account" component={Account} />
          <ProtectedRoute exact path="/popular" component={Popular} />
          <ProtectedRoute exact path="/search" component={Search} />
          <ProtectedRoute exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MovieContext.Provider>
    )
  }
}

export default App
