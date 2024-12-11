import { IconeSetaBaixo, IconeSetaCima } from "../Icones";
import Tipografia from "../Tipografia";

interface AcordeaoTituloProps {
  id: string;
  estaAberto: boolean;
  alternarVisibilidade: () => void;
  titulo: string;
}

const AcordeaoTitulo = ({ estaAberto, id, alternarVisibilidade, titulo }: AcordeaoTituloProps) => {
  return (
    <summary
      role="button"
      className="acordeao__titulo"
      aria-expanded={estaAberto}
      aria-controls={id}
      onClick={alternarVisibilidade}
    >
      <Tipografia elemento="h2" variante="h3" cor="cinza">
        {titulo}
      </Tipografia>
      <span className="acordeao__seta">{estaAberto ? <IconeSetaCima /> : <IconeSetaBaixo />}</span>
    </summary>
  )
};

export default AcordeaoTitulo;  