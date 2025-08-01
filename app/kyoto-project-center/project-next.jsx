import Project2 from "@/components/work/project2";

export const ProjectNext = () => {
  return (
      <div className={"px-10  xl:px-72 md:py-20 md:pb-32 pb-20"}>
            <div className={"border-t border-t-[#e1e1e1] py-2"} id={"newLine"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-y-16 mt-5"}>
                    <h1 className={" text-4xl md:text-5xl"}>Next project</h1>
                    <Project2/>
                </div>
            </div>
      </div>
  )
}