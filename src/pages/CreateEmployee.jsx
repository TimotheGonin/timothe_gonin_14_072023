import { Helmet, HelmetProvider } from 'react-helmet-async'
import CreateEmployeeView from '../features/createEmployee/CreateEmployeeView'

/**
 * The CreateEmployee component is responsible for rendering the Create Employee page.
 * It utilizes the HelmetProvider and Helmet components from react-helmet-async to manage
 * the page title. The main content of this page is rendered using the CreateEmployeeView component.
 *
 * @component
 * @returns {JSX.Element} The rendered CreateEmployee component.
 */
const CreateEmployee = () => {
  return (
    <HelmetProvider>
      <main className="wrapper">
        <Helmet>
          <title>Home - Create Employee</title>
        </Helmet>
        <h2 className="my-5">CreateEmployee</h2>
        <CreateEmployeeView />
      </main>
    </HelmetProvider>
  )
}

export default CreateEmployee
