import NonAccGradForm from './forms/NonAccGradForm';
import React, { useState } from 'react';
import "./FormSelector.css"



function FormSelector () {
    const [selectedForm, setSelectedForm] = useState(null);
    
    function handleFormSelect(formName) {
        setSelectedForm(formName);
    }

    function renderForm(){
        switch(selectedForm){
            case 'form':
                return <NonAccGradForm/>;
            default:
                return null;
        }
    }


    return (
        <div className='FormSelector-main'>
            <div className='FormSelector-sidebar'>
                <div class='list-group' className=""  style={{ textAlign: 'center' }}>
                    <h2>Assessment Reports</h2>
                    <button class="list-group-item">Accredited Graduate</button>
                    <button class="list-group-item">Accredited Undergraduate</button>
                    <button class="list-group-item"
                    onClick={() => handleFormSelect('form')}>Non-Accredited Graduate</button>
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