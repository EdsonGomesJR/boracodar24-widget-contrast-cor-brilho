import { ControlsWidget } from './components/ControlsWidget'
import { TextMiddle } from './components/TextMiddle'
import ThemeSwitcher from './components/ThemeSwitcher'

export default function Home() {
  return (
    <div className=" flex min-h-screen flex-col  items-center justify-center gap-2">
      <ThemeSwitcher />
      <div className="relative flex  h-[932px] w-[430px] flex-col items-center justify-center overflow-hidden bg-[#151515] px-[55px] ">
        <div className="absolute -top-[496px] left-[calc(50%_-_846px/2_+_12px)]  h-[846px] w-[846px] rounded-full bg-[#8703FC] opacity-60 shadow-[0px_0px_53px_13px_rgba(135,_3,_252,_0.9)]" />
        <TextMiddle />

        <ControlsWidget />
      </div>
    </div>
  )
}
