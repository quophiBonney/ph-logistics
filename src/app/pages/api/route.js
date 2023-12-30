import nodemailer from 'nodemailer';
export default async function handler(req, res) {
    if(req.method === "POST"){{
        const {firstName, lastName, email, phone, message} = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "quophiclef@gmail.com",
                pass: "QBonney@1996",

            }
        });

        const mailOptions = {
            from: "quophiclef@gmail.com",
            to: "phlogisticsghana@gmail.com",
            subject: "Contact PH Logistics",
            text: `First Name: ${firstName}\nLast Name: ${lastName}\n Email: ${email}\n Phone: ${phone}\n Message: ${message}`
        }
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({success: true})
        } catch(error) {
             console.error(error);
             res.status(500).json({success: false})
        }
    }}
    else {
        res.status(405).json({message: 'Method Not Allowed'})
    }
}