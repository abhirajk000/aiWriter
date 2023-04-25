import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import twitterIm from '../assets/twitterIm.webp'
import notesi from '../assets/notesi.png'
import sparklei from '../assets/sparklei.png'
import { BsChevronDown } from "react-icons/bs";
import Spinner from 'react-bootstrap/Spinner';

import './productpage.css'
import btnimg from '../assets/magicsi.png'
import CalltoAction from './CalltoAction'


const { Configuration, OpenAIApi } = require("openai");

class SocialPost extends Component {
  constructor() {    
    super()
    this.state = {
      loading: false,
      heading: 'Your response will be shown here..',
      response: []
    }

  };
  

  onFormSubmit = e => {

    e.preventDefault()
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    this.setState({ loading: true })

    // console.log(formDataObj.topicName)
    // console.log(formDataObj.selected)
    // console.log(formDataObj.selectedu)
  

    //============================================== OpenAI API ===================================================

    const configuration = new Configuration({
      apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);

    openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write 3 ${formDataObj.selectedu} on topic - ${formDataObj.topicName} in ${formDataObj.selected} tone.`,
      temperature: 1,
      max_tokens: 1001,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })


      .then((response) => {
        // var res = response.data.choices[0].text.replace("\n", "");  
        
        console.log(response.data.choices[0].text);
        let variants = response.data.choices[0].text.split("\n\n");

        // console.log(variants)

        // variants.map((value)=> console.log(`Value = ${value}`))


        // this.setState({
        //   heading: `Here's your ${formDataObj.selectedu} on ${formDataObj.topicName}`,
        //   response: `${response.data.choices[0].text}`,
        //   loading: false
        // }
        // )

        this.setState({
          heading: `Here's your ${formDataObj.selectedu} on ${formDataObj.topicName}`,
          response: variants,
          loading: false
        }
        )
      }
      );
  }

  

  // =============================================== API ends =================================================================
  render() {
    
    return (
      <div className="main">
        <h1 className="product-heading"> <img src={sparklei} width="40px" /> Writing <span>Social Posts</span> Just Got Easier!</h1>
        <p className="text-center" style={{ color: "#FAF9F6" }}> Use AI to generate tons of engaging content.</p>
        <div className="flexwala" style={{ display: "flex", padding:"2px auto" }}>
          <div className="first">
            <Container />
            <br />
            <br />
            <Form onSubmit={this.onFormSubmit}>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>Select Use case <BsChevronDown /></Form.Label>
                <Form.Control as="select" name="selectedu" color='black'>
                  <option value="Twitter Post">Twitter Post</option>
                  <option value="LinkedIn Post">LinkedIn Post</option>
                  <option value="Instagram Caption">Instagram Caption</option>
                  <option value="Facebook Post">Facebook Post</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: "white" }}>What topic you want to write on?</Form.Label>
                <Form.Control type="text" placeholder="Enter topic" name="topicName" style={{ width: "100%" }} />
                <Form.Text className="text-muted">
                  Detailed information will result in great suggestions
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>Select tone <BsChevronDown /></Form.Label>

                <Form.Control as="select" name="selected" >
                  <option value="Appreciative">Appreciative</option>
                  <option value="Assertive">Assertive</option>
                  <option value="Convincing">Convincing</option>
                  <option value="Critical">Critical</option>
                  <option value="Enthusiastic">Enthusiastic</option>
                  <option value="Formal">Formal</option>
                  <option value="Funny">Funny</option>
                  <option value="Informative">Informative</option>
                  <option value="Inspirational">Inspirational</option>
                  <option value="Thoughtful">Thoughtful</option>
                  <option value="Worried">Worried</option>
                </Form.Control>
              </Form.Group>
              <div style={{ display: "flex" }}>
                <Button className='getai-btn' variant="info" type="submit">
                  Get AI Suggestions <img src={btnimg} width="30px" />
                </Button>
                <div style={{ paddingTop: "10px", paddingLeft: "4px" }}>
                  {this.state.loading ? <Spinner className='loading-sign' animation="border" /> : <></>}
                </div>
              </div>
            </Form>

            {/* ================================================ Response Area =========================================== */}
           
            <br />
            <br />
            <Card />
            <Card.Body />
            <Card.Title /><h4 style={{ color: "snow" }}><img src={notesi} width="30px" /> {this.state.heading}</h4><Card.Title />
            {/* <div className='separator-line'></div>
            <br />
            <br />
            <Card.Text /><p style={{ color: "#F5F5F5" }}>{this.state.response}</p><Card.Text />
            <br />
            <br />
            <div className='separator-line'></div> */}
            {/* old ones */}

            <div className='separator-line'></div>
            
            {this.state.response.map((varient)=>{
              return( varient.length>5 && <>
                <br />
                <br />
                <Card.Text /><p style={{ color: "#F5F5F5" }}>{varient}</p><Card.Text />
                <br />
                <br />
                <div className='separator-line'></div>
               
            </>)
            })}
            <br />
            <br />
            <Card.Body />
            <Card />
            <Container />
          </div>
          <div className="second">
            <img src={twitterIm} style={{ width: "100%", borderRadius: "6px" }} />
          </div>

        </div>

        <CalltoAction />

      </div>
    )
  }
}
export default SocialPost