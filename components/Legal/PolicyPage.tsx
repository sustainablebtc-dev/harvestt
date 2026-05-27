'use client';

import { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import styles from './PolicyPage.module.scss';

interface PolicyPageProps {
  policyName: string;
}

export default function PolicyPage({ policyName }: PolicyPageProps) {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        const response = await fetch(`/legal/${policyName}.html`);
        if (!response.ok) {
          throw new Error(`Failed to load ${policyName}`);
        }
        const html = await response.text();
        const sanitized = DOMPurify.sanitize(html, {
          ALLOWED_TAGS: [
            'p', 'br', 'strong', 'b', 'em', 'i', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
            'a', 'blockquote', 'code', 'pre', 'section', 'article', 'div',
          ],
          ALLOWED_ATTR: ['href', 'title', 'target', 'rel', 'style'],
          ALLOW_DATA_ATTR: false,
        });
        setContent(sanitized);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'An error occurred while loading this policy'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchPolicy();
  }, [policyName]);

  const formattedTitle = policyName
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{formattedTitle}</h1>

        {isLoading && (
          <div className={styles.loading} role="status" aria-live="polite">
            <p>Loading policy...</p>
          </div>
        )}

        {error && (
          <div className={styles.error} role="alert">
            <p>
              <strong>Unable to load this policy:</strong> {error}
            </p>
            <p>Please try refreshing the page or contact us at info@sustainablebtc.org.</p>
          </div>
        )}

        {!isLoading && !error && (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </div>
  );
}
