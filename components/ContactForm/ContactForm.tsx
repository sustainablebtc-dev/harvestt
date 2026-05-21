"use client"

import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import styles from './ContactForm.module.scss'
import { ContactData } from '@/data/types'

interface ContactFormProps {
  data: ContactData['form']
}

export default function ContactForm({ data }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {}
    const email = formData.get('email') as string
    const fullName = formData.get('fullName') as string
    const service = formData.get('service') as string

    if (!fullName) {
      newErrors.fullName = 'Full Name is required'
    }

    if (!email) {
      newErrors.email = 'Email is required'
    } else {
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (!email.match(validRegex)) {
        newErrors.email = 'Invalid email address'
      }
    }

    if (!service) {
      newErrors.service = 'Required'
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACTFORM_TEMPLATE_KEY
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration is missing:', { serviceId, templateId, publicKey })
        setErrors({ form: 'Email service is not properly configured.' })
        setIsSubmitting(false)
        return
      }

      // v4 of @emailjs/browser
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        {
          publicKey: publicKey,
        }
      )

      console.log('EmailJS Success:', result.status, result.text)
      setSuccess(true)
      formRef.current.reset()
    } catch (error: any) {
      console.error('EmailJS Error Detail:', {
        message: error?.text || error?.message || error,
        status: error?.status,
        fullError: error
      })
      setErrors({ form: 'Something went wrong. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [success])

  return (
    <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <fieldset className={styles.section}>
        <legend className={styles.sectionTitle}><h3>About you</h3></legend>
        
        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">{data.labels.fullName} *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder={data.placeholders.fullName}
              className={errors.fullName ? styles.inputError : ''}
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && <span id="fullName-error" className={styles.error} role="alert">{errors.fullName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contactNumber">{data.labels.contactNumber}</label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              placeholder={data.placeholders.contactNumber}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">{data.labels.email} *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={data.placeholders.email}
            className={errors.email ? styles.inputError : ''}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <span id="email-error" className={styles.error} role="alert">{errors.email}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="companyName">{data.labels.companyName}</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder={data.placeholders.companyName}
          />
        </div>
      </fieldset>

      <fieldset className={styles.section}>
        <legend className={styles.sectionTitle}><h3>Your needs</h3></legend>
        <div className={styles.formGroup}>
          <label htmlFor="service">{data.labels.service} *</label>
          <select 
            id="service" 
            name="service" 
            defaultValue=""
            className={errors.service ? styles.inputError : ''}
            aria-required="true"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>{data.placeholders.service}</option>
            {data.services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service && <span id="service-error" className={styles.error} role="alert">{errors.service}</span>}
        </div>
      </fieldset>

      <fieldset className={styles.section}>
        <legend className={styles.sectionTitle}><h3>Additional information</h3></legend>
        <div className={styles.formGroup}>
          <label htmlFor="message">{data.labels.message}</label>
          <textarea
            id="message"
            name="message"
            placeholder={data.placeholders.message}
          />
        </div>
      </fieldset>

      <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : data.submitButton}
        {!isSubmitting && <i className="bi bi-arrow-right"></i>}
      </button>

      {success && (
        <div className={styles.successMessage} role="status">
          {data.successMessage}
        </div>
      )}

      {errors.form && (
        <div className={styles.formError} role="alert">
          {errors.form}
        </div>
      )}
    </form>
  )
}
