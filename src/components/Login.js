import React from 'react';
import {useGoogleLogin } from '@react-oauth/google';
import {useEffect,useState} from "react"
import cryptojs from 'crypto-js'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import './login.css'

import { FcGoogle } from "react-icons/fc";

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

const CLIENT_ID = "267710461668-9vp369a1k266vpqbdo9buutq5tuptre6.apps.googleusercontent.com"
const SITE_KEY = "6LeZjCMgAAAAAMh1jdQbw6SL-hxZyjgu_UsCCOHB"

function Login({userIp=null}) {

    let userAddr=null;
    const [email, setEmail] = useState(null)
    const [password,setPassword] = useState(null)

    useEffect(() => {
		const loadScriptByURL = (id, url, callback) => {
		  const isScriptExist = document.getElementById(id);
	   
		  if (!isScriptExist) {
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.src = url;
			script.id = id;
			script.onload = function () {
			  if (callback) callback();
			};
			document.body.appendChild(script);
		  }
	   
		  if (isScriptExist && callback) callback();
		}
	   
		loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
		  console.log("Script loaded!");
		});
		loadScriptByURL("api-script","https://www.google.com/recaptcha/api.js?trustedtypes=true")
	  }, []);




    const onGoogleAuth = async response => {
        const token = await getGCaptchToken()
        const data = await response.json()
        if (userIp)
			 userAddr= cryptojs.enc.Hex.stringify(cryptojs.SHA1(userIp.ip));

		headers.set("cookies",`userAddr=${userAddr||''}`)

        fetch("http://localhost:8080/member/login",{method:"POST",headers:headers, body:JSON.stringify({
            code:data.access_token,
            action:"googleAuth",
            gRecaptchaResponse: token
        })}).then(response=>{
            if(response.ok){
                console.log(response.headers.get("Authorization"))
                //TODO: perform task when login success
            }else{
                //TODO:perform task when login failed possible errors : Verification fail,
            }
        }).catch(error=>{
            console.log(error)
        })
      };
      
      const onGoogleError = error => {
        console.error("Failed");
        //TODO: Handle the failed situation here
      };

    const signIn = useGoogleLogin({
            client_id : CLIENT_ID,
            onSuccess: onGoogleAuth,
            onError:onGoogleError,
            flow:"implicit"
        });

        const getGCaptchToken = async() => {			
            let token = "";
            await window.grecaptcha.execute(SITE_KEY, {action: "submit"})
                .then((res) => {
                    token = res;
                })
            return token;	
          }

        
        const performLogin = async () =>{
            // e.preventDefault()

            //check if the either email or password must not ne null or empty

            if(!email){
                //Handle invalid email situation
                console.log("empty email")
                return ;
                }
        
                if(!password){
                    //Handle empty password situation
                    console.log("empty passwrod")
                    return ;
                    
                    }

            //DO NOT CHANGE BELOW THIS
            let pass = cryptojs.enc.Hex.stringify(cryptojs.SHA1(password));			
            
            console.log("getting user ip as ")
            console.log(userIp)
            if (userIp)
			 userAddr= cryptojs.enc.Hex.stringify(cryptojs.SHA1(userIp.ip));

			headers.append("cookies",`userAddr=${userAddr||''}`)

            const token = await getGCaptchToken()

            //getting the details user Auth token
            fetch('http://localhost:8080/member/login',{
				method:'POST',
				mode:'cors',
				headers: headers,
				body: JSON.stringify(Object.entries({email:email, password:pass,gRecaptchaResponse: token}).reduce((a,[k,v]) => (v == null ? a : (a[k]=v, a)), {}))
			}).then(async response => {

                delete headers['cookies']

                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();

                if (!response.ok) {

                    // get error message from body or default to response status						
                    const error = (data && data.message) || response.status;
                    if((data instanceof Object)){
                        if(data.statusCode === 'EmailUnverified')
                            {

                                //Email not verified, handle this situation here
                                return;
                            }else if(data.statusCode === 'ProxyError'){

                                //proxy detected. (Could be a false alarm as well)
                                return;
                            }else if(data.statusCode === 'HostForbidden'){

                                //User possibly using Automation (Could be false alarm)
                                return;
                            }
                    }
                    
                }else{	
                    
                    let auth = response.headers.get("Authorization")
                    if(!auth){
                        //Authentication token not found situation
                    }

                    //saving the auth token of the user in the local storage
                    localStorage.setItem("AuthToken",auth);
                    
            
                    console.log("Auth token is "+auth)
                    
                }
            }
        ).catch(error => {
            console.error('There was an error!', error);
        })

        }

    return (
        <>
            <div className='login2-container'>

                <MDBContainer fluid>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>

                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 mb-5">Login to Writekit</h2>
                                    <div className='google-container'>
                                        <MDBBtn outline className='mx-2 px-5 btn-rounded google-login' color='white' size='lg' style={{ textTransform: "none" }} onClick={()=>{console.log("clicked");signIn()}}>
                                           <FcGoogle/> 
                                           Login with Google
                                        </MDBBtn>
                            
                                    </div>
                                    <p className="small mb-3 pb-lg-2 text-white-50">or</p>

                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLgEmail' type='email' size="lg" onChange={(e)=>setEmail(e.target.value)}  className='text-white-50'/>
                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLgPassword' type='password' size="lg" onChange={(e)=>setPassword(e.target.value)} className='text-white-50'/>

                                    <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="forgot-password">Forgot password?</a></p>
                                    <MDBBtn outline className='mx-2 px-5 btn-rounded mb-4 login-btn' color='white' size='lg' onClick={()=>performLogin()}>
                                        Login
                                    </MDBBtn>

                
                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="signup" className="text-white-50 fw-bold">Sign Up</a></p>

                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
            </div>
        </>
    );
}

export default Login;