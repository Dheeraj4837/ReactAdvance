import User from "./ReuseUser";

function ReuseComp (){
    const userData = [
    {
      Name: "Dheeraj",
      College: "DU",
      Email: "Dj@gmail.com",
      Id: 1,
    },
    {
      Name: "Mahima",
      College: "PPU",
      Email: "Mahima@gmail.com",
      Id: 2,
    },
    {
      Name: "Mili",
      College: "COCAS",
      Email: "M@gmail.com",
      Id: 3,
    },
    {
      Name: "Mili",
      College: "COCAS",
      Email: "M@gmail.com",
      Id: 4,
    },
    {
      Name: "Mili",
      College: "COCAS",
      Email: "M@gmail.com",
      Id: 5,
    },
  ];
    return(
        <div>
            <h1>Reuse Component</h1>
            {
                userData.map((user)=>(
                    <div key={user.Id}>
                        <User data={user}/>
                    </div>
                ))
            }
        </div>
    )
}
export default ReuseComp;