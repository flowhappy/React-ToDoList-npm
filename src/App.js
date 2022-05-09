import React, {Component} from 'react';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Add from "./components/Add";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    tasks: [{id: '1', name: 'work1', done: true}, {id: '2', name: 'work2', done: false}, {
      id: '3', name: 'work3', done: false
    },]
  }
  addList = (dataObj) => {
    this.setState({tasks: [dataObj, ...this.state.tasks]});
  }

  updateDone = (doneTaskId) => {
    const target_task = this.state.tasks.map(n => {
      return n.id === doneTaskId ? {...n, done: !(n.done)} : n;
    })
    this.setState({tasks: target_task})
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(n => n.id !== id);
    this.setState({tasks: newTask});
  }
  deleteDone = () => {
    const newTask = this.state.tasks.filter(n => !n.done);
    this.setState({tasks: newTask});
  }

  selectAll = (done) => {
    const newTask = this.state.tasks.map(n => {
      return {...n, done}
    })
    this.setState({tasks: newTask});
  }

  render() {
    return (<div>
        <Header/>
        <div className="container">
          <div className="row">
            <div className='col-lg-3'/>
            <div className='col-lg-6' style={{
              height: '320px', padding: '20px', borderRadius: '20px', boxShadow: '0 0 25px #dddddd'
            }}>
              <Add addList={this.addList}/>
              <List updateDone={this.updateDone} deleteTask={this.deleteTask} tasks={this.state.tasks}/>
              <Footer total={this.state.tasks.length} deleteDone={this.deleteDone} selectAll={this.selectAll}
                      totalDone={this.state.tasks.filter(n => n.done).length}/>
            </div>
            <div className='col-lg-3'/>
          </div>
        </div>
      </div>

    );
  }
}

export default App;