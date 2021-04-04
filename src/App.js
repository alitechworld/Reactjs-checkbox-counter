import React from 'react';
import './App.css';
import CheckboxList from './components/CheckboxList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkboxes: [
        { value: "checkbox1", Checked: false },
        { value: "checkbox2", Checked: false },
        { value: "checkbox3", Checked: false },
        { value: "checkbox4", Checked: false },
        { value: "checkbox5", Checked: false }
      ]      
    }
  }

  handleCheckedCheckboxes = (event) => {
    let checkboxes = this.state.checkboxes

    checkboxes.forEach(checkbox => {
       if (checkbox.value === event.target.value)
       checkbox.Checked = event.target.checked
    })
    
    this.setState({checkboxes: checkboxes})
  }
  
  totalCheckedCount() {
    return this.state.checkboxes.filter(props => props.Checked).length;
  }
  
  render() {
    return (
      <div>
        <h5><u>Select checkboxes</u></h5>
        <div>
          {
            this.state.checkboxes.map((checkbox, index) => {              
              return (
                  <CheckboxList key={index} 
                    handleCheckedCheckboxes={this.handleCheckedCheckboxes} 
                    {...checkbox} 
                />
              )
            })
          }

          <br />
          <hr />
          <h4>Total Checkbox Checked Count: { this.totalCheckedCount() }</h4>
        </div>
      </div>
    );
  }
}

export default App;
