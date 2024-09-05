import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

export default function EmployeeStats({
  title,
  number,
  nummen,
  numwomen,
  percs,
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">{title}</h2>
        <span className="text-6xl font-bold text-indigo-900">{number}</span>

        <div className="text-gray-600 mb-4">
          <p>{nummen} Men</p>
          <p>{numwomen} Women</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mb-4 self-stretch">
        <div className="flex flex-col items-end justify-between">
          <div className="flex items-center text-rose-500 mb-2 flex-1">
            <ArrowUpIcon className="h-5 w-5 mr-1" />
            <span className="text-lg font-semibold">
              {`${percs[percs.length - 1]}%`}
            </span>
          </div>
          <svg className="w-24 h-12" viewBox="0 0 100 50">
            <path
              d="M0 50 L20 45 L40 48 L60 40 L80 35 L100 25"
              fill="none"
              stroke="#FCA5A5"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="bg-rose-50 text-rose-700 mt-5 rounded-xl flex flex-col items-center text-sm font-medium">
          {percs[percs.length - 1] > percs[percs.length - 2] ? (
            <div className="flex items-center gap-x-1">
              <ArrowUpIcon className="h-4 w-4 mr-1" />
              <span>by {percs[percs.length - 1]}%</span>
            </div>
          ) : (
            <div>
              <ArrowDownIcon className="h-4 w-4 mr-1" />
              <span>by {percs[percs.length - 1]}%</span>
            </div>
          )}{" "}
          <span>Past month</span>
        </div>
      </div>
    </div>
  );
}
