
import { useState, useEffect } from 'react';






export const NumberInputxx = () => {
  const [value, setValue] = useState("");

  const formatNumber = (input: string) => {
    // Reemplazar comas por puntos para convertir correctamente
    let sanitizedInput = input.replace(/,/g, ".");

    // Convertir a número flotante
    let parsedNum = parseFloat(sanitizedInput);

    if (!isNaN(parsedNum)) {
      // Formatear número con dos decimales
      return parsedNum
        .toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // Devolver el input original si no es válido
    return input;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value;

    // Validar el input
    const validInput = rawInput.match(/^[0-9.,]*$/) ? rawInput : value;

    // Actualizar el valor con formato
    setValue(formatNumber(validInput));
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Ingrese un número"
    />
  );
};




export const NumberInputxxx = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Remover caracteres no deseados (solo números, puntos y comas)
    const sanitizedInput = input.replace(/[^0-9.,]/g, "");

    // Cambiar comas a puntos para manejar decimales correctamente
    const standardizedInput = sanitizedInput.replace(/,/g, ".");

    // Intentar convertir la entrada en un número válido
    const parsedNum = parseFloat(standardizedInput);

    // Si es un número válido, formatear correctamente
    if (!isNaN(parsedNum)) {
      const formattedValue = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(parsedNum);

      setValue(formattedValue);
    } else {
      // Si no es válido, simplemente actualizar con la entrada "cruda"
      setValue(input);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Ingrese un número"
    />
  );
};



export const NumberInputxxxx = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value;

    // Solo permitir números, puntos y comas en el input
    const sanitizedInput = rawInput.replace(/[^0-9.,]/g, "");

    // Detectar y manejar puntos y comas para decimales correctamente
    const normalizedInput = sanitizedInput.replace(/,/g, ".");

    // Convertir a flotante y redondear a dos decimales si es válido
    const parsedNum = parseFloat(normalizedInput);

    if (!isNaN(parsedNum)) {
      const formattedValue = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(parsedNum);
      setValue(formattedValue);
    } else {
      // Si no es un número válido, mantener el input
      setValue(sanitizedInput);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Ingrese un número"
    />
  );
};





export const NumberInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value;

    // Solo permitir números, puntos y comas
    const sanitizedInput = rawInput.replace(/[^0-9.,]/g, "");

    // Reemplazar comas por puntos para manejar decimales
    const normalizedInput = sanitizedInput.replace(/,/g, ".");

    // Convertir a flotante y redondear a dos decimales si es válido
    const parsedNum = parseFloat(normalizedInput);

    if (!isNaN(parsedNum)) {
      // Mantener el número con dos decimales
      const roundedNum = parsedNum.toFixed(2);

      // Usar directamente `roundedNum` para asegurar precisión
      const formattedValue = new Intl.NumberFormat("de-DE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number(roundedNum));

      setValue(formattedValue);
    } else {
      setValue(sanitizedInput);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Ingrese un número"
    />
  );
};




export const FormatearInputxx = () => {
  const [valor, setValor] = useState("");

  const formatearNumero = (numero) => {
    const formato = new Intl.NumberFormat("es-AR", {
      // minimumFractionDigits: 2,
      // maximumFractionDigits: 2,
    });
    return formato.format(numero);
  };

  // const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const valorSinFormato = e.target.value.replace(/\./g, "").replace(/,/g, ".");
  //   // const valorSinFormato = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  //   setValor(formatearNumero(valorSinFormato));
  // };

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorSinFormato = e.target.value.replace(/\./g, "").replace(/,/g, ".");
    // const valorSinFormato = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setValor(formatearNumero(valorSinFormato));
  };

  return (
    <input
      type="text"
      value={valor}
      // onChange={(e) => setValor(e.target.value)}
      onChange={manejarCambio}
      // onBlur={manejarCambio}
      placeholder="1.234,56"
    />
  );
};



export const FormatearInput = () => {
  const [valor, setValor] = useState("");

  const formatearNumero = (numero) => {
    const formato = new Intl.NumberFormat("es-AR", {
      // minimumFractionDigits: 2,
      // maximumFractionDigits: 2,
    });
    return formato.format(numero);
  };
/* .replace(/\B(?=(\d{3})+(?!\d))/g, ".")*/
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorSinFormato = e.target.value.replace(/\./g, "").replace(/,/g, ".");
    // const valorSinFormato = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    setValor(Number(valorSinFormato).toLocaleString("es-AR", {style:"decimal", currency:"ARG"}));

  };

  return (
    <input
      type="text"
      value={valor}
      onChange={(e) => {
        const valorSinFormato = e.target.value.replace(/\./g, "").replace(/,/g, ".");
        setValor(Number(valorSinFormato).toLocaleString("es-AR", {style:"decimal", currency:"ARG"}));
      }}
      // onChange={manejarCambio}
      placeholder="0"
    />
  );
};




                      {/* <form className="flex flex-col" onInput= {() => {
                        x=parseInt(a.value)+parseInt(b.value)
                      } } >
                        <fieldset className="mb-3">
                          <legend>Radios:</legend>
                          <input type="radio" id="html" name="fav_language" value="HTML"/>
                          <label htmlFor="html">HTML</label>
                          <input type="radio" id="css" name="fav_language" value="CSS"/>
                          <label htmlFor="css">CSS</label>
                          <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                          <label htmlFor="javascript">JavaScript</label>
                        </fieldset>

                        <fieldset className="mb-3">
                          <legend>Checkbox:</legend>
                          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                          <label htmlFor="vehicle1"> I have a bike</label>
                          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                          <label htmlFor="vehicle2"> I have a car</label>
                          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                          <label htmlFor="vehicle3"> I have a boat</label>
                        </fieldset>

                        <label htmlFor="fname">First name:</label>
                        <input type="text" id="fname" name="fname" value="John"/>
                        <label htmlFor="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" value="Doe"/>

                        <label htmlFor="cars">Choose a car:</label>
                        <select id="cars" name="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="fiat">Fiat</option>
                          <option value="audi">Audi</option>
                        </select>

                        <textarea name="message" rows={10} cols={30}>
                        The cat was playing in the garden.
                        </textarea>

                        
                        <input type="number" id="a" name="a" defaultValue="50"/>
                        -
                        <input type="number" id="b" name="b" defaultValue="50"/>
                        =
                        <output name="x" htmlFor="a b"></output>

                        <input type="submit"></input>
                      </form> */}





















