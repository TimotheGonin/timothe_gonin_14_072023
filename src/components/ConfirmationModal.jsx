import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { hideConfirmationModal } from '../features/createEmployee/employeesSlice'

/**
 * The `ConfirmationModal` component is responsible for rendering a modal dialog
 * that confirms the successful creation of an employee. It displays a success message
 * and a "Close" button.
 *
 * @component
 * @param {function} onClose - A callback function to be executed when the modal is closed.
 * @returns {JSX.Element} The rendered ConfirmationModal component.
 */
const ConfirmationModal = ({ onClose }) => {
  const dispatch = useDispatch()
  const modalStatus = useSelector(
    (state) => state.employees.confirmationModalDisplayed
  )

  const handleClose = () => {
    dispatch(hideConfirmationModal())
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  return (
    <Modal
      show={modalStatus}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="border-bottom-0">
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Employee creation</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-success d-flex align-items-center justify-content-center gap-2 mb-0">
          <span>Employee created with success !</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </span>
        </p>
      </Modal.Body>

      <Modal.Footer className="border-top-0">
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmationModal
