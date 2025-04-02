'use client';

import { useFormState } from 'react-dom';
import { FormEvent, useState, useEffect, useMemo, useRef } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Disclosure, DisclosurePanel } from '@headlessui/react';
import clsx from 'clsx';

import { User } from '@/app/lib/definitions';
import IconConsultaRight from "@/app/ui/logosIconos/icon-consulta-right"
import { createConsulta } from '@/app/lib/actions';
import { Frente } from '@/app/ui/marcos';
import useToggleState from "@/app/lib/hooks/use-toggle-state";
import IconCambio from '@/app/ui/logosIconos/icon-cambio';
import { generarClaveUnica } from "@/app/lib/utils";
import IconArchivo from '@/app/ui/logosIconos/icon-archivo';
import { ImageListType} from '@/app/ui/consultas/typings';
import ImageUploading from "@/app/ui/consultas/ImageUploading"
import IconDragDrop from '@/app/ui/logosIconos/icon-drag-drop';
import { ButtonB, ButtonA } from '@/app/ui/button';
import RegistrarEmail from '@/app/ui/registrar-email';


import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import IconEmail2 from "@/app/ui/logosIconos/icon-email2"
import { InputCnp } from "@/app/ui/uiRadix/input-cnp";
import IconRegistro from "@/app/ui/logosIconos/icon-registro"
import { createUser } from '@/app/lib/actions';
import  TabsTramite  from '@/app/ui/tramites/tabsTramite';
import { getTramiteBySlug } from '@/app/lib/getTramite';
import markdownToHtml from '@/app/lib/markdownToHtml';
import { TramiteMd } from "@/app/lib/definitions"


