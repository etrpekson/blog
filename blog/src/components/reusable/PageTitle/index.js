import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '13%',
        marginRight: '13.5%'
    },
});

function PageTitle(props){
    const { classes, title } = props;
    
    return(
        <div className={classnames(classes.root)}>            
            <Typography variant="headline" component="h2">
                {title}
            </Typography>            
        </div>
    );
};

PageTitle.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,    
};

export default withStyles(styles, { name: 'PageTitle', withTheme: true })(PageTitle);