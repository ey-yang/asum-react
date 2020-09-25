import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Account from '../../components/auth/Account';

import { writeImage, changeField, initializeForm } from '../../modules/account';
import { withRouter } from 'react-router-dom';

const AccountContainer = () => {

    
   

    return (
        <Account  />
    )
}

export default withRouter(AccountContainer);