




export const formatText = (text: string) => {
    const counter = text.length;
    

    if( counter >= 11 ){
        return <div className="text-sm text-wrap">{text}</div>
    }else{
        return text;
    }
}