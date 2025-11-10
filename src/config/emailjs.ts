// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_n82mi8z', // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'template_b8o7wka', // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'AzkUXD1Hm5pflIgDP', // Replace with your EmailJS Public Key
};

// Email template variables that will be sent to EmailJS
export interface EmailTemplateParams {
  to_email: string;
  user_name: string;
  user_email: string;
  reply_to: string;
}
