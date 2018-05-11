import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

import PageTitle from '../../../reusable/PageTitle';
import DashboardContentTop from '../../../reusable/DashboardContentTop';
import DashboardContentBottom from '../../../reusable/DashboardContentBottom';

const styles = theme => ({
    root: {
        flexGrow: 1,        
        paddingTop: 10,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        paddingBottom: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '-webkit-fill-available'
    },
});

function LoggedInDashboard(props){
    const { classes, className } = props;
    return(
        <div className={classnames(classes.root, className)}>
            <PageTitle title="Dashboard" />
            <DashboardContentTop />
            <DashboardContentBottom/>
        </div>
    );
};

LoggedInDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default withStyles(styles, { name: 'LoggedInDashboard', withTheme: true })(LoggedInDashboard);
