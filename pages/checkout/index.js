import React from 'react'
import Head from 'next/head'
import { Layout, UserForm, Cart } from '../../components'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

const useStyles = makeStyles(() => ({
  root: {
    margin: '25px auto',
    display: 'flex'
  },
  left: {
    flex: 2
  },
  right: {
    flex: 1
  }
}))

export default function Checkout({ apiKey }) {
  const classes = useStyles()
  const router = useRouter()
  const [formData, setFormData] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    dob: '1990-01-01',
    phone: '987654321',
    street: '20735 Stevens Creek Blvd',
    street2: 'Montessori',
    city: 'Cupertino',
    zip: '95014',
    country: 'US',
    state: 'CA'
  })
  const data = JSON.parse(localStorage.getItem('cartData'))
  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const [paymentLoading, setPaymentLoading] = React.useState(false)
  const makePayment = () => {
    setPaymentLoading(true)
    const date = new Date(formData.dob)
    const customerId = Math.floor(100000 + Math.random() * 900000)
    window.paysafe.checkout.setup(
      btoa(apiKey),
      {
        currency: 'USD',
        amount: data.total * 100,
        customerId,
        customer: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          dateOfBirth: {
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear()
          }
        },
        billingAddress: {
          nickName: formData.firstName,
          street: formData.street,
          street2: formData.street2,
          city: formData.city,
          zip: formData.zip,
          country: formData.country,
          state: formData.state
        },
        locale: 'en_US',
        environment: 'TEST',
        merchantRefNum: '987654321',
        canEditAmount: false,
        displayPaymentMethods: ['card'],
        paymentMethodDetails: {
          paysafecard: {
            consumerId: `${customerId}`
          }
        }
      },
      (instance, error, result) => {
        setPaymentLoading(false)
        if (result) {
          console.log('OK', result)
          instance.showSuccessScreen()
          router.push('/')
        } else {
          console.log('Error', error)
          instance.showFailureScreen()
          router.push('/')
        }
      },
      (stage, expired) => {
        console.log(stage, expired)
      }
    )
  }

  return (
    <Layout>
      <Head>
        <script src="https://hosted.paysafe.com/checkout/v2/paysafe.checkout.min.js"></script>
      </Head>
      <div className={classes.root}>
        <div className={classes.left}>
          <UserForm
            formData={formData}
            handleFormDataChange={handleFormDataChange}
          />
        </div>
        <div className={classes.right}>
          <Cart
            products={data.cart}
            total={data.total}
            buttonAction="Pay now"
            checkoutFn={makePayment}
            paymentLoading={paymentLoading}
          />
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      apiKey: process.env.API_KEY
    }
  }
}
