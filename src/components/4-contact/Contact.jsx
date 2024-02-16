import "./contact.css";
import React from "react";
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../animation/Animation - 1708089710853.json";
import contactAnimation from "../../animation/Animation - 1708090750755.json";
import thankyou from "../../animation/thankyou.json"

const Contact = () => {
    const [state, handleSubmit] = useForm("meqyglzl");
    
    return (  <section className="contact-us">
    <h1 className="title">
      <span className="icon-envelope"> </span>
      Contact us
    </h1>
    <p className="sub-title">
    I would be very happy if you could provide me with your feedback and new ideas on how to improve this Portfolio. <Lottie
                 style={{ height: 60, margin: 10,width: 100,backgroundColor:"white",marginLeft:350}}
                animationData={thankyou}
              />
    </p>

    <div style={{ justifyContent: "space-between" }} className="flex">
      <form onSubmit={handleSubmit}  className="">
        <div className="flex">
          <label htmlFor="email">Email Address:</label>
          <input
            autoComplete="off"
            required
            type="email"
            name="email"
            id="email"
          />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          
        </div>

        <div className="flex" style={{ marginTop: "24px" }}>
          <label htmlFor="message">Your message:</label>
          <textarea required name="message" id="message"></textarea>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
         
        </div>

        <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

        {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                // loop={false}
                style={{ height: 80 }}
                animationData={doneAnimation}
              />
             
              Your message has been sent successfully 👌
            </p>
          )}
      </form>
       <div className=" animation">
        <Lottie
          className="contact-animation"
          style={{ height: 380 }}
          animationData={contactAnimation}
        />
      </div> 
    </div>
    </section> );
}
 
export default Contact;