import React, {useState} from 'react'
import '../../styles/tip.css'
import MainHeader from '../global/MainHeader'

export default function TipPage(props) {

    

    const tipList =[  
    'Roll lemons or limes between the counter and the heel of your hand to make them easier to juice',
    'Peel ginger with a spoon!',
    'Discard the seeds from hot peppers to reduce the heat a bit',
    'Use overripe bananas for the best banana bread',
    'Microwave pizza with water',
    'Grate butter for easy spreading',
    'Microwave lemons to get more juice'];

   const min = 0;
   const max = tipList.length -1;
   var rand = Math.floor(Math.random() * (max-min));
   
    return (
        <div className='page-flex'>
            <img 
                className='img'
                src='https://i.imgur.com/fe3m6vx_d.webp?maxwidth=760&fidelity=grand'
                alt='icon'
            >
            </img>
           <h2 className='tip-text'>
               RANDOM COOKING TIP!
            </h2>
            <h2 className='tip-text'>
               {tipList[rand]}
           </h2>
        </div>
        
        
    )
}