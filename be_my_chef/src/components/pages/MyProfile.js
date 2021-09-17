import React from 'react'
<<<<<<< Updated upstream
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import '../../styles/homepage.css'

=======
import '../../styles/default.css'
import MainHeader from '../global/MainHeader'
>>>>>>> Stashed changes

export default function MyProfile(props) {
    
    return (
<<<<<<< Updated upstream
        
        <View>
        <div className='homepage-flex'>
            
            <h2 className='welcome-text'>{props.name}</h2>
            <img 
                src='https://i.imgur.com/fe3m6vx_d.webp?maxwidth=760&fidelity=grand'
                alt='user_pic'
                className='main-img'
            >
            </img>
            
            <p>I love to cook in my free time</p>
            <ScrollView style={{flex: 1}}>
            
            <h2 className='profile-text'>J LIKED RECIPES</h2>
            <img 
                src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
                alt='recipe_pic'
                className='main-img'
            ></img>
            
            </ScrollView>
          
=======
        <div className='main-flex'>
            <MainHeader />

>>>>>>> Stashed changes
        </div>
        </View>
        
        
    )
}