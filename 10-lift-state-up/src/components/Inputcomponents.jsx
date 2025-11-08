

const Inputcomponents = ({input, setInput}) => {
    
  return (
    <div>
        <form>
            <input type="text" placeholder='Search here' value={input} onChange={(event) => setInput(event.target.value)} />
        </form>
    </div>
  )
}

export default Inputcomponents