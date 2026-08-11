// Forwarding Refs in React before React V19
// import { forwardRef } from "react";
// const ForwardChildcomp = (props, ref) => {

//     return(
//         <div>
//             <input type="text"  ref={ref}/>
//             <h1>Child Component</h1>
//         </div>
//     )
// }
// export default forwardRef(ForwardChildcomp);

// Forwarding Refs in React after React V19
const Forwardchildcomp = (props)=>{
    return(
        <div>
            <input type="text" ref={props.ref} />
        </div>
    )
}
export default Forwardchildcomp;