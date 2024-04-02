import { format } from "date-fns";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST(request: Request) {
  const formData = await request.json();

  const { data, error } = await resend.emails.send({
    from: "WEBSITE QUERY <info@condorwebworks.co.uk>",
    to: ["adrian@aedl.uk"],
    bcc: ["jamie@condorwebworks.co.uk"],
    subject: "Website Enquiry",
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Website Enquiry</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 40px;
                background-color: #f7f7f7;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
            }
            .container {
 
                width:60vw;
                margin: 0 auto;
                padding: 0;
                background-color: #ffffff;
                border-radius: 8px;
-webkit-box-shadow: 0px 10px 28px 0px rgba(110,110,110,1);
-moz-box-shadow: 0px 10px 28px 0px rgba(110,110,110,1);
box-shadow: 0px 10px 28px 0px rgba(110,110,110,1);
            }
            .header {
                background-color: #336699;
                color: #ffffff;
                padding: 20px;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                text-align:center;
            }
            .header h1 {
                margin: 0;
            }
            .content {
                padding: 20px;
                padding-top:0;
            }
            .footer {
                background-color: #336699;
                color: #ffffff;
                padding: 20px;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                text-align:center;
                font-style:italic;
                font-size:10px;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center
            }
            .footer p {
                margin: 0;
            }

            span{
              text:10px
            }
            
            .content p{
                border:1px solid lightgray;
                border-radius:10px;
                display:flex;
                align-items:center;
                gap:4px;
            }
            
            .content p span{
                border-right:2px solid #336699;
                padding:10px;
                background: #336699;
                border-bottom-left-radius:10px;
                border-top-left-radius:10px;
                color:white;
                width:30%;
                margin-right:10px
            }
            
            .details{
                display:flex;
                flex-direction:column;
                
            }
            
            .details div{
                width:100%;
                text-align:center;
                font-weight:bold;
                font-style:italic;
            }
            
          .details p{
                text-align:center;
                font-size:15px;
                padding:10px;
            }

            img{
              height:20vh;
            }

            @media screen and (max-width: 768px) {
              .container {
                width: 90dvw; /* Adjusted width for small screens */
               

              }

              body{
                padding-top:50px;
                padding-bottom:50px
              }

              img{
                height:20px;
              }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Website Enquiry</h1>
            </div>
            <div class="content">
                <h4>New Website Enquiry <span>${format(
                  new Date(),
                  "dd/MM/yyyy HH:mm"
                )}</span></h4>
                <p><span>First Name</span> ${formData?.["First Name"]}</p>
                <p><span>Surname</span> ${formData?.["Surname"]}</p>
                <p><span>Company Name</span> ${formData?.["Company Name"]}</p>
                <p><span>Location</span> ${formData?.["Location"]}</p>

                <p><span>Email</span> ${formData?.["Email"]}</p>
                <p><span>Number</span> ${formData?.["Number"]}</p>

                <div class="details">
                    <div>Details of Enquiry</div>
                    <p> ${formData?.["Details Of Enquiry"]}</p>
                </div>
               
            </div>
            <div class="footer">
               Enquiry Provided by Condor Web Works
            </div>
        </div>
    </body>
    </html>
    `,
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }

  return NextResponse.json(formData);
}
