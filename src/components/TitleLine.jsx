export default function TitleLine({height = "0.2rem", width="7rem", color="var(--base)"}) {

    return (
        <div 
        className="m-auto mt-2 mb-3 rounded-sm"
        style={{height, width, backgroundColor: color}}>
        </div>
    );
}