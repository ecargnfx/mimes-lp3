// Note: React Helmet is not the recommended way to insert scripts in Next.js.
// Use the built-in Script component instead.
import Script from 'next/script';

export default function Email() {
  return (
    <div>
      <div
        id="getWaitlistContainer"
        data-waitlist_id="12159"
        data-widget_type="WIDGET_2"
        className="flex w-full flex-col justify-center items-center"
        placeholder="Enter your email"
      ></div>

      {/* Next.js Script component with async attribute */}
      <Script
        src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
