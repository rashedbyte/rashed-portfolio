import type { ReactNode } from 'react';

// =========================================================
// AVAILABILITY
// =========================================================

export type AvailabilityStatus =
  | 'available'
  | 'busy'
  | 'unavailable';

export interface ContactConfig {
  email: string;
  phone?: string;
  location?: string;
  timezone?: string;

  availability: {
    status: AvailabilityStatus;
    message: string;
    subtext: string;
  };

  responseTime?: string;
  preferredContact?: string;
}

// =========================================================
// CONTACT CONFIGURATION
// =========================================================

export const contactConfig: ContactConfig = {
  email: 'rashed.byte@gmail.com',

  phone: '+8801577064046',
  location: 'Bangladesh',
  timezone: 'GMT+6 (Bangladesh Standard Time)',

  availability: {
    status: 'available',
    message: 'Available for opportunities',
    subtext:
      'Open to interesting opportunities, freelance projects, collaborations, and technical discussions.',
  },

  responseTime: 'Usually responds within 24 hours.',
  preferredContact:
    'Email is the best way to reach me for professional inquiries.',
};

// =========================================================
// SOCIAL LINK TYPES
// =========================================================

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  description?: string;
  iconName: string;
  svg: ReactNode;
  external?: boolean;
}

// =========================================================
// SOCIAL LINKS
// =========================================================

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/rashedbyte/',
    username: '@rashedbyte',
    description:
      'Explore my open-source projects, experiments, source code, and development work.',
    iconName: 'Github',
    external: true,

    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    ),
  },

  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/rashedbyte',
    username: 'in/rashed',
    description:
      'Connect with me professionally, explore my experience, and follow my career journey.',
    iconName: 'Linkedin',
    external: true,

    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },

  {
    name: 'X (Twitter)',
    url: 'https://twitter.com/rashedbyte',
    username: '@rashed',
    description:
      'Follow me for technical thoughts, projects, learning updates, and development content.',
    iconName: 'Twitter',
    external: true,

    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },

  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Rashed.FB5',
    username: '@Rashed.FB5',
    description:
      'Connect with me and stay updated with my latest activities and projects.',
    iconName: 'Facebook',
    external: true,

    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.007 10.125 11.925v-8.437H7.078v-3.488h3.047V9.412c0-3.022 1.791-4.693 4.533-4.693 1.312 0 2.686.235 2.686.235v2.973h-1.514c-1.491 0-1.956.93-1.956 1.886v2.26h3.328l-.532 3.488h-2.796v8.437C19.612 23.08 24 18.092 24 12.073z" />
      </svg>
    ),
  },
  
];

// =========================================================
// CONTACT METHODS
// =========================================================

export type ContactMethodType =
  | 'email'
  | 'phone'
  | 'location'
  | 'linkedin'
  | 'github';

export interface ContactMethod {
  id: string;
  type: ContactMethodType;
  title: string;
  value: string;
  description: string;
  href?: string;
  iconName: string;
}

export const contactMethods: ContactMethod[] = [
  {
    id: 'contact-email',
    type: 'email',
    title: 'Email Me',
    value: contactConfig.email,
    description:
      'For professional inquiries, collaborations, freelance projects, and opportunities.',
    href: `mailto:${contactConfig.email}`,
    iconName: 'Mail',
  },

  {
    id: 'contact-phone',
    type: 'phone',
    title: 'Phone',
    value: contactConfig.phone || 'Available on request',
    description:
      'Phone or direct communication can be arranged when needed.',
    href: contactConfig.phone
      ? `tel:${contactConfig.phone}`
      : undefined,
    iconName: 'Phone',
  },

  {
    id: 'contact-location',
    type: 'location',
    title: 'Location',
    value: contactConfig.location || 'Bangladesh',
    description:
      'Available for remote collaboration with teams and clients worldwide.',
    iconName: 'MapPin',
  },

  {
    id: 'contact-linkedin',
    type: 'linkedin',
    title: 'LinkedIn',
    value: 'Connect professionally',
    description:
      'View my professional profile, experience, and career journey.',
    href:
      socialLinks.find(
        (social) => social.name === 'LinkedIn'
      )?.url,
    iconName: 'Linkedin',
  },

  {
    id: 'contact-github',
    type: 'github',
    title: 'GitHub',
    value: 'View my projects',
    description:
      'Explore source code, experiments, and open-source work.',
    href:
      socialLinks.find(
        (social) => social.name === 'GitHub'
      )?.url,
    iconName: 'Github',
  },
];

