import NonAccGradForm from './forms/NonAccGradForm';
import AccGradForm from './forms/AccGradForm';
import AccUnGradForm from './forms/AccUnGradForm';
import NonAccUnGradForm from './forms/NonAccUnGradForm'
import React, { useState } from 'react';
import "./FormSelector.css"


/**
 * @function
 * @returns A selection page w/ buttons to render forms.
 */
function FormSelector () {
    /**
     * React state to track which form user has selected.
     * @constant
     */
    const [selectedForm, setSelectedForm] = useState(null);
    
    /**
     * @function
     * @param {String} formName - Form the user has selected.
     */
    function handleFormSelect(formName) {
        setSelectedForm(formName);
    }

    /**
     * @function
     * @returns One of the four assessment forms.
     */
    function renderForm(){
        switch(selectedForm){
            case 'NAG':
                return <NonAccGradForm/>;
            case 'AG':
                return <AccGradForm/>;
            case 'AUG':
                return <AccUnGradForm/>;
            case 'NAUG':
                return <NonAccUnGradForm/>;
            default:
                return null;
        }
    }


    return (
        <div className='FormSelector-main'>
            <div className='FormSelector-sidebar'>
                <div class='list-group' className=""  style={{ textAlign: 'center' }}>
                    <h2>Assessment Reports</h2>
                    <button class="list-group-item ag-button"
                    onClick={() => handleFormSelect('AG')}>Accredited Graduate</button>
                    <button class="list-group-item aug-button"
                     onClick={() => handleFormSelect('AUG')}>Accredited Undergraduate</button>
                    <button class="list-group-item nag-button"
                    onClick={() => handleFormSelect('NAG')}>Non-Accredited Graduate</button>
                    <button class="list-group-item naug-button"
                    onClick={() => handleFormSelect('NAUG')}>Non-Accredited Undergraduate</button>
                </div>
            </div>
            <div className='FormSelector-form'>
                {renderForm()}
            </div>
      </div>
    )
}

export default FormSelector;