import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

import { v2 as cloudinary } from 'cloudinary';
import { rejects } from 'assert';

cloudinary.config({
  cloud_name: process.env.CLAUDINARY_NAME /* "dchmrl6fc" 'dchmrl6fc' */,
  api_key: process.env.CLAUDINARY_KEY /*"582311814716175"  '582311814716175' */,
  api_secret: process.env.CLAUDINARY_SECRET, //'egxKqBsor7mvNbgV3JCOvwfdVvE'  Click 'View API Keys' above to copy your API secret
});

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  //   const filePath = `/tmp/${file.name}`

  // Con los datos del archivo en el buffer, puedes hacer lo que quieras con ellos.
  // Para esto, simplemente los escribiremos en el sistema de archivos en una nueva ubicación.
  // const filePath = `/tmp/${file.name}`

  /* const filePath = path.join(process.cwd(), "public/customers", file.name);
  await writeFile(filePath, buffer);
  console.log(`open ${filePath} to see the uploaded file`); */

  const response = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, resul) => {
        if (err) {
          reject(err);
        }
        resolve(resul);
      })
      .end(buffer);
  });

  //guardar en base datos
  //procesar imagen
  console.log("response:", response.secure_url )

  return NextResponse.json({
    success: true,
    url: response.secure_url,
  });
}
