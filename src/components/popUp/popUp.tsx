import React from 'react';
import './popUp.css';

interface NotificationPopupProps {
  message: string;
  onClose: () => void;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ message, onClose }) => {
  return (
    <div className="notification-popup">
      <div className="popup-content">
      <h2 className="popup-message">{message}</h2>
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
