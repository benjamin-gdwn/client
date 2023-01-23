import React, { Fragment } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import familyIcon from '../assets/family.png';
import logoutIcon from '../assets/logout.png';

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={familyIcon} alt="Family" width='30' />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={logoutIcon} alt="Family" width='30' />
            </div>
        </div>

    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Family Messaging</p>
    </div>
)
const ChannelListContainer = () => {
  return (
    <Fragment>
        <SideBar />
        <div className="channel-list__list__wrapper">
            <CompanyHeader />
            <ChannelSearch />
        </div>
    </Fragment>
  )
}

export default ChannelListContainer