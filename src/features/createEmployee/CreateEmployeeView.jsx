import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmployee } from './employeesSlice'
import { states } from '../../constants'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateEmployeeView = () => {
  const dispatch = useDispatch()

  // State for form fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [department, setDepartment] = useState('Sales')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')

  const handleSaveEmployee = (e) => {
    e.preventDefault()
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    }
    dispatch(createEmployee(employee))
  }

  return (
    <section className="container">
      <h2>CreateEmployee</h2>
      <Form action="#" id="create-employee" onSubmit={handleSaveEmployee}>
        <Form.Group>
          <Form.Label htmlFor="first-name">First Name</Form.Label>
          <Form.Control
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="last-name">Last Name</Form.Label>
          <Form.Control
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="date-of-birth">Date of Birth</Form.Label>
          <Form.Control
            id="date-of-birth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="start-date">Start Date</Form.Label>
          <Form.Control
            id="start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Form.Group>

        <hr />
        <fieldset className="address">
          <legend>Address</legend>

          <Form.Group>
            <Form.Label>Street</Form.Label>
            <Form.Control
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Select
              name="state"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {states.map((state, index) => (
                <option
                  key={`${state.abbreviation}-${index}`}
                  value={state.abbreviation}
                >
                  {state.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              id="zip-code"
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Form.Group>
        </fieldset>
        <hr />

        <Form.Group>
          <Form.Label htmlFor="department">Department</Form.Label>
          <Form.Select
            name="department"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Save</Button>
      </Form>
    </section>
  )
}

export default CreateEmployeeView
