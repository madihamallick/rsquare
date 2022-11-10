import React from 'react'
import sideview from '../../assets/sideview.jpg'
import { SignupLogic } from './Signup.logic'

const SignUp = () => {
    const {
        fname,
        setFname,
        lname,
        setLname,
        email,
        setEmail,
        phone,
        setPhone,
        password,
        setPassword,
        handleSignup
    } = SignupLogic();

    return (
        <div className="flex items-center min-h-screen p-4 bg-grey400 lg:justify-center" style={{
            fontFamily: "'Manrope', sans-serif"
        }}>
            <div
                className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-lg"
            >
                <div
                    style={{
                        backgroundImage: `url(${`${sideview}`})`,
                    }}
                    className="p-8 py-14 text-white  md:w-4/12 md:flex-shrink-0 md:flex md:flex-col md:items-center "
                >
                    <div className="my-3 text-4xl font-bold  text-left " >
                        <a href="/">Welcome to Rsquare.</a>
                    </div>
                    <p className="mt-6 text-sm text-left text-grey300">
                        Lets get you all set up so start with your account and begin setting up your profile.
                    </p>
                </div>
                <div className="p-16 bg-white md:flex-1">
                    <h3 className="my-2 text-2xl font-semibold text-grey700">Begin your journey!</h3>
                    <p className="text-sm mb-6 text-grey600">Get started with the best platform for design</p>
                    <div class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="tracking-wide text-grey600 text-xs font-bold mb-2 flex flex-row" >
                                    First Name  <p class="text-red text-xs italic">*</p>
                                </label>
                                <input value={fname} class="appearance-none block w-full text-grey600 border border-grey550  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane"
                                    onChange={(e) => setFname(e.target.value)} />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="tracking-wide text-grey600 text-xs font-bold mb-2 flex flex-row" >
                                    Last Name  <p class="text-red text-xs italic">*</p>
                                </label>
                                <input value={lname} class="appearance-none block w-full  text-grey600 border border-grey550 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey550" type="text" placeholder="Doe"
                                    onChange={(e) => setLname(e.target.value)} />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="tracking-wide text-grey600 text-xs font-bold mb-2 flex flex-row" >
                                    Email Address  <p class="text-red text-xs italic">*</p>
                                </label>
                                <input value={email} class="appearance-none block w-full  text-grey500 border border-grey550  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="tracking-wide text-grey600 text-xs font-bold mb-2 flex flex-row" >
                                    Phone Number  <p class="text-red text-xs italic">*</p>
                                </label>
                                <input value={phone} class="appearance-none block w-full  text-grey600 border border-grey550 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey550" type="text" placeholder="+91"
                                    onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-6/12 px-3">
                                <label class="tracking-wide text-grey600 text-xs font-bold mb-2 flex flex-row" >
                                    Password  <p class="text-red text-xs italic">*</p>
                                </label>
                                <input value={password} class="appearance-none block w-full  text-grey600 border border-grey550 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey550" id="grid-password" type="password" placeholder="******************"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-8">
                            <div class="w-full px-3">
                                <label class="flex items
                                -center">
                                    <input type="checkbox" class="form-checkbox h-4 w-4 text-grey600" />
                                    <span class="ml-2 text-xs text-grey600">By signing up, you agree to our <a href="/" class="text-purpleDark"> User Agreement, Terms of Service, & Privacy Policy</a></span>
                                </label>
                            </div>
                        </div>
                        {/* sign up button */}
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3">
                                <button class="shadow bg-purpleDark text-xs px-6 w-60 py-3 focus:shadow-outline focus:outline-none text-white" type="button"
                                    onClick={() => handleSignup(fname, lname, email, phone, password)}
                                >
                                    Sign Up
                                </button>
                            </div>
                            <div class="md:w-2/3"></div>
                        </div>
                        <div>
                            <p class="text-xs text-grey600 mt-4">Already have an account? <a href='/login' class="text-purpleDark">Sign in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
