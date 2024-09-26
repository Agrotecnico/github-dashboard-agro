
const FooterInicio = () => {
  return (
    <footer className= "border border-[#ccc] z-20 flex items-center justify-center h-[52px]  bg-[#30032219] w-screen fixed bottom-14 backdrop-blur-sm">
      <div className="flex w-full h-full">
        <div className="flex flex-col justify-center items-center text-[13.5px] min-[425px]:text-[16px] max-w-[1100px] mx-auto w-full h-full min-[375px]:flex-row max-[500px]:justify-center">
          <div className="flex items-center min-[375px]:mr-4">
            <span className="font-medium [text-shadow:1px_1px_0_#ffffff]">C</span><div className="opacity-80 mr-1 flex h-full items-center [text-shadow:1px_1px_0_#ffffff]">arina</div>
            <span className="font-medium [text-shadow:1px_1px_0_#ffffff]">N</span><div className="opacity-80 mr-1 flex h-full items-center [text-shadow:1px_1px_0_#ffffff]">oemi</div>
            <span className="font-medium [text-shadow:1px_1px_0_#ffffff]">P</span><div className="opacity-80 mr-1 flex h-full items-center [text-shadow:1px_1px_0_#ffffff]">acheco</div>
          </div>
          <div className="opacity-80 [text-shadow:1px_1px_0_#ffffff] ">cnp.mandataria@gmail.com</div>
        </div>
      </div>
    </footer>
  )
}

export default FooterInicio