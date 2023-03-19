import NonAccGradForm from './forms/NonAccGradForm';
import AccGradForm from './forms/AccGradForm'
import React, { useState } from 'react';
import "./FormSelector.css"



function FormSelector () {
    const [selectedForm, setSelectedForm] = useState(null);
    
    function handleFormSelect(formName) {
        setSelectedForm(formName);
    }

    function renderForm(){
        switch(selectedForm){
            case 'NAG':
                return <NonAccGradForm/>;
            case 'AG':
                return <AccGradForm/>;
            default:
                return null;
        }
    }


    return (
        <div className='FormSelector-main'>
            <div className='FormSelector-sidebar'>
                <div class='list-group' className=""  style={{ textAlign: 'center' }}>
                    <h2>Assessment Reports</h2>
                    <button class="list-group-item"
                    onClick={() => handleFormSelect('AG')}>Accredited Graduate</button>
                    <button class="list-group-item">Accredited Undergraduate</button>
                    <button class="list-group-item"
                    onClick={() => handleFormSelect('NAG')}>Non-Accredited Graduate</button>
                    <button class="list-group-item">Non-Accredited Undergraduate</button>
                </div>
            </div>
            <div className='FormSelector-form'>
                {renderForm()}
            </div>
      </div>
    )
}

export default FormSelector;