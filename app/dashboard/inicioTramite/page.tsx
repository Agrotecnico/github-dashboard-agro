import React from 'react';
import { auth } from '@/auth';
import { lusitana } from '@/app/ui/fonts';
import { Fondo, Frente } from '@/app/ui/marcos';

export default async function Page() {
  const session = await auth();

  if (session)
    return (
      <main>
        <h1 className={`${lusitana.className} mb-8 text-xl lg:text-2xl opacity-60`}>
          Página InicoTrámite: en desarrollo
        </h1>
        <div className="p-3 mb-4 w-full opacity-50 bg-[#30032210] " >
          <h2 className="h-8 w-48 bg-[#1d02151a] mb-2"></h2> 
          <p className="h-6 w-32 bg-[#1d021511] mb-2"></p> 
          <Frente className="p-3 mt-4 w-full">
            <h2 className="h-8 w-48 bg-[#1d02151a] mb-2"></h2> 
            <p className="h-6 w-60 bg-[#1d021511] mb-2"></p> 
            <p className="h-6 w-16 bg-[#1d021511] mb-2"></p> 
          </Frente>
        </div>
      </main>
    );

    return (
      <main>
        <h1 className={`${lusitana.className} mb-2 text-xl lg:text-2xl opacity-60`}>
          Página InicoTrámite: en desarrollo
        </h1>
        <div className="p-3 mb-4 w-full opacity-50" >
          <h2 className="h-8 w-48 bg-[#1d02151a] mb-2"></h2> 
          <p className="h-6 w-32 bg-[#1d021511] mb-2"></p> 
          <Frente className="p-3 w-full">
            <h2 className="h-8 w-48 bg-[#1d02151a] mb-2"></h2> 
            <p className="h-6 w-60 bg-[#1d021511] mb-2"></p> 
            <p className="h-6 w-16 bg-[#1d021511] mb-2"></p> 
          </Frente>
        </div>
      </main>
    );
}

