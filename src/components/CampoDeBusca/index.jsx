import style from './CampoDeBusca.module.css';
import Image from 'next/image';
import Lupa from '../../../public/assets/lupa.png'



const CampoDeBusca = ( { textoBuscaDigitado, handleBusca} ) => {
  return (
    <div className={style.container}>
      <Image src={Lupa} />
      
      <input 
      type="text"
      value={textoBuscaDigitado}
      onChange={(event) => handleBusca(event.target.value)}
      placeholder='Pesquise aqui um dos pratos do nosso cardápio' 
      
      
      />
    </div>
  )
}

export default CampoDeBusca;
