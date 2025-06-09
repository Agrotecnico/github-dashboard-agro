
import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLAUDINARY_NAME,
  api_key: process.env.CLAUDINARY_KEY,
  api_secret: process.env.CLAUDINARY_SECRET,
});

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get('file') as unknown as File;

  console.log("fileqqqq:", file)

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Con los datos del archivo en el buffer, puedes hacer lo que quieras con ellos.
  // Para esto, simplemente los escribiremos en el sistema de archivos en una nueva ubicación.
  // const filePath = `/tmp/${file.name}`

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
  console.log("response:", response )

  return NextResponse.json({
    success: true,
    url: response.secure_url,
  });

}
