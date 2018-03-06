// @flow

import { connect } from 'react-redux';

import Button from '../components/Button';
import { sayHello } from '../actions/hello';

const mapStateToProps = () => ({
    label: 'Say hello',
});

const mapDispatchToProps = dispatch => ({
    handleClick: () => { dispatch(sayHello('Hello!')); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
