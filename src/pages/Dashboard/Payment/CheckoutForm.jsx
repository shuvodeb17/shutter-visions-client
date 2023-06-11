import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import Swal from 'sweetalert2';

const CheckoutForm = () => {

    const stripe = useStripe()
    const elements = useElements()

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
            console.log('[PaymentMethod]', paymentMethod);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Payment Successful',
                showConfirmButton: false,
                timer: 1500
            })
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
            <button className='p-3 rounded cursor-pointer bg-green-600 text-white font-bold border-0' type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;