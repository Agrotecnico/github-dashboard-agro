'use client';

import { Avatar } from '@/app/ui/uiRadix/avatar';
import { Button } from '@/app/ui/uiRadix/button';

import Link from 'next/link';
import IconMenu from '@/app/ui/logosIconos/icon-menu';
import NavLinksAdmin from '@/app/ui/dashboard/nav-links-admin';
import NavLinksMember from '@/app/ui/dashboard/nav-links-member';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { links, linkMembers } from '@/app/constant';
import clsx from 'clsx';
import { auth } from 'auth';
// import Dropdown from '@/app/pruebas/Dropdown';
import Dropdown from '@/app/ui/Dropdown';
import type { TramiteMd } from "@/app/lib/definitions"
import { Frente } from '@/app/ui/marcos';
import { CheckBadgeIcon, ChevronRightIcon, } from '@heroicons/react/24/outline';
import * as  DropdownMenu  from "@radix-ui/react-dropdown-menu";
// import * as Dialog  from "@radix-ui/react-alert-dialog";
import { useState } from 'react';


export default  function TramiteButtonMenu({allTramites }:{allTramites:TramiteMd[]}) {

  // const { data: session, update } = useSession();

  const [bookmarksChecked, setBookmarksChecked] = useState(true);
	const [urlsChecked, setUrlsChecked] = useState(false);
	const [person, setPerson] = useState("pedro");


  // const session = await auth();

  const pathname = usePathname();
  // console.log("session:", session?.user?.email)


  // if (session?.user?.email ===  process.env.ADMIN ) 

  return (

    <div className="block min-[900px]:hidden ">

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild /* className="bg-[#ffffff88] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e]py-4" */>
          <button
            className="inline-flex size-[35px] opacity-70 font-semibold text-[20px] py-1 px-4 items-center justify-center rounded-md bg-[#ffffffdd] text-[#50073acc] duration-150 outline-none hover:opacity-100 sm:text-[22]"
            aria-label="Customise options"
          >{/* shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e]*/}
            Seleccioná uno
            <ChevronRightIcon className="w-4 ml-4" />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] ml-3 rounded-md bg-[#ffffff70] p-1 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2),_inset_0_0_4px_1px_#ffffff] backdrop-blur-xl will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade md:ml-12"
            sideOffset={5}
          >


            {allTramites.map((tramite:TramiteMd) => (
              <Link
                  as={`/iniciar-tramite/${tramite.slug}`}
                  href="/iniciar-tramite/[slug]"
                  className={clsx(`py-[3px] px-2 my-0.5 bg-[#fff0] first:rounded-t-md first:mt-0 last:rounded-b-md last:mb-0 flex justify-between text-[#1d0215bb] items-center duration-200 hover:bg-[#ffffffcc] hover:text-[#1d0215] `,
                      {
                        'text-[#1d0216] bg-[#ffffffcb] ': pathname === `/iniciar-tramite/${tramite.slug}`
                      }
                    )}
                  key={tramite.slug} 
              >
                  <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center pr-[5px] text-[13px] leading-none outline-none ">
                  <p className="text-[14px] ml-2 text-start md:text-[14.5px] ">{tramite.tramite} {tramite.estado === "Derogado" && <span className="text-xs text-[#e42f2fc9] ">
                      {`(${tramite.estado})`}</span>}
                  </p>{/*  rounded-[3px]  text-violet11 data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1 data-[disabled]:pointer-events-none*/}
                  </DropdownMenu.Item>
                  {/* <p className="text-[14px] ml-2 text-start md:text-[14.5px] ">{tramite.tramite} {tramite.estado === "Derogado" && <span className="text-xs text-[#e42f2fc9] ">
                      {`(${tramite.estado})`}</span>}
                  </p> */}
              </Link>
            ))}



            {/* <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
              New Tab{" "}
              <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⌘+T
              </div>
            </DropdownMenu.Item> */}





            {/* <DropdownMenu.Arrow className="fill-white" /> */}

          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>











      {/* <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className="inline-flex size-[35px] items-center justify-center rounded-full bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
            aria-label="Customise options"
          >
            <IconMenu />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
              New Tab{" "}
              <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⌘+T
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
              New Window{" "}
              <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⌘+N
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
              disabled
            >
              New Private Window{" "}
              <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⇧+⌘+N
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:data-[state=open]:bg-violet9 data-[state=open]:bg-violet4 data-[disabled]:text-mauve8 data-[highlighted]:data-[state=open]:text-violet1 data-[highlighted]:text-violet1 data-[state=open]:text-violet11">
                More Tools
                <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                  <ChevronRightIcon />
                </div>
              </DropdownMenu.SubTrigger>
              <DropdownMenu.Portal>
                <DropdownMenu.SubContent
                  className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                  sideOffset={2}
                  alignOffset={-5}
                >
                  <DropdownMenu.Item className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                    Save Page As…{" "}
                    <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                      ⌘+S
                    </div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                    Create Shortcut…
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                    Name Window…
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="m-[5px] h-px bg-violet6" />
                  <DropdownMenu.Item className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1">
                    Developer Tools
                  </DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator className="m-[5px] h-px bg-violet6" />

            <DropdownMenu.CheckboxItem
              className="group relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">

                <CheckBadgeIcon />
              </DropdownMenu.ItemIndicator>
              Show Bookmarks{" "}
              <div className="ml-auto pl-5 text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                ⌘+B
              </div>
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.CheckboxItem
              className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">

                <CheckBadgeIcon />
              </DropdownMenu.ItemIndicator>
              Show Full URLs
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.Separator className="m-[5px] h-px bg-violet6" />

            <DropdownMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve11">
              People
            </DropdownMenu.Label>
            <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
              <DropdownMenu.RadioItem
                className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
                value="pedro"
              >
                <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">

                  <CheckBadgeIcon />
                </DropdownMenu.ItemIndicator>
                Pedro Duarte
              </DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem
                className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[5px] text-[13px] leading-none text-violet11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[disabled]:text-mauve8 data-[highlighted]:text-violet1"
                value="colm"
              >
                <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">

                  <CheckBadgeIcon />
                </DropdownMenu.ItemIndicator>
                Colm Tuite
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>

            <DropdownMenu.Arrow className="fill-white" />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root> */}


      {/* <Dropdown>
        <Dropdown.Button>
          <IconMenu
            width="20"
            heightx="20"
            className="fill-[#fff9] duration-200 group-hover:fill-[#ffffffdd] min-[824px]:hidden"
          />
        </Dropdown.Button>

        <Dropdown.Menu>
          <div className="px-4 py-6 flex items-center flex-col space-y-1 mx-4 border-b border-[#0000000e]">
            <p className="text-sm font-medium leading-none ">
              {session?.user?.email}
            </p>
          </div>
          <div className="flex w-screen flex-col px-2.5 pb-2.5 gap-[2px] rounded-xl ">
            {links &&
              links?.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      'flex items-center justify-start text-sm text-[#1d0215bb] duration-200 first:rounded-t-md last:rounded-b-md hover:text-[#1d0215] hover:bg-[#0000000a]',
                      {
                        'bg-[#00000009] text-[#1d0216] ':
                          pathname === link.href,
                      },
                    )}
                  >
                    <Dropdown.MenuItem>
                    <div className="flex w-full items-center justify-start gap-2 px-2.5 py-2">
                      <LinkIcon className="w-5 text-[#50073aaa]" />
                      <p className="text-start text-sm ">{link.name}</p>
                    </div>
                    </Dropdown.MenuItem>
                  </Link>
                );
              })}
          </div>
        </Dropdown.Menu>
      </Dropdown> */}


      {/* <div className="">
        <Dropdown>
          <Dropdown.Button>
            <Frente className=" px-4 py-1 bg-[#ffffffcc]  flex items-center gap-4">
              Seleccioná uno
              <ChevronRightIcon className="w-6 "  />
            </Frente>
          </Dropdown.Button>

          <Dropdown.Menu >
            <div className="flex w-screen flex-col px-2.5 pb-2.5 gap-[2px] rounded-xl ">
              <div className=' py-1 px-[3px] flex flex-col gap-1 '>

                {allTramites.map((tramite:Tramite) => (
                  <Link
                      as={`/iniciar-tramite/${tramite.slug}`}
                      href="/iniciar-tramite/[slug]"
                      className={clsx(`py-[5px] px-2.5 gap-5 bg-transparent first:rounded-t-md last:rounded-b-md flex justify-between text-[#1d0215bb] items-center duration-200 hover:bg-[#ffffff77] hover:text-[#1d0215] `,
                          {
                            'text-[#1d0216] bg-[#ffffff77] ': pathname === `/iniciar-tramite/${tramite.slug}`
                          }
                        )}
                      key={tramite.slug} 
                  >
                      <p className="text-[14px] ml-2 text-start md:text-[14.5px] ">{tramite.tramite} {tramite.estado === "Derogado" && <span className="text-xs text-[#e42f2fc9] ">
                          {`(${tramite.estado})`}</span>}
                      </p>
                  </Link>
                ))}
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div> */}
    </div>

  );

}

// box-shadow: 0 10px 38px -10px #16171859, 0 10px 20px -15px #16171833, inset 0 0 4px 1px #ffffffe8;
// background: #f5f5f5a1;
// backdrop-filter: blur(16px);
