import React from 'react';
import Context from './context';
export default class GlobalState extends React.Component {
  state = {
    social_name: '',
    type: '',
  };

  addData = (name, type) => {
    console.log(' adding data in context ...');
    this.setState({
      social_name: name,
      type: type,
    });
  };

  deleteData = () => {
    this.setState({
      social_name: '',
      type: '',
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          social_name: this.state.social_name,
          type: this.state.type,
          addData: this.addData,
          deleteData: this.deleteData,
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
