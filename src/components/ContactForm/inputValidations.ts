export const NAME_VALIDATION: InputProps = {
  label: 'Name',
  name: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Your name',
  validation: {
    required: {
      value: true,
      message: 'Please provide your name',
    },
    // maxLength: {
    //   value: 30,
    //   message: '30 characters max',
    // },
  },
}
export const EMAIL_VALIDATION: InputProps = {
  name: 'email',
  label: 'Email',
  type: 'email',
  id: 'email',
  placeholder: 'Your email address',
  validation: {
    required: {
      value: true,
      message: 'Please provide your email address',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid address',
    },
  },
}
export const MESSAGE_VALIDATION: InputProps = {
  multiline: true,
  name: 'message',
  // type: 'textarea',
  label: 'Message',
  id: 'message',
  placeholder: 'Your message',
  validation: {
    required: {
      value: true,
      message: 'Please write your message',
    },
    // maxLength: {
    //   value: 200,
    //   message: '200 characters max',
    // },
  },
}
export const CAPTCHA_VALIDATION: InputProps = {
  name: 'h-captcha-response',
  label: '',
  id: 'h-captcha-response',
  type: 'hidden',
  validation: {
    required: {
      value: true,
      message: 'Please complete the captcha',
    },
    // pattern: {
    //   value:
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //   message: 'Invalid address',
    // },
  },
}