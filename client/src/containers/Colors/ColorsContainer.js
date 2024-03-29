// @flow

import React from 'react';
import { connect } from 'react-redux';
import Select from '../../components/Select';
import { fetchColors } from './ColorsRedux';

type Props = {
  onChange: (value: string) => void,
  colors: Array<Object>,
  getColors: () => void,
  className: string,
  defaultValue?: Object
};

type State = void;

class Colors extends React.Component<Props, State> {
  componentDidMount() {
    const { getColors } = this.props;

    if (getColors) {
      getColors();
    }
  }

  render() {
    const {
      onChange, colors, className, defaultValue,
    } = this.props;

    return (
      <Select
        className={className}
        onChange={onChange}
        options={colors}
        withLabel
        label="color"
        defaultValue={defaultValue || { label: 'All', value: '' }}
      />
    );
  }
}

function mapStateToProps(state: Object) {
  return {
    colors: state.colors.values,
  };
}

function mapDispatchToProps(dispatch: (() => any) => any) {
  return {
    getColors: () => dispatch(fetchColors()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Colors);
