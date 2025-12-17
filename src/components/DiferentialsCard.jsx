import SortIcon from "./SortIcon";

export default function DiferentialsCard() {

    return (
        <div>
            <ul className="
            text-(--text-white)
            text-[1rem]
            rounded-tr-3xl
            rounded-bl-3xl
            overflow-hidden
            shadow-(--shadow-xl)
            [&>li]:flex 
            [&>li]:items-center 
            [&>li]:gap-1 
            [&>li]:py-2
            [&>li]:pl-3
            [&>li>svg]:h-10
            [&>li>svg]:w-10
            [&>li>svg]:fill-(--text-white)
            ">
                <li className="bg-(--primary-300)">
                    <SortIcon name={"humanity"} />
                    <span>Atendimento Humanizado</span>
                </li>
                <li className="bg-(--primary-400)">
                    <SortIcon name={"agility"}  />
                    <span>Agilidade</span>
                </li>
                <li className="bg-(--primary-500)">
                    <SortIcon name={"twenty"} />
                    <span>anos de experiência</span>
                </li>

            </ul>
        </div>
    );
}