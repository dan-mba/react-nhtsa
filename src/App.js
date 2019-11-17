import React from 'react';
import Year from './Year';
import Make from './Make';
import Model from './Model';
import Campaign from './Campaign';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { year: "", make: "", model: "", parent: 0}
    this.changeYear = this.changeYear.bind(this);
    this.changeMake = this.changeMake.bind(this);
    this.changeModel = this.changeModel.bind(this);
  }
  
  changeYear(newYear) {
    this.setState({ year: newYear, make: "", model: ""});
  }
  
  changeMake(newMake) {
    this.setState({make: newMake, model: ""});
  }
  
  changeModel(newModel) {
    this.setState({model: newModel});
  }
  
  render() {
    return (
      <div>
        <h1>NHTSA Recall Datatbase</h1>
        <div className="selectBox">
          <Year onChange={this.changeYear} />
          <Make onChange={this.changeMake} year={this.state.year} />
          <Model 
            onChange={this.changeModel}
            year={this.state.year}
            make={this.state.make}
          />
        </div>
        <Campaign
          year={this.state.year}
          make={this.state.make}
          model={this.state.model}
        />
      </div>
    );
  }
}

export default App;
