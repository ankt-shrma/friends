import React from 'react';

const Searchbox = ({ onSearchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                onChange={onSearchChange}
                placeholder='search friends'
            />
        </div>
    );
}

export default Searchbox;