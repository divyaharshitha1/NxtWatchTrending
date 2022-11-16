import {
  FailureContainer,
  Para,
  Head,
  Button,
  FailureImg,
} from './StyledComponents'

import AppTheme from '../../context/Theme'

const FailureView = props => {
  ;<AppTheme.Consumer>
    {value => {
      const {activeTheme} = value

      const refreshPage = () => {
        props.refresh()
      }

      return (
        <FailureContainer>
          {activeTheme === 'light' ? (
            <FailureImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png" />
          ) : (
            <FailureImg src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png" />
          )}
          <Head>Oops! Something Went Wrong</Head>
          <Para>
            We are having some trouble to complete your request. Please try
            again.
          </Para>
          <Button onClick={refreshPage}>Retry</Button>
        </FailureContainer>
      )
    }}
  </AppTheme.Consumer>
}

export default FailureView
