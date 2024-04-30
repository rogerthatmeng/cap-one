import React from "react";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <div className="w-full grid place-items-center  bg-[#f4f4f4]">
      <form
        className="form w-full max-w-[420px] mt-8 mx-auto p-[24px_48px_48px] bg-white rounded-lg border border-[#bcbfc7]"
        onSubmit={handleSubmit}
        style={{ boxShadow: "0 1px 2px #00000014,0 3px 3px #0000000d" }}
      >
        <div className="mt-4 mb-7 mx-auto w-fit">
          <img
            src="https://ecm.capitalone.com/CI_Common/assets/images/logos/capital-one-logo.svg"
            alt="capital one"
            width={210}
          />
        </div>
        <h1 className="mb-6 text-2xl text-center">{title}</h1>
        {subTitle && <p className="mb-4 text-sm">{subTitle}</p>}

        <div>{children}</div>
      </form>
      <div className="hover:underline text-sm font-bold text-[#0d74af] my-6">
        Commercial or Trade Credit
      </div>
    </div>
  );
};

export default FormLayout;
