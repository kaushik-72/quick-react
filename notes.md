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




    


