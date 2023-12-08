import { transporter, mailOptions } from "../../../config/nodemailer" 

const CONTACT_MESSAGE_FIELDS = { 
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message"
}

const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce((str, [key, value]) => (
        str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value} \n \n` ),
    "")

        const htmlData =  Object.entries(data).reduce((str, [key, value]) => (
            str += `<h1 classname={styles.formHeading}>${CONTACT_MESSAGE_FIELDS[key]}</h1>
            <p className={styles.formAnswer}>${value}</p>
            `),
        "")

    return{
        text: stringData,
        html: `<h1>${htmlData}</h1>`
    }
}

const handler = async(req, res) => {

    if (req.method == "POST"){
        const data = req.body
        if(!data.name || !data.email || !data.message){
            return res.status(400).json({message: 'bad'})
        }

        try{
            await transporter.sendMail({
                ...mailOptions,
                ...generateEmailContent(data),
                subject: data.subject,
            })
            return res.status(200).json({message: 'success'})

        } catch (error){
            console.log(error)
            return res.status(400).json({message: error.message})
        }
    }
    return res.status(400).json({message: 'bad'})
}

export default handler;