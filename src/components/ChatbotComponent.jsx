import React, { useState } from "react";
import './ChatbotComponent.css'; // Import CSS

const ChatbotComponent = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      // You can add logic here to send the message to a backend or an AI service.
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <span>Chatbot</span>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input 
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Type your message..." 
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotComponent;
