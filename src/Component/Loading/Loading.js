import React from 'react';
import Spinner from '../../assets/spinner/spinner.gif'

const Loading = () => {
    return (
        <div>
            <img className='h-3/6 w-3/6 mx-auto ' src={Spinner} alt="" />
        </div>
    );
};

export default Loading;