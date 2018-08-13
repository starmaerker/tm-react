import React from'react';
import PropTypes from 'prop-types';

export default function PlayerPreview({ username, children, avatar }) {
    return (
        <div>
            <div className='column'>
                <img
                    className='avatar'
                    src={avatar}
                    alt={'Avatar for ' + username}
                />
                <h2 className='username'>@{username}</h2>                
            </div>
            {children}            
        </div>
    )
}

PlayerPreview.PropTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired    
}