import React from "react";

const Benefits1 = () => {
  return (
    <section id="benefits" className="bg-white benefits-section">
      <div className="py-8 pb-8 sm:pb-24 px-4 mx-auto max-w-screen-xl sm:pt-4 lg:px-12">
        <div className="gap-x-4 lg:gap-y-2 flex items-center mt-16 flex-wrap md:flex-nowrap">
          {/* begin placeholder */}
          <div className="flex items-center text-center justify-center mb-2 mt-2 mx-12 order-2 md:order-1 w-full min-w-[200px] md:w-fit">
            <img
              src="/benefit3.webp"
              alt="More Hyper-focus, Less Distractions"
              width={320}
            />
          </div>
          {/* end - placeholder */}

          {/* begin - description */}
          <div className="max-w-[600px] flex-grow mx-12 flex flex-col items-center w-full mb-12 order-1 md:mb-0 md:order-2 lg:mx-4">
            <div className="ml-8">
              <div className="flex items-center">
                <div className="text-4xl tracking-tight font-bold">
                  BLABLABLA LBAS <br /> ASDASD
                </div>
              </div>
              <div className="text-xl mt-6">
                This hyperfocus can lead to remarkable creativity, productivity,
                and achievement in areas where they are deeply engaged.
              </div>
              <div>
                <div className="text-2xl font-bold flex items-center mt-16">
                  <img src="/tick.png" alt="Tick Icon" width={32} height={32} />
                  <div className="ml-4">Everything in one place.</div>
                </div>
                <div className="text-2xl font-bold flex items-center mt-8">
                  <img src="/tick.png" alt="Tick Icon" width={32} height={32} />
                  <div className="ml-4">Fully customisable.</div>
                </div>
                <div className="text-2xl font-bold flex items-center mt-8">
                  <img src="/tick.png" alt="Tick Icon" width={32} height={32} />
                  <div className="ml-4">Quickly Capture Ideas.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits1;