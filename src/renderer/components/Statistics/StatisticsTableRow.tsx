interface Props {
  records: string[];
  isHead?: boolean;
}

export const StatisticsTableRow = ({ records, isHead = false }: Props) => {
  return (
    <tr className="text-center border-1 border-black even:bg-black even:bg-opacity-50">
      {!isHead
        ? records.map((value) => <td className="p-4 uppercase ">{value}</td>)
        : records.map((value) => <th className="p-2 uppercase">{value}</th>)}
    </tr>
  );
};
