import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class TypingPlaceholder extends PureComponent {
  render() {
    if(this.props.active === false) {
      return null;
    }

    return (
      <div className="typing-placeholder">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

TypingPlaceholder.propTypes = {
  active: PropTypes.bool
};

export default TypingPlaceholder;