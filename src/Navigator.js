import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';

class Navigator extends PureComponent {
  page = this.props.location.pathname.replace('/', '').replace('page-', '') ||
    0;

  navigate = ev => {
    switch (ev.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        this.page++;
        if (this.page > this.props.last) {
          this.page = this.props.last;
        }
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        this.page--;
        if (this.page < 0) {
          this.page = 0;
        }
        break;
      default:
    }
    const newLocation = this.page === 0 ? '/' : `/page-${this.page}`;
    if (newLocation !== this.props.location) {
      this.props.history.push(newLocation);
    }
  };

  render() {
    return (
      <div tabIndex="0" onKeyDown={this.navigate}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Navigator);
