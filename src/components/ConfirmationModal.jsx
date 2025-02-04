import { Modal } from 'modal-react-vite'

/**
 * The `ConfirmationModal` component is responsible for rendering a modal dialog
 * that confirms the successful creation of an employee. It displays a success message
 * and a "Close" button.
 *
 * @component
 * @param {function} onClose - A callback function to be executed when the modal is closed.
 * @returns {JSX.Element} The rendered ConfirmationModal component.
 */
const ConfirmationModal = () => {
  return (
    <Modal
      buttonTitle="Save"
      title="Employee creation"
      description="Employee created with success !"
    />
  )
}

export default ConfirmationModal
