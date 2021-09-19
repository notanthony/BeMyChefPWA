import React, {useState,useEffect} from 'react'
import '../../styles/leaderboard.css'
import MainHeader from '../global/MainHeader'
import useForceUpdate from 'use-force-update';



export default function Leaderboard(props) {
    const { guilds } = props
    const [sorted, setSorted] = useState([])
    const [ place, setPlace ] = useState('1st')


    useEffect(() => {
        console.log('use effect')
        getPlace()
        setSorted(bubbleSort())
    }, [])

    function bubbleSort(){
        let newArr = [...guilds]
        let len = guilds.length

        for (let i = len-1; i>=0; i--){
          for(let j = 1; j<=i; j++){
            if(newArr[j-1].points<newArr[j].points){
                let temp = newArr[j-1];
                newArr[j-1] = newArr[j];
                newArr[j] = temp;
             }
          }
        }

        for (let i= 0; i < newArr.length; i++){
            newArr[i].index = i+1
        }
        console.log(newArr)
        return(newArr)
     }

     function getPlace(){
         for (let i = 0; i < sorted.length; i++){
             if (sorted[i].name == props.guild.name) {
                console.log(sorted[i].index + " place ")
                setPlace(sorted[i].index)
                return 
             }
         }
     }


    return (
        <div>
            <MainHeader />
            <div className='leaderboard-flex' props={place}>
                {
                    props.guild.name
                    &&
                    <h1>{props.guild.name}</h1>
                }
                {
                    !props.guild.name
                    &&
                    <h1>Glen Shields Public School</h1>
                }
                <h2>{place} Place</h2>
                
                <div className='leaderboard-main'>
                    <h1>
                        Leaderboards:
                    </h1>
                    {
                        sorted.map((s)=>{
                            return <div className='leaderboard-item'>
                                <div className='leaderboard-flex-item'>
                                    <h2>{s.index}.</h2>
                                    <h2>{s.name}</h2>
                                </div>
                                <p>Points: {s.points}</p>
                            </div>
                        })
                    }
                    
                </div>
            </div>
        </div>
        
    )
}