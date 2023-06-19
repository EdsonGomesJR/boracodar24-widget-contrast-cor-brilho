import Brightness from '../icons/brightness'
import Color from '../icons/color'
import Contrast from '../icons/contrast'
export function ControlsWidget() {
  return (
    <div className="mb-[113px] mt-[90px] flex w-full flex-col gap-[82px]">
      <div className="flex items-center gap-2 ">
        <Color />

        <input
          className="h-1 flex-1 appearance-none rounded-xl bg-[linear-gradient(90deg,_#FF0000_5.21%,_#FF8A00_16.48%,_#FFE600_27.74%,_#14FF00_39.35%,_#00A3FF_49.37%,_#0500FF_61.18%,_#AD00FF_72.26%,_#FF00C7_83.53%,_#FF0000_94.61%)] accent-[#8B03FB] placeholder:border-2 "
          type="range"
          name="color"
          id="color"
        />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <Brightness className="h-6 w-6" />
        <input className="flex-1" type="range" name="color" id="color" />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <Contrast />
        <input className="flex-1" type="range" name="color" id="color" />
      </div>
    </div>
  )
}
