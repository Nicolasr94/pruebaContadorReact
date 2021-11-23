const Contador = () => {
  const [contador, setContador] = React.useState(0);

  const add = () => setContador(contador + 1);
  const rest = () => setContador(contador - 1);
  return (
    <div>
      <h1  className={contador < 0 ?"menor" : 'mayor'} >Contador:{contador}
      </h1>
      <hr/>

      <button onClick={add}>Aumentar</button>
      <button onClick={rest}>Bajar</button>
    </div>
  
  );
  };