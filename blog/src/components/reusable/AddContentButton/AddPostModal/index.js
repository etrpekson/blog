import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

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
        width: '70%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    },
    modalHeader: {
        marginBottom: 10
    },
    authorTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: 20,
        width: '50%',
    },    
    titleTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 0,
        width: '75%',
    },
    textArea: {
        width: '100%',
        height: 200
    },
    postButton: {
        right: 0,
        float: 'right',
        marginTop: 8
    },    
});

class AddPostModal extends PureComponent{
    state = {
        title: '',
        author: '',
        body: ''
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
                        Add a New Post
                    </Typography>

                    <TextField
                        id="title"
                        label="Title:"
                        className={classes.titleTextField}
                        value={this.state.title}
                        onChange={this.handleChange('title')}
                        margin="normal"
                    />

                    <TextField
                        id="author"
                        label="Post Author:"
                        className={classes.authorTextField}
                        value={this.state.author}
                        onChange={this.handleChange('author')}
                        margin="normal"
                    /><br/>

                    <Typography variant="title" id="modal-title">
                        Post Body:
                    </Typography><br/>
                    <textarea value={this.state.body} onChange={this.handleChange('body')} className={classes.textArea} />
                    
                    <Button 
                        className={classes.postButton} 
                        onClick={handleSubmit(this.state.title, this.state.author, this.state.body)}
                    >
                        Add Post
                    </Button>
                </div>
            </Modal>
        );
    }
};

AddPostModal.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSubmit: PropTypes.func
};

AddPostModal.defaultProps = {
    open: false
};

export default withStyles(styles, { name: 'AddPostModal', withTheme: true })(AddPostModal);