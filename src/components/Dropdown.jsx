import Form from 'react-bootstrap/Form'

/**
 * The `Dropdown` component is a reusable dropdown menu component built on top of
 * the `react-bootstrap` library. It provides a styled dropdown menu for selecting options.
 *
 * @component
 * @param {string} label - The label text for the dropdown.
 * @param {string} htmlForLabel - The `htmlFor` attribute for the associated label.
 * @param {string} value - The initial selected value for the dropdown.
 * @param {function} handler - A callback function that is called when an option is selected.
 *   It receives the selected option's value as an argument.
 * @param {React.ReactNode} children - The child components representing the dropdown options.
 * @returns {JSX.Element} The rendered Dropdown component.
 */
const Dropdown = ({ label, htmlForLabel, value, handler, id, children }) => {
  return (
    <Form.Group className="pe-auto">
      <Form.Label htmlFor={htmlForLabel}>{label}</Form.Label>
      <Form.Select
        required
        defaultValue={value}
        onChange={handler}
        aria-label={`${label} dropdown menu`}
        role="button"
        id={id}
      >
        <option className="text-muted" type="invalid" value="">
          Choose your {label.toLowerCase()}
        </option>
        {children}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        Please choose a {label.toLowerCase()}.
      </Form.Control.Feedback>
    </Form.Group>
  )
}

export default Dropdown
