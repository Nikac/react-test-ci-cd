import { useRouteError } from 'react-router-dom'
import Navigation from '../layouts/Navigation'

export default function ErrorPage() {
  const error = useRouteError() as Error
  console.error(error)

  const isResponseError = (error: any): error is Response => {
    return error && typeof error.statusText === 'string'
  }

  return (
    <>
      <Navigation />
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{(isResponseError(error) && error.statusText) || error.message}</i>
        </p>
      </div>
    </>
  )
}
