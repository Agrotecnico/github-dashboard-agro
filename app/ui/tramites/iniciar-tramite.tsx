'use client';

import { useFormState } from 'react-dom';
import { FormEvent, useState, useEffect, useRef } from 'react';
import { ExclamationCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import * as Tabs  from "@radix-ui/react-tabs";

import { User } from '@/app/lib/definitions';
import { createTramite } from '@/app/lib/actions';
import { Frente } from '@/app/ui/marcos';
import IconCambio from '@/app/ui/logosIconos/icon-cambio';
import { generarClaveUnica } from "@/app/lib/utils";
import { ImageListType} from '@/app/ui/consultas/typings';
import ImageUploading from "@/app/ui/consultas/ImageUploading"
import IconDragDrop from '@/app/ui/logosIconos/icon-drag-drop';
import { ButtonB, ButtonA } from '@/app/ui/button';
import markdownStyles from './markdown-styles.module.css';

import IconCuenta from "@/app/ui/logosIconos/icon-cuenta"
import IconEmail2 from "@/app/ui/logosIconos/icon-email2"
import { InputCnp } from "@/app/ui/uiRadix/input-cnp";
import IconRegistro from "@/app/ui/logosIconos/icon-registro"
import { createUser } from '@/app/lib/actions';
import { TramiteMd } from "@/app/lib/definitions"
import { Divide } from 'lucide-react';
import EditProfileImage from '@/app/ui/edit-profile-image';


export default function IniciarTramite( {
  tramiteMd,
  content,
  user
}: {
  tramiteMd: TramiteMd;
  content: string;
  user: User | undefined;
} ) {
  
  // const [informacions, setInformacions] = useState<string[] | null>(Array(5).fill(null));
  const [tramite, setTramite] = useState('');
  const [imageUrl, setImageUrl] = useState<string>("");
  const [spin, setSpin] = useState(false);
  const [images, setImages] = useState<ImageListType>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const [inf, setInf] = useState<string[]>([]);

  const [statex, setStatex] = useState(false);

  const [info0, setInfo0] = useState<string | undefined>("")
  const [info1, setInfo1] = useState<string | undefined>("")
  const [info2, setInfo2] = useState<string | undefined>("")
  const [info3, setInfo3] = useState<string | undefined>("")
  // const [info, setInfo] = useState<string [] | undefined>([])

  

  const documentacions: string[] | undefined = tramiteMd.documentacion?.split(", ")

  const documentos:string[] | undefined= tramiteMd.documentos?.split(", ")
  const informations:string[] | undefined= tramiteMd.informacion?.split(", ")

  // const maxNumber = 5;
  const maxNumber = documentos?.length;


  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
  const d = new Date();
  const date= `${months[d.getMonth()]}-${d.getFullYear()}`

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
  }
  
  const uploadToServer1 = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setImageUrl(`["https://res.cloudinary.com/dchmrl6fc/image/upload/v1740640515/sin-adjuntos_ut7col.png"]`);

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
    // setSpin(false)
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
    setTramite(`${tramiteMd.tramite}`);
    // setInf(informations)
  }, [tramiteMd])

  const onChange = (imageList: ImageListType, addUpdateIndex: Array<number> | undefined) => {
    setImages(imageList);
  };

  const initialStatex = { message: null, errors: {} };
  const [estadox, dispatchx] = useFormState(createUser, initialStatex);
  const polox= estadox?.message


  const initialState = { message: null, errors: {} };
  const [estado, dispatch] = useFormState(createTramite, initialState);
  const polo= estado?.message

  // console.log("info0:", info0)
  // console.log("info1:", info1)
  // console.log("images:", images)



  // console.log("images:", images)
  // console.log("info:", info0)


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
        <Tabs.Root
          className="flex  flex-col"
          defaultValue="tab1"
        >
          <Tabs.List
            className="flex shrink-0 text-sm md:text-[15px]"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="flex bg-[#ffffff63] flex-1 duration-150 cursor-pointer select-none items-center justify-center py-3 px-5 leading-none  text-[#1d021577] outline-none hover:text-[#1d0215aa] data-[state=active]:bg-[#f1eef000] data-[state=active]:cursor-default data-[state=active]:text-[#1d0215cc]"
            value="tab1"
            >
              Descripción
            </Tabs.Trigger>

            <Tabs.Trigger
              className="border-x border-[#e6e0e3] flex bg-[#ffffff63] flex-1 duration-150 cursor-pointer select-none items-center justify-center py-3 px-5 leading-none  text-[#1d021577] outline-none hover:text-[#1d0215aa] data-[state=active]:bg-[#f1eef000] data-[state=active]:cursor-default data-[state=active]:text-[#1d0215cc]"
              value="tab2"
            >
              Adjuntar Documentos
            </Tabs.Trigger>

            <Tabs.Trigger
              className="flex bg-[#ffffff63] flex-1 duration-150 cursor-pointer select-none items-center justify-center py-3 px-5 leading-none  text-[#1d021577] outline-none hover:text-[#1d0215aa] data-[state=active]:bg-[#f1eef000] data-[state=active]:cursor-default data-[state=active]:text-[#1d0215cc]"
              value="tab3"
            >
              Informacíon
            </Tabs.Trigger>

                  
          </Tabs.List>

          <Tabs.Content
            className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215cc] md:text-[15px]"
            value="tab1"
          >
            <p className="mb-3">
                Descripción general del trámite
            </p>

            <div className=" duration-300 rounded-[4px] ">
              {tramiteMd.slug === "x-Otros" ? (
                <div className="flex flex-col gap-y-1">
                  <textarea
                  className={`w-full rounded-[4px] mt-2.5 p-3 border border-[#e9dae9] bg-[#ffffff] text-[#000000cc] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-100 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585]`}
                  id="trmite"
                  name="tramite"
                  placeholder= "detallá otro trámite..."
                  required
                  rows={4}
                  maxLength={1024}
                  wrap="hard"
                  // value={consulta}
                  // disabled={ !state }
                  // onChange={(e) => {
                  //   setConsulta(e.target.value);
                  // }}
                  />
                </div>
              ) : (
                <div className="bg-[#ffffff65]">
                  <div
                  className={`rounded-sm py-2 px-3  ${markdownStyles['markdown']}`}
                  dangerouslySetInnerHTML={{ __html: content }}
                  />
                  <p className="px-3 text-sm underline underline-offset-2 decoration-[#1d021555]">
                    Comprobantes requeridos
                  </p>
                  <div className="py-2 px-3 rounded-sm">
                    <ul className="ml-4 list-disc marker:text-[#d066d5]" >
                        {documentacions?.map((documento, index) => (
                            <li key={index} className=" ">
                                {documento}
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
            <div className="w-full flex mt-3 ">
              <div className="flex items-center text-[13px] opacity-90 md:text-[13.5px]">
                  <ArrowPathIcon className="h-4 w-4 mr-2.5 text-[#50073a9d] stroke-2 " />
                  <p className="text-[#50073a7d] font-medium ">{tramiteMd.date !== "actual" ? tramiteMd.date : date }</p>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content
            className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215cc] md:text-[15px]"
            value="tab2"
          >
            <p className="mb-3">
                Adjuntá los siguientes documentos para realizar el presupuesto:
            </p>

            <div className="py-2 px-3 mb-4 rounded-sm bg-[#ffffff65]">
              <ul className="list-none" >
                  {documentos?.map((documento, index) => (

                    // <EditProfileImage  user={user} />

                    <li key={index} className=" ">
                        - {documento} <span className="font-semibold text-xs opacity-50 text-[#d400aa]">&#10003;</span>
                    </li>
                  ))}
              </ul>
            </div>

            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              // onError={onError}
              maxNumber={maxNumber}
              dataURLKey="data_url"
              maxFileSize= {4000000}
              acceptType={["jpg", "png", "pdf"]}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                errors,
              }) => (
                <div className={`flex flex-col bg-[#4f2642] rounded-lg ${!images.length ? 'gap-0' : 'gap-0.5'} $ `} >
                  <button
                    type="button"
                    onClick={onImageUpload}
                    {...dragProps}
                    className={`group rounded-lg w-full disabled:!cursor-default `}
                  >
                    <div className={`relative label-dnd  ${!images.length ? 'rounded-lg' : 'rounded-t-lg'} bg-[#1d0215] text-[#ffffffdd] w-full p-4 duration-150 text-sm flex flex-col justify-center items-center active:opacity-80  `}>
                      <div className="flex flex-col items-center duration-150 opacity-80 group-hover:opacity-100 min-[512px]:flex-row ">
                        <IconDragDrop className= "w-9 opacity-80  min-[512px]:mr-7" />
                        <div>
                          Click y elegí un archivo o arrastralo y sueltá aquí <br />
                          <p className="text-xs mt-1.5 text-[#ffffffbb]">Cantidad Máx: <b>{maxNumber}</b> archivos <b>jpg</b>, <b>png</b> o <b>pdf</b> <span className="">(de una sola página)</span>  <br />Tamaño Max de cada archivo: <b>4 MB</b>
                            </p>
                        </div>
                      </div>
                      
                      {errors && (
                        <div className={`w-max mb-1 mt-4 mx-auto text-[12.5px] border border-[#ffffff1e] tracking-wide text-[#ffffffee] leading-[1.5] py-0.5 px-2 bg-[#913591] rounded-xl `}>
                          {errors.maxNumber && (
                            <span>La cantidad excede el máximo permitido</span>
                          )}
                          {errors.acceptType && (
                            <span>El tipo de archivo no está permitido</span>
                          )}
                          {errors.maxFileSize && (
                            <span>El tamaño excede el máximo permitido</span>
                          )}
                          {errors.resolution && (
                            <span>
                              La resolución no coincide con la permitida
                            </span>
                          )}
                        </div>
                      )}
                      <div className={`absolute w-full h-full outline-2 outline-dashed outline-[#00000003]  ${isDragging ? '!outline-[#000000cc] bg-[#ffffff33] ' : undefined}  ${!images.length ? 'rounded-lg' : 'rounded-t-lg'} hover:outline-[#0000006e] hover:border-b-2 hover:border-[#ffffff69] hover:border-dashed `}>
                      </div>
                    </div>
                  </button>
                  <div className= "flex flex-col rounded-b-lg bg-[#1d0215] ">
                    <div className= {`flex items-baseline justify-start px-8 gap-x-2 flex-wrap text-sm w-full cursor-default max-[512px]:justify-center`}>
                      { images.map((image, index) => (
                        <div key={index} className="flex flex-col pb-4 pt-5">
                          <div className="image-item flex justify-start">

                            {renderFilePreview( image.file! )} 

                            <div className="flex flex-col text-[13px] justify-end gap-0.5 ">
                              <div onClick={() => {
                                onImageUpdate(index)
                                }} className="border border-[#e9dae9] border-l-0 bg-[#d7d7d7] px-1.5 py-0.5 cursor-pointer rounded-e-md duration-200 text-[#1d0215aa] hover:border-[#d8c0d7] hover:text-[#1d0215dd]  hover:bg-[#ffffff] active:bg-[#ffffffaa]  "
                              >
                                Cambiar
                              </div>
                              <div onClick={() => {
                                onImageRemove(index)
                                }} className="border border-[#e9dae9] border-l-0 bg-[#d7d7d7] px-1.5 py-0.5 cursor-pointer rounded-e-md duration-200 text-[#1d0215aa] hover:text-[#1d0215dd] hover:border-[#d8c0d7] hover:bg-[#ffffff] active:bg-[#ffffffaa] "
                                >
                                Eliminar
                              </div>
                            </div>
                          </div>
                          <div className="text-sm break-words w-44 text-[#ffffffee] mt-[3px] opacity-80 text-start ">
                            {/* {image.file?.name }  */}
                            {documentos?.length && documentos[index].toLocaleUpperCase() }
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </ImageUploading>
          </Tabs.Content>

          <Tabs.Content
            className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215cc] md:text-[15px]"
            value="tab3"
          >
            <p className="mb-3">
              Información necesaria para realizar el presupuesto
            </p>
            <div className="grid grid-cols-1 gap-3  sm:grid-cols-2">






              {informations.map((information, index) => (
                // <div>polo {information} </div>
                <fieldset className="w-full"  key= {index}>
                  <label
                    className="text-[12px]"
                    htmlFor={information}
                  >
                    {information}
                  </label>
                  <InputCnp
                      className="text-sm h-8"
                      id={information}
                      type="text"
                      name={information}
                      value= {
                        index === 0 ? info0 : 
                        index === 1 ? info1 : 
                        index === 2 ? info2 : 
                        index === 3 ? info2 : 
                        ""
                      }
                      // value= {info}
                      placeholder= {information}
                      required
                      // onFocus= {(e) => {
                      //   handleFocus(index, e)
                      // }}
                      // onBlur={(e) => {
                      //   handleBlur(index, e);
                      // }}
                      // onChange={(e) => {
                      //   setInfo0(e.target.value)
                      // }}

                      onChange={(e) => {
                        index === 0 ? setInfo0(e.target.value) : 
                        index === 1 ? setInfo1(e.target.value) : 
                        index === 2 ? setInfo2(e.target.value) : 
                        index === 3 ? setInfo3(e.target.value) : 
                        ""
                      }}
                      // onChange={(e) => setInfo([...info, e.target.value])}
                  >
                      <div className="absolute rounded-l-[4px] h-[32px] w-[28px] left-0 top-0 bg-[#00000007]" >
                        

                        <span className={`absolute w-3 font-semibold left-[9px] top-1.5 opacity-40 text-[#1d021599]  `}>
                            &#10003;
                        </span>
                        
                      </div>{/* ${info0 === ""  ?   : info1  ?  "text-[#d400aadd] opacity-60" : info2  ?  "text-[#d400aadd] opacity-60" : "null"
                        } */}
                  </InputCnp>
                </fieldset>
              ))}






            </div>
          </Tabs.Content>
        </Tabs.Root>
      </Frente>

      {/* registrar email */}
      {!user ? (
         polox === null || polox !== "usuario" && polo === "Database Error: El email ya existe." ? (
          <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#1d021513] ">
            <div className="flex items-center justify-between gap-5">
              <div className="mt-1.5 ">
                <IconRegistro className="opacity-60 w-[24px] ml-3 " />
              </div>
  
              <div className={`w-full text-start text-[14px] text-[#50073aaa] transition-[opacity] duration-300 ${statex ? "opacity-0" : "opacity-100 "  }  `}>{/*hidden  */}
                {/* Registrá un e-mail para mandarte el presupuesto */}
                Regístrate para iniciar un trámite y enviarte el presupuesto
              </div>
                
              <ButtonB
                className={`h-8 text-[13px]  w-max`}
                onClick={() => { setStatex(!statex); setEmail(""); setName("")}}
                // type={state ? "reset" : "button"}
                data-testid="edit-button"
                data-active={statex}
              >
                {statex ? "Cancelar" :  <div className="text-[13px] overflow-auto whitespace-nowrap">Registrar</div>  }
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
                          }}
                          /* onBlur={(e) => {
                            setEmailx(e.target.value);
                          }} */ >
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
            </div>
          </Frente>
          ) : (
            <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#e0e6e1] ">
            <div className={`w-full text-start text-[14px] text-[#1d0215dd] transition-[opacity] duration-300  `}>
              <span className="font-semibold  text-[15px] ">{name}</span>, se registró el e-mail <span className="font-semibold  text-[15px] mx-1 ">{email}</span> para enviarte el presupuesto.
            </div>
          </Frente> 
          // <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#e6e0e3] ">
          //   <div className="flex items-center justify-between gap-5">
          //     <div className="mt-1.5 ">
          //       <IconRegistro className="opacity-60 w-[24px] ml-3 " />
          //     </div>
          //     <div className={`w-full text-start text-[14px] text-[#50073acc] transition-[opacity] duration-300  `}>
          //       Hola! <span className="text-[16px] text-[#1d0215] ">{name}</span>. Se registró el e-mail <span className="text-[14px] font-medium text-[#1d0215] ">{email}</span> para mandarte el presupuesto.
          //     </div>
          //   </div>
          // </Frente>
          ) 
        ) : (
          ""
        )
      }

      {polo === "tramiteIniciado" && (
        <Frente className="py-4 px-3 mt-2 text-small-regular sm:px-4 !bg-[#e0e6e1] ">
          <div className={`w-full text-start text-[15px] text-[#1d0215dd] transition-[opacity] duration-300  `}>
            Recibimos tu pedido. Te enviaremos el presupuesto a la brevedad.
          </div>
        </Frente> 
      )}

      {/* Massages error tramite */}
      <div
        className="mb-3 mt-3 flex items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {estado?.message && estado?.message !== "tramiteIniciado" && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{estado?.message}</p>
          </>
        )}
      </div>
      
      {/* crear tramite */}
      <form action={dispatch} className="flex flex-col ">
        {/* archivos Adjuntos */}
        <input
          type="hidden"
          id="documentos_url"
          name="documentos_url"
          value={imageUrl /* ? imageUrl : `["https://res.cloudinary.com/dchmrl6fc/image/upload/v1740640515/sin-adjuntos_ut7col.png"]` */ }
          readOnly
        />
        {/* tramite */}
        <input
          type="hidden"
          id="tramite"
          name="tramite"
          value= {tramite}
          readOnly
        />
        {/* email */}
        <input
          type="hidden"
          id="email_id"
          name="email_id"
          // value= {email ? email : user?.email /* ? user.email : emailx */ }
          value= {!email ? user?.email : email /* ? user.email : emailx */ }
          readOnly
        />
        {/* informacion */}
        <input
          type="hidden"
          id="informacion"
          name="informacion"
          // value= "polo"
          value={`["${informations[0]} : ${info0}", "${informations[1]} : ${info1}", "${informations[2]} : ${info2}", "${informations[3]} : ${info3}"]`}
          // value={`["${inf[0]}: ${info0}", "${inf[1]}: ${info1}", "${inf[2]}: ${info2}", "${inf[3]}: ${info3}"]`}
          readOnly
          // onChange={(e) => {
          //   setInf(e.target.value);
          //   // console.log("value info:", e.target.value)
          // }}
        />

        <button
          // form="form1"
          type="submit"
          ref={buttonyRef}
          className= "hidden font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-[#fff] aria-disabled:cursor-not-allowed aria-disabled:opacity-50 w-max small:max-w-[140px] bg-[#300322dd] text-[#d9d9d9] justify-center items-center text-[13px] duration-150 text-center !px-2.5 h-[26px] rounded-md hover:bg-[#300322] hover:text-[#eee] active:!bg-[#300322aa] disabled:opacity-40 disabled:hover:bg-[#300322dd] disabled:hover:text-[#d9d9d9] disabled:active:!bg-[#300322dd]" 
          // disabled={ tramite === ''}

          // onClick={() => { location.reload() }}
          // onClick={() => {
          //   setImageUrl("");
          // }}
        >
          Enviar Trámite
        </button>
      </form>

      {/* Enviar tramite */}
      {estado?.message !== "tramiteIniciado" &&
        <form onSubmit={ files.length === 0 ? uploadToServer1 : uploadToServer2 } >
          <div className="w-full flex justify-end mt-3">
            <ButtonA
              className={`w-[200px] h-8 text-sm !justify-start  ${!tramite ? 'opacity-40' :  'opacity-100'}`}
              type="submit"
              // disabled={!consulta && true }

              // disabled={tramite && polo ? false : true }
              disabled={images[0]  && info0  ? false : true }

              // disabled={ !email &&  true }
              // disabled={email === "a" ?  true : !email && false }
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
      }

      {estado?.message === "tramiteIniciado" && 
        <div className="w-full flex justify-end">
          <ButtonA
            className="h-8 text-sm !justify-start"
            type="button"
            onClick={() => {
              location.reload()
            }}
          >
            Nuevo trámite
          </ButtonA>
        </div>
      }
    </>
  );
}

