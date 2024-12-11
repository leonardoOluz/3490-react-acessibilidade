import { useState } from "react";

const useAcordeao = () => {
  const [aberturasPorItem, setAberturasPorItem] = useState<Record<string | number, boolean>>({});
  
  const alternarVisibilidade = (id: string | number) => {
    setAberturasPorItem((prevAberturas) => ({
      ...prevAberturas,
      [id]: !prevAberturas[id],
    }));
  };
  
  return {alternarVisibilidade, aberturasPorItem};
};

export default useAcordeao;
