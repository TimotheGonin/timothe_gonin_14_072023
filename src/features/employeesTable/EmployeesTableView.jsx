import { useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { SortableTable } from 'sortable-table-react'

/**
 * Component for displaying a table of employee data.
 * @component
 * @returns {JSX.Element} - The rendered EmployeesTableView component.
 */

const EmployeesTableView = () => {
  const employees = useSelector((state) => state.employees.currentEmployees)

  const tableHeadsList = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
  ]

  return employees.length === 0 ? (
    <Spinner animation="border" role="status" variant="primary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <SortableTable data={employees} tableHeads={tableHeadsList} />
  )
}

export default EmployeesTableView
