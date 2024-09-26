import React from 'react';
import { auth } from '@/auth';
import { lusitana } from '@/app/ui/fonts';
import { Fondo, Frente } from '@/app/ui/marcos';

export default async function Page() {
  const session = await auth();

  if (session)
    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:mb-8 lg:text-2xl opacity-60`}>
          Página InicoTrámite: en desarrollo
        </h1>
        <Fondo className="p-3 mb-4 w-full opacity-50" >
          <h2 className="h-8 w-48 bg-slate-300 mb-2"></h2> 
          <p className="h-6 w-32 bg-slate-200 mb-2"></p> 
          <Frente className="p-3 w-full">
            <h2 className="h-8 w-48 bg-slate-300 mb-2"></h2> 
            <p className="h-6 w-60 bg-slate-200 mb-2"></p> 
            <p className="h-6 w-16 bg-slate-200 mb-2"></p> 
          </Frente>
        </Fondo>
      </main>
    );

    return (
      <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:mb-8 lg:text-2xl opacity-60`}>
          Página InicoTrámite: en desarrollo
        </h1>
        <Fondo className="p-3 mb-4 w-full opacity-50" >
          <h2 className="h-8 w-48 bg-slate-300 mb-2"></h2> 
          <p className="h-6 w-32 bg-slate-200 mb-2"></p> 
          <Frente className="p-3 w-full">
            <h2 className="h-8 w-48 bg-slate-300 mb-2"></h2> 
            <p className="h-6 w-60 bg-slate-200 mb-2"></p> 
            <p className="h-6 w-16 bg-slate-200 mb-2"></p> 
          </Frente>
        </Fondo>
      </main>
    );
}

