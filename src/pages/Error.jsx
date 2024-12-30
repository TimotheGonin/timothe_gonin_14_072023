import { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

/**
 * The Error component is responsible for rendering an error page that provides users
 * with options to select their destination or automatically redirects them to the home page.
 * It uses the HelmetProvider and Helmet components from react-helmet-async to manage
 * the page title. The countdown feature is implemented to redirect the user to the home page
 * after a certain duration.
 *
 * @component
 * @returns {JSX.Element} The rendered Error component.
 */
const Error = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      navigate('/')
    }
  }, [countdown, navigate])

  return (
    <HelmetProvider>
      <Helmet>
        <title>Redirect : {`${countdown}`}</title>
      </Helmet>
      <main className="wrapper px-3">
        <h2 className="my-5">Error</h2>
        <p>Select your destination :</p>
        <div className="d-grid gap-3 mb-5">
          <LinkContainer to="/">
            <Button variant="outline-primary">Home</Button>
          </LinkContainer>

          <LinkContainer to="/employees">
            <Button variant="outline-primary">Employees list</Button>
          </LinkContainer>
        </div>
        <Stack gap={1} className="text-center">
          <p className="mb-0">
            Or you will be automatically redirected to the home page in :
          </p>
          <p>
            <span className="fs-5 fw-bold">{countdown} </span>
            seconds.
          </p>
        </Stack>
      </main>
    </HelmetProvider>
  )
}

export default Error
