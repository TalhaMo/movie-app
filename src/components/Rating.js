import React from 'react'

const Rating = ({rate,setRatingSearch}) => {
const star=(x)=>{
    let Array=[];
for(let i=1; i<=5;i++){
if(i<=x){
    Array.push(<span key={i} style={{color:'red'}} onClick={()=>setRatingSearch(i)}>★</span>)
}
else{Array.push(<span key={i} onClick={()=>setRatingSearch(i)}>☆</span>)
}
}
return Array;
};
    return (
        <div>
        {star(rate)}
        </div>
    )
}

Rating.defaultProps = {
    setRatingSearch: () => {},
    rating: 1,
  };
  

export default Rating
