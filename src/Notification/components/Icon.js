import React from 'react'
import './icon.css';

export const Icon = props => {
  const { notifications, toggle, isList } = props;
  const count = Object.values(notifications).filter(notification => notification.status === false).length;
  return (
    <div className="icon-container">
      <i className={`fa fa-${isList ? 'bell-o': 'bell'}`} onClick={toggle} />
      <span className="count">{count}</span>
    </div>
  )
};
