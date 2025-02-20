import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Introduction() {
    return (
      <section className="h-screen flex flex-col items-center justify-center bg-black text-white">
        {/* Título centralizado com tipografia elegante e grande destaque */}
        <div className='typewriter'>
          <h1 className="text-5xl md:text-7xl font-bold mb-10 text-center">
          <span className="text-blue-400">Welcome</span> to my Portfolio
          </h1>
        </div>
  
        {/* Ícones de redes sociais com transições suaves e cores de destaque */}
        <div className="flex space-x-8">
          <a
            href="https://www.linkedin.com/in/arthur-neumann-salerno"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/Tuzapeno"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </section>
    );
  }
  
  export default Introduction;