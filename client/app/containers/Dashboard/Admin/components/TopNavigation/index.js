import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import {
  Sidebar,
  Segment,
  Header,
  Image,
  Menu,
  Icon,
  Button,
} from 'semantic-ui-react';

class TopNavigation extends React.Component {
    state = {
    visible: true,
  };
  render() {
        const { visible } = this.state;
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            direction="top"
            visible={visible}
            inverted
              <Menu.Item name='home'>
                            <Icon name='home' />
                            Home
              </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Icon name='gamepad' />
                            Games
              </Menu.Item>
                        <Menu.Item name='camera'>
                            <Icon name='camera' />
                            Channels
              </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                            <Image src='/assets/images/wireframe/paragraph.png' />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
      </div>
        );
  }
}

TopNavigation.propTypes = {

};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(

  withConnect,
)(TopNavigation);
