import React, { useState } from 'react';
import calc from './assets/Vector.png'

function App() {
  const [narx, setNarx] = useState('');
  const [yil, setYil] = useState('');
  const [foiz, setFoiz] = useState('');
  const [oylik, setOylik] = useState(''); 
  
  const calculateMortgage = () => {
    if (narx > 0 && yil > 0 && foiz > 0) {
      const monthlyInterestRate = foiz / 100 / 12;
      const numberOfPayments = yil * 12;
      const payment =
        (narx * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      setOylik(payment.toFixed(2));
    } else {
      alert("Iltimos, barcha qiymatlarni to'g'ri kiriting!");
    }
  };
  const clearAll = () => {
    setNarx('');
    setYil('');
    setFoiz('');
    setOylik('');
  };

  return (
    <>
      <div className="container bg-white w-[1008px] mt-[80px] flex h-[606px] m-auto rounded-[24px]">
        <div className="w-[504px] h-[606px]">
          <div className="flex w-[424px] m-auto mt-8 justify-between">
            <h1 className="text-2xl mb-8">Mortgage Calculator</h1>
            <p className="text-zinc-500 cursor-pointer" onClick={clearAll}>
              Clear All
            </p>
          </div>
          <label className="ml-10">Mortgage Amount</label>
          <div className="flex mt-[12px] mb-[24px] w-[424px] m-auto">
            <p className="bg-[#e4f4fd] w-[44px] h-[48px] text-[18px] flex justify-center pt-[10px]">£</p>
            <input
              className="w-[380px] border"
              type="number"
              value={narx}
              onChange={(e) => setNarx(parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="flex w-[424px] m-auto justify-center gap-[24px]">
            <div className="flex mt-[12px] mb-[24px] w-[200px]">
              <input
                className="w-[120px] border"
                type="number"
                value={yil}
                onChange={(e) => setYil(parseInt(e.target.value) || 0)}
              />
              <p className="bg-[#e4f4fd] w-[80px] h-[48px] text-[18px] flex justify-center pt-[10px]">years</p>
            </div>
            <div className="flex mt-[12px] mb-[24px] w-[200px] m-auto">
              <input
                className="w-[149px] border"
                type="number"
                value={foiz}
                onChange={(e) => setFoiz(parseFloat(e.target.value) || 0)}
              />
              <p className="bg-[#e4f4fd] w-[51px] h-[48px] text-[18px] flex justify-center pt-[10px]">%</p>
            </div>
          </div>

          <div className="mt-4 ml-[43px]">
            <h1 className='text-slate-600 mb-3'>Mortgage Type</h1>
              <label className="inline-flex items-center w-[424px] h-[48px] rounded-[4px] border">
                <input
                  type="radio"
                  name="mortgageType"
                  value="repayment"
                  className="form-radio"
                /> 
                <span className="ml-2">Repayment</span>
              </label><br />

              <label className="inline-flex items-center  w-[424px] h-[48px] rounded-[4px] border mt-3 mb-10">
                <input
                  type="radio"
                  name="mortgageType"
                  value="interestOnly"
                  className="form-radio"
                />
                <span className="ml-2">Interest Only</span>
              </label>
            </div>


          <button
            onClick={calculateMortgage}
            className=" ml-10 flex items-center gap-[17px] justify-center bg-[#d8db2f] text-[#133041] text-[17px] px-6 py-2 rounded-[999px] h-[56px] w-[314px] "
          >
            <img src={calc} alt="" />
            Calculate Repayments
          </button>
        </div>
        <div className="bg-[#133041] w-[504px] h-[606px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[80px] text-white">
          <h1 className="text-2xl ml-10 mt-10">Your results</h1>
          <p className='text-slate-500 mt-4 ml-10'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
          <div className=''>
            <h2 className="text-3xl mb-4 ml-10 mt-10 ">Your monthly repayment</h2>
            <p className="text-4xl font-bold ml-10">£{oylik}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
