import "./BotaoRadio.css"

interface PropsBotaoRadioGroup extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  legenda?: string;
  ariaLabel: string;
}

const BotaoRadioGroup = ({ children, legenda, ariaLabel }: PropsBotaoRadioGroup) => {
  return (
    <fieldset
      className="radio__grupo--campos"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {legenda && <legend className="radio__grupo--legenda">{legenda}</legend>}
      <ul className="radio__grupo--campos">{children}</ul>
    </fieldset>
  )
};

export default BotaoRadioGroup;