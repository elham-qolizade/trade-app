"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Wallet, Send, ArrowDownToLine, Bitcoin } from "lucide-react";
import { FaRegUser } from "react-icons/fa";

const data = [
  { name: "SHIB", value: 345678, percent: 25, color: "#FF1493" },
  { name: "DOGE", value: 10000, percent: 25, color: "#32CD32" },
  { name: "ETH", value: 12345, percent: 13, color: "#00CED1" },
  { name: "BTC", value: 3746897, percent: 37, color: "#FFD700" },
];

export default function WalletPage() {
  return (
    <div className="w-full min-h-screen rounded-[30px] overflow-hidden flex flex-col">
      <div className="w-full flex flex-col items-center bg-[#1B1B1D] p-4 gap-2">
        
        {/* هدر کیف پول */}
        <div className="w-full flex items-center">
          <div className="w-full text-center">
            <h2 className="text-lg text-[#A6AAAD]">کیف پول</h2>
          </div>
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-[#232329] text-white">
            <FaRegUser className="w-full" />
          </div>
        </div>

        {/* موجودی کل */}
        <div className="w-full flex flex-col items-center gap-3.5">
          <div className="w-full text-start">
            <h2 className="text-[16px] text-[#DCDEE0]">دارایی :</h2>
          </div>
          <div className="w-full flex items-center gap-5">
              <div className="flex flex-col items-start gap-1.5">
                <span className="text-[#B0B0B8] text-[12px]">برحسب ریال</span>
                <p className="text-[20px] text-[#DCDEE0]">12.345.500 ریال</p>
              </div>
              <div className="flex flex-col items-start gap-1.5">
                <span className="text-[#B0B0B8] text-[12px]">برحسب دلار</span>
                <p className="text-[20px] text-[#DCDEE0]">$ 12.92</p>
              </div>
          </div>
        </div>

        {/* نمودار + لیست ارزها */}
        <div className="flex items-center justify-center gap-6 my-3">

          {/* نمودار */}
          <div className="h-52 w-52">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  outerRadius={100}
                  innerRadius={2.5}
                  dataKey="percent"
                  paddingAngle={4}
                  cornerRadius={15}
                  labelLine={false}
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                    // محاسبه مختصات وسط هر بخش
                    const radius = innerRadius + (outerRadius - innerRadius) / 2;
                    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
                    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

                    return (
                      <>
                        {/* دایره سفید */}
                        <circle cx={x} cy={y} r={18} fill="#fff" />
                        {/* متن درصد داخل دایره */}
                        <text
                          x={x}
                          y={y}
                          fill="#000"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize={12}
                          fontWeight="bold"
                        >
                          {Math.round(percent)}%
                        </text>
                      </>
                    );
                  }}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke={entry.color}
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* لیست ارزها */}
          <div className="space-y-2 text-sm">
            {data.map((item) => (
              <div key={item.name} className="flex flex-row-reverse items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="w-10 text-[#A6AAAD]">{item.name}</span>
                <span className="text-gray-400">{item.percent}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* دکمه‌ها */}
        <div className="w-full flex items-center gap-5 my-4">
          <button className="w-full text-white text-xs font-bold rounded-[8px] text-center py-3 border-solid border-2 bg-[#FCD535] border-[#FCD535]">
            واریز
          </button>
          <button className="w-full text-white text-xs font-bold rounded-[8px] text-center py-3 border-solid border-2 border-[#FCD535]">
            برداشت
          </button>
        </div>
      </div>

      {/* لیست تراکنش‌ها */}
      <div className="flex flex-col items-center gap-1 mb-20 mt-1.5 bg-[#232329] w-full">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-[#1B1B1D] w-full py-1.5 px-1.5">
            <div className="w-full flex items-center gap-2">
              <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full bg-yellow-600">
                <Bitcoin className="text-white" />
              </div>
              <div className="w-full flex flex-col items-start gap-2">
                <p className="font-medium text-[#DCDEE0]">بیت کوین</p>
                <p className="text-sm text-[#A6AAAD]">BTC/IRR</p>
              </div>
              <div className="w-full">
                <p className="font-bold text-[#DCDEE0]">12,34 ریال</p>
                <p className="text-[#A6AAAD] text-sm">+37$</p>
              </div>
              <div className="w-full flex flex-col items-center gap-1.5">
                <button className="w-full text-[#424547] border-solid border-2 border-[#FCD535] bg-[#FCD535] rounded-[8px]">واریز</button>
                <button className="w-full text-white border-solid border-2 border-[#FCD535] rounded-[8px]">برداشت</button>
              </div>
              <button className="w-full py-[19px] text-white rounded-[10px] bg-[#232329] text-center">معامله</button>
            </div>
          </div>
        ))}
      </div>

      {/* منوی پایین */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#232329] flex justify-around py-3">
        <Wallet className="w-6 h-6 text-yellow-400" />
        <Send className="w-6 h-6 text-gray-400" />
        <ArrowDownToLine className="w-6 h-6 text-gray-400" />
      </div>
    </div>
  );
}