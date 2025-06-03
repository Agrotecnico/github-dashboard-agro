'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { FormEvent, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Disclosure, DisclosurePanel } from '@headlessui/react';

import { User } from '@/app/lib/definitions';
import { updateUserImage } from '@/app/lib/actions';
import IconCambio from '@/app/ui/logosIconos/icon-cambio';
import { Frente } from '@/app/ui/marcos';
import useToggleState from '@/app/lib/hooks/use-toggle-state';
import ImageUploading from "@/app/ui/consultas/ImageUploading"
import { ImageListType} from '@/app/ui/consultas/typings';
import IconDragDrop from '@/app/ui/logosIconos/icon-drag-drop';
import { ButtonB, ButtonA } from "@/app/ui/button";


export default function EditProfileImage({ user }: { user: User | undefined }) {

  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState<ImageListType>([]);

  const [spin, setSpin] = useState(false);
  const [successState, setSuccessState] = useState(false);
  
  const { state, close, toggle } = useToggleState();

  const maxNumber = 5;

  const file: File | undefined = images ? images[0]?.file : undefined



  const buttonxRef = useRef<HTMLButtonElement>(null);

  const handleClickButton= () => {
    if (buttonxRef.current) buttonxRef.current.click()
  };
  const guardarConsulta= () => {
    setTimeout(handleClickButton, 200) 
    setSpin(false)
    location.reload()
  }

  const clearState = () => {
    setSuccessState(false);
  };

  const handleToggle = () => {
    clearState();
    setTimeout(() => toggle(), 100);
  };

  useEffect(() => {
    if (successState) {
      close();
    }
  }, [successState, close, images]);
  
  const uploadToServer = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    try {
      const data = new FormData();
      data.set('file', file );

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });

        //  console.log('Res:', response);

      const responseData = await response.json();
      
      setImageUrl(responseData.url);

     // console.log('responseData:', responseData);

      if (response.ok) {
        console.log('File uploaded successfully');
      }
      guardarConsulta();

    } catch (error) {
      console.error(error);
    }
    
    // setSpin(false)
    
  };

  const renderFilePreview = (file: File | undefined ) => { 
    const fileType = file?.type; 
    if (fileType?.startsWith('image/')) { 
      return ( 
        <img 
          src={URL.createObjectURL(file!)} 
          alt={file?.name} 
          className="min-h-[80px] object-contain bg-[#ffffffaa] w-24 [border-radius:_6px_6px_0_6px] border border-[#1d021544]" />
      ); 
      } else if ( fileType === 'application/pdf' ) { 
        return ( 
        <embed 
          src={URL.createObjectURL(file!)} 
          type="application/pdf" 
          className="min-h-[80px] object-contain bg-[#ffffffaa] w-[96px] h-[120px] rounded-md border border-[#1d021544] " /> 
        ); 
      } else { return ( 
      <p className=" text-[#fff] break-words p-2 text-xs text-left">
         Tipo archivo: <i className="text-[#d9d9d9] text-xs">({fileType})</i>
      </p> 
      ); 
    }
  }

  const onChange = (imageList: ImageListType, addUpdateIndex: Array<number> | undefined) => {
    setImages(imageList);
  };
  
  const initialState = { message: null, errors: {} };
  const updateUserWithId = updateUserImage.bind(null, `${user?.id}`);
  const [estado, dispatch] = useFormState(updateUserWithId, initialState);


  return (
    <>
      <Frente className="text-small-regular px-3 py-4 sm:px-4">
        <div className="flex items-center justify-between">
            { file ? (
              <img 
                src={URL.createObjectURL(file!)} 
                alt={file?.name} 
                className="object-cover h-20 w-20 rounded-full bg-cover [box-shadow:0_1px_#ffffff,_0_-1px_#0000002e] "
                width={80}
                height={80} />
            ) : user?.image ? (
              <Image
                decoding="async"
                src={`${user?.image}`}
                className="object-cover h-20 w-20 rounded-full bg-cover [box-shadow:0_1px_#ffffff,_0_-1px_#0000002e] "
                alt="header-image-profile"
                width={80}
                height={80}
                priority={true}
              />
            ) : (
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#fff] text-2xl text-[#374151] ">
                {user?.email?.substring(0, 1).toUpperCase()}
              </span>
            )}
          <ButtonB
            className={`h-8 text-[13px] w-max`}
            onClick={() => {
              handleToggle();
              setImageUrl('');
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
                Cambiar <span className="text-[12px] uppercase">Imagen</span>
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
                'max-h-0 opacity-0  ': !state,
              },
            )}
            >
            <div className={`flex flex-col gap-y-2 pt-4 delay-200 ${!state && "hidden"}`}>
              <div className="flex flex-wrap">
                <div className="w-full flex flex-col items-center bg-[#1d0215] rounded-lg">
                  <ImageUploading
                    multiple= {false}
                    value={images}
                    onChange={onChange}
                    // onError={onError}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    maxFileSize= {4000000}
                    acceptType={["jpg", "png"]}
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
                      <div className={`flex flex-col bg-[#7b5c727d] w-full rounded-lg ${!images.length ? 'gap-0' : 'gap-0.5'} ${!state && "invisible"} `} >
                        <button
                          type="button"
                          onClick={onImageUpload}
                          {...dragProps}
                          className={`group rounded-lg w-full disabled:!cursor-default `}
                          disabled= {!state}
                        >
                          <div className={`relative label-dnd  ${!images.length ? 'rounded-lg' : 'rounded-t-lg'} bg-[#1d0215] text-[#ffffffdd] w-full p-4 duration-150 text-sm flex flex-col justify-center items-center active:opacity-60  `}>
                            <div className="flex flex-col items-center duration-150 opacity-80 group-hover:opacity-100 min-[512px]:flex-row ">
                              <IconDragDrop className= "w-9 opacity-80  min-[512px]:mr-7" />
                              <div>
                                Click y elegí un archivo o arrastralo y sueltá aquí <br />
                                <p className="text-[13px] mt-1.5 text-[#ffffffbb]">Tipo de imagen: <b>jpg</b> o <b>png</b> <br />Tamaño Max de la imagen: <b>4 MB</b>
                                </p>
                              </div>
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

                        <div 
                          className= "flex flex-col rounded-b-lg bg-[#1d0215] "
                          >
                          { file ? (
                            <div className="flex flex-col items-center p-4">
                              <div className="image-item flex justify-start">

                                {renderFilePreview( file! )} 

                                <div className="flex flex-col text-[13px] justify-end gap-0.5 ">
                                  <div onClick={() => {
                                    onImageUpdate(0)
                                    }} className="border border-[#e9dae9] border-l-0 bg-[#d7d7d7] px-2 py-0.5 cursor-pointer rounded-e-md duration-200 text-[#1d0215aa] hover:border-[#d8c0d7] hover:text-[#1d0215dd]  hover:bg-[#ffffff] active:opacity-70 "
                                  >
                                    Cambiar
                                  </div>
                                  <div onClick={() => {
                                    onImageRemove(0)
                                    }} className="border border-[#e9dae9] border-l-0 bg-[#d7d7d7] px-2 py-0.5 cursor-pointer rounded-e-md duration-200 text-[#1d0215aa] hover:text-[#1d0215dd] hover:border-[#d8c0d7] hover:bg-[#ffffff] active:opacity-70 "
                                    >
                                    Eliminar
                                  </div>
                                </div>

                              </div>
                              <div className="text-xs text-[#ffffff] break-words w-44 mt-[3px] opacity-60 text-start ">{file?.name } 
                              </div>
                            </div> 
                          ) : (
                              ""
                          )}
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </div>

              {/* Editar imagen */}
              <form action={dispatch} className="w-full">
                {/* Image */}
                <div className="hidden">
                  <input
                    className="w-full"
                    id="image"
                    type="text"
                    name="image"
                    defaultValue={
                      imageUrl
                    }
                  />
                </div>

                {/* Massages */}
                <div
                  className= "flex items-end relative space-x-8"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {estado?.message && (
                    <>
                      <ExclamationCircleIcon className="absolute top-4 h-5 w-5 text-red-500" />
                      <p className="pt-4 text-sm text-red-500">
                        {estado?.message}
                      </p>
                    </>
                  )}
                </div>

                {/* Guardar cambio */}
                <div className="hidden items-center justify-end gap-4 text-sm">
                  <button
                    type="submit"
                    ref={buttonxRef}
                    className="small:max-w-[140px] flex h-[26px] w-max items-center justify-center rounded-md bg-[#300322dd] !px-2.5 text-center text-[13px] text-[#d9d9d9] duration-150 hover:bg-[#300322] hover:text-[#eee] active:!bg-[#300322aa] disabled:opacity-40 disabled:hover:bg-[#300322dd] disabled:hover:text-[#d9d9d9] disabled:active:!bg-[#300322dd]"
                    // disabled={imageUrl === ''}
                    onClick={() => {
                      location.reload();
                    }}
                  >
                    Guardar cambios
                  </button>
                </div>
              </form>

              <form onSubmit={uploadToServer} className="flex justify-end items-center" id="subir">
                <ButtonA
                  form="subir"
                  className={`h-8 text-[13px] w-max`}
                  type="submit"
                  disabled={!file && true }
                  onClick={() => {
                    setSpin(true);
                  }}
                >
                  <div
                    className="flex items-center gap-3 "
                  >
                    <IconCambio
                      fill2={"#ffffffcc"}
                      className={`${spin && "animate-spin"} opacity-80 ${!file && 'opacity-40 '}  w-[18px] font-semibold peer-focus:text-gray-900" pointer-events-none h-[18px] text-[#1d0215aa] `}
                    />
                    <p>
                      Guardar cambios
                    </p>
                    
                  </div>
                </ButtonA>
              </form>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </Frente>
    </>
  );
}