export default function IniciarTramite( {
  tramiteMd,
  content
}: {
  tramiteMd: TramiteMd;
  content: string
} ) {
  
  // const [consulta, setConsulta] = useState('');
  const [informacion, setInformacion] = useState('');
  const [tramite, setTramite] = useState('');
  const [imageUrl, setImageUrl] = useState<string>("");

  const [successState, setSuccessState] = useState(false)
  const [spin, setSpin] = useState(false);
  const [images, setImages] = useState<ImageListType>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [statex, setStatex] = useState(false);
  const [statexx, setStatexx] = useState(true);


  const { state, close, toggle } = useToggleState()
  const maxNumber = 5;

  const files: File[]= []
  images.map((image) => {
    files.push(image.file!)
  })

  const buttonyRef = useRef<HTMLButtonElement>(null);

  const handleClickButton= () => {
    if (buttonyRef.current) buttonyRef.current.click()
  };

  const enviarConsulta= () => {
    setTimeout(handleClickButton, 200) 
    setTimeout(() => setSpin(false), 200) 
    // setSpin(false)
    // location.reload()
  }

  const handleToggle = () => {
    clearState();
    setTimeout(() => toggle(), 100);
  };
  
  // const codigoConsulta: string = useMemo(() => generarClaveUnica(16), [] );

  const clearState = () => {
    setSuccessState(false)
  }

  // const uploadToServer = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (files.length === 0) return;

  //   try {
  //     const data = new FormData();

  //     {files.map((file, index) => {
  //       data.append(`file${index}`, file );
  //     })}
  //     const response = await fetch('/api/upload-query', {
  //       method: 'POST',
  //       body: data,
  //     });
  //     const responseData = await response.json();

  //     const polo: string[]= responseData.urls

  //     const respon= JSON.stringify(polo )

  //     setImageUrl(respon);
  //     if (response.ok) {
  //       console.log('File uploaded successfully');
  //     }

  //     enviarConsulta();

  //   } catch (error) {
  //     console.error(error);
  //   }
  //   setSpin(false)
  // };

  const uploadToServer1 = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      enviarConsulta();
    } catch (error) {
      console.error(error);
    }
  };

  const uploadToServer2 = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (files.length === 0) return;

    try {
      const data = new FormData();

      {files.map((file, index) => {
        data.append(`file${index}`, file );
      })}
      const response = await fetch('/api/upload-query', {
        method: 'POST',
        body: data,
      });
      const responseData = await response.json();

      const polo: string[]= responseData.urls

      const respon= JSON.stringify(polo )

      setImageUrl(respon);
      if (response.ok) {
        console.log('File uploaded successfully');
      }

      enviarConsulta();

    } catch (error) {
      console.error(error);
    }
    setSpin(false)
  };

  const renderFilePreview = (file: File ) => { 
    const fileType = file?.type; 
    if (fileType.startsWith('image/')) { 
      return ( 
        <img 
          src={URL.createObjectURL(file)} 
          alt={file.name} 
          className="min-h-[80px] object-contain bg-[#ffffffaa] w-20 border border-[#1d021544] [border-radius:_6px_6px_0_6px] " />
      ); 
      } else if ( fileType === 'application/pdf' ) { 
        return ( 
        <embed 
          src={URL.createObjectURL(file)} 
          type="application/pdf" 
          className="min-h-[80px] object-contain bg-[#ffffffaa] w-[80px] h-[100px]  border border-[#1d021544]  [border-radius:_6px_6px_0_6px] " />
        ); 
      } else { return ( 
      <p className=" text-[#fff] break-words p-2 text-xs text-left">
         Tipo archivo: <i className="text-[#d9d9d9] text-xs">({fileType})</i>
      </p> 
      ); 
    }
  }

  useEffect(() => {
    if (successState) {
      close()
    };
    setTramite(`${tramiteMd.tramite}`);
  }, [successState, close, tramiteMd ])

  const onChange = (imageList: ImageListType, addUpdateIndex: Array<number> | undefined) => {
    setImages(imageList);
  };


  const initialStatex = { message: null, errors: {} };
  const [estadox, dispatchx] = useFormState(createUser, initialStatex);
  const polo= estadox?.message


  const initialState = { message: null, errors: {} };
  const [estado, dispatch] = useFormState(createConsulta, initialState);
  const polox= estado?.message

  console.log("images", images)


  return (
    <>
      <div className="flex items-center pb-3">
        <img 
          src= "/dnrpa.png" 
          alt="icono trámites" 
          width={26} 
          height={"auto"}
          className="opacity-50 h-[20px] w-[20px] mr-3 " 
        />
        <h1 className=" text-start text-[20px] text-[#50073a88] font-semibold leading-tight tracking-tighter sm:text-[22px] md:leading-none ">
          {tramiteMd.tramite}
        </h1>
      </div>

      <Frente className="!bg-[#1d021514]  min-h-[200px]">
        <TabsTramite tramiteMd={tramiteMd} content={content} />
      </Frente>

      {/* registrar email */}
      { polo === null || polo !== "usuario" && polox === "Database Error: El email ya existe." ? (
        <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#1d021513] ">
          <div className="flex items-center justify-between gap-5">
            <div className="mt-1.5 ">
              <IconRegistro className="opacity-60 w-[24px] ml-3 " />
            </div>
            {/* {statexx === false ? (
              <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300  ${statex ? "opacity-100" : "opacity-0"  } `}>
                Registrá un e-mail para mandarte la respuesta
              </div>
            ) : (
              <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300 `}>
                Hola {name} se registro el e-mail: {email}
              </div>
            )} */}

            <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300  ${statex ? "opacity-100" : "opacity-0"  } `}>
              Registrá un e-mail para mandarte el presupuesto
            </div>
              
            <ButtonB
              className={`h-8 text-[13px]  w-max`}/*  ${statexx && "hidden"} */
              onClick={() => { setStatex(!statex)/* handleToggle() */; setEmail(""); setName("")}}
              // type={state ? "reset" : "button"}
              data-testid="edit-button"
              data-active={statex}
            >
              {statex ? "Cancelar" :  <div className="text-[12px] overflow-auto whitespace-nowrap"> Registrar EMAIL</div>  }
            </ButtonB>
          </div>
          
          <div
              className={clsx(
                "transition-[max-height,opacity] duration-300 ease-in-out overflow-visible",
                {
                  "max-h-[1000px] opacity-100": statex,
                  "max-h-0 opacity-0": !statex,
                }
              )}
            >
              <div className="flex flex-col gap-y-2 pt-4">
                <div>
                  {/* Registrar name/email */}
                  <form action={dispatchx}>

                    {/*input nombre/email */}
                    <fieldset className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
                      <InputCnp
                        className="text-sm h-8"
                        id="name"
                        type="text"
                        name="name"
                        minLength={3}
                        maxLength={100}
                        value={name}
                        placeholder= "Nombre"
                        required
                        disabled={ !statex }
                        onChange={(e) => {
                          setName(e.target.value);
                      }} >
                        <div className="absolute rounded-l-[4px] h-[32px] w-[32px] left-0 top-0 bg-[#1d02150b]" >
                        </div>
                        <IconCuenta  className="absolute w-[14px] left-[9px] top-[9px] " color="#50073a66" />
                      </InputCnp>

                      <InputCnp
                        className="text-sm h-8"
                        id="email"
                        type="email"
                        name="email"
                        minLength={3}
                        maxLength={100}
                        value={email}
                        placeholder= "Email"
                        required
                        disabled={ !statex }
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }} >
                        <div className="absolute rounded-l-[4px] h-[32px] w-[32px] left-0 top-0 bg-[#1d02150b]" >
                        </div>
                        <IconEmail2  className="absolute w-[14px] left-[9px] top-[9px] " color="#50073a66" />
                      </InputCnp>
                    </fieldset>

                    <input
                      // className="hidden"
                      id="password"
                      type="hidden"
                      name="password"
                      value="Cnp-Mandataria-25"
                      // autoComplete="new password"
                      // required
                      readOnly
                      // minLength={6}
                    />

                    <input
                      // className="hidden"
                      id="confirmPassword"
                      type="hidden"
                      name="confirmPassword"
                      value="Cnp-Mandataria-25"
                      // autoComplete="new password"
                      // required
                      readOnly
                      // minLength={6}
                    />

                    <input
                      // className="hidden"
                      id="role"
                      type="hidden"
                      name="role"
                      value="member"
                      // autoComplete="new password"
                      // required
                      readOnly
                      // minLength={6}
                    />

                    {/* Massages erros */}
                    <div
                      className="flex items-end relative space-x-8"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {estadox?.message && (
                        <>
                          <ExclamationCircleIcon className="absolute top-4 h-5 w-5 text-red-500" />
                          <p className="pt-4 text-sm text-red-500">{estadox?.message}</p>
                        </>
                      )}
                    </div>

                    {/* button submit */}
                    <div className=" flex items-center justify-end gap-4 mt-4 text-sm">



                      




                      <ButtonA
                        // type="submit"
                        // ref={buttonyRef}
                        className={`h-8 text-[13px] w-max`}
                        disabled={ email == "" && name == ""}
                        // onClick={() => {
                        //   setStatex(false);
                        // }}
                      >
                        Registrar
                      </ButtonA>
                    </div>
                  </form>
                </div>
              </div>
            {/* </DisclosurePanel>
          </Disclosure> */}
          </div>
        </Frente>
      ) : (
        <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#e6e0e3] ">
          <div className="flex items-center justify-between gap-5">
            <div className="mt-1.5 ">
              <IconRegistro className="opacity-60 w-[24px] ml-3 " />
            </div>
            <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300  `}>
               <span className="text-[16px] text-[#1d0215] ">Hola! {name}</span>. Se registró el e-mail <span className="text-[14px] font-medium text-[#1d0215] ">{email}</span> para mandarte el presupuesto.
            </div>
          </div>
        </Frente>
      ) }

      {/* Massages error tramite */}
      <div
        className="mb-3 mt-3 flex items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {estado?.message && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{estado?.message}</p>
          </>
        )}
      </div>
      
      {/* crear tramite */}
      <form action={dispatch}>
        {/* archivos Adjuntos */}
        <input
          type="hidden"
          id="documentos_url"
          name="documentos_url"
          value={imageUrl ? imageUrl : `["https://res.cloudinary.com/dchmrl6fc/image/upload/v1740640515/sin-adjuntos_ut7col.png"]` }
          readOnly
        />
        {/* tramite */}
        <input
          type="hidden"
          id="tramite"
          name="tramite"
          value={tramite}
          readOnly
        />
        {/* email */}
        <input
          type="hidden"
          id="email_id"
          name="email_id"
          value={email}
          readOnly
        />
        {/* informacion */}
        <input
          type="hidden"
          id="informacion"
          name="informacion"
          value={informacion}
          readOnly
        />

        <button
          // form="form1"
          type="submit"
          ref={buttonyRef}
          className= "hidden font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-[#fff] aria-disabled:cursor-not-allowed aria-disabled:opacity-50 w-max small:max-w-[140px] bg-[#300322dd] text-[#d9d9d9] justify-center items-center text-[13px] duration-150 text-center !px-2.5 h-[26px] rounded-md hover:bg-[#300322] hover:text-[#eee] active:!bg-[#300322aa] disabled:opacity-40 disabled:hover:bg-[#300322dd] disabled:hover:text-[#d9d9d9] disabled:active:!bg-[#300322dd]" 
          disabled={ tramite === ''}
          // onClick={() => { location.reload() }}
          // onClick={() => {
          //   setImageUrl("");
          // }}
        >
          Enviar Trámite
        </button>
      </form>

      {/* Enviar tramite */}
      <form onSubmit={ files.length === 0 ? uploadToServer1 : uploadToServer2 } >
        <div className="w-full flex justify-end mt-3">
          <ButtonA
            className={`w-[200px] h-8 text-sm !justify-start  ${!tramite ? 'opacity-40' :  'opacity-100'}`}
            type="submit"
            // disabled={!consulta && true }
            disabled={tramite && polo ? false : true }
            onClick={() => {
              setSpin(true);
            }}
          >
            <IconCambio
              className={`${spin && "animate-spin"} mr-2 w-[22px] h-[22px] `}
              fill2="#fffc"
              fill="#ff00ff"
            />
            <div
              className="w-full"
            >
              Pedir presupuesto
            </div>
          </ButtonA>
        </div>
      </form>
    </>
  );
}

