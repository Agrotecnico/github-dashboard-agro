import React from 'react';
import { auth } from '@/auth';
import Pagination from '@/app/ui/invoices/pagination';
import { fetchConsultasPages } from '@/app/lib/data';
import TableConsultaAdmin from '@/app/ui/consultas/table-consulta-admin';
import TableConsultaMember from '@/app/ui/consultas/table-consulta-member';
import ConsultasTableM from '@/app/ui/consultas/xxxtable-member';
import { fetchUserById } from '@/app/lib/data';
import EditProfileName from '@/app/ui/edit-profile-name';
import { fetchConsultasPagesM } from '@/app/lib/data';
import { fetchFilteredConsultasM } from '@/app/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import   AcordeonTramite   from "@/app/ui/tramites/acordeonTramite";
import { getAllTramites } from '@/app/lib/getTramite';
import markdownToHtml from '@/app/lib/markdownToHtml';
import * as Accordion from "@radix-ui/react-accordion";
import type { Tramite } from "@/app/lib/definitions"
// import { useState } from "react"
import { ChevronDownIcon } from '@heroicons/react/24/outline'


export const metadata: Metadata = {
  title: 'Iniciar Trámite',
};


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  // const [clicked, setClicked] = useState<number | boolean>(false);

  const session = await auth();
  const user = await fetchUserById(session?.user?.email);
  const id= user?.id

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchConsultasPages(query);
  const {totalPagesMember, countcon} = await fetchConsultasPagesM(id);


  const allTramites = getAllTramites();

  // let contentxx: string[] = []
  // allTramites.map((tramite:Tramite, index) => {
  //   contentxx.push(tramite.content!)
  // })

  let content: string[] = []
  allTramites.map(async (tramite:Tramite, index) => {
    content.push(await markdownToHtml(tramite.content)) ;
  })

  // const content = await markdownToHtml(allTramites[0].content || '');


  const consultas = await fetchFilteredConsultasM( id, currentPage );
  const lengthConsultas= consultas.length

  // const toggle = (index: number) => {
  //   if (clicked === index) {
  //       return setClicked(true);
  //       }
  //       setClicked(index);
  //   }

  // console.log("allTramites:", allTramites)
  // console.log("contentxx:", content)

  if (user?.email === process.env.ADMIN)

    return notFound();

    return (
      <main>
        <h1
          className={` mb-7 text-xl lg:text-2xl`}
        >
          Iniciá tu trámite
        </h1>

        <AcordeonTramite allTramites={allTramites} content={content} />
      </main>
    );
}