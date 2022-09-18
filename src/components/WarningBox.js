import Alert from "react-bootstrap/Alert";

export const WarningBox = ({message, closeWarning}) => {

   return (
    <Alert variant="danger" onClose={closeWarning} dismissible data-testid="warningBox"><p>{message}</p></Alert>
   )
    
}

WarningBox.defaultProps = {
    message: "No message"
}