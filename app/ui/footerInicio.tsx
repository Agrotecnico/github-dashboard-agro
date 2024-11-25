
const FooterInicio = () => {
  return (
    <footer className= "border border-[#ccc] bottom-[50px] z-20 flex items-center justify-center h-[52px]  bg-[#30032219] w-screen fixed backdrop-blur-sm">
      <div className="flex w-full h-full">
        <div className="flex flex-col justify-center opacity-80 items-center text-[13.5px] min-[425px]:text-[16px] max-w-[1100px] mx-auto w-full h-full min-[375px]:flex-row max-[500px]:justify-center">
          <div className="flex items-center min-[375px]:mr-4">
            <span className="font-medium">C</span><div className="opacity-80 mr-1 flex h-full items-center">arina</div>
            <span className="font-medium">N</span><div className="opacity-80 mr-1 flex h-full items-center">oemi</div>
            <span className="font-medium">P</span><div className="opacity-80 mr-1 flex h-full items-center">acheco</div>
          </div>
          <div className="opacity-80 ">cnp.mandataria@gmail.com</div>
        </div>
      </div>
    </footer>
  )
}

export default FooterInicio