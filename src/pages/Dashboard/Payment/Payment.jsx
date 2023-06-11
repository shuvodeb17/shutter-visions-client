import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from '@tanstack/react-query';
import {useParams,useLocation} from 'react-router-dom'

// TODO provide publish able key key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {

    const course =useLocation().state;
    console.log(course)
    

    return (
        <div className='px-3 md:px-16'>
            <h1>Payment</h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;