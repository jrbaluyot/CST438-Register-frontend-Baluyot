import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


// NOTE:  for OAuth security, http request must have
//   credentials: 'include' 
//

// properties name, email required
//  
//  NOTE: because NewStudent is invoked via <Route> in App.js  
//  props are accessed via props.location 


class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false, student_name: '', email: ''};
  }
  
  handleClickOpen = () => {
    this.setState( {open:true} );
  };

  handleClose = () => {
    this.setState( {open:false} );
  };
  
  
  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value});
    if (event.target.value === '')
        alert("Missing name or email.");
  }

// Save student and close modal form
  handleAdd = () => {
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
              <DialogTitle>Add Student
              </DialogTitle>
              <DialogContent>
                  <form>
                  {this.state.student_name} {this.state.email}
                    <TextField autoFocus fullWidth label="Student Name" name="student_name" onChange={this.handleChange} value={this.state.student_name || ''}/> 
                    <TextField autoFocus fullWidth label="Student Email" name="email" onChange={this.handleChange} value={this.state.email || ''}/> 
                </form>
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

// required properties:  name string , email string
//  NOTE: because NewStudent is invoked via <Route> in App.js  
//  props are accessed via props.location 
NewStudent.propTypes = {
    addStudent : PropTypes.func.isRequired
  }

export default NewStudent;