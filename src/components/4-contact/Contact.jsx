import "./contact.css";
import React from "react";
import "./contact.css";


const Contact = () => {
   
    return (  <section className="contact-us">
    <h1 className="title">
      <span className="icon-envelope"> </span>
      Contact us
    </h1>
    <p className="sub-title">
      Contact us for more information and Get notified when I publish
      something new.
    </p>

    <div style={{ justifyContent: "space-between" }} className="flex">
      <form  className="">
        <div className="flex">
          <label htmlFor="email">Email Address:</label>
          <input
            autoComplete="off"
            required
            type="email"
            name="email"
            id="email"
          />
          {/* <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          /> */}
        </div>

        <div className="flex" style={{ marginTop: "24px" }}>
          <label htmlFor="message">Your message:</label>
          <textarea required name="message" id="message"></textarea>
          {/* <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          /> */}
        </div>

        <button type="submit" className="submit">
         Submit
        </button>

        {/* {state.succeeded && (
          <p
            className="flex"
            style={{ fontSize: "18px", marginTop: "1.7rem" }}
          >
            <Lottie
              loop={false}
              style={{ height: 37 }}
              animationData={doneAnimation}
            />
            Your message has been sent successfully 👌
          </p>
        )} */}
      </form>
      {/* <div className=" animation">
        <Lottie
          className="contact-animation"
          style={{ height: 355 }}
          animationData={contactAnimation}
        />
      </div> */}
    </div>
    </section> );
}
 
export default Contact;