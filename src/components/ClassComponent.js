/*
 * @Description:
 * @version:
 * @Author: yuanlijian
 * @Date: 2021-12-27 15:19:10
 * @LastEditors: yuanlijian
 * @LastEditTime: 2021-12-27 16:06:48
 */
import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import {
  addActionCreator,
  minusActionCreator,
} from "../redux/classCount/countActions";

const mapStateToProps = (state) => {
  return {
    number: state.classCount.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => {
      const action = addActionCreator();
      dispatch(action);
    },
    minus: () => {
      const action = minusActionCreator();
      dispatch(action);
    },
  };
};

class CountComponents extends Component {
  render() {
    const { number, add, minus } = this.props;
    return (
      <div>
        <button onClick={add}>+</button>
        <span>{number}</span>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}

export const ClassComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountComponents);
