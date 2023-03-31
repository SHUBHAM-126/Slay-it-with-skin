export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { cart } = req.body;

        try {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    cart
                ],
                mode: 'payment',
                success_url: `${req.headers.origin}/payment/success`,
                cancel_url: `${req.headers.origin}/payment/failed`,
            });

            res.redirect(303, session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}