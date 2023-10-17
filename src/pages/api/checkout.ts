import {NextApiRequest, NextApiResponse} from "next";
import { stripe } from "../../lib/stripe";


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {priceId} = req.body

    if(req.method != 'POST')
        res.status(405).json({error: 'Methos not allowed.'})


    if(!priceId)
        res.status(400).json({error: 'Price not found.'})

    const local = 'http://localhost:3000/'

    const success_url = `${local}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancel_url = `${local}`

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: success_url,
        cancel_url: cancel_url,
        mode: 'payment',
        line_items: [{
            price: priceId,
            quantity: 1,
        }]
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url,
    })
}