import Button from "../Components/Button";

export default function Subscribe() {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-center items-center max-lg:flex-col gap-10"
    >
      <h3 className=" text-4xl font-montserrat font-semibold">
        Sign Up For
        <span className=" text-coral-red"> Updates</span> & Newsletter
      </h3>
      <div className="lg-max-w-[40%] w-full flex items-center max-sm:flex-col sm:border sm:border-slate-gray rounded-full ">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className=" input m-5 text-coral-red "
        ></input>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
}
