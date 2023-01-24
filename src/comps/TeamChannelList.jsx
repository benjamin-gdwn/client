import React from 'react';
import {AddChannel} from '../assets/AddChannel';

const TeamChannelList = (props, {children, error = false, loading, type}) => {
    // Handling the error state
    if(error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error please wait a minute!
                </p>
            </div>
        ): null
    }

    // Handling the loading state
    if(loading) {
        return  (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'Channels' : 'Messages'} Loading...
                </p>
            </div>
        )
    }

  return (
    <div className="team-channel-list">
        <div className="team-channel-list__header">
            <p className="team-channel-list__header__title">
            {type === 'team' ? 'Channels' : 'Direct Messages'}
            </p>
            {/* Button - add channel */}
        </div>
    {children}
    </div>
  )
}

export default TeamChannelList;