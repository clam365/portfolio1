export default function Stats() {
    return (
        <div className={"mt-10"}>
            <h1 className={"text-spotify text-sm"} id={"spotifyText"}>Some numbers for context</h1>
            <div className={"border-t border-t-[#e1e1e1] mt-2 py-2"} id={"newLine"}>
                <h1 className={"text-5xl font-medium"}>1,200</h1>
                <h1 className={"my-1"}>juniors travel per year</h1>
            </div>
            <div className={"border-t border-t-[#e1e1e1]  py-2"} id={"newLine"}>
                <h1 className={"text-5xl font-medium"}>50+</h1>
                <h1 className={"my-1"}>project sites</h1>
            </div>
            <div className={"border-t border-t-[#e1e1e1]  py-2"} id={"newLine"}>
                <h1 className={"text-5xl font-medium"}>8</h1>
                <h1 className={"my-1"}>weeks of community work</h1>
            </div>
        </div>
    )
}