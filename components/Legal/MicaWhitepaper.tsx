'use client'

import { useRef, useEffect, useState } from 'react'
import styles from './MicaWhitepaper.module.scss'

export default function MicaWhitepaper() {
  const shadowHostRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAndRender = async () => {
      try {
        const res = await fetch('/sbp-mica-whitepaper.xhtml')
        if (!res.ok) throw new Error('Failed to load whitepaper')

        const xhtmlText = await res.text()

        // Extract <style> content
        const styleMatch = xhtmlText.match(/<style[^>]*>([\s\S]*?)<\/style>/i)
        let styleContent = styleMatch ? styleMatch[1] : ''

        // Remap html/body selectors to :host for Shadow DOM
        styleContent = styleContent
          .replace(/\bhtml\s*\{/g, ':host {')
          .replace(/\bbody\s*\{/g, ':host {')
          .replace(/\bbody\s*,/g, ':host,')

        // Extract <body> inner content
        const bodyMatch = xhtmlText.match(/<body[^>]*>([\s\S]*)<\/body>/i)
        const bodyContent = bodyMatch ? bodyMatch[1] : ''

        if (!shadowHostRef.current) return

        let shadowRoot = shadowHostRef.current.shadowRoot
        if (!shadowRoot) {
          shadowRoot = shadowHostRef.current.attachShadow({ mode: 'open' })
        }

        // Inject styles and content
        shadowRoot.innerHTML = `
          <style>
            ${styleContent}
            :host {
              display: block;
              background-color: #ffffff !important;
              overflow-x: auto;
              padding: 0 !important;
              margin: 0 !important;
            }
            * {
              max-width: 100% !important;
              box-sizing: border-box;
            }
            table {
              width: 100% !important;
              table-layout: fixed;
              word-wrap: break-word;
            }
          </style>
          ${bodyContent}
        `

        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while loading the whitepaper')
        setIsLoading(false)
      }
    }

    fetchAndRender()
  }, [])

  return (
    <div className={styles.wrapper}>
      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="whitepaper-title">
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 id="whitepaper-title" className={styles.heading}>
              MiCA Whitepaper
            </h1>
            <p className={styles.notification}>
              This whitepaper was notified to the Central Bank of Ireland in accordance with Regulation (EU) 2023/1114 on February 27th, 2026. It was subsequently amended on March 31st, 2026 to include the Digital Token Identifier (DTI) and Equivalent Digital Token Group Identifier (FFG/EDTG). These updates are non-material and do not affect the rights, obligations, or characteristics of the SBP token.
            </p>
            <a
              href="/sbp-mica-whitepaper.xhtml"
              download="sbp-mica-whitepaper.xhtml"
              className={styles.downloadLink}
              aria-label="Download the complete MiCA whitepaper as XHTML"
            >
              <i className="bi bi-download" aria-hidden="true" />
              Download the Complete MiCA Whitepaper
            </a>
          </div>
        </div>
      </section>

      {/* Embedded Whitepaper Content */}
      <section className={styles.contentSection} aria-labelledby="whitepaper-content-heading">
        <h2 id="whitepaper-content-heading" className={styles.srOnly}>Whitepaper Content</h2>
        <div className={styles.container}>
          <div className={styles.viewerWrapper}>
            {isLoading && (
              <div className={styles.loadingState} role="status" aria-live="polite">
                <p>Loading whitepaper...</p>
              </div>
            )}
            {error && (
              <div className={styles.errorState} role="alert">
                <p>
                  <strong>Unable to load whitepaper:</strong> {error}
                </p>
                <p className={styles.errorFallback}>
                  Please try using the download link above to access the whitepaper directly.
                </p>
              </div>
            )}
            <div
              ref={shadowHostRef}
              className={styles.whitepaperContent}
              role="document"
              aria-label="MiCA Whitepaper document"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
