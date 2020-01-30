import actions from '../actions/actions';
import { connect } from "react-redux";
import CounterComponent from './CounterComponent';

const mapStateToProps = state => {
    return {
      ctr: state.counter
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onIncrementCounter: count => dispatch(actions.increment(count)),
      onDecrementCounter: count => dispatch(actions.decrement(count)),
      onAdd5: count => dispatch(actions.add5(count)),
      onSubstract5: count => dispatch(actions.substract5(count))
    };
  };

const Counter = connect(mapStateToProps, mapDispatchToProps) (CounterComponent)

export default Counter;