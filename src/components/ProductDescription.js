import {Component} from 'react'
import {Container, Form, Button, Card} from 'react-bootstrap'
import amazonIm from '../assets/amazonIm.webp'
import notesi from '../assets/notesi.png'
import sparklei from '../assets/sparklei.png'
import CalltoAction from './CalltoAction'


import './productpage.css'
import btnimg from '../assets/magicsi.png'
import Spinner from 'react-bootstrap/Spinner';


const {Configuration, OpenAIApi}=require("openai");


class ProductDescription extends Component{
  constructor() {
    super()
    this.state =  {
      heading: 'Your response will be shown here..',
      response: '',
      loading: false,
    }
  }

onFormSubmit = e => {

  e.preventDefault()
  const formData = new FormData(e.target),
  formDataObj= Object.fromEntries(formData.entries())
  this.setState({loading:true})
  // console.log(formDataObj.productName)
  // console.log(formDataObj.aboutProduct)
  //========================================================================== OpenAI API ===================================================

  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);

    openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a product description for my product named, ${formDataObj.productName}. Details about my product - ${formDataObj.aboutProduct}`,
    temperature: 1,
    max_tokens: 1001,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })
  .then((response) => {
    this.setState({
      heading: `Product Description for ${formDataObj.productName}`,
      response: `${response.data.choices[0].text}`,
      loading: false
    })
  });

}

//========================================================================================== API ends===============================================
 render(){
  return (
<div className="main">
  <h1 className='product-heading'> <img src={sparklei} width="40px"/> Write <span>Product Descriptions</span> that Sell!</h1>
  <p className="text-center" style={{color: "#FAF9F6"}}> Use AI to generate tons of powerful descriptions.</p>
  <div className="flexwala" style={{display:"flex"}}>
  <div className="first">
    <Container/>
    <br/>
    <br/>
    <Form onSubmit={this.onFormSubmit}>

     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color: "white"}}>Product name?</Form.Label>
        <Form.Control type="text" placeholder="AiWrite" name="productName" style={{width:"100%"}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label style={{color: "white"}}>About product?</Form.Label>
         <Form.Control as="textarea" type="text" placeholder="It is a writing tool powered by AI that generates engaging content in seconds!" name="aboutProduct" style={{width:"100%"}} />
         <Form.Text className="text-muted">
           Detailed information will result in great suggestions
         </Form.Text>
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
{/* ===============================================================  Response Area  ======================================================================= */}
            <Card/>
            <Card.Body/>
            <Card.Title/><h4 style={{color: "snow"}}><img src={notesi} width="30px"/> {this.state.heading}</h4><Card.Title/>
            <div className='separator-line'></div>
            <br/>
            <br/>
            <Card.Text/><p style={{color: "#F5F5F5"}}>{this.state.response}</p><Card.Text/>
            <br/>
            <br/>
            <div className='separator-line'></div>
            <br/>
            <br/>
            <Card.Body/>
            <Card/>
            <Container/>
            </div>
            <div className="second">

            <img src={amazonIm} style={{width: "100%", borderRadius:"6px"}} />

            </div>
            </div>
            <CalltoAction/>
</div>
)
 }
}
export default ProductDescription
