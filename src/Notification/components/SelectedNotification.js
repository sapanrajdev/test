import React from 'react';

export const SelectedNotification = props => {
  const { selectedNotification } = props;
  return (
    <div className="active-window">
      <h4>{selectedNotification.id}</h4>
      <h6>{selectedNotification.title}</h6>
      <div>{selectedNotification.description}</div>
    </div>
  );
}