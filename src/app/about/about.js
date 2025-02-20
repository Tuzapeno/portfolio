function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Texto descritivo */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
            About me
          </h2>
          <p className="text-lg leading-relaxed mb-4">
          Hello, I'm Arthur, a tech and innovation enthusiast currently studying 
          Computer Science at Pontifical Catholic University of Paraná (PUCPR).
            
          </p>
          <p className="text-lg leading-relaxed">
          My interest in games has always motivated me to explore how they are made, which eventually led me to programming. 
          After that initial contact, I began to delve into the various areas that this field offers. Here, I present some of 
          the projects I developed throughout my learning journey.
          </p>
        </div>

        {/* Imagem ilustrativa (substitua o src pela sua imagem) */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="./foto-perfil.png"
            alt="Foto de perfil"
            className="rounded-full shadow-2xl transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
