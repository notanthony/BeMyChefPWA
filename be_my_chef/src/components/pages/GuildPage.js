import React, { useEffect, useState } from 'react'
import MainHeader from '../global/MainHeader'
import '../../styles/guild.css'
import { ingredientsSearch } from '../../api'

export default function GuildPage(props) {
    console.log(props.preferences)
    const { guilds,  schoolId, guild} = props.preferences

    let points = guild.points
    let place = guild.place
    let guildName = guild.name


    for (let i = 0; i < guilds.length; i++){
        if (schoolId && schoolId == guilds.id){
            guild = guilds[i]
            points = guilds.points;
            guildName = guilds[i].name
            console.log("guild name"  + guildName)
        }
    }

    let tempPlace = 2;
    for (let i = 0; i < guilds.length; i++){
        if (guilds[i].points > points) tempPlace ++
    }
    
    
    
    
    return (
        <div>
            <MainHeader />
            <div className='guild-div'>
                <h1 className='guild-title'>
                    {
                        schoolId
                        &&
                        <h1>{guildName}</h1>
                    }
                    {
                        !schoolId
                        &&
                        <h1>Glen Shields Public School</h1>
                    }
                </h1>
                <div className='place-display'>
                    <div className='medal-display'>
                    {
                        place == '1st'
                        &&
                        <img 
                            src='https://i.imgur.com/CHIM4pL.png'
                            className='trophy-img'
                        >
                        </img>
                    }
                    {
                        place == '2nd'
                        &&
                        <img
                            src='https://i.imgur.com/36uDrxB.png'
                            className='trophy-img'  
                        >
                        </img>
                    }
                    {
                        place == '3rd'
                        &&
                        <img
                            src='https://i.imgur.com/3upu9UC.png'
                            className='trophy-img'
                        >
                        </img>
                    }
                    {
                        place > 3
                        &&
                        <img
                        className='trophy-img'
                        >
                        </img>
                    }
                    </div>
                    <div className='score-info-div'>
                        <h2>
                        Your guild is in {place} place!
                        </h2>
                    </div>
                </div>
                <div className='leaderboard-btn'>
                    View Leaderboard
                </div>
                <div className='guild-activity'>
                    <h1>Recent Activity</h1>

                </div>
            </div>
        </div>
        
        
    )
}