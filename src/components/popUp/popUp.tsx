import React from 'react';
import './popUp.css';

interface NotificationPopupProps {
  message: string;
}

const NotificationPopup: React.FC<NotificationPopupProps> = ({ message }) => {
  return (
    <div className="notification-popup">
      <div className="popup-content">
      <h2 className="popup-message">{message}</h2>
      </div>
    </div>
  );
};

export default NotificationPopup;
