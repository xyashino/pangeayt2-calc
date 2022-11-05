interface Props {
  title: string;
}
export default function Header({ title }: Props) {
  return (
    <header className="grid bg-red-900 p-4 place-content-center">
      <h1 className="font-bold uppercase text-red-100 text-3xl">{title}</h1>
    </header>
  );
}
