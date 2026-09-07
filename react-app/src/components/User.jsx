function User() {
  return (
    <div>
      <h2>Users</h2>
      <p>This is user page</p>
     <Header/>
     {/* component linking */}

   </div>
  );
}
// sub component
function Header(){
    return(
        <>
        <h1>header</h1>
        <p>this is header page</p>
        
        
        </>
    );
}
export default User;
export const username="sanika";