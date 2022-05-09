import React, {Component} from 'react';
import './index.css'
import Works from "../Wroks";
import PropTypes from "prop-types";

class List extends Component {
  static propTypes={
    updateDone:PropTypes.func.isRequired
  }
  render() {
    const {tasks} = this.props;
    return (
      <div className='container-fluid'>
        <div className='row' style={{marginTop: '5px'}}>
          <div className='col-xs-12'>
            <div className='list_wrap'>
              {
                tasks.map(n=>{
                  return <Works deleteTask={this.props.deleteTask} updateDone={this.props.updateDone} key={n.id} task={n}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;