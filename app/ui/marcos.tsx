export function Fondo({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="bg-[#0000000d] [box-shadow:_inset_0_1px_#0000002e,inset_0_-1px_#ffffff] rounded-lg ">
          {children}
      </div>
    );
  }

  export function Frente({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="bg-[#ffffff94] [box-shadow:_inset_0_1px_#ffffff,inset_0_-1px_#00000021] rounded ">
          {children}
      </div>
    );
  }

