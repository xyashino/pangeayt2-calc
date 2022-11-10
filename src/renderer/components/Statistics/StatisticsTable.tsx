import {
  GeneralItemStatistics,
  ItemStatistics,
} from '../../../types/statistics/item-statistics';
import { StatisticsTableRow } from './StatisticsTableRow';

interface Props {
  statistics: ItemStatistics | GeneralItemStatistics;
}

export const StatisticsTable = ({ statistics }: Props) => {
  const { rows, title } = statistics;
  return (
    <table className="p-10 mt-5 border-black bg-black bg-opacity-40 text-white font-bold">
      <thead className="bg-opacity-70 bg-black p-5">
        <tr className="p-10 bg-black">
          <th colSpan={3} className="uppercase text-2xl p-2">
            {title}
          </th>
        </tr>
        {'rowsTitle' in statistics && statistics?.rowsTitle ? (
          <StatisticsTableRow
            records={(statistics as ItemStatistics).rowsTitle}
            isHead
          />
        ) : null}
      </thead>
      <tbody>
        {rows.map((rows) => (
          <StatisticsTableRow records={rows} />
        ))}
      </tbody>
    </table>
  );
};
