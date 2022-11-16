import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import AppTheme from './context/Theme'
import Login from './components/Login'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Trending from './components/Trending'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    activeTheme: 'light',
  }

  changeTheme = activeTheme => {
    this.setState({activeTheme})
  }

  render() {
    const {activeTheme} = this.state
    const bgColor = activeTheme === 'light' ? 'light' : 'dark'

    return (
      <AppTheme.Provider
        value={{
          activeTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <>
          <div className="app-container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <>
                <Header />
                <div className={`${bgColor} main-frame-container`}>
                  <Navbar />
                  <div className="content">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/trending" component={Trending} />
                      <Route component={NotFound} />
                    </Switch>
                  </div>
                </div>
              </>
            </Switch>
          </div>
        </>
      </AppTheme.Provider>
    )
  }
}
export default App
