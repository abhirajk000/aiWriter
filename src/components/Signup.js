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
}
    from 'mdb-react-ui-kit';
import './signup.css'

import { FcGoogle } from "react-icons/fc";

let headers = new Headers();

headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');

const CLIENT_ID = "267710461668-9vp369a1k266vpqbdo9buutq5tuptre6.apps.googleusercontent.com"
const SITE_KEY = "6LeZjCMgAAAAAMh1jdQbw6SL-hxZyjgu_UsCCOHB"

function Signup({userIp=null}) {

    let userAddr=null;
    const [email, setEmail] = useState(null)
    const [username, setUsername] = useState(null)
    const [password,setPassword] = useState(null)
    const [name,setName] = useState(null)

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

          const performSingIn = async()=>{

            if(!name){
                console.log("name empty")
                //Handle name is empty
                return;
            }
            if(!username){
                console.log("username empty")
                //Handle name is empty
                return;
            }
        
                if(!email){
                    console.log("username is empty")
                    //handle the username empty situation
                        return;
                    }
        
                if(!password){
                    console.log("password is empty")
                    // Handle password empty sitauaion
                    return ;
                    
                    }
        
                    let pass = cryptojs.enc.Hex.stringify(cryptojs.SHA1(password))
        
                    var gToken = await getGCaptchToken()
            
                    fetch('http://localhost:8080/member/register',{
                        method:'POST',
                        mode:'cors',
                        headers: headers,
                        body: JSON.stringify(Object.entries({name:name,email:email,username:username,password:pass,gRecaptchaResponse: gToken}).reduce((a,[k,v]) => (v == null ? a : (a[k]=v, a)), {}))
                    }).then(
                        async response => {

                            const isJson = response.headers.get('content-type')?.includes('application/json');
                            const data = isJson && await response.json();
                
                        
                            if (!response.ok) {
                                const error = (data && data.message) || response.status;
                                console.log(error)
                                return ;
                            }else{
                                //handle success situation
                                console.log(response.body)
                                return ;
                            }
                        }
                    ).catch(error => {
                        console.error('There was an error!', error);
                    })

          }


    return (
        <>
            <div className='signup2-container'>

                <MDBContainer fluid>

                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>

                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 mb-5">Sign up to Writekit</h2>
                                    <div className='google-container'>
                                        <MDBBtn outline className='mx-2 px-5 btn-rounded google-login' color='white' size='lg' style={{ textTransform: "none" }} onClick={()=>{console.log("clicked!"); signIn()}}>
                                           <div  className='for-spacing'><FcGoogle/> Continue with Google</div> 
                                        </MDBBtn>
                                    </div>
                                    <p className="small mb-3 pb-lg-2 text-white-50">or</p>

                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Name' id='formControlLgName' onChange={(e)=>setName(e.target.value)} type='text' size="lg" className='text-white-50' />
                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLgUsername' onChange={(e)=>setUsername(e.target.value)} type='text' size="lg" className='text-white-50' />
                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLgEmail' onChange={(e)=>setEmail(e.target.value)} type='email' size="lg" className='text-white-50'/>
                                    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLgPassword' onChange={(e)=>setPassword(e.target.value)} type='password' size="lg" className='text-white-50'/>

                                   <br/>
                                    <MDBBtn outline className='mx-2 px-5 btn-rounded mb-4 login-btn' color='white' size='lg' style={{textTransform:"none"}} onClick={()=>performSingIn()}>
                                        Create my account
                                    </MDBBtn>

                                    <div>
                                        <p className="mb-0">Already have an account? <a href="login" className="text-white-50 fw-bold">Login</a></p>

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

export default Signup;