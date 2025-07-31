import React from "react";
import CustomSelect from "./CustomSelect";
function PriceDropForm() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <h1 className="text-[var(--p3Maroon)] text-center text-3xl md:text-5xl font-black leading-snug mb-10 font-[Nunito]">
        Cute Finds, OnPrice Vibes <br />
        Get Notified When Prices Drop!
      </h1>

      {/* Form Container */}
      <form className="bg-transparent border-2 border-[var(--p4DMaroon)] rounded-lg p-6 md:p-10 w-full max-w-3xl space-y-6 text-left">
        {/* Product URL */}
        <div className="w-full">
          <label className="block text-[var(--p3Maroon)] font-bold font-[Nunito] mb-1">Product URL</label>
          <input
            type="text"
            placeholder="Enter Product URL"
            className="w-full p-3 rounded-lg text-black bg-white border border-[var(--p3Maroon)] outline-none focus:ring-1 focus:ring-[var(--p4DMaroon)]"
          />
        </div>

        {/* Email and Brand */}
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <label className="block text-[var(--p3Maroon)] mb-1 font-bold font-[Nunito]">Your Email</label>
            <input
              type="email"
              placeholder="your-email@gmail.com"
              className="w-full p-3 rounded-lg text-black bg-white border border-[var(--p3Maroon)] outline-none focus:ring-1 focus:ring-[var(--p4DMaroon)]"
            />
          </div>
          <div className="flex-1">
            <label className="block text-[var(--p3Maroon)] mb-1 font-bold font-[Nunito]">
              Select A Brand (optional)
            </label>
            <CustomSelect />
           
          </div>
        </div>

        {/* Submit */}
        <div className="!text-center">
          <button
            type="submit"
            className="px-6 py-2 border-2 cursor-pointer font-[Nunito] font-bold border-[var(--p3Maroon)] bg-[var(--p1DPink)] text-white rounded-md hover:bg-[var(--p3Maroon)] transition duration-300 transform hover:scale-95 active:scale-90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PriceDropForm;
