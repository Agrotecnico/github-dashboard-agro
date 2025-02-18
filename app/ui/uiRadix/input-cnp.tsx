
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
  }


export function InputCnp({ children, className, ...rest }: InputProps) {

  return (
    <div className="relative w-full">
      <div className="flex rounded-l-lg rounded-r-sm">
        <input
          {...rest}
          className={clsx(
              'w-full rounded-[4px] pl-10 pr-4 py-0 border border-[#e9dae9] bg-[#ffffff] text-[#000000] opacity-70 transition-[opacity,shadow] duration-150 ease-in hover:opacity-100 hover:border-[#e9dae9] focus:border-[rgba(195,123,195,0)] focus:opacity-100 focus:[box-shadow:_0px_0px_0px_1px_#c37bc3cc] focus:outline-2 focus:outline-[#c37bc336] focus:outline-offset-2 focus:placeholder:opacity-30 placeholder:text-sm  placeholder:text-[#858585] ${name && "bg-[#ffffff]"}',
              className,
          )}
        />
          {children}
      </div>
    </div>
  );
}

