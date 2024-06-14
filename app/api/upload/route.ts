import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  
   const file: File | null = data.get("file") as unknown as File;

    /* console.log("filexx", file) */
  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  

  // With the file data in the buffer, you can do whatever you want with it.
  //Con los datos del archivo en el búfer, puedes hacer lo que quieras con ellos.
  // For this, we'll just write it to the filesystem in a new location
  //Para esto, simplemente lo escribiremos en el sistema de archivos en una nueva ubicación.
  //   const filePath = `/tmp/${file.name}`

  const filePath = path.join(process.cwd(), "public", file.name);
  const ruta= file.name

  console.log(ruta)
  await writeFile(filePath, buffer);
  
  /* console.log(`abra ${filePath} para ver el archivo subido`); */

  return new Response(JSON.stringify({
    message: 'Uploading file'
    })) /* NextResponse.json({ success: true }); */
}