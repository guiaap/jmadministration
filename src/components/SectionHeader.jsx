import TitleLine from "./TitleLine";

export default function SectionHeader({title}) {

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-[clamp(1.4rem,2vw,2rem)] font-bold">{title}</h2>
            <TitleLine width={"5rem"} />
        </div>
    );

}