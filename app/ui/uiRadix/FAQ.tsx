import React, { useState } from "react";
import  {dataFaq,}  from "@/app/constant";

import {
  Box,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'



const Faq = () => {
  /* const index:number | undefined = null */
  const [clicked, setClicked] = useState<number | null>();

  const toggle = (index:number) => {
    if (clicked === index) {
      //Cierra question activa
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="px-4 mt-[18vh] flex flex-col w-full text-[#1d0215] items-center dm:text-4xl xl:botton-50 max-w-[768px]  ">
      <h2 className="mb-10 text-3xl normal font-bold text-start sm:leanding-10 sm:text-4xl ">Consultas frecuentes</h2>
      <Container /* mb={'200px'} *//*  minW='640px' mt={'40px'} */className="w-full mx-3 [border-radius:_8px_8px_0_0] bg-[#dad3da] " >
        <Accordion className="" allowToggle  /*allowMultiple*/ >
          {dataFaq.map((item, index) => {
            return (
              <AccordionItem className=" text-lg  " /* borderRadius={'xl'} bg='#0f1f4b' color={'white'} mb='4' fontFamily={'Roboto'} fontSize='18px' */ key={index}>
                <h2 onClick={() => toggle(index)} >
                  <AccordionButton className="border-b-[1px] border-b-[#1d02153b] py-0.5 mt-auto mb-auto font-medium text-base " /* height={'32px'} mt='auto' mb='auto' fontWeight={600} fontSize='18px' borderRadius='rounded' */>
                    <Box as="span" flex='1' className="text-start py-2 px-6 ">
                      {item.question}
                    </Box>
                    {clicked === index ? (
                      <AccordionIcon width={'30px'} height={'30px'} mr='16px' color="#EF2A82"/>
                    ) : (
                      <AccordionIcon width={'30px'} height={'30px'} mr='16px' color="#50073a"/>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel className="text-start px-6 py-3 bg-white " /* pb={4} */>
                  <div className="px-2 " >
                    {item.answer}
                  </div>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Container>
      <div className="mb-10 w-full bg-[#dad3da] mt-[1px] py-4 pl-6 [border-radius:0_0_8px_8px] text-lg normal font-bold text-start ">
        Realizá tu consulta
      </div>
    </div>
  );
};

export default Faq;