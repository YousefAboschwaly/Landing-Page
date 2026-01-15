export default function Setapp() {
  return (
    <div className="setapp w-300 py-25.25 mt-10 mx-auto border border-y-white border-x-0 space-y-22  ">
      <div className="flex justify-between items-start  ">
        <h2 className="font-semibold text-[36px] ">What you get on Setapp.</h2>
        <p className="text-[18px] leading-[32.04px] tracking-[0px] w-150 pr-8.75">
          With a single monthly subscription at $9.99, you get 240+ apps for
          your Mac.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        {/* Top large card */}

        <div className="col-span-2 rounded-[20px] overflow-hidden bg-[#DF96AE] pt-15 ">
          <div className="flex items-center px-15 gap-8">
            <img src="/icon-cmm.png.png" alt="laptop icon " />
            <div className=" text-primary">
              <h3>Keep your Mac clean</h3>
              <p>Remove junk, scan for malware, wipe email attachments</p>
            </div>
          </div>
          <img
            src="/public/cmm-big@2x.png.png"
            alt="smart-screen"
            className="px-9.25"
          />
        </div>

        {/* Bottom left card */}
        <div className="rounded-[20px] bg-[#F4F0E4] pb-[59.54px] ">
          <img src="/public/coderunner@2x.png.png" alt="code image " />

          <div className="px-15 space-y-4.75 text-primary">
            <img src="/public/icon-coderunner.svg" alt="code icon" />

            <div>
              <h3>Write code</h3>
              <p>Create applications in more than 25 languages</p>
            </div>
          </div>
        </div>

        {/* Bottom right card */}
        <div className="rounded-[20px] bg-[#384C75] pt-15 space-y-[52.46px]">
          <div className="px-15 space-y-4.75 ">
            <img src="/public/icon-meeter.svg" alt="meeter icon" />

            <div>
              <h3>Join meetings in a click</h3>
              <p>Quickly access links to your meetings from menu bar</p>
            </div>
          </div>

          <img src="/public/meeter@2x.png.png" alt="meeter image " />
        </div>
      </div>

      <button className="flex items-center justify-center gap-2.75 mx-auto">
        <img src="/arrow-right-icon.svg" alt="arrow-right" />
        <span className="font-medium text-[20px] leading-7.5  tracking-[1.6px]">
          {" "}
          View all superpowers
        </span>
      </button>

      <div className="flex justify-between items-start  ">
        <h2 className=" ">Your Setapp journey.</h2>
        <p className="w-150 pr-8.75">
          Type in your task into Setapp search and get instant app
          recommendations.
        </p>
      </div>
    </div>
  );
}
