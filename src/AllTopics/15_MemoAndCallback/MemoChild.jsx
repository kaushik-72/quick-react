// import React from 'react' //~1
import {memo} from 'react' //~ 2

const MemoChild = () => {
    console.log("i'm MemoChild Component");
    
  return (
    <div>
        <h1 className="text-4xl">Memo child component</h1>
    </div>
  )
}

// export default React.memo(MemoChild); //~1
export default memo(MemoChild); //~2
