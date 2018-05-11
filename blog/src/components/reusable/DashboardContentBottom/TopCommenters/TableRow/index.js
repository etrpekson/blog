import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { TableCell, TableRow } from 'material-ui/Table';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    rowText: {
        fontSize: 18,
    }
});

function Row(props){
    const { classes, key, firstCol, secondCol } = props;
    return(
        <TableRow key={key}>
            <TableCell>                
            <Typography component="p" className={classnames(classes.rowText)}>
                {firstCol}
            </Typography>            
            </TableCell>
            <TableCell>                
                <Typography component="p" className={classnames(classes.rowText)}>
                    {secondCol}
                </Typography>                
            </TableCell>
        </TableRow>
    );
}

Row.propTypes = {
    classes: PropTypes.object.isRequired,
    key: PropTypes.number,
    firstCol: PropTypes.string,
    secondCol: PropTypes.string
};

export default withStyles(styles, { name: 'Row', withTheme: true })(Row);