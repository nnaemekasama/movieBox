import React from "react"
import "./Message.css"

const Message = ({ message }) => {
  return (
    <div className="error">
      <p className="error-message">{message}</p>
    </div>
  )
}

export default Message
