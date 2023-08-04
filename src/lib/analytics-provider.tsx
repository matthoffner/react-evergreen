// AnalyticsProvider component
'use client';

import React from 'react';

import Script from 'next/script';

type Props = { children: React.ReactNode };

export default function AnalyticsProvider(children: Props) {
  // if you use env file
  // const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  // const domain = process.env.NEXT_PUBLIC_GTM_DOMAIN;
  // const reportDomain = process.env.NEXT_PUBLIC_GTM_REPORT_DOMAIN;

  // or just hard code
  const gaMeasurementId = 'your_measurement_id';
  const domain = 'https://www.googletagmanager.com';
  const reportDomain = 'https://www.google-analytics.com';

  return (
    <>
      {children}
  {/* I tried importing the Google Analytics component from the nextjs-google-analytics package, but it didn't work.
So I chose to write the script manually. */}
        {/* <GoogleAnalytics trackPageViews /> */}
      <Script
        id="google-analytics-js-cdn"
        src={`${domain}/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${gaMeasurementId}', {
                 page_path: window.location.pathname,
                 transport_url: '${reportDomain}',
                 first_party_collection: true
              });
          `,
        }}
      />
    </>
  );
}