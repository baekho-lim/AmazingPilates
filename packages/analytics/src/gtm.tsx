"use client";

import Script from "next/script";

interface GTMProviderProps {
  gtmId: string;
}

// GTM Head Script - to be placed in <head>
export function GTMScript({ gtmId }: GTMProviderProps) {
  if (!gtmId) return null;

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `,
      }}
    />
  );
}

// GTM NoScript - to be placed immediately after <body>
export function GTMNoScript({ gtmId }: GTMProviderProps) {
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

// Combined GTM component for layout
export function GoogleTagManager({ gtmId }: GTMProviderProps) {
  if (!gtmId) return null;

  return (
    <>
      <GTMScript gtmId={gtmId} />
    </>
  );
}

// Naver Analytics Script
interface NaverAnalyticsProps {
  naId: string;
}

export function NaverAnalytics({ naId }: NaverAnalyticsProps) {
  if (!naId) return null;

  return (
    <Script
      id="naver-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          if(!wcs_add) var wcs_add = {};
          wcs_add["wa"] = "${naId}";
          if(window.wcs) {
            wcs_do();
          }
        `,
      }}
    />
  );
}
