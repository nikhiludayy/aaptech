export interface Service {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface ContactInfo {
  icon: string;
  text: string;
}

export interface ContactFormResponse {
  message: string;
}
