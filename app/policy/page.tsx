export default function PolicyPage() {
  return (
    <div className="space-y-2 pt-14 px-10 max-w-[1024px] mx-auto ">
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Términos del servicio</h2>
        <p className="text-lg mb-2">
        El software se proporciona "tal cual", sin garantía de ningún tipo, expresa o implícita, 
        incluyendo pero no limitado a las garantías de comerciabilidad, 
        idoneidad para un fin determinado y no infracción en ningún caso los autores o titulares
         de los derechos de autor serán responsables de ningún reclamación, daños u otra responsabilidad, 
         ya sea en una acción contractual, agravio o de otra manera, que surja de, 
         fuera de o en relación con el software o el uso u otras negocios en el software.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Política de Privacidad</h2>
        <p className="text-lg mb-2">
          Este sitio utiliza tokens web JSON y una base de datos en memoria que se actualiza
          cada ~2 horas.
        </p>
        <p className="text-lg mb-2">
          Los datos proporcionados a este sitio se utilizan exclusivamente para permitir el inicio de sesión
          y no se pasa a ningún servicio de terceros, excepto a través de SMTP o
          OAuth para fines de autenticación.
        </p>
      </section>
    </div>
  )
}