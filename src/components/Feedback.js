import React from 'react'
import './feedback.css'
import Card from './Card'
const Feedback = () => {
  return (
    <div>
        <div className="text-content">
        <h1>What people are saying about us</h1>
        <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      <div className="card-wrap">
        <Card test="jai hind dosto thara bhi joginder puneet superstar lord aur kuch backchodi arzaman chutiya hai  " name="shivam" position="ceo cfo cmo cooo"/>
        <Card test="jai hind dosto thara bhi joginder puneet superstar lord aur kuch backchodi   " name="shivam" position="ceo cfo cmo cooo"/>
        <Card test="jai hind dosto thara bhi joginder puneet superstar l  " name="shivam" position="ceo cfo cmo cooo"/>
        
      </div>
    </div>
  )
}

export default Feedback
