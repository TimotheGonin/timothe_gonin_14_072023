import React, { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker.min.css'
import Form from 'react-bootstrap/Form'
import { format } from 'date-fns'

/**
 * The `CustomDatePicker` component represents a customized date picker input field.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {string} props.label - The label for the date picker field.
 * @param {string} props.htmlForLabel - The ID associated with the date picker field.
 * @param {string} props.value - The current value of the date picker field.
 * @param {function} props.handler - The callback function for handling date changes.
 * @returns {JSX.Element} - The rendered CustomDatePicker component.
 */
const CustomDatePicker = ({ label, htmlForLabel, value, handler }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Form.Control
      required
      type="text"
      defaultValue={value}
      onClick={onClick}
      ref={ref}
      placeholder="month/day/year"
    />
  ))

  return (
    <Form.Group>
      <Form.Label htmlFor={htmlForLabel}>{label}</Form.Label>
      <DatePicker
        selected={value ? new Date(value) : value}
        onChange={(date) => handler(format(date, 'MM-dd-yyyy'))}
        dateFormat="MM/dd/yyyy"
        todayButton="TODAY"
        aria-label={`${label} input`}
        wrapperClassName="d-block"
        customInput={<CustomInput />}
        withPortal
      />
      <Form.Control.Feedback type="invalid">
        Please choose a {label.toLowerCase()}.
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default CustomDatePicker
