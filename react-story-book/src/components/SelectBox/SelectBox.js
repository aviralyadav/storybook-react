import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SelectBox extends React.Component {
//   state = {
//     age: '',
//     name: 'hai',
//   };
 onChangeHandler = event => {
     this.props.handleChange(event);
 }

  render() {
    const { classes, options, placeholder } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        
        <FormControl className={classes.formControl}>
          <Select
            value={this.props.value}
            onChange={this.onChangeHandler}
            name="age"
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
            {
                options.map((option, i)=>{
                return <MenuItem key={i} value={option.value}>{option.name}</MenuItem>
            })
            }
            
          </Select>
        </FormControl>
      </form>
    );
  }
}

SelectBox.defaultProps = {
    placeholder: 'Placeholder',
    value: ''
}

SelectBox.propTypes = {
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
};

export default withStyles(styles)(SelectBox);
