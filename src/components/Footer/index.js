import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Footer extends Component {
  static propTypes = {
    totalDone: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }
  selectAll = (event) => {
    this.props.selectAll(event.target.checked);
  }

  render() {
    const {totalDone, total, deleteDone} = this.props;
    return (
      <div className='container-fluid'>
        <div className='row foot_wrap'>
          <div className='footMsg'>
            <span className='col-xs-9'>
              <input type="checkbox" onChange={this.selectAll} checked={totalDone === total && total !== 0}/>&nbsp;
              已完成&nbsp;<strong>{totalDone}&nbsp;
              </strong>/ 全部&nbsp;<strong>{total}</strong>
            </span>
            <button type="button" className="btn col-xs-3" onClick={deleteDone}>
              删除已完成任务
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;