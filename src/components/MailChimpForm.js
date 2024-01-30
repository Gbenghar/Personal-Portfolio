import MailChimpSubscribe from 'react-mailchimp-subscribe'
import  Newsletter  from '../components/Newsletter'

import React from 'react'

const MailChimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`

  return (
    <>
      <MailChimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </>
  )
}

export default MailChimpForm
