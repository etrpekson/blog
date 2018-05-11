import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

function rand(){
    return Math.round(Math.random() * 20) - 10;
};

function getModalStyle (){
    const top = 50 + rand();
    const left = 50 + rand();

    return{
        top: `${top}`,
        left: `${left}`,
        transform: `translate(-${top}%, -${left}%)`,
    };
};

const styles = theme => ({    
    modalPaper: {
        position: 'absolute',
        width: '60%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
    modalHeader: {
        marginBottom: 10
    },
    nameTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    commentTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
        marginBottom: 15
    },
    commentButton: {
        right: 0,
        float: 'right'
    }
});

class AddCommentModal extends PureComponent{
    state = {
        name: '',
        comment: '',        
    };    

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };    
    
    render(){
        const { classes, open, handleClose, handleSubmit } = this.props;        
        
        return(        
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.modalPaper}>
                        <Typography variant="title" id="modal-title" className={classes.modalHeader}>
                            Write a Comment
                        </Typography>
                        <TextField
                            id="name"
                            label="Your Name:"
                            className={classes.nameTextField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                        />
                        <TextField
                            id="comment"
                            label="Comment:"
                            className={classes.commentTextField}
                            value={this.state.comment}
                            onChange={this.handleChange('comment')}
                            margin="normal"
                        />                        
                        <Button className={classes.commentButton} onClick={handleSubmit(this.state.name, this.state.comment)}>
                            Add Comment
                        </Button>                        
                </div>
            </Modal>
        )
    }
}

AddCommentModal.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    commentList: PropTypes.array,
    handleSubmit: PropTypes.func,    
};

AddCommentModal.defaultProps = {
    open: false
};

export default withStyles(styles, { name: 'AddCommentModal', withTheme: true })(AddCommentModal);