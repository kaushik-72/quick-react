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


const App = ()=>{

    

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
          <TodoContextProvider>
            <TodoWrapper/>
          </TodoContextProvider>
          
          
        </>
    );
};

export default App;