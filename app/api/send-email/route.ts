
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {

    const data = await request.formData();

    let datax: string[] | null  = []
      for (const /*pair*/  [key, value]  of data) {
          const file= data.get(key) as unknown as string;
          datax.push( file )
      }

      const [name, email, phone, message] = datax;

      const contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;


    console.log("contentHTML:", contentHTML)

  


  return NextResponse.json({
    success: "received",

  });

}