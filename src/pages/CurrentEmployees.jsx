import { Helmet, HelmetProvider } from 'react-helmet-async'
import EmployeesTableView from '../features/employeesTable/EmployeesTableView'

/**
 * The CurrentEmployees component is responsible for rendering the "Current Employees" page.
 * It utilizes the HelmetProvider and Helmet components from react-helmet-async to manage
 * the page title. The main content of this page is rendered using the EmployeesTableView component.
 *
 * @component
 * @returns {JSX.Element} The rendered CurrentEmployees component.
 */
const CurrentEmployees = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Current Employees</title>
      </Helmet>
      <main id="employee-div" className="wrapper">
        <h2 className="my-5">Current Employees</h2>
        <EmployeesTableView />
      </main>
    </HelmetProvider>
  )
}

export default CurrentEmployees
