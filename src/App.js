import './App.css';
import ColdEmail from './components/ColdEmail';
import { Features } from './components/Features';
import Footer from './components/Footer';
import ProductDescription from './components/ProductDescription';
import SeoContent from './components/SeoContent';
import Pricing from './components/Pricing';
import SocialPost from './components/SocialPost';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Hero } from './components/Hero';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Usage from './components/Usage';
import SamplePage from './components/SamplePage';
import About from './components/About';

import { useEffect,useState } from 'react';

import {GoogleOAuthProvider} from "@react-oauth/google"
import ForgotPass from './components/ForgotPass';
import CodeForm from './components/CodeForm';
import NewPassword from './components/NewPassword';
const CLIENT_ID = "267710461668-9vp369a1k266vpqbdo9buutq5tuptre6.apps.googleusercontent.com"
function App() {

  const [userIp,setUsetIp] = useState(null);

  useEffect(() => {
    
    var endpoint = 'https://ipapi.co/json/';
    const fetchUserIp = async()=>{

      var response = await fetch(endpoint);
      if(response.ok){
        setUsetIp(await response.json())
      }
    }

    fetchUserIp();
  },[]);

  return (
    <Router>
    <div className="App">
    <Navbar/>
    <GoogleOAuthProvider clientId={{CLIENT_ID}}>
    <Routes>
    <Route path="/" exact element ={  <><Hero/><Features/></>} />
    <Route path="cold-email-writer" exact element ={<ColdEmail/>} />
    <Route path="social-post-writer" exact element ={<SocialPost/>} />
    <Route path="product-description-writer" exact element ={<ProductDescription/>} />
    <Route path="seo-content-writer" exact element ={<SeoContent/>} />
    <Route path="pricing" exact element ={<Pricing/>} />
    <Route path="hero" exact element ={<Hero/>} />

    <Route path="login" exact element ={<Login userIp={userIp}/>} />
    <Route path="signup" exact element ={<Signup userIp={userIp}/>} />
    <Route path="forgot-password" exact element ={<ForgotPass/>} />
    <Route path="code-form" exact element ={<CodeForm/>} />
    <Route path="new-password" exact element ={<NewPassword/>} />

    <Route path="pricing" exact element ={<Pricing/>} />
    <Route path="usage" exact element ={<Usage/>} />
    <Route path="sample" exact element ={<SamplePage/>} />
    <Route path="about" exact element ={<About/>} />
    </Routes>
    </GoogleOAuthProvider>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
