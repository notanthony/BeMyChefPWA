import React, {useState} from 'react'
import '../../styles/survey.css'
import {SnapShareButton} from '../global/Share'
import { Link, useHistory } from 'react-router-dom'

export default function SurveyPage(props) {
    
    const { preferences } = props

    const [ step, setStep ] = useState(0)
    const [ intolerancesArr, setIntolerancesArr ] = useState([])
    const [ cuisinesArr, setCuisinesArr ] = useState([])
    const [ school, setSchool ] = useState()

    // 0 - start survey
    // 1 - dietary restrictions
    // 2 - cuisine 
    // 3 - school
    // 4 - submit


    const nextStep = function(){
        setStep(step + 1)
    }

    const prevStep = function(){
        if (step != 0) setStep(step - 1)
    }
    
    const history = useHistory()

    const submitIntolerances = async function(){
        let intolerances = []
        let checkboxes = document.getElementsByName('intolerances');
        checkboxes.forEach((c) => {
            if (c.checked) intolerances.push(c.value)

        })
        
        await setIntolerancesArr(intolerances)
        console.log(intolerancesArr)
    }

    const submitSchool = async function(){
        let radios = document.getElementsByName('school')
        radios.forEach(async (r) => {
            if (r.checked){
                const id = r.value.substring(7)
                await setSchool(id)
            }
        })
    }

    const submitCuisine =  async function(){
        let cuisines = []
        let checkboxes = document.getElementsByName('cuisines');
        checkboxes.forEach((c) => {
            if (c.checked) cuisines.push(c.value)
        })
        await setCuisinesArr(cuisines)
        console.log(cuisinesArr)
    }

    const handleNext = async function(e){
        e.preventDefault()
        switch (step){
            case 1:
                await submitIntolerances()
                break;
            case 2: 
                await submitCuisine()
                break;
            case 3:
                await submitSchool()
                break;
            default: 
        }

    }

    return (
        <div className='survey-main'>
            <div className='survey-header-card'>
                <h1>Food Survey</h1>
                <h3>Please fill out this quick survey so we can find the best recipes for you</h3>
            </div>
            <div className='survey-rotary'>
                {
                    step == 0
                    &&
                    <>
                    <div className='main-btn' onClick={() => {setStep(1)}}>
                        Start Survey
                    </div>
                    <div className='main-btn' onClick={() => {setStep(4)}}>
                        Skip For Now
                    </div>
                    </>
                }
                {
                    step == 1 
                    &&
                    <>
                <div>
                    <h1>Do You Have Food Intolerances?</h1>
                    <p>(Select all that apply)</p>
                </div>

                <form className='survey-form' >
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='dairy'
                        ></input>
                        <label>
                            {"  "}Dairy
                        </label>
                    </div>
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='egg'
                        ></input>
                        <label>
                            {"  "}Egg
                        </label>
                    </div>
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='gluten'
                        ></input>
                        <label>
                            {"  "}Gluten
                        </label>
                    </div>
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='grain'
                        ></input>
                        <label>
                            {"  "}Grain
                        </label>
                    </div>
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='peanut'
                        ></input>
                        <label>
                            {"  "}Peanut
                        </label>
                    </div>
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='seafood'
                        ></input>   
                        <label>
                            {"  "}Seafood
                        </label>
                    </div>
                    <div>
                        <input
                            name='intolerances' 
                            type='checkbox'
                            value='sesame'
                        ></input>
                        <label>
                            {"  "}Sesame
                        </label>
                    </div>
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='shellfish'
                        ></input>
                        <label>
                            {"  "}Shellfish
                        </label>
                    </div>
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='soy'
                        ></input>
                        <label>
                            {"  "}Soy
                        </label>
                    </div>
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='sulfite'
                        ></input>
                        <label>
                            {"  "}Sulfite
                        </label>
                    </div>
                    <div>
                        <input 
                            name='intolerances'
                            type='checkbox'
                            value='tree nut'
                        ></input>
                        <label>
                            {"  "}Tree Nut
                        </label>
                    </div>
                    <div>
                        <input
                            name='intolerances' 
                            type='checkbox'
                            value='wheat'
                        ></input>
                        <label>
                            {"  "}Wheat
                        </label>
                    </div>

                </form>
                    </>
                }
                {
                    step == 2 
                    &&
                    <>
                <div>
                    <h1 className='no-wrap-header'>What Cuisines Are You Intrested In?</h1>
                    <p>(Select all that apply)</p>
                </div>

                <form className='survey-form' >
                    <div>
                        <input 
                            name='cuisines'
                            type='checkbox'
                            value='african'
                        ></input>
                        <label>
                            {"  "}African
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='american'
                        ></input>
                        <label>
                            {"  "}American
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='cajun'
                        ></input>
                        <label>
                            {"  "}Cajun
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='caribbean'
                        ></input>
                        <label>
                            {"  "}Caribbean
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='chinese'
                        ></input>
                        <label>
                            {"  "}Chinese
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='french'
                        ></input>
                        <label>
                            {"  "}French
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='greek'
                        ></input>
                        <label>
                            {"  "}Greek
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='indian'
                        ></input>
                        <label>
                            {"  "}Indian
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='italian'
                        ></input>
                        <label>
                            {"  "}Italian
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='japanese'
                        ></input>
                        <label>
                            {"  "}Japanese
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='korean'
                        ></input>
                        <label>
                            {"  "}Korean
                        </label>
                    </div>
                    <div>
                    <input 
                            name='cuisines'
                            type='checkbox'
                            value='mexican'
                        ></input>
                        <label>
                            {"  "}Mexican
                        </label>
                    </div>

                </form>
                    </>
                }
                {
                    step == 3
                    &&
                    <>
                     <div>
                        <h1>Please Select Your School:</h1>
                        <p></p>
                    </div>
                    <div className='survey-form radio-form'>
                        
                        <div>
                            <input 
                                type='radio' 
                                name='school'
                                value='school-12'
                            >
                            </input>
                            <label>
                                {"  "}Aime Renaud High School
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-13'
                            ></input>
                            <label>
                                {"  "}Beurling Academy
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-1'
                            ></input>
                            <label>
                                {"  "}Collège Jean-Eudes
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-1'
                            ></input>
                            <label>
                                {"  "}Collège Regina Assumpta
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-2'
                            ></input>
                            <label>
                                {"  "}École internationale de Montréal
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-3'
                            ></input>
                            <label>
                                {"  "}École secondaire Eulalie-Durocher
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-4'
                            ></input>
                            <label>
                                {"  "}Emmanuel Christian School, Quebec
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-5'
                            ></input>
                            <label>
                                {"  "}Greaves Adventist Academy
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-6'
                            ></input>
                            <label>
                                {"  "}Kells Academy
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-7'
                            ></input>
                            <label>
                                {"  "}Lindsay Place High School
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-8'
                            ></input>
                            <label>
                                {"  "}James Lyng High School
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-9'
                            ></input>
                            <label>
                                {"  "}École Maïmonide
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-10'
                            ></input>
                            <label>
                                {"  "}Marymount Academy
                            </label>
                        </div>
                        <div>
                        <input 
                                type='radio' 
                                name='school'
                                value='school-11'
                            ></input>
                            <label>
                                {"  "}John Rennie High School
                            </label>
                        </div>
                    </div>
                    

                        </>
                }
                {
                    step == 4
                    &&
                    <>
                    <h1 className='header-main'>All Done!</h1>
                    <h1>You can retake the survey any time to change your answers.</h1>
                    <h1>Go to My Profile {"->"} Survey</h1>

                    <div className='main-btn' onClick={() => {

                        preferences.setSchool(school)
                        preferences.setPreferences(intolerancesArr, cuisinesArr)
                        history.push('/profile')
                    }}>
                        Done
                    </div>

                    </>
                }
                {
                    step !== 0 && step !== 4 
                    &&
                    <>
                    <div className='progress-bar'>
                        {
                            step >= 1 
                            &&
                            <div className='bar'></div>   
                        }
                        {
                            step >= 2 
                            &&
                            <div className='bar'></div>
                        }
                        {
                            step >= 3 
                            &&
                            <div className='bar'></div>
                        }
                    </div>
                    <div className='btn-bar'>
                        <div 
                            onClick={(e)=>{
                                
                                handleNext(e)
                                prevStep()
                            }}
                        >
                            Prev
                        </div>
                        <div 
                            onClick={(e)=>{
                                
                                handleNext(e)
                                nextStep()
                            }}
                        >
                            Next
                        </div>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}
