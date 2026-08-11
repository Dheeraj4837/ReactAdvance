import {useFormStatus} from 'react-dom';

function UseForm(){
    const handleSubmit =async ()=>{
        await new Promise(res =>setTimeout(res,2000));
        console.log("submit");  
    }

    function CustomerForm(){
        const {pending} = useFormStatus();
        console.log(pending);
        
        return (
            <div>
                <input type="text" placeholder="Enter Your Email" />
                <br /> <br/>
                <input type="password" placeholder="Enter Your Password" />
                <br /> <br />
                <button disabled={pending}>{pending? 'Submitting...':'Submit'}</button>
            </div>
        )
    }
    return(
        <div>
            <h1>UseFormStatus Hook in react js</h1>
            <form action={handleSubmit}>
                <CustomerForm />
            </form>
        </div>
    )
}
export default UseForm;