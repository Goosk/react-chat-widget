import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Widget from './components/Widget';
import store from '../src/store/store';

const ConnectedWidget = props =>
  <Provider store={store}>
    <Widget
      title={props.title}
      subtitle={props.subtitle}
      handleNewUserMessage={props.handleNewUserMessage}
      handleQuickButtonClicked={props.handleQuickButtonClicked}
      senderPlaceHolder={props.senderPlaceHolder}
      profileAvatar={props.profileAvatar}
      showCloseButton={props.showCloseButton}
      fullScreenMode={props.fullScreenMode}
      badge={props.badge}
      typing={props.typing}
    />
  </Provider>;

ConnectedWidget.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  handleQuickButtonClicked: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  typing: PropTypes.bool
};

ConnectedWidget.defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true,
  fullScreenMode: false,
  badge: 0,
  typing: false,
};

export default ConnectedWidget;
