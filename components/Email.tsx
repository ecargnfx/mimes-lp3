"use client";
import { Helmet } from 'react-helmet';

export default function Email() {
return (
    
 
<div>
    <div
            id="getWaitlistContainer"
            data-waitlist_id="12159"
            data-widget_type="WIDGET_2"
            placeholder='Enter your email'
            className='class="flex w-full flex-col justify-center items-center'
        ></div>
        <Helmet>

            <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
        </Helmet>
</div>





    );
}
