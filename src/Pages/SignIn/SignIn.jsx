import React from 'react'
import sideview from '../../assets/sideview.jpg'
import { SigninLogic } from './Signin.logic'

const SignIn = () => {
    const {
        handleSignin,
        email,
        setEmail,
        password,
        setPassword
    } = SigninLogic();
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
                <div className="p-24 bg-white md:flex-1">
                    <h3 className="my-2 text-2xl font-semibold text-grey700">Welcome Back!</h3>
                    <p className="text-sm mb-6 text-grey600">Please Enter your details.</p>
                    <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-3">
                            <div class="w-full md:w-7/12 px-3 mb-6 md:mb-0">
                                <label class="tracking-wide text-grey600 text-xs font-bold mb-2 flex flex-row" for="grid-first-name">
                                    Email Address  <p class="text-red text-xs italic">*</p>
                                </label>
                                <input value={email} class="appearance-none block w-full  text-grey600 border border-grey550  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jane@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-7/12 px-3">
                                <label class="tracking-wide text-grey600 text-xs font-bold mb-2 flex flex-row" for="grid-first-name">
                                    Password  <p class="text-red text-xs italic">*</p>
                                </label>
                                <input value={password} class="appearance-none block w-full  text-grey600 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none border-grey550 focus:bg-white focus:border-grey550" id="grid-password" type="password" placeholder="******************"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* remember me checkbox and forget passowrd */}
                        <div className="flex flex-row justify-between mb-10 w-7/12">
                            <div className="flex flex-row">
                                <input type="checkbox" className="mr-2" />
                                <p className="text-grey600 text-xs">Remember me</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-purpleDark text-xs">Forgot Password?</p>
                            </div>
                        </div>

                        {/* sign In button */}
                        <div class="md:flex md:items-center">
                            <div class="md:w-1/3">
                                <button class="shadow bg-purpleDark text-xs px-6 w-60 py-3 focus:shadow-outline focus:outline-none text-white" type="button"
                                    onClick={() => handleSignin(email, password)}
                                >
                                    Log In
                                </button>
                            </div>
                            <div class="md:w-2/3"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
