import CollegeData from "./CollegeData";
function Nestedloop() {
  const CollegeList = [
    {
      Name: "AIMT college",
      City: "Lucknow",
      Website: "www.aimt.ac.in",
      StudentData: [
        {
          Name: "Rohit",
          Age: 22,
        },
        {
          Name: "AJYOTI",
          Age: 21,
        },
        {
          Name: "MIJY",
          Age: 22,
        },
        {
          Name: "RAJ",
          Age: 22,
        },
      ],
    },
    {
      Name: "COCAS college",
      City: "Patna",
      Website: "www.cocas.ac.in",
      StudentData: [
        {
          Name: "Rohit",
          Age: 22,
        },
        {
          Name: "AJYOTI",
          Age: 21,
        },
        {
          Name: "MIJY",
          Age: 22,
        },
        {
          Name: "RAJ",
          Age: 22,
        },
      ],
    },
    {
      Name: "DU college",
      City: "Pubjab",
      Website: "www.du.ac.in",
      StudentData: [
        {
          Name: "Rohit",
          Age: 22,
        },
        {
          Name: "AJYOTI",
          Age: 21,
        },
        {
          Name: "MIJY",
          Age: 22,
        },
        {
          Name: "RAJ",
          Age: 22,
        },
      ],
    },
    {
      Name: "NIT college",
      City: "USA",
      Website: "www.nit.ac.in",
      StudentData: [
        {
          Name: "Rohit",
          Age: 22,
        },
        {
          Name: "AJYOTI",
          Age: 21,
        },
        {
          Name: "MIJY",
          Age: 22,
        },
        {
          Name: "RAJ",
          Age: 22,
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Nested looping with Components</h1>
        {
            CollegeList.map((college,index)=>(
                <div key={index}>
                    <CollegeData collegeProps ={college} />

                </div>
            ))
        }
    </div>
  );
}
export default Nestedloop;
