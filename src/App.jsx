// import ClassBased from "./AllTopics/01_TypesOfComponents/ClassBased";
// import FunctionBased from "./AllTopics/01_TypesOfComponents/FucntionBased";
import Counter from "./AllTopics/02_States/Counter";
// import StatesInCBC from "./AllTopics/02_States/StatesInCBC";
import StatesInFBC from "./AllTopics/02_States/StatesInFBC";
import StateTask1 from "./AllTopics/02_States/StateTask1";
import StateTaskClass1 from "./AllTopics/02_States/StateTaskClass1";
import ThemeChange from "./AllTopics/02_States/ThemeChange";
import PropsChild from "./AllTopics/03_Props/PropsChild";
import PropsParents from "./AllTopics/03_Props/PropsParents";
import ChildrenProps from "./AllTopics/04_ChildrenProps/ChildrenProps";
import ControlledForms1 from "./AllTopics/08_Forms/ControlledForms1";
import ControlledForms2 from "./AllTopics/08_Forms/ControlledForms2";
import ControlledTask1 from "./AllTopics/08_Forms/ControlledTask1";
import UpliftingParent from "./AllTopics/05_StateUplifting/UpliftingParent";
import TodoWrapper from "./Todo App/TodoWrapper";
// import ContextProvider from "./Todo App/ContextProvider";
import TodoContextProvider from "./Todo App/ContextProvider"
import ReactCss from "./AllTopics/09_ReactCss/ReactCss";
import TailwindPractise1 from "./AllTopics/10_TailwindCSS/TailwindPractise1";
import UncontrolledForms from "./AllTopics/08_Forms/UncontrolledForms";
import LifeCycleInCBC from "./AllTopics/11_LIfecycle/LifeCycleInCBC";
import { useState } from "react";
import LifeCycleInFBC from "./AllTopics/11_LIfecycle/LifeCycleInFBC";
import Todos from "./AllTopics/12_Fetch/Todos";
import ReducerCounter from "./AllTopics/13_Reducer/ReducerCounter";
import ReducerTodo from "./AllTopics/13_Reducer/ReducerTodo";
import Users from "./AllTopics/14_CustomHooks/Users";
import MemoExample from "./AllTopics/15_MemoAndCallback/MemoExample";
import Dashboard from "./AllTopics/16_Routing/Dashboard";
import CF2 from "./Weekend/08_Forms/CF2";
import UCF from "./Weekend/08_Forms/UCF";
import LCICBC from "./Weekend/09_LifeCycle/LCICBC";
import LCiFBC from "./Weekend/09_LifeCycle/LCiFBC";




const App = ()=>{

    const [toggle, setToggle] = useState(true);
    const handleToggle = ()=>setToggle((prev)=>!prev);

    return (
        <>
          
          {/* <StatesInFBC/> */}
          {/* <ThemeChange/> */}
          {/* <Counter/> */}
          {/* <StateTask1/> */}
          {/* <StateTaskClass1/> */}
          {/* <StatesInCBC/> */}
          {/* <PropsParents/> */}
          {/* <PropsChild/> */}
          {/* <ChildrenProps/> */}
          {/* <UpliftingParent/> */}
          {/* <ControlledForms1/> */}
          {/* <ControlledTask1/> */}
          {/* <ControlledForms2/> */}
          {/* <TodoContextProvider>
            <TodoWrapper/>
          </TodoContextProvider> */}

          {/* <ReactCss/> */}
          {/* <TailwindPractise1/> */}
          {/* <UncontrolledForms/> */}

          {/* <button onClick={handleToggle}>toggle me</button>
          {toggle && <LifeCycleInCBC/>} */}

          {/* <LifeCycleInFBC/> */}
          {/* <Todos/> */}
          {/* <ReducerCounter/> */}
          {/* <ReducerTodo/> */}
          {/* <Users/> */}
          {/* <MemoExample/>           */}
          {/* <Dashboard/> */}
         {/* <ControlledForms2/> */}
         {/* <CF2/> */}
         {/* <UCF/> */}
         {/* <LCICBC/> */}
         <LCiFBC/>
          
        </>
    );
};

export default App;