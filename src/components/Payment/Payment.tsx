import React, { FormEvent, useState } from 'react'

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import {
  FormContainer,
  PaymentButton,
  PaymentFormContainer,
} from './Payment.styles'
import { BUTTON_TYPE_CLASS } from '../Button/Button'

import { selectedCartTotalPrice } from '../../store/cart/cart.selector'
import { selectedCurrentUser } from '../../store/user/user.selector'
import { useSelector } from 'react-redux'
import { StripeCardElement } from '@stripe/stripe-js'

const ifCardElementIsValid = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null

const Payment = () => {
  const stripe = useStripe()
  const elements = useElements()

  const amount = useSelector(selectedCartTotalPrice)
  const currentUser = useSelector(selectedCurrentUser)
  const [paymentProcessing, setPaymentProcessing] = useState(false)

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setPaymentProcessing(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret },
    } = response

    const detailsCard = elements.getElement(CardElement)

    if (!ifCardElementIsValid(detailsCard)) return

    const paymentResult = stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: detailsCard,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    })

    if ((await paymentResult).error) {
      alert((await paymentResult).error)
    } else {
      if ((await paymentResult).paymentIntent?.status === 'succeeded') {
        alert('payment successful')
      }
    }

    setPaymentProcessing(false)
  }

  return (
    <PaymentFormContainer>
      <h2>Credit Card Payment:</h2>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <PaymentButton
          isLoading={paymentProcessing}
          buttonType={BUTTON_TYPE_CLASS.inverted}>
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default Payment
