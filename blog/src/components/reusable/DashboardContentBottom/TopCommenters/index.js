import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody } from 'material-ui/Table';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import Row from './TableRow';

const styles = theme => ({
    tablePaper: {
        width: '100%',        
        overflowX: 'auto',
        boxShadow: 'none'
    },
    table: {
        minWidth: 700
    }
});

function TopCommenters(props){
    const { classes, className } = props;
    return(
        <Paper className={classnames(classes.tablePaper, className)}>
            <Table className={classnames(classes.table, className)}>
                <TableBody>
                    <Row key={1} firstCol="1. Sherry Nichols" secondCol="6. Roberto Matthews"/>
                    <Row key={2} firstCol="2. Jeremiah Bates" secondCol="7. Eugene Daniels"/>
                    <Row key={3} firstCol="3. Alberto Hanson" secondCol="8. Amanda Thomas"/>
                    <Row key={4} firstCol="4. Cory Terry" secondCol="9. Larry Watson"/>
                    <Row key={5} firstCol="5. Lauren Anderson" secondCol="10. Harvey Carroll"/>                    
                </TableBody>
            </Table>
        </Paper>
    );
};

TopCommenters.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
}

export default withStyles(styles, { name: 'TopCommentersTable', withTheme: true })(TopCommenters);