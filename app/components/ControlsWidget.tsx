'use client'
import { useState } from 'react'
import cx from 'classnames'
import Brightness from '../icons/brightness'
import Color from '../icons/color'
import Contrast from '../icons/contrast'
export function ControlsWidget() {
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [colorRange, setColorRange] = useState(50)

  const contrastChange = cx({
    'contrast-0': contrast === 0,
    'contrast-[0.1]': contrast > 0 && contrast <= 10,
    'contrast-[0.3]': contrast > 10 && contrast <= 30,
    'contrast-50': contrast > 30 && contrast <= 50,
    'contrast-75': contrast > 50 && contrast <= 75,
    'contrast-100': contrast > 75 && contrast <= 100,
    'contrast-125': contrast > 100 && contrast <= 125,
    'contrast-150': contrast > 125 && contrast <= 150,
    'contrast-200': contrast > 150 && contrast <= 200,
  })
  const brightnessChange = cx({
    'brightness-0': brightness === 0,
    'brightness-[0.1]': brightness > 0 && brightness <= 10,
    'brightness-[0.3]': brightness > 10 && brightness <= 30,
    'brightness-50': brightness > 30 && brightness <= 50,
    'brightness-75': brightness > 50 && brightness <= 75,
    'brightness-90': brightness > 75 && brightness <= 90,
    'brightness-95': brightness > 90 && brightness <= 95,
    'brightness-100': brightness > 95 && brightness <= 100,
    'brightness-105': brightness > 100 && brightness <= 105,
    'brightness-110': brightness > 105 && brightness <= 110,
    'brightness-125': brightness > 110 && brightness <= 125,
    'brightness-150': brightness > 125 && brightness <= 150,
    'brightness-200': brightness > 150 && brightness <= 200,
  })

  const colorChange = cx({
    'bg-[#FF0000]': colorRange <= 5 || colorRange >= 90,

    'bg-[#FF8A00]': colorRange > 5 && colorRange <= 16,

    'bg-[#FFE600]': colorRange > 16 && colorRange <= 28,

    'bg-[#14FF00]': colorRange > 28 && colorRange <= 40,

    'bg-[#00A3FF]': colorRange > 40 && colorRange <= 49,

    'bg-[#0500FF]': colorRange > 49 && colorRange <= 61,

    'bg-[#AD00FF]': colorRange > 61 && colorRange <= 72,

    'bg-[#FF00C7]': colorRange > 72 && colorRange <= 89,
  })
  return (
    <div className="mb-[113px] mt-[90px] flex w-full flex-col gap-[82px]">
      <div className="flex items-center gap-2 ">
        <Color className="  text-teal-900 dark:text-white" />

        <input
          className="h-1  flex-1 appearance-none  rounded-xl bg-[linear-gradient(90deg,_#FF0000_5.21%,_#FF8A00_16.48%,_#FFE600_27.74%,_#14FF00_39.35%,_#00A3FF_49.37%,_#0500FF_61.18%,_#AD00FF_72.26%,_#FF00C7_83.53%,_#FF0000_94.61%)]  ring-2 ring-teal-800 dark:ring-0
          [&::-webkit-slider-runnable-track]:rounded-xl
          [&::-webkit-slider-thumb]:h-[18px]
          [&::-webkit-slider-thumb]:w-[18px]
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
     
          [&::-webkit-slider-thumb]:bg-teal-600
          [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:ring-[1.5px]
          [&::-webkit-slider-thumb]:ring-white
          [&::-webkit-slider-thumb]:dark:bg-[#8703FC]
        
          "
          type="range"
          name="color"
          id="color"
          value={colorRange}
          onChange={(e) => setColorRange(parseFloat(e.target.value))}
          max={100}
          min={0}
        />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <Brightness className="h-6 w-6 text-teal-900  dark:text-white" />
        <input
          className="h-1 flex-1  appearance-none  rounded-xl bg-gradient-to-r from-slate-800  via-teal-800 to-slate-500 ring-2 ring-teal-800
          dark:bg-[#D9D9D9]
          dark:via-[#550895]
          dark:ring-0
          [&::-webkit-slider-runnable-track]:rounded-xl
          [&::-webkit-slider-thumb]:h-[18px]
          [&::-webkit-slider-thumb]:w-[18px]
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-teal-900
          [&::-webkit-slider-thumb]:shadow-md

          [&::-webkit-slider-thumb]:ring-[1.5px] [&::-webkit-slider-thumb]:ring-white [&::-webkit-slider-thumb]:dark:bg-[#151515]
        
          "
          type="range"
          name="brightness"
          id="brightness"
          min={0}
          max={200}
          value={brightness}
          onChange={(e) => setBrightness(parseInt(e.target.value))}
        />
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        <Contrast className="  text-teal-900 dark:text-white" />
        <input
          className="h-1 flex-1  appearance-none  rounded-xl bg-[#D9D9D9] bg-gradient-to-r from-slate-800 via-teal-800 to-slate-500 ring-2 ring-teal-800 dark:via-[#550895] dark:ring-0
          [&::-webkit-slider-runnable-track]:rounded-xl
          [&::-webkit-slider-thumb]:h-[18px]
          [&::-webkit-slider-thumb]:w-[18px]
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-teal-900
          [&::-webkit-slider-thumb]:shadow-md
          [&::-webkit-slider-thumb]:ring-[1.5px]
          [&::-webkit-slider-thumb]:ring-white
          [&::-webkit-slider-thumb]:dark:bg-[#151515]
        
          "
          type="range"
          name="contrast"
          id="contrast"
          min={0}
          max={200}
          value={contrast}
          onChange={(e) => setContrast(parseInt(e.target.value))}
        />
      </div>
      {/* style={{backgroundColor: color}} */}
      <div
        className={`transition-colors ${colorChange} ${brightnessChange} ${contrastChange}`}
      >
        {colorChange.replace(/[[\]bg-]/g, '')}
        {/* /[\[\].!'@,><|://\\;&*()_+=]/g */}
      </div>
    </div>
  )
}
