
import Stripe from 'stripe'

export const stripe = new Stripe('sk_test_51NXnugDCjznlYZ8Twv0NWE2kYrJH1FuHIN1yUXskakjyxSJuomV9elWKwu9T9IvX3b68VU36mUZ8wQmSFHvBO3kq00WXTY7Rjt', {
    apiVersion: '2022-11-15',
    appInfo: {
        name: 'Ignite Shop',
    }
})