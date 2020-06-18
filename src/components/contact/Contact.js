import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorMsg from './error/ErrorMsg';
import Heading from '../layout/heading/Heading';
import styles from './Contact.module.css';

const schema = yup.object().shape( {
    firstName: yup
        .string()
        .min( 2, 'Name has to be longer than 2 characters!' )
        .required( "First name is required" ),
    lastName: yup
        .string()
        .min( 2, 'Name has to be longer than 2 characters!' )
        .required( "Last name is required" ),
    email: yup
        .string()
        .email( "Please enter a valid email" )
        .required( "A valid email address is required" ),
    message: yup
        .string()
        .min( 10, 'Message has to be longer than 10 characters!' )
        .required( 'Message is required' ),
} );

function Contact() {
    const [formSent, setFormSent] = useState( false ); //variable for sending validation message

    const { register, handleSubmit, errors } = useForm( {
        validationSchema: schema,
    } );

    function onSubmit( data ) {
        setFormSent( true );
        console.log( 'Form was submitted. Thank you! ' + JSON.stringify( data ) );
    }

    return (
        <>
            <Heading title="Contact form" />
            <Form onSubmit={handleSubmit( onSubmit )} className={styles.form}>
                <p className={styles.text}>{formSent ? 'Form was submitted. Thank you! We will respond to you shortly.' : false}</p>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" placeholder="First name" ref={register( { required: true } )} />
                    {errors.firstName && <ErrorMsg>{errors.firstName.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" placeholder="Last name" ref={register( { required: true } )} />
                    {errors.lastName && <ErrorMsg>{errors.lastName.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" ref={register} />
                    {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" as="textarea" rows="3" name="message" placeholder="Your message here" ref={register} />
                    {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
                </Form.Group>

                <Button type="submit" className={styles.button}>Submit</Button>

            </Form>
        </>
    )
}

export default Contact;
