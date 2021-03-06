import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';

const Notifications = ({ displayDrawer }) => {
  return (
    <div className='Notification'>
      <div className="menuItem">
        <p>Your Notifications</p>
      </div>
      {
        displayDrawer && (
          <div className='Notifications'>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                position: 'absolute',
                right: 20,
              }}
              aria-label="close"
            >
              <img src={closeIcon} alt='close-icon' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem
                type="urgent"
                html={{ __html: getLatestNotification() }}
              />
            </ul>
          </div>
        )
      }
    </div>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
