import './Loadaer.css';

interface Props {
  text?: string;
}

export const Loader = ({ text }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center p-10 text-white font-bold uppercase ">
      <div className="lds-facebook">
        <div />
        <div />
        <div />
      </div>
      {text ? <p className="mt-5 text-2xl">{text}</p> : null}
    </div>
  );
};
