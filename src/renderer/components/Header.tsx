import logo from '../../../assets/icon.png';

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <header className="w-screen bg-red-500  p-2 flex items-center">
      <img src={`${logo}`} alt="app logo" draggable="false" className="h-20" />
      <h1 className="font-bold uppercase text-3xl text-white block text-">
        {title}
      </h1>
    </header>
  );
}
