'use client'

import { useRef, useEffect, useState } from 'react'
import styles from './MicaWhitepaper.module.scss'

// Natural width of the document's A4 pages (210mm at 96dpi).
// The document is scaled, never reflowed, to preserve the layout
// as notified to the regulator.
const A4_WIDTH_PX = 794

export default function MicaWhitepaper() {
  const shadowHostRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [scale, setScale] = useState(1)
  const [viewportHeight, setViewportHeight] = useState<number | null>(null)

  useEffect(() => {
    const update = () => {
      const viewport = viewportRef.current
      const host = shadowHostRef.current
      if (!viewport || !host) return
      const nextScale = Math.min(1, viewport.clientWidth / A4_WIDTH_PX)
      setScale(nextScale)
      setViewportHeight(nextScale < 1 ? host.scrollHeight * nextScale : null)
    }
    update()
    const observer = new ResizeObserver(update)
    if (viewportRef.current) observer.observe(viewportRef.current)
    if (shadowHostRef.current) observer.observe(shadowHostRef.current)
    return () => observer.disconnect()
  }, [isLoading])

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

        // Inject styles and content. The document keeps its native A4
        // layout; responsiveness is handled by scaling the host element.
        shadowRoot.innerHTML = `
          <style>
            ${styleContent}
            :host {
              display: block;
              background-color: #ffffff !important;
              padding: 0 !important;
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
              This whitepaper was notified to the Central Bank of Ireland in accordance with Regulation (EU) 2023/1114 on February 27th, 2026. It was subsequently amended on March 31st, 2026, and June 25th, 2026. Amendment details and archived versions can be found below.
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
            <div className={styles.whitepaperContent}>
              <div
                ref={viewportRef}
                className={styles.scaleViewport}
                style={viewportHeight !== null ? { height: viewportHeight } : undefined}
              >
                <div
                  ref={shadowHostRef}
                  className={styles.shadowHost}
                  role="document"
                  aria-label="MiCA Whitepaper document"
                  style={scale < 1 ? { transform: `scale(${scale})`, transformOrigin: 'top left' } : undefined}
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Amendment Notifications */}
      <section className={styles.amendmentSection} aria-labelledby="amendment-heading">
        <div className={styles.container}>
          <div className={styles.amendmentContent}>
            <p className={styles.amendmentNotice}>
              This whitepaper was notified to the Central Bank of Ireland in accordance with Regulation (EU) 2023/1114 on February 27th, 2026. It was subsequently amended on March 31st, 2026 to include the Digital Token Identifier (DTI) and Equivalent Digital Token Group Identifier (FFG/EDTG). Another amendment was made on June 25th, 2026 removing references to specific third-party market makers, custodians, investors, and service providers, replacing them with generic references to institutional-grade market makers, institutional-grade custody providers, institutional investors, and related service providers. These updates are non-material and do not affect the rights, obligations, or characteristics of the SBP token.
            </p>
            <div className={styles.archivedLinks}>
              <a
                href="/whitepaper/mica/archived/sbp-mica-whitepaper-v1.pdf"
                download="sbp-mica-whitepaper-v1.pdf"
                className={styles.downloadLink}
                aria-label="Download SBP Whitepaper Version 1"
              >
                <i className="bi bi-download" aria-hidden="true" />
                SBP Whitepaper V1
              </a>
              <a
                href="/whitepaper/mica/archived/sbp-mica-whitepaper-v2.xhtml"
                download="sbp-mica-whitepaper-v2.xhtml"
                className={styles.downloadLink}
                aria-label="Download SBP Whitepaper Version 2"
              >
                <i className="bi bi-download" aria-hidden="true" />
                SBP Whitepaper V2
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
