
import Stripe from 'stripe'

let key = 'sk_test_51NXnugDCjznlYZ8Twv0NWE2kYrJH1FuHIN1yUXskakjyxSJuomV9elWKwu9T9IvX3b68VU36mUZ8wQmSFHvBO3kq00WXTY7Rjt'

export const stripe = new Stripe(`${key}`, {
    apiVersion: '2022-11-15',
    appInfo: {
        name: 'Ignite Shop',
    }
})