import "Assets/tailwind.css"
import Picture from "Components/Picture";
import Skill from "Components/Skill";
import Description from "Components/Description";

function App() {
  return (
    <div className="h-screen w-screen f-center">
      <div className="lg:w-[80%] m-10 border-4 p-5 f-center flex-col lg:flex-row">
        <Picture />
        <div className="w-full f-center flex-col lg:flex-row xl:flex-col">
          <div>
            <Description />
          </div>
          <div className="f-center flex-wrap gap-4 mt-7">
            <Skill name="HTML+CSS" emoji="💪" color="text-black" bg="bg-gradient-to-r from-orange-600 to-sky-500" />
            <Skill name="JavaScript" emoji="💪🏽" color="text-black" bg="bg-[#fbbf24]" />
            <Skill name="ReactJs" emoji="🤝" color="text-black" bg="bg-[#0891b2]" />
            <Skill name="NodeJs" emoji="🤏" color="text-white" bg="bg-[#15803d]" />
            <Skill name="Tailwindcss" emoji="🤏" color="text-black" bg="bg-[#22d3ee]" />
          </div>
        </div>
      </div>
    </div>

  )
}


export default App;