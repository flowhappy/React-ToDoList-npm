import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Works extends Component {
  static propTypes={
    updateDone:PropTypes.func.isRequired,
    task:PropTypes.object.isRequired
  }
  state = {mouse: false}
  mouseEvent = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }
  changeDone = (id) => {
    const {updateDone} = this.props;
    return () => {
      updateDone(id);
    }
  }
  deleteWork=(id)=>{
    if(window.confirm('确认删除么')){
      this.props.deleteTask(id);
    }
  }
  render() {
    const {id,name,done} = this.props.task;
    return (
      <div className='container-fluid works-wrap' onMouseEnter={this.mouseEvent(true)}
           onMouseLeave={this.mouseEvent(false)}>
        <div className='row works' style={{display: 'flex'}}>
          <span className='col-xs-9'>
            <input onChange={this.changeDone(id)} onClick={this.updateDone} type="checkbox"
                   style={{margin: '5px'}} checked={done}/>
            {name}
          </span>
          <button type="button" className="btn col-xs-3" style={
            {
              visibility: this.state.mouse ? 'visible' : 'hidden'
            }
          } onClick={()=>{this.deleteWork(id)}}>
            删除任务
          </button>
        </div>
      </div>
    );
  }
}

export default Works;