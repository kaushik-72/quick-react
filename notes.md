in order to avoid extra div tag pass the xml code in empt tag <></> instead of 
fragments

<>
<h1>Hello react</h1>
<h1>Hello Everyone</h1>
</>

renaming the componet file causes rerendering issues 
should be always in capital letter App.jsx , NavBar.jsx

in js we call a fn by App() , whereas in react we use <App/>

 let greet = "Welcome";

    return (
        <>
            <h2>I am component</h2>
            <h2>{greet}</h2>  *** jsx expression {} ***
        </>
    );

    to change the folder structure ctrl + ,(setting) -> compact folder: uncheck

    in build fucntion is react are called hooks

    const [data, setData] = useState("Hello Everyone ♥"); -> gives us array  of value so we destructure it 

    states is used to store a data on component level; so that user dosen;t have to reload the page.

    short circuit => nothing to do with else
    for toggle we have option of if-else

    states are used to store data -> mutable/local
    props are used to share data among the component(parent to child) -> immutable/global

    for child to parent we use callback.

    real Dom / virtual dom / diffing algo / patching => reconciltaion

    controlled => useState
    uncontrolled => useRef

    setAttribute -> event propagation -> event obj

    ternary operator - conditional operator - short circuit method

    
    npm install @tailwindcss/vite


    inside vite.config.js add these
    import tailwindcss from '@tailwindcss/vite'

update

export default defineConfig({
  plugins: [react()],
})

to this

export default defineConfig({
plugins: [react(),tailwindcss()],
})

inside global index.css
@import "tailwindcss";

useRef (returns) - > {current: undefined}

lifecycle has 3 phase
-mounting
-updating
-unmounting

*** methods - > componentDidUpdate , componentDidMount

initaly in cbc we have null

** in fbc we don't need render ; does that by default

** closure

useState (returns) -> arr[undefined,function] : [state,setState]
useRef (returns) - > obj{current: undefined}
useEffect (returns) - > **lifecycle in fbc nothing(undefined) -> cleanup function
useContext (returns) -> current context value
useReducer - > [count,dispatch]

useReducer is a state managment hook used for complex state managment

redux = usecontext + usereduce
// task : with the help of usereducer make the todo

how to optimize react-app -> usememo and usecallback

useMemo(()=>{},[dependency array])

memo is a higher order coponent
react.memo is used to memoize a componet until its props are unchanged

useCallBack --> it returns memoized function

npm i react-router-dom

rcc - > react class component

npm install @reduxjs/toolkit react-redux

virtualization / pagination

import { useSelector } from "react-redux";  
react-redux this helps in binding redux with react

useSelector is used to access redux's state and returns
useDispatch -> used to call the actions

npm i react-virtuoso

Outlet is used to call the children comp

//! task -> email , passwrod as obj(console as obj) -> store in session storage -> useNavigate (show the dasboard)


//? API Call dependencies 

Object destructring
Dasboard.jsx

usePosts({query,sortby,skip});

usePosts.jsx

export const usePosts = (query,sortby,skip)

Error   : Two console.log objects
Reason  : React StrictMode runs useEffect twice in development
Fix     : Not a bug — production runs only once, just ignore it in dev

axios or fetch
using axios -> less code > stops page refreshc

code splitting/ usememo -> code optimization

task -> css for createuser, hot-toast

prev,next -> css

    


