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
import { TramiteMd } from "@/app/lib/definitions"
import  TabsTramite  from '@/app/ui/tramites/tabsTramite';


export default function IniciarTramiteUser( { 
  tramiteMd,
  content,
  user 
}: { 
  user: User | undefined;
  tramiteMd: TramiteMd;
  content: string
} ) {
  
  const [consulta, setConsulta] = useState('');
  const [successState, setSuccessState] = useState(false)

  const [imageUrl, setImageUrl] = useState<string>("");
  const [spin, setSpin] = useState(false);
  const [images, setImages] = useState<ImageListType>([]);

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

  /* const uploadToServer = async (e: FormEvent<HTMLFormElement>) => {
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
  }; */





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
          // value={imageUrl}
          value= {imageUrl ? imageUrl : `["https://res.cloudinary.com/dchmrl6fc/image/upload/v1740640515/sin-adjuntos_ut7col.png"]` }
          readOnly
        />
        {/* consulta */}
        <input
          type="hidden"
          id="consulta"
          name="consulta"
          value={consulta}
          readOnly
        />
        {/* email */}
        <input
          type="hidden"
          id="email_id"
          name="email_id"
          value={`${user?.email}`}
          readOnly
        />

        <button
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
      <form onSubmit={ files.length === 0 ? uploadToServer1 : uploadToServer2 } >
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

