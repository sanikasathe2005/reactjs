function Home()
{
    return(
          <>     
          {/* //---fragments */}
            <h2>Home page</h2>
            <p>{hello()}this is home page</p>
            {/* function linking */}
        </>
    )
}
// function
function hello()
{
    return(
        <>
        <p>hello</p>
        </>
    )
}
export default Home;