// =========================================================
// INQUIRY CATEGORIES
// =========================================================

export type InquiryCategory =
  | 'Hiring'
  | 'Freelance Project'
  | 'Machine Learning'
  | 'Data Science'
  | 'Web Development'
  | 'AI / Artificial Intelligence'
  | 'Collaboration'
  | 'Consultation'
  | 'Other';

// =========================================================
// INQUIRY CONTEXT
// =========================================================

export interface InquiryContext {
  placeholder: string;
  helper: string;
  suggestedTopics?: string[];
}

export const inquiryContexts: Record<
  InquiryCategory,
  InquiryContext
> = {
  Hiring: {
    placeholder:
      'Tell me about the role, expectations, and opportunity...',
    helper:
      'Helpful details: company name, role, tech stack, responsibilities, and location.',
    suggestedTopics: [
      'Full-time role',
      'Part-time role',
      'Internship',
      'Remote opportunity',
    ],
  },

  'Freelance Project': {
    placeholder:
      'Tell me about your project, requirements, and goals...',
    helper:
      'Helpful details: project scope, timeline, budget, deliverables, and preferred technologies.',
    suggestedTopics: [
      'Website',
      'Web Application',
      'Dashboard',
      'Automation',
      'Custom Software',
    ],
  },

  'Machine Learning': {
    placeholder:
      'Tell me about your dataset, prediction problem, or business goal...',
    helper:
      'Helpful details: dataset size, target variable, model requirements, and expected output.',
    suggestedTopics: [
      'Classification',
      'Regression',
      'Prediction',
      'Recommendation',
      'Model Deployment',
    ],
  },

  'Data Science': {
    placeholder:
      'Tell me about the data, analysis, or insights you need...',
    helper:
      'Helpful details: data source, dataset size, key metrics, analysis goals, and visualization needs.',
    suggestedTopics: [
      'Data Cleaning',
      'EDA',
      'Dashboard',
      'Business Analytics',
      'Forecasting',
    ],
  },

  'Web Development': {
    placeholder:
      'Tell me about the website or application you want to build...',
    helper:
      'Helpful details: features, user roles, target devices, design preferences, and technology requirements.',
    suggestedTopics: [
      'Portfolio',
      'Business Website',
      'Dashboard',
      'Full Stack App',
      'API Development',
    ],
  },

  'AI / Artificial Intelligence': {
    placeholder:
      'Tell me about the AI problem, idea, or intelligent system you want to build...',
    helper:
      'Helpful details: AI goal, data source, expected behavior, model requirements, and deployment needs.',
    suggestedTopics: [
      'Generative AI',
      'NLP',
      'Computer Vision',
      'Deep Learning',
      'AI Automation',
    ],
  },

  Collaboration: {
    placeholder:
      'Tell me about the collaboration, idea, or project you would like to work on together...',
    helper:
      'Helpful details: project idea, your role, expected contribution, and timeline.',
    suggestedTopics: [
      'Open Source',
      'Research',
      'AI Project',
      'Data Project',
      'Web Project',
    ],
  },

  Consultation: {
    placeholder:
      'Tell me what you need help with and what you are trying to achieve...',
    helper:
      'Helpful details: current situation, technical challenge, expected result, and deadline.',
    suggestedTopics: [
      'Architecture',
      'Machine Learning',
      'Data Analysis',
      'Web Development',
      'Technical Guidance',
    ],
  },

  Other: {
    placeholder:
      'Tell me a little about what you have in mind...',
    helper:
      'Any context you can provide will help me understand your request better.',
    suggestedTopics: [
      'General Inquiry',
      'Technical Discussion',
      'Project Idea',
      'Networking',
    ],
  },
};

// =========================================================
// QUICK CONTACT / CTA
// =========================================================

export interface ContactCTA {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export const contactCTA: ContactCTA = {
  title: 'Let’s Build Something Great Together',
  description:
    'Have a project idea, a technical challenge, or an opportunity worth discussing? Send me a message and let’s start a conversation.',
  buttonText: 'Start a Conversation',
  href: `mailto:${contactConfig.email}`,
};

// =========================================================
// AVAILABILITY UI CONFIG
// =========================================================

export const availabilityConfig: Record<
  AvailabilityStatus,
  {
    label: string;
    description: string;
  }
> = {
  available: {
    label: 'Available',
    description:
      'Currently open to new opportunities and interesting projects.',
  },

  busy: {
    label: 'Busy',
    description:
      'Currently working on existing commitments but may respond to selected inquiries.',
  },

  unavailable: {
    label: 'Unavailable',
    description:
      'Currently unavailable for new opportunities. You can still send a message for future consideration.',
  },
};

// =========================================================
// CONTACT FORM INITIAL VALUES
// =========================================================

export interface ContactFormData {
  name: string;
  email: string;
  category: InquiryCategory | '';
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export const initialContactFormData: ContactFormData = {
  name: '',
  email: '',
  category: '',
  subject: '',
  message: '',
  budget: '',
  timeline: '',
};

// =========================================================
// BUDGET OPTIONS
// =========================================================

export const budgetOptions = [
  'Less than $500',
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
  'Prefer not to say',
];

// =========================================================
// TIMELINE OPTIONS
// =========================================================

export const timelineOptions = [
  'ASAP',
  'Within 1 week',
  'Within 1 month',
  '1–3 months',
  'Flexible',
];

// =========================================================
// FORM VALIDATION MESSAGES
// =========================================================

export const contactValidationMessages = {
  nameRequired: 'Please enter your name.',
  nameTooShort: 'Name should be at least 2 characters long.',

  emailRequired: 'Please enter your email address.',
  emailInvalid:
    'Please enter a valid email address.',

  categoryRequired:
    'Please select an inquiry category.',

  subjectRequired:
    'Please enter a subject.',

  messageRequired:
    'Please tell me a little more about your project or inquiry.',

  messageTooShort:
    'Your message should be at least 20 characters long.',

  messageTooLong:
    'Your message is too long. Please keep it under 3000 characters.',
};

// =========================================================
// FORM SUCCESS / ERROR MESSAGES
// =========================================================

export const contactFormMessages = {
  loading: 'Sending your message...',
  success:
    'Your message has been sent successfully. I’ll get back to you as soon as possible.',
  error:
    'Something went wrong while sending your message. Please try again or contact me directly by email.',
};

// =========================================================
// CONTACT SECTION CONTENT
// =========================================================

export const contactSectionContent = {
  eyebrow: 'Get In Touch',

  title: 'Let’s Build Something',

  highlightedText: 'Great Together',

  description:
    'Whether you are looking to hire, collaborate, build a product, solve a data problem, or discuss an interesting technical idea, I would be happy to hear from you.',

  formTitle: 'Send Me a Message',

  formDescription:
    'Tell me a little about yourself and what you have in mind. The more context you provide, the better I can understand how to help.',

  directContactTitle: 'Prefer a direct conversation?',

  directContactDescription:
    'You can also reach me directly through email or connect with me on my professional platforms.',

  responseTimeLabel: 'Typical response time',

  responseTime:
    contactConfig.responseTime ||
    'Usually responds within 24 hours.',
};

// =========================================================
// FOOTER CONTACT SUMMARY
// =========================================================

export const footerContactSummary = {
  email: contactConfig.email,
  location:
    contactConfig.location || 'Bangladesh',

  message:
    'Open to meaningful projects, collaborations, and opportunities in Data Science, Machine Learning, AI, and Web Development.',
};