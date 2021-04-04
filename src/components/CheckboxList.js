import React from 'react';

const CheckboxList = props => {
    return (
        <div>      
            <input 
                type="checkbox"
                value={props.value} 
                onClick={props.handleCheckedCheckboxes}                  
                checked={props.Checked} 
                onChange={()=>{}}
            /> 
            {props.value}
        </div>
    );
};
    

export default CheckboxList;