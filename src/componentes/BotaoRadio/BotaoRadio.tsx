import "./BotaoRadio.css"

interface PropsBotaoRadio extends React.HTMLProps<HTMLInputElement> {
  textoLegenda: string;
  id: string;
  nome: string;
  valor: string;
  selecionado: boolean
  aoMudar: (evento: React.ChangeEvent<HTMLInputElement>) => void;
}
const BotaoRadio = ({ textoLegenda, aoMudar, id, nome, valor, selecionado, ...rest }: PropsBotaoRadio) => {

  return (
    <li>
      <label htmlFor={id} className="botao__radio--legenda">
        <input
          type="radio"
          id={id}
          name={nome}
          value={valor}
          checked={selecionado}
          onChange={aoMudar}
          {...rest} />
        <span>{textoLegenda}</span>
      </label>
    </li>
  )
};

export default BotaoRadio; 