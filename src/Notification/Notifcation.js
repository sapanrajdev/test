import React from 'react';
import { Icon } from './components/Icon';
import { List } from './components/List';
import { SelectedNotification } from './components/SelectedNotification';
import notifications from './assets/json/notifications.json';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications,
      isList: false,
      selectedNotification: {},
    };

  }

  toggle = () => {
    this.setState(prevState => ({
      isList: !prevState.isList
    }));
  }

  markAllAsReadOrUnread = () => {
    const { notifications } = this.state;
    Object.values(notifications).forEach(notification => notification['status'] = !notification['status']);
    this.setState({ notifications });
  }

  markAsReadOrUnread = e => {
    e.stopPropagation();
    const { notifications } = this.state;
    const { id } = e.target;
    if (notifications[id]) {
      notifications[id]['status'] = !notifications[id]['status'];
      this.setState({
        notifications,
      });
    }
  }

  showNotification = e => {
    const { notifications } = this.state;
    const { id } = e.target;
    if (notifications[id]) {
      notifications[id]['status'] = true;
      this.setState({
        notifications,
        selectedNotification: notifications[id]
      });
      this.toggle();
    }
  }

  render() {
    const { isList } = this.state;
    return (
      <div>
        <Icon {...this.state} toggle={this.toggle} />
        {isList &&
          <List
            {...this.state}
            showNotification={this.showNotification}
            toggle={this.toggle}
            markAllAsReadOrUnread={this.markAllAsReadOrUnread}
            markAsReadOrUnread={this.markAsReadOrUnread}
          />}
        <SelectedNotification {...this.state} />
      </div>
    )
  }
}

export default Notification;