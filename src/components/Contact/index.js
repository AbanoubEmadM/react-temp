import React from "react";
import {ContactSection , ContactTitle, Span, Form, Input, FormInput, InputText,InputEmail,InputSub,TextArea,InputSubmit} from './style.js'
import Footer from "../Footer/index.js";
const Contact = () => {
    return(
        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputText type="text" className="sub" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSub type="submit" value="Send Message" />
                </Form>
            </div>
        <Footer />

        </ContactSection>
    )   
}
export default Contact;