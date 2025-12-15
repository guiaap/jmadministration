export default function TitleLine({height = "0.2rem", width="7rem", color="var(--primary-300)"}) {

    return (
        <div 
        className="m-auto rounded-sm"
        style={{height, width, backgroundColor: color}}>
        </div>
    );
}