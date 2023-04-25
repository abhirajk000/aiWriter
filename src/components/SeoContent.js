import {Component} from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'

import googleIm from '../assets/googleIm.webp'
import notesi from '../assets/notesi.png'
import sparklei from '../assets/sparklei.png'
import { BsChevronDown } from "react-icons/bs";
import Spinner from 'react-bootstrap/Spinner';
import CalltoAction from './CalltoAction'

import './productpage.css'
import btnimg from '../assets/magicsi.png'


const {Configuration, OpenAIApi}=require("openai");

class SeoContent extends Component{
  constructor() {
    super()
    this.state =  {
      loading: false,
      heading: 'Your response will be shown here..',
      response: []
    }

  };

onFormSubmit = e => {

  e.preventDefault()
  const formData = new FormData(e.target),
  formDataObj= Object.fromEntries(formData.entries())
  this.setState({loading:true})

  // console.log(formDataObj.focusKywd)
  // console.log(formDataObj.selected)
  // console.log(formDataObj.selectedu)
 
//============================================= OpenAI API ===================================================

  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);

    openai.createCompletion({
    model: "text-davinci-003",
    prompt: `You are an SEO expert. Write 3 SEO optimized ${formDataObj.selectedu}. Take "${formDataObj.focusKywd}" as the focus keyword. Make sure to write it in ${formDataObj.selectedt} tone. Don't add any hashtags.`,
    temperature: 1,
    max_tokens: 1001,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  .then((response) => {
    let variants = response.data.choices[0].text.split("\n");
    this.setState({
      heading: `Here's your ${formDataObj.selectedu} on ${formDataObj.focusKywd}`,
      response: variants,
      loading: false
    }

  )
  // console.log(response)

  }

);



}

// =======================================================================API ends===============================================
 render(){
  return (
<div className="main">
  <h1 className='product-heading'> <img src={sparklei} width="40px"/> Writing <span>SEO Content</span> Just Got Easier!</h1>
  <p className="text-center" style={{color: "#FAF9F6"}}> Use AI to generate SEO optimized content with char count recommended by <b>Google</b>.</p>
  <div className="flexwala" style={{display:"flex"}}>
  <div className="first">
    <Container/>
    <br/>
    <br/>
    <Form onSubmit={this.onFormSubmit}>

    <Form.Group className="mb-3">
      <Form.Label style={{color: "white"}}>Select Use case <BsChevronDown/></Form.Label>
      <Form.Control as="select" name="selectedu">
        <option value="Blog Title between 50 to 70 characters">Catchy Title</option>
        <option value="Meta Description between 150 to 160 characters">Meta Description</option>
        <option value="Blog paragraph">Blog Paragraph</option>
      </Form.Control>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color: "white"}}>Enter your Focus keyword?</Form.Label>
        <Form.Control type="text" placeholder="SEO & AI" name="focusKywd" style={{width:"100%"}} />
        <Form.Text className="text-muted">
          Detailed information will result in great suggestions
        </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label style={{color: "white"}}>Select tone <BsChevronDown/></Form.Label>

        <Form.Control as="select" name="selectedt" >
          <option value="an Informative">Informative</option>
          <option value="a Formal">Formal</option>
          <option value="a Humorous">Humorous</option>
          <option value="an Inspirational">Inspirational</option>
          <option value="a Friendly">Friendly</option>
          <option value="a Curious">Curious</option>
          <option value ="an Optimistic">Optimistic</option>

        </Form.Control>
      </Form.Group>
<div style={{ display: "flex"}}>
      <Button className='getai-btn' type="submit">
              Get AI Suggestions <img src={btnimg} width="30px" />
      </Button>
      <div style={{paddingTop:"10px", paddingLeft: "4px"}}>

      {this.state.loading? <Spinner className='loading-sign' animation="border" />: <></> }
      </div>
      </div>


      </Form>
            <br/>
            <br/>
{/* ================================================================  Response Area  ======================================================= */}
            <Card/>
            <Card.Body/>
            <Card.Title/><h4 style={{color: "snow"}}><img src={notesi} width="30px"/> {this.state.heading}</h4><Card.Title/>
            {/* <div className='separator-line'></div>
            <br/>
            <br/>
            <Card.Text/><p style={{color: "#F5F5F5"}}>{this.state.response}</p><Card.Text/>
            <br/>
            <br/>
            <div className='separator-line'></div> */}
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
            <br/>
            <br/>
            <Card.Body/>
            <Card/>
            <Container/>
            </div>
            <div className="second">

            <img src={googleIm} style={{width: "100%", borderRadius:"6px"}} />

            </div>
            </div>
            <CalltoAction/>
</div>
)
 }
}
export default SeoContent
