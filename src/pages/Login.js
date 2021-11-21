import React, { useState, useEffect } from 'react'; import {


    useHistory,
    Link
} from "react-router-dom";
import Dropdown from 'react-dropdown';
// import { Country, State, City }  from 'country-state-city';
import { getCountries, getStates } from 'country-state-picker';

import { SingUp, SingIn } from '../functions/user'
import { auth } from '../firebase';
import Load from '../help/loadder';
// import {use} from 'react';



const User = ({ isSingIn }) => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comform_password, setComform_password] = useState('');
    const [state, setstate] = useState('');
    const [contry, setcontry] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const history = useHistory();


    const [isSame, setIsSame] = useState(false);
    const [text, settext] = useState('');

    const [countrydic, setclist] = useState(getCountries().map((data) => data.name));
    const [statedic, setslist] = useState([]);

    useEffect(() => {
        console.log(auth.currentUser);

    }, [])


    useEffect(() => {
        const name = contry;

        if (!name) {
            return;
        }
        console.log(name)
        let new_dic = [];
        if (name == 'India') {
            new_dic = getStates('in')
        } else {
            const code = getCountries().find((data) => data.name = name).code;
            new_dic = getStates(code)
        }
        setslist(new_dic);



    }, [contry])


    const SingUpValidate = () => {


        if (contry == {} || state == {}) {
            setIsSame(true);
            settext('Please Select Contry and State');
            return false;
        }

        if (password !== comform_password) {
            setIsSame(true);
            settext('Both Password Must be same');
            return false;
        }

        return true;


    }

    const MakeUserIn = async (e) => {

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        let data = { email, password }



        if (!isSingIn) {
            const tem = SingUpValidate();
            if (!tem) {
                setTimeout(() => {

                    setIsSame(false);

                }, 5000)
                return;
            }

            data = { ...data, contry, state, name };

        }



        try {

            setIsLoad(true);

            if (isSingIn) {

                await SingIn(data)

                    .then(() => {
                        setIsLoad(false)

                        history.push('/');
                    }
                    )


            } else {

                await SingUp(data)
                    .then(() => {
                        setIsLoad(false)
                        history.push('/');
                    })

            }

            history.push('/');

        } catch (e) {

            settext(e.message);
            setIsSame(true);
            setIsLoad(false);

            console.log(e.message)

            setTimeout(() => {

                setIsSame(false);

            }, 5000)

        }



    }



    return (



        <div className="center">

            <h3>{isSingIn ? 'Sing In' : 'Sing Up'}</h3>
            {
                isLoad && <Load></Load>
            }

            <form className="form">

                {isSame && <span>{text}</span>}

                {

                    !isSingIn

                    &&

                    <div>

                        <span>Name:</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required>
                        </input>
                    </div>
                }

                <div>

                    <span>Email:</span>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required>
                    </input>
                </div>
                <div>

                    <span>Password:</span>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required>
                    </input>
                </div>

                {
                    !isSingIn

                    &&
                    <>

                        <div>

                            <span>Password Again:</span>
                            <input type="password" value={comform_password} onChange={(e) => setComform_password(e.target.value)} required>
                            </input>
                        </div>
                        <div>
                            <span>country</span>
                            <Dropdown options={countrydic} onChange={(d) => setcontry(d.value)} placeholder="Select an country" />
                        </div>
                        <div>

                            <span>State:</span>
                            <input type="text" value={state} onChange={(e) => setstate(e.target.value)} required>
                            </input>
                        </div>
                    </>


                }

                {
                    isSingIn
                    &&

                    <div>
                        <Link href="/#">Forget Password</Link>
                    </div>
                }


                <button className="btn"
                    onClick={(e) => MakeUserIn(e)}

                >{isSingIn ? 'Sing In ⎆' : 'Sing Up ⎆'}


                </button>
                <div>

                    {
                        !isSingIn
                            ?
                            <span>
                                Hove Account Sing In

                                <Link to="sing-in">Hear</Link>

                            </span>
                            :
                            <span>
                                Don't Hove Account Sing Up

                                <Link to="sing-up">Hear</Link>

                            </span>
                    }


                </div>
            </form>


        </div>
    );
}

export default User;
