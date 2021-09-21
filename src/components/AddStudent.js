import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// properties addStudent is required, function called when Add clicked.
class  AddStudent extends Component {
      constructor(props) {
      super(props);
      this.state = {open: false, student_name : '', email : '' }
    }
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }

  // Save student info and close modal form
    handleAdd = (student_name, email) => {
       this.props.addStudent(this.state.student_name, this.state.email);
       this.handleClose();
    }

    render()  { 
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Student
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Student</DialogTitle>
                <DialogContent>
                {this.state.student_name} {this.state.email}
                  <TextField autoFocus fullWidth label="Student Name" name="student_name" onChange={this.handleChange} value={this.state.student_name}/> 
                  <TextField autoFocus fullWidth label="Student Email" name="email" onChange={this.handleChange} value={this.state.email}/> 
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      ); 
    }
}

// required property:  addCourse is a function to call to perform the Add action
AddStudent.propTypes = {
  addStudent : PropTypes.func.isRequired
}

export default AddStudent;