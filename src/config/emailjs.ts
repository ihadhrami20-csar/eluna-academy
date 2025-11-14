// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_n82mi8z', // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'template_b8o7wka', // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'AzkUXD1Hm5pflIgDP', // Replace with your EmailJS Public Key
};

// Google Apps Script Configuration
export const GOOGLE_APPS_SCRIPT_CONFIG = {
  DEPLOYMENT_URL: 'https://script.google.com/macros/s/AKfycbx3sYwkkEqxWJU_ssgP8LtZ0YPj41aKaPBFbJaRPWAZszuF7X3_GQISzNhdIixUOQzi/exec',
};

// Email template variables that will be sent to EmailJS
export interface EmailTemplateParams {
  to_email: string;
  user_name: string;
  user_email: string;
  reply_to: string;
}

// Form data interface for Google Sheets
export interface FormData {
  name: string;
  email: string;
  phone: string;
}
