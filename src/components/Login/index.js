

import React from 'react';
import Api from '../../firebase/Api';
import '/Login.css';


export default() =>{

    const handleFacebookLogin = async () =>{
        let result = await Api.fbPopup();
        if(result){

        }
        else{
            alert('Error');
        }
    }

    <div className='login'>
        <buttoon onClick = {handleFacebookLogin}>Logar facebook</buttoon>
    </div>
}