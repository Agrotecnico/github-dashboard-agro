import clsx from 'clsx';


interface HTLMElemment extends React.AllHTMLAttributes<HTMLElement>  {
  children: React.ReactNode;
}

export function Fondo({ children, className, ...rest }: HTLMElemment) {
    return (
      <div
        {...rest}
        className={clsx(
          "bg-[#1d021515] [box-shadow:_inset_0_1px_#0000002a,inset_0_-1px_#ffffff] rounded-lg ",
          className,
        )}
        >
          {children}
      </div>
    );
  }

  export function Frente({ children, className, ...rest }: HTLMElemment) {
    return (
      <div
        {...rest}
        className={clsx(
          "bg-[#ffffff94] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002e] rounded ",
          className,
        )}
        >
          {children}
      </div>
    );
  }

  /* export function Frente({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="bg-[#ffffff94] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#0000002a] rounded ">
          {children}
      </div>
    );
  } */

