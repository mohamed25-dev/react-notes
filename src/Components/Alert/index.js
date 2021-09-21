const Alert = (props) => {
    props.validateMessages.map((message, index) => {
  console.log(
    message)
    })


  return (
    <div className="alert-container">
      <ul>
        {
          props.validateMessages.map((message, index) => (
            <li key={index}>
              {message}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Alert;