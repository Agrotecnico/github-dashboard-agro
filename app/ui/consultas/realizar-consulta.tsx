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
import { ImageListType} from './typings';
import ImageUploading from "@/app/ui/consultas/ImageUploading"
import IconDragDrop from '@/app/ui/logosIconos/icon-drag-drop';
import { ButtonB, ButtonA } from '@/app/ui/button';
import RegistrarEmailConsulta from './registrar-email-consulta';


export default function RealizarConsulta( { user }: { user: User | undefined } ) {
  
  const [consulta, setConsulta] = useState('');
  const [successState, setSuccessState] = useState(false)

  const [imageUrl, setImageUrl] = useState<string>("");
  const [spin, setSpin] = useState(false);
  const [images, setImages] = useState<ImageListType>([]);

  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

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
      setSpin(false)
      // location.reload()
    }

  const handleToggle = () => {
    clearState();
    setTimeout(() => toggle(), 100);
  };
  
  const codigoConsulta: string = useMemo(() => generarClaveUnica(16), [] );

  const clearState = () => {
    setSuccessState(false)
  }

  const uploadToServer = async (e: FormEvent<HTMLFormElement>) => {
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
          className="min-h-[80px] object-contain bg-[#ffffffaa] w-24 border border-[#1d021544] [border-radius:_6px_6px_0_6px] " />
      ); 
      } else if ( fileType === 'application/pdf' ) { 
        return ( 
        <embed 
          src={URL.createObjectURL(file)} 
          type="application/pdf" 
          className="min-h-[80px] object-contain bg-[#ffffffaa] w-[96px] h-[120px]  border border-[#1d021544]  [border-radius:_6px_6px_0_6px] " />
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
    }
  }, [successState, close ])

  const onChange = (imageList: ImageListType, addUpdateIndex: Array<number> | undefined) => {
    setImages(imageList);
  };

  const initialState = { message: null, errors: {} };
  const [estado, dispatch] = useFormState(createConsulta, initialState);


  return (
    <>
      <Frente className="py-4 px-3 text-small-regular sm:px-4 !bg-[#e6e0e3] ">
        <div  className="flex items-center justify-between sm:flex-row" >
          <div className="relative">
            <IconConsultaRight className="opacity-70 ml-3 h-[36px] w-[30px] stroke-1 " />
            <div className="absolute top-[1px] left-[30px] text-[#ffffff] text-xs ">?</div>
          </div>
          <ButtonB
            className={`h-8 text-[13px] w-max ${consulta ? "opacity-100" : "!opacity-40 cursor-default hover:opacity-40 "}`}
            onClick={() => { setConsulta('')}}
            data-testid="edit-button"
            type='button'
            // data-active={state}
          >
            Cancelar
          </ButtonB>
        </div>

        {/* consult */}
        <div className="flex flex-col gap-y-2 pt-3">
          <textarea
            className={`w-full rounded-[4px] p-3 border border-[#e9dae9] bg-[#ffffff] text-[#000000] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-90 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585] ${name && "bg-[#ffffff]"}`}
            id="consulta"
            name="consulta"
            placeholder= "consulta..."
            required
            rows={4}
            maxLength={1024}
            wrap="hard"
            value={consulta}
            // disabled={ !state }
            onChange={(e) => {
              setConsulta(e.target.value);
            }}
          />
        </div>
      </Frente>

      <Frente className={`flex flex-col ${!state ? "gap-0" : "gap-4" } mt-2 text-small-regular px-4 py-4 !bg-[#e6e0e3] `}>
        <div className={`flex items-center justify-between mb-0`} >
          <IconArchivo className="opacity-80 ml-3 w-[26px] stroke-1 " />
          <ButtonB
            // type="button"
            className={`h-8 text-[13px] w-max`}
            onClick={() => {
              handleToggle();
              // setImageUrl('');
              // setFiles([]);
              setImages([]);
            }}
            type={state ? 'reset' : 'button'}
            data-testid="edit-button"
            data-active={state}
          >
            {state ? (
              'Cancelar'
            ) : (
              <div>
                {' '}
                Adjuntar <span className="text-xs uppercase">Archivos</span>
              </div>
            )}
          </ButtonB>
        </div>

        <Disclosure>
          <DisclosurePanel
            static
            className={clsx( 'overflow-visible transition-[max-height,opacity] duration-300 ease-in-out',
              {
                'max-h-[1000px] opacity-100 ': state,
                'max-h-0 opacity-0': !state,
              },
            )}
            >
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
                <div className={`flex flex-col bg-[#4f2642] rounded-lg ${!images.length ? 'gap-0' : 'gap-0.5'} ${!state && "invisible"} `} >
                  <button
                    type="button"
                    onClick={onImageUpload}
                    {...dragProps}
                    className={`group rounded-lg w-full disabled:!cursor-default `}
                    disabled= {!state}
                  >
                    <div className={`relative label-dnd  ${!images.length ? 'rounded-lg' : 'rounded-t-lg'} bg-[#1d0215] text-[#ffffffdd] w-full p-4 duration-150 text-sm flex flex-col justify-center items-center active:opacity-80  `}>
                      <div className="flex flex-col items-center duration-150 opacity-80 group-hover:opacity-100">
                        <IconDragDrop className= "mb-2 w-9 opacity-80 " />
                        Click y elegí un archivo o arrastralo y sueltá aquí <br />
                        <p className="text-xs mt-1.5 text-[#ffffffbb]">Cantidad Máx: <b>5</b> archivos <b>jpg</b>, <b>png</b> o <b>pdf</b> <span className="">(de una sola página)</span>  <br />Tamaño Max de cada archivo: <b>4 MB</b>
                          </p>
                      </div>
                      {errors && (
                        <div className={`w-max mb-1 mt-4 mx-auto text-[12.5px] ${!state && "hidden"} border border-[#ffffff1e] tracking-wide text-[#ffffffee] leading-[1.5] py-0.5 px-2 bg-[#913591] rounded-xl `}>
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
                    <div className= {`flex items-baseline justify-start px-10 gap-x-6 flex-wrap text-sm w-full cursor-default max-[512px]:justify-center`}>
                      { images.map((image, index) => (
                        <div key={index} className="flex flex-col items-center pb-4 pt-5">
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
                          <div className="text-xs break-words w-44 text-[#ffffffee] mt-[3px] opacity-60 text-start ">
                            {image.file?.name } 
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </ImageUploading>
          </DisclosurePanel>
        </Disclosure>
      </Frente>

      {!user && <RegistrarEmailConsulta registroEmail="la respuesta" />}

      {/* Massages error consult */}
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

      <form action={dispatch}>
        {/* archivos Adjuntos */}
        <input
          type="hidden"
          id="archivos_url"
          name="archivos_url"
          value={imageUrl}
          readOnly
        />

        {/* clave */}
        <input
          type="hidden"
          id="codigoConsulta"
          name="codigoConsulta"
          value={codigoConsulta}
          readOnly
        />

        {/* userId */}
        <input
          type="hidden"
          id="userId"
          name="userId"
          value={`${user?.id}`}
          readOnly
        />

        <button
          // form="form1"
          type="submit"
          ref={buttonyRef}
          className= "hidden font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-[#fff] aria-disabled:cursor-not-allowed aria-disabled:opacity-50 w-max small:max-w-[140px] bg-[#300322dd] text-[#d9d9d9] justify-center items-center text-[13px] duration-150 text-center !px-2.5 h-[26px] rounded-md hover:bg-[#300322] hover:text-[#eee] active:!bg-[#300322aa] disabled:opacity-40 disabled:hover:bg-[#300322dd] disabled:hover:text-[#d9d9d9] disabled:active:!bg-[#300322dd]" 
          disabled={ consulta === ''}
          // onClick={() => { location.reload() }}
          // onClick={() => {
          //   setImageUrl("");
          // }}
        >
          Enviar Consulta
        </button>
      </form>

      {/* Enviar consult */}
        <form onSubmit={uploadToServer} >
          <div className="w-full flex justify-end mt-3">
            <ButtonA
              className={`w-[200px] h-8 text-sm !justify-start  ${!consulta ? 'opacity-40' :  'opacity-100'}`}
              type="submit"
              disabled={!consulta && true  }
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
                Enviar consulta
              </div>
            </ButtonA>
          </div>
        </form>
    </>
  );
}

