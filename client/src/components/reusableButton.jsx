export default function ReusableButton({name}){
    console.log(name);
    return(
        <>
        <button type="submit" className="btn bg-[#4e89b1] text-white">
                {name}
        </button>
        </>
    )
}