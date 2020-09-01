import React, { useEffect, useRef } from 'react';
import './list.css';

export const List = props => {

  const { notifications, showNotification, toggle, markAllAsReadOrUnread, markAsReadOrUnread } = props;

  const wrapperRef = useRef();

  const notificationsArr = Object.values(notifications);
  const isAllOpened = notificationsArr.filter(notification => notification.status).length === notificationsArr.length;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const handleClickOutside = event => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      toggle();
    }
  }
  return (
    <div className="dropdown-menu">
      <ul id="style-2" ref={wrapperRef} className="list">
        <li className="notification-header">
          <div className="row">
            <div className="col-6">
              <strong>Notifications</strong>
            </div>
            <div className="col-6 text-r">
              <i className={`fa fa-${isAllOpened ? 'envelope-open' : 'envelope'}`} onClick={markAllAsReadOrUnread} />
            </div>
          </div>
        </li>
        {Object.values(notifications).map(notification => (
          <li
            key={notification.id}
            id={notification.id}
            className={`item ${notification.status ? 'viewed' : ''}`}
            onClick={showNotification}
          >
            <div id={notification.id} className="row truncate">
              <div id={notification.id} style={{ display: 'flex' }} className="col-6">
                <h6 id={notification.id}>{notification.title}</h6>
              </div>
              <div className="col-6 text-r">
                <i id={notification.id} className={`fa fa-${notification.status ? 'envelope-open-o' : 'envelope-o'}`} onClick={markAsReadOrUnread} />
              </div>
            </div>
            <div id={notification.id} className="truncate description">
              {notification.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}