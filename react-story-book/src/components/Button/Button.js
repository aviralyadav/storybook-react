import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const CustomButton = ({children, ...rest}) => (
    <Button {...rest}>{children}</Button>
);

CustomButton.defaultProps = {
    name: 'Click'
}

CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default CustomButton;