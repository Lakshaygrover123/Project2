import React from 'react'
import classes from "../styles/Signup.module.scss";
import Rocket from "../assets/preview.gif"
import { FcGoogle } from "react-icons/fc";
import { AiOutlineArrowRight, AiFillGithub } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const Navigate=useNavigate()
    return (
        <main className={classes.Container}>
            <section>
                <img src={Rocket} className={classes.Rocket} />
                <div className={classes.HeadingDiv}>
                    <h2>Welcome To Bardeen</h2>
                    <p>Let's Login to launch your Automation.</p>
                </div>
                <div className={classes.InputDiv}>
                    <input type="text" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <div className={classes.Pointers}>
                    <h5>Create Account</h5>
                    <h5>Forgot Password?</h5>
                </div>
                <button className={classes.SignupBtn} onClick={()=>Navigate('/home')}>Sign in</button>
                <div className={classes.SocialLinks}>
                    <Link to="/home"><button>
                        <div>
                            <FcGoogle className={classes.logo} />
                            Signup With Google
                        </div>
                        <AiOutlineArrowRight />
                    </button>
                    </Link>
                    <Link to="/home">
                        <button>
                            <div>
                                <AiFillGithub className={classes.logo} />
                                Signup With Github
                            </div>
                            <AiOutlineArrowRight />
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Signup