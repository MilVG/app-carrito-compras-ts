import '../styles/motos/motos_style.css'

type Motoslist = {
  id: number;
  name: string;
  description: string;
  img: string;
}

export default function Motos({ datamotos }: { datamotos: Array<Motoslist> }) {
  console.log(datamotos);
  
  return (
    <>
      {
        datamotos.map((moto) => (
          <div className="motos-container" key={moto.id}>
            <div className="motos_section">
              <img src={"/images/"+moto.img} alt="" className='motos_img' />
              <div className="details-motos">
                <div>
                  <h3>{moto.name}</h3>
                </div>
                <p className='text_motos'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae odit fuga illo cumque quis doloremque aspernatur expedita ducimus facere deserunt temporibus culpa aperiam veritatis, earum minus explicabo, doloribus nostrum voluptates!</p>
                <button>Agregar al Carrito</button>
              </div>
            </div>
          </div>
        ))
      }
    </>


  )
}
