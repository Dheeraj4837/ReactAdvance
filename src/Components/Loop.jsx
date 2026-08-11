function Loop() {
  const userName = ["Dheeraj", "Mahima", "Mili", "Golu"];
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
  ];
  return (
    <div className="">
      <h1>Loop In JSX with Map Function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>College</td>
            <td>ID</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.Id}>
              <td>{user.Name}</td>
              <td>{user.College}</td>
              <td>{user.Id}</td>

              <td>{user.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Dummy Data</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>College</td>
            <td>ID</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dheeraj</td>
            <td>DU</td>
            <td>1</td>
            <td>Dj@gmail.com</td>
          </tr>
          <tr>
            <td>Dheeraj</td>
            <td>DU</td>
            <td>1</td>
            <td>Dj@gmail.com</td>
          </tr>
          <tr>
            <td>Dheeraj</td>
            <td>DU</td>
            <td>1</td>
            <td>Dj@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Loop;
