import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const CheckoutForm = ({ price }) => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useContext(AuthContext)
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', { price }, {
        })
            .then(response => {
                // console.log(response.data.clientSecret)
                setClientSecret(response.data.clientSecret)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
                footer: '<a href="">Why do I have this issue?</a>'
            })
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Payment Successful`,
                showConfirmButton: false,
                timer: 1500
            })
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            /* Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: confirmError,
                showConfirmButton: false,
                timer: 1500
            })    */
            console.log(confirmError)
        }
        console.log('[paymentIntent]', paymentIntent)

        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            console.log('pay',paymentIntent)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='p-3 rounded cursor-pointer bg-green-600 text-white font-bold border-0' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            {transactionId && <p className="text-green-600">Transaction ID: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;