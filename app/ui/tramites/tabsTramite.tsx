"use client"

import * as React from "react";
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';

import * as Tabs  from "@radix-ui/react-tabs";
import  {InputCnp}  from "@/app/ui/uiRadix/input-cnp";
import type { TramiteMd } from "@/app/lib/definitions"
import markdownStyles from './markdown-styles.module.css';
import ImageUploading from "@/app/ui/consultas/ImageUploading"
import { ImageListType} from '@/app/ui/consultas/typings';
import IconDragDrop from '@/app/ui/logosIconos/icon-drag-drop';


export default function TabsTramite({tramiteMd, content }:{tramiteMd:TramiteMd; content:string})  {

  const [vehiculo, setVehiculo] = useState("")
  const [marca, setMarca] = useState("")
  const [modelo, setModelo] = useState("")

  const [images, setImages] = useState<ImageListType>([]);

  // const polo= tramiteMd.documentacion
  // const documentacions= polo?.split(", ")
  const documentacions: string[] | undefined = tramiteMd.documentacion?.split(", ")

  // const polox= tramiteMd.documentos
  // const documentos= polox?.split(", ")
  const documentos:string[] | undefined= tramiteMd.documentos?.split(", ")

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
              />{/*  bg-[#ffffff69] */}
              <p className="px-3 underline underline-offset-2 decoration-[#1d021555]">
                Documentación requerida{/* general del trámite */}
              </p>
              <div className="py-2 px-3 rounded-sm">
                <ul className="ml-4 list-disc marker:text-[#d066d5]" >
                    {documentacions?.map((documento/* :string */, index/* :number */) => (
                        <li key={index} className=" ">
                            {documento} {/* <span className="font-semibold text-xs opacity-50 text-[#d400aa]">&#10003;</span> */}
                        </li>
                    ))}
                </ul>
              </div>{/*  bg-[#ffffff65] */}
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
            {/* Documentos a adjuntar para presupuestar el trámite. */}
            Adjuntá los siguientes documentos para realizar el presupuesto:
        </p>
        <div className="py-2 px-3 mb-4 rounded-sm bg-[#ffffff65]">
          <ul className="ml-4 list-disc marker:text-[#00000065]" >
              {documentos?.map((documento/* :string */, index/* :number */) => (
                  <li key={index} className=" ">
                      {documento} <span className="font-semibold text-xs opacity-50 text-[#d400aa]">&#10003;</span>
                  </li>
              ))}
          </ul>
        </div>

        {/* <p className="mb-1 mt-5 text-center">
          Adjuntar documentos
        </p> */}

        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          // onError={onError}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          maxFileSize= {3000000}
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
                  <div className="flex flex-col items-center duration-150 opacity-80 group-hover:opacity-100 min-[512px]:flex-row ">
                    <IconDragDrop className= "w-9 opacity-80  min-[512px]:mr-7" />
                    <div>
                      Click y elegí un archivo o arrastralo y sueltá aquí <br />
                      <p className="text-xs mt-1.5 text-[#ffffffbb]">Cantidad Máx: <b>5</b> archivos <b>jpg</b>, <b>png</b> o <b>pdf</b> <span className="">(de una sola página)</span>  <br />Tamaño Max de cada archivo: <b>4 MB</b>
                        </p>
                    </div>
                  </div>
                  {/* <div className="flex flex-col items-center duration-150 opacity-80 group-hover:opacity-100">
                    <IconDragDrop className= "mb-2 w-9 opacity-80 " />
                    Click y elegí un archivo o arrastralo y sueltá aquí <br />
                    <p className="text-xs mt-1.5 text-[#ffffffbb]">Cantidad Máx: <b>5</b> archivos <b>jpg</b>, <b>png</b> o <b>pdf</b> <span className="">(de una sola página)</span>  <br />Tamaño Max de cada archivo: <b>4 MB</b>
                      </p>
                  </div> */}
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
        <p className="mb-3">
        Información necesaria para realizar el presupuesto
        </p>
        <div className="grid grid-cols-1 gap-3  sm:grid-cols-2">

          <fieldset className="w-full">
            {/* <label
              className="text-[12px]"
              htmlFor="vehiculo"
            >
              Vehículo
            </label> */}
            <InputCnp
                className="text-sm h-8"
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
                <div className="absolute rounded-l-[4px] h-[32px] w-[28px] left-0 top-0 bg-[#00000007]" >
                  <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1.5 opacity-40 ${vehiculo && "text-[#d400aadd] opacity-60"} `}>
                      &#10003;
                  </span>
                </div>
            </InputCnp>
          </fieldset>

          <fieldset className="w-full">
            {/* <label
              className="text-[12px]"
              htmlFor="marca"
            >
              Marca
            </label> */}
            <InputCnp
              className="text-sm h-8"
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
              <div className="absolute rounded-l-[4px] h-[32px] w-[28px] left-0 top-0 bg-[#00000007]" >
                  <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1.5 opacity-40 ${marca && "text-[#d400aadd] opacity-60"} `}>
                      &#10003;
                  </span>
              </div>
            </InputCnp>
          </fieldset>

          <fieldset className="w-full">
            {/* <label
              className="text-[12px]"
              htmlFor="modelo"
            >
              Modelo
            </label> */}
            <InputCnp
                className="text-sm h-8"
                id="modelo"
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
                <div className="absolute rounded-l-[4px] h-[32px] w-[28px] left-0 top-0 bg-[#00000007]" >
                  <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1.5 opacity-40 ${modelo && "text-[#d400aadd] opacity-60"} `}>
                      &#10003;
                  </span>
                </div>
            </InputCnp>
          </fieldset>

          <fieldset className="w-full">
            {/* <label
              className="text-[12px]"
              htmlFor="modelo"
            >
              Modelo
            </label> */}
            <InputCnp
                className="text-sm h-8"
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
                <div className="absolute rounded-l-[4px] h-[32px] w-[28px] left-0 top-0 bg-[#00000007]" >
                  <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1.5 opacity-40 ${vehiculo && "text-[#d400aadd] opacity-60"} `}>
                      &#10003;
                  </span>
                </div>
            </InputCnp>
          </fieldset>

          <fieldset className="w-full">
            {/* <label
              className="text-[12px]"
              htmlFor="modelo"
            >
              Modelo
            </label> */}
            <InputCnp
                className="text-sm h-8"
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
                <div className="absolute rounded-l-[4px] h-[32px] w-[28px] left-0 top-0 bg-[#00000007]" >
                  <span className={`absolute w-3 font-semibold text-[#1d021599] left-[9px] top-1.5 opacity-40 ${marca && "text-[#d400aadd] opacity-60"} `}>
                      &#10003;
                  </span>
                </div>
            </InputCnp>
          </fieldset>

          {/* <textarea
            className={`col-span-1 w-full rounded-[4px] p-3 border border-[#e9dae9] bg-[#ffffff] text-[#000] opacity-70 transition-[opacity,shadow]  duration-150 ease-in sm:col-span-2 hover:opacity-90 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585]`}
            id="infoAdicional"
            name="infoAdicional"
            placeholder= "Información adicional y comentarios..."
            rows={3}
            maxLength={1024}
            // wrap="hard"
          /> */}
        </div>
      </Tabs.Content>
    </Tabs.Root>
)};
