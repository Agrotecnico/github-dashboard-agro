"use client"

import * as React from "react";
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';


import * as Tabs  from "@radix-ui/react-tabs";
import  {InputCnp}  from "@/app/ui/uiRadix/input-cnp";
import type { Tramite } from "@/app/lib/definitions"
import markdownStyles from './markdown-styles.module.css';
import ImageUploading from "@/app/ui/consultas/ImageUploading"
import { ImageListType} from '@/app/ui/consultas/typings';
import IconDragDrop from '@/app/ui/logosIconos/icon-drag-drop';


export default function TabsTramite({tramite, content }:{tramite:Tramite; content:string})  {

const [vehiculo, setVehiculo] = useState("")
const [marca, setMarca] = useState("")
const [modelo, setModelo] = useState("")

const [images, setImages] = useState<ImageListType>([]);

const polo= tramite.documentos
const doc= polo?.split(", ")

const maxNumber = 5;

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



const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
const d = new Date();
const date= `${months[d.getMonth()]}-${d.getFullYear()}`

const onChange = (imageList: ImageListType, addUpdateIndex: Array<number> | undefined) => {
    setImages(imageList);
  };

return (

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
				Documentos
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
      <p className="mb-5 mt-1 underline decoration-[#0002]  underline-offset-4 ">
          Descripción general del trámite.
      </p>

      <div className=" duration-300 rounded-[4px] ">
        {tramite.slug === "x-Otros" ? (
          <div className="flex flex-col gap-y-1">
            <textarea
            className={`w-full rounded-[4px] mt-2.5 p-3 border border-[#e9dae9] bg-[#ffffff] text-[#000000cc] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-100 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585]`}
            id="trmite"
            name="tramite"
            placeholder= "Trámite..."
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
            <div
            className={`  ${markdownStyles['markdown']}`}
            dangerouslySetInnerHTML={{ __html: content }}
            />
        )}
        <div className="w-full flex justify-end mt-1 ">
            <div className="flex items-center text-[13px] opacity-90 md:text-[13.5px]">
                <ArrowPathIcon className="h-4 w-4 mr-2.5 text-[#50073a9d] stroke-2 " />
                <p className="text-[#50073a7d] font-medium ">{tramite.date !== "actual" ? tramite.date : date }</p>
            </div>
        </div>
      </div>
		</Tabs.Content>

		<Tabs.Content
			className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215cc] md:text-[15px]"
			value="tab2"
		>
			<p className="mb-5 mt-1 underline decoration-[#0002]  underline-offset-4">
                Documentacion requerida para presupuestar el trámite.
            </p>

            <ul className="ml-4 list-disc marker:text-[#00000065]" >
                {doc?.map((documento, index) => (
                    <li key="index" className=" ">
                        {documento} <span className="font-semibold opacity-40 text-[#d400aa]">&#10003;</span>
                    </li>
                ))}
            </ul>

            <p className="mb-1 mt-5 text-center">
				Adjuntar documentos
            </p>

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
                <div className={`flex flex-col bg-[#4f2642] rounded-lg ${!images.length ? 'gap-0' : 'gap-0.5'} $ `} >{/* {!state && "invisible"} */}
                  <button
                    type="button"
                    onClick={onImageUpload}
                    {...dragProps}
                    className={`group rounded-lg w-full disabled:!cursor-default `}
                    // disabled= {!state}
                  >
                    <div className={`relative label-dnd  ${!images.length ? 'rounded-lg' : 'rounded-t-lg'} bg-[#1d0215] text-[#ffffffdd] w-full p-4 duration-150 text-sm flex flex-col justify-center items-center active:opacity-80  `}>
                      <div className="flex flex-col items-center duration-150 opacity-80 group-hover:opacity-100">
                        <IconDragDrop className= "mb-2 w-9 opacity-80 " />
                        Click y elegí un archivo o arrastralo y sueltá aquí <br />
                        <p className="text-xs mt-1.5 text-[#ffffffbb]">Cantidad Máx: <b>5</b> archivos <b>jpg</b>, <b>png</b> o <b>pdf</b> <span className="">(de una sola página)</span>  <br />Tamaño Max de cada archivo: <b>4 MB</b>
                          </p>
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
		</Tabs.Content>

		<Tabs.Content
			className="grow rounded-b-md p-4 outline-none text-sm text-[#1d0215cc] md:text-[15px]"
			value="tab3"
		>
			<p className="mb-5 mt-1 underline decoration-[#0002]  underline-offset-4">
                Informacion y datos necesarios para calcular el presupuesto.
			</p>
            <div className="flex flex-col gap-4 min-[512px]:flex-row">
                <div className="w-full flex flex-col gap-4">
                    <fieldset className="flex w-full flex-col justify-start">
                        {/* <label
                            className="mb-1.5 block text-[13px]"
                            htmlFor="currentPassword"
                        >
                            Current password
                        </label> */}
                        <InputCnp
                            className="text-sm h-7"
                            id="vehiculo"
                            type="text"
                            name="vehiculo"
                            // value={name}
                            placeholder= "Vehículo"
                            required
                            onChange={(e) => {
                                setVehiculo(e.target.value);
                              }}
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#00000007]" >
                                <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1 opacity-60 ${vehiculo && "text-[#d400aadd]"} `}>
                                    &#10003;
                                </span>
                            </div>
                            
                            {/* <IconCheck className={`absolute w-3 opacity-30 ${vehiculo && "opacity-60"} left-2.5 top-2.5`} color="#d400aa" /> */}
                        </InputCnp>
                    </fieldset>
                    <fieldset className="flex w-full flex-col justify-start">
                        {/* <label
                            className="mb-1.5 block text-[13px]"
                            htmlFor="newPassword"
                        >
                            New password
                        </label> */}
                        <InputCnp
                            className="text-sm h-7"
                            id="marca"
                            type="text"
                            name="marca"
                            // value={name}
                            placeholder= "Marca"
                            required
                            onChange={(e) => {
                                setMarca(e.target.value);
                              }}
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#00000007]" >
                                <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1 opacity-60 ${marca && "text-[#d400aadd]"} `}>
                                    &#10003;
                                </span>
                            </div>
                        </InputCnp>
                    </fieldset>
                    <fieldset className="flex w-full flex-col justify-start">
                        {/* <label
                            className="mb-1.5 block text-[13px]"
                            htmlFor="confirmPassword"
                        >
                            Confirm password
                        </label> */}
                        <InputCnp
                            className="text-sm h-7"
                            id="Modelo"
                            type="number"
                            min={1}
                            max={2025}
                            name="modelo"
                            // value={name}
                            placeholder= "Modelo"
                            required
                            onChange={(e) => {
                            setModelo(e.target.value);
                            }}
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#00000007]" >
                                <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1 opacity-60 ${modelo && "text-[#d400aadd]"} `}>
                                    &#10003;
                                </span>
                            </div>
                        </InputCnp>
                    </fieldset>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <fieldset className="flex w-full flex-col justify-start">
                        {/* <label
                            className="mb-1.5 block text-[13px]"
                            htmlFor="currentPassword"
                        >
                            Current password
                        </label> */}
                        <InputCnp
                            className="text-sm h-7"
                            id="vehiculo"
                            type="text"
                            name="vehiculo"
                            // value={name}
                            placeholder= "Vehículo"
                            required
                            onChange={(e) => {
                                setVehiculo(e.target.value);
                              }}
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#00000007]" >
                                <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1 opacity-60 ${vehiculo && "text-[#d400aadd]"} `}>
                                    &#10003;
                                </span>
                            </div>
                            
                            {/* <IconCheck className={`absolute w-3 opacity-30 ${vehiculo && "opacity-60"} left-2.5 top-2.5`} color="#d400aa" /> */}
                        </InputCnp>
                    </fieldset>
                    <fieldset className="flex w-full flex-col justify-start">
                        {/* <label
                            className="mb-1.5 block text-[13px]"
                            htmlFor="newPassword"
                        >
                            New password
                        </label> */}
                        <InputCnp
                            className="text-sm h-7"
                            id="marca"
                            type="text"
                            name="marca"
                            // value={name}
                            placeholder= "Marca"
                            required
                            onChange={(e) => {
                                setMarca(e.target.value);
                              }}
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#00000007]" >
                                <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1 opacity-60 ${marca && "text-[#d400aadd]"} `}>
                                    &#10003;
                                </span>
                            </div>
                        </InputCnp>
                    </fieldset>
                    <fieldset className="flex w-full flex-col justify-start">
                        {/* <label
                            className="mb-1.5 block text-[13px]"
                            htmlFor="confirmPassword"
                        >
                            Confirm password
                        </label> */}
                        <InputCnp
                            className="text-sm h-7"
                            id="Modelo"
                            type="number"
                            min={1}
                            max={2025}
                            name="modelo"
                            // value={name}
                            placeholder= "Modelo"
                            required
                            onChange={(e) => {
                            setModelo(e.target.value);
                            }}
                        >
                            <div className="absolute rounded-l-[4px] h-[28px] w-[28px] left-0 top-0 bg-[#00000007]" >
                                <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1 opacity-60 ${modelo && "text-[#d400aadd]"} `}>
                                    &#10003;
                                </span>
                            </div>
                        </InputCnp>
                    </fieldset>
                </div>
            </div>
		</Tabs.Content>
	</Tabs.Root>
)};
