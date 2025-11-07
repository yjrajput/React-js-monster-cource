import React from 'react'

const App = () => {
  const handleByGrendparent = () =>{
    alert('click by grendparent')
  }
  const handleByParent = () =>{
    alert('click by parent')
  }
  const handleByChild = event =>{
    event.stopPropagation()
    alert('clcik by child')
  }
  return (
    <div className='container'>
      <div className='grandparent' onClick={handleByGrendparent}>
        <div className='parent' onClick={handleByParent} >
          {/* onClickCapture: is used for captureing phase */}
          <div className='child' onClick={handleByChild}></div>
        </div>
      </div>
    </div>
  )
}

export default App