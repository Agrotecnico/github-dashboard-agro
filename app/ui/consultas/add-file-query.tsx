'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Disclosure, DisclosurePanel } from '@headlessui/react';

import { Button } from '@/app/ui/button';
import IconArchivo from '@/app/ui/logosIconos/icon-archivo';
import { Frente } from '@/app/ui/marcos';
import useToggleState from '@/app/lib/hooks/use-toggle-state';
import './styles.css';
import ImageUploading from "@/app/ui/consultas/ImageUploading"
import IconDragDrop from '@/app/ui/logosIconos/icon-drag-drop';
import { ImageListType} from './typings';


export default function AddFileQuery() {
  
  const [successState, setSuccessState] = useState(false);
  const [images, setImages] = useState<ImageListType>([]);

  const maxNumber = 6;
  const { state, close, toggle } = useToggleState();

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
  }, [successState, close]);
  
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

  const onChange = (imageList: ImageListType, addUpdateIndex: Array<number> | undefined) => {
    setImages(imageList);
  };

  
  return (
    <>
      <Frente className="mt-2 text-small-regular px-4 py-4 ">
        <div className={`flex items-center justify-between mb-0`} >
          <IconArchivo className="opacity-60 ml-1 w-[26px] items-center justify-center stroke-1 sm:flex " />
          <Button
            className="relative h-[30px] rounded-md border border-[#e9dae9] min-h-[24px] w-[140px] justify-center bg-[#ffffffaa] !px-2.5 py-1 text-[13px] !font-normal text-[#1d0215aa] hover:bg-[#ffffff] hover:text-[#1d0215dd] hover:border-[#d8c0d7] active:!bg-[#eee]"
            onClick={() => {
              handleToggle();
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
          </Button>
        </div>

        <Disclosure>
          <DisclosurePanel
            static
            className={clsx( 'overflow-visible transition-[max-height,opacity] duration-300 ease-in-out mt-5',
              {
                'max-h-[1000px] opacity-100 mt': state,
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
                <div className={`flex flex-col bg-[#7b5c72] rounded-lg ${!images.length ? 'gap-0' : 'gap-0.5'} ${!state && "invisible"} `} >
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
                        Click y elegí una imagen o arrastrá y sueltá aquí <br />
                        <p className="text-xs mt-1.5 text-[#ffffffbb]">Cantidad Máx: <b>5</b> archivos <b>jpg</b>, <b>png</b> o <b>pdf</b><br />Tamaño Max de cada archivo: <b>4 MB</b>
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
                      <div className={`absolute w-full h-full outline-2 outline-dashed outline-[#00000003]  ${isDragging ? '!outline-[#000000cc] bg-[#ffffff33] ' : undefined}  ${!images.length ? 'rounded-lg' : 'rounded-t-lg'} hover:outline-[#0000005e]  `}>
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
    </>
  );
}
