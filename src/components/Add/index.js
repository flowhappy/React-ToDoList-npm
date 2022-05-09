import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {nanoid} from 'nanoid';
import PropTypes from "prop-types";
class Add extends Component {
  static propTypes={
    addList:PropTypes.func.isRequired
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">任务名称</span>
          <input onKeyUp={this.getMsg} type="text" className="form-control" placeholder="输入你的任务名称"
                 style={{textAlign: 'center'}} aria-describedby="basic-addon1"/>
        </div>
      </div>
    );
  }

  getMsg = (event) => {
    if (event.keyCode === 13) {
      let val = event.target.value;
      if(val.trim()==='') return;
      event.target.value = null;
      const {addList}=this.props;
      addList({id:nanoid(),name:val,done:false});
    }
  }
}

export default Add;