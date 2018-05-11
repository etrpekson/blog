import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import classnames from 'classnames';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '75%',
        marginTop: 10,
        marginBottom: 10
    }, 
    panelDetails: {
        display: 'flex',
        flexDirection: 'column'
    },
    headerText: {
        marginBottom: 10,
    },
    subText: {
        marginBottom: 10,
    },
    expandIcon: {}
});

function Panel(props){
    const { classes, children, className, title, summary } = props;
    return(
        <ExpansionPanel className={classnames(classes.root, className)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classnames(classes.expandIcon, className)}/>}>
                <div className={classnames(classes.panelDetails, className)}>                    
                    <Typography gutterBottom variant="headline" component="h2" className={classnames(classes.headerText, className)}>
                        {title}
                    </Typography>
                    <Typography component="p" className={classnames(classes.subText, className)}>
                        {summary}
                    </Typography>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {children}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

Panel.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string
};

export default withStyles(styles, { name: 'Panel', withTheme: true })(Panel);