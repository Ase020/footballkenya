/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { gor } from "../../../assets";

const Table = () => {
  return (
    <div className="flex rounded-xl flex-col sm:px-8 md:px-20 lg:px-28 my-5 md:my-10">
      <div className="shadow-md rounded-xl overflow-x-auto">
        <div className="flex-between px-6 py-5">
          <h4 className="text-primary text-base font-semibold">Standings</h4>
          <MoreVertRoundedIcon fontSize="small" color="success" />
        </div>

        <table
          className="w-full table-auto "
          cellPadding="0"
          cellSpacing="0"
          border="0"
        >
          <thead>
            <tr className="border bg-[#F9FAFB]">
              <th className="text-left text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                Pos
              </th>
              <th className="text-left min-w-[112px] text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                Name
              </th>
              <th className="text-left text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                Played
              </th>
              <th className="text-left text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                GD
              </th>
              <th className="text-left text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                Points
              </th>
              <th className="text-left text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                Win
              </th>
              <th className="text-left text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                Draw
              </th>
              <th className="text-left text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                Lose
              </th>
              <th className="text-left text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                GF
              </th>
              <th className="text-left text-sm font-normal px-2 md:px-6 py-2 md:py-5">
                GA
              </th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map((_, i) => (
              <TableContent key={i} pos={i + 1} />
            ))}
          </tbody>

          <tfoot>
            <tr className="border font-normal md:mx-auto">
              <td colSpan={10} className="px-6 py-2 md:py-5">
                <Link
                  to="/"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border w-fit mx-auto"
                >
                  <span className="text-sm font-medium md:text-center">
                    Full Standings
                  </span>
                  <ArrowForwardRoundedIcon fontSize="small" />
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;

const TableContent = ({ pos }) => {
  return (
    <tr className="border font-normal">
      <td className="text-left text-sm px-4 md:px-6 py-2">{pos}</td>
      <td className="flex items-center gap-2 text-left text-sm px-2 md:px-6 py-2">
        <img src={gor} alt="" className="h-5 md:h-7 w-5 md:w-7 object-cover" />
        <span className="text-xs md:text-sm">Gor Mahia</span>
      </td>
      <td className="text-left text-xs md:text-sm px-4 md:px-6 py-2">22</td>
      <td className="text-left text-xs md:text-sm px-4 md:px-6 py-2">23</td>
      <td className="text-left text-xs md:text-sm px-4 md:px-6 py-2">47</td>
      <td className="text-left text-xs md:text-sm px-4 md:px-6 py-2">13</td>
      <td className="text-left text-xs md:text-sm px-4 md:px-6 py-2">8</td>
      <td className="text-left text-xs md:text-sm px-4 md:px-6 py-2">1</td>
      <td className="text-left text-xs md:text-sm px-4 md:px-6 py-2">46</td>
      <td className="text-left text-xs md:text-sm px-4 md:px-6 py-2">13</td>
    </tr>
  );
};
