import React, {useState} from 'react'
import '../../styles/survey.css'
import { Link, useHistory } from 'react-router-dom'

export default function SurveyPage() {
    
    const [ step, setStep ] = useState(0)

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

                <form className='survey-form' onSubmit={null}>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Dairy
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Egg
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Gluten
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Grain
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Peanut
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Seafood
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Sesame
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Shellfish
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Soy
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Sulfite
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Tree Nut
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
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
                    <h1>What Cuisines Are You Intrested In?</h1>
                    <p>(Select all that apply)</p>
                </div>

                <form className='survey-form' onSubmit={null}>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}African
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}American
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Cajun
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Caribbean
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Chinese
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}French
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Greek
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Indian
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Italian
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Japanese
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
                        <label>
                            {"  "}Korean
                        </label>
                    </div>
                    <div>
                        <input type='checkbox'></input>
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
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Selwyn House School
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Aime Renaud High School
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Beurling Academy
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Collège Jean-Eudes
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Collège Regina Assumpta
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}École internationale de Montréal
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}École secondaire Eulalie-Durocher
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Emmanuel Christian School, Quebec
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Greaves Adventist Academy
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Kells Academy
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Lindsay Place High School
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}James Lyng High School
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}École Maïmonide
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
                            <label>
                                {"  "}Marymount Academy
                            </label>
                        </div>
                        <div>
                            <input type='radio' name='school'></input>
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
                    history.push('/')
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
                    </div>
                    <div className='btn-bar'>
                        <div onClick={()=>{prevStep()}}>
                            Prev
                        </div>
                        <div onClick={()=>{nextStep()}}>
                            Next
                        </div>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}
