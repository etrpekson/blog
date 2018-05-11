import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography'
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

import SubContent from '../SubContent';
import PageTitle from '../../reusable/PageTitle';
import LoggedInMedia from './LoggedIn';

class MediaContainer extends PureComponent{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <PageTitle title="Error 401: You must log in to see this page!" />
            default:
                return <LoggedInMedia />
        }
    }

    render(){
        const { classes, className, ...other } = this.props;
        return(
            <SubContent>
                {this.renderContent()}
            </SubContent>
        );
    }
}

MediaContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,    
};

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(withStyles({ name: 'MediaContainer', withTheme: true })(MediaContainer));