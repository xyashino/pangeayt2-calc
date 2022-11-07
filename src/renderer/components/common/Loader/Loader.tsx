interface Props {
  text?: string;
}

export const Loader = ({ text }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center p-10 text-red-100 font-bold uppercase">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-red-500"></div>
      {text ? <p>{text}</p> : null}
    </div>
  );
};
