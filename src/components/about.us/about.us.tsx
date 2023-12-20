import './about.us.scss';

export function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>CONÓCENOS</h2>
      <div className="mobile-container">
        <div className="section1-and-image1-container">
          <div className="text-section-1">
            <p>
              Somos un grupo de tres amigos originarios de Ciudad Real que
              decidimos emprender un cambio en el panorama de la moda local.
              Observando la falta de opciones vibrantes en el ámbito de la ropa
              vintage en nuestra ciudad, tomamos la iniciativa de crear aquello
              que anhelábamos tener en nuestro entorno.
            </p>
          </div>
          <div className="img-1-container">
            <img
              src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_320/v1702907564/elPerroVintage/gnczwifurmevn8ulsyom.webp"
              alt="La gente guapa del Perro Vintage"
            />
          </div>
        </div>
        <div className="text-section-3">
          Somos conscientes de que la industria de la confección contribuye con
          más del 10% de las emisiones de carbono a nivel mundial, superando
          incluso las emisiones generadas por los viajes aéreos.
        </div>
        <div className="text-section-4">
          Este dato nos impulsó a tomar una posición activa en la lucha contra
          el impacto ambiental de la moda. Creemos firmemente en la importancia
          de generar conciencia sobre este tema y abogamos por un cambio de
          mentalidad en la forma en que nos vestimos.
        </div>
        <div className="img-2-container">
          <img
            src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_220/v1702910444/elPerroVintage/nkvdcn3omttyvsfqn1yj.webp"
            alt="Fuck Fast Fashion"
          />
        </div>
        <div className="text-section-5">
          Es así como nos comprometemos a promover la adopción de prendas de
          segunda mano, fomentando un estilo único y auténtico. Nuestra tienda
          de ropa de segunda mano no solo ofrece opciones sostenibles y
          respetuosas con el medio ambiente, sino que también te invita a
          descubrir piezas únicas y con estilo propio.
        </div>
        <div className="text-section-6">
          ¿Qué más puedes pedir? Únete a nosotros en este viaje hacia una moda
          más consciente y vibrante, donde cada prenda cuenta una historia
          única.
        </div>
      </div>
      <div className="desktop-container">
        <div className="desktop-text">
          <div className="desktop-text-section1">
            <p>
              Somos un grupo de tres amigos originarios de Ciudad Real que
              decidimos emprender un cambio en el panorama de la moda local.
              Observando la falta de opciones vibrantes en el ámbito de la ropa
              vintage en nuestra ciudad, tomamos la iniciativa de crear aquello
              que anhelábamos tener en nuestro entorno.
            </p>
          </div>
          <div className="desktop-text-section2">
            <p>
              Somos conscientes de que la industria de la confección contribuye
              con más del 10% de las emisiones de carbono a nivel mundial,
              superando incluso las emisiones generadas por los viajes aéreos.
              Este dato nos impulsó a tomar una posición activa en la lucha
              contra el impacto ambiental de la moda. Creemos firmemente en la
              importancia de generar conciencia sobre este tema y abogamos por
              un cambio de mentalidad en la forma en que nos vestimos.
            </p>
          </div>
          <div className="desktop-text-section3">
            <p>
              Es así como nos comprometemos a promover la adopción de prendas de
              segunda mano, fomentando un estilo único y auténtico. Nuestra
              tienda de ropa de segunda mano no solo ofrece opciones sostenibles
              y respetuosas con el medio ambiente, sino que también te invita a
              descubrir piezas únicas y con estilo propio. ¿Qué más puedes
              pedir? Únete a nosotros en este viaje hacia una moda más
              consciente y vibrante, donde cada prenda cuenta una historia
              única.
            </p>
          </div>
        </div>
        <div className="desktop-image">
          <img
            src="https://res.cloudinary.com/djz7c5bdp/image/upload/h_620/v1702907564/elPerroVintage/gnczwifurmevn8ulsyom.webp"
            alt="La gente guapa del Perro Vintage (foto grande)"
          />
        </div>
      </div>
    </div>
  );
}
