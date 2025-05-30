import { emailJSServiceId, emailJSTemplateId, emailJSUserId } from "@/config/global"
import * as emailJS from "@emailjs/browser"

export const initEmailJS = () => {
  emailJS.init({
    publicKey: emailJSUserId,
  })
}

export const sendEmail = async (email: string, name: string, message: string) => {
  const transporter = await emailJS.send(emailJSServiceId, emailJSTemplateId, {
    from_name: name,
    to_name: 'Eduardo Gutierrez',
    from_email: email,
    to_email: 'eduardogutzfl@gmail.com',
    message: message
  })

  return transporter
}


