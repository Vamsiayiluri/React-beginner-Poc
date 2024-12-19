// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ButtonCounter from "./components/ButtonCounter";
// import ClassButtonCounter from "./components/ClassButtonCounter";
// import ClassHoverCounter from "./components/ClassHoverCounter";
// import CustomHooksCounter from "./components/CustomHooksCounter";
// import DomManipulationUseRefs from "./components/DomManipulationUsingRefs";
// import EnhancedClickCounter from "./components/EnhancedClickCounter";
// import EnhancedHoverCounter from "./components/EnhancedHoverCounter";
// import HoverCounter from "./components/HoverCounter";
// import SearchUser from "./components/SearchUser";
// // import { ReactWithTypescript } from "./components/ReactWithTypescript";
// import UseRefHook from "./components/UseRefHook";
// import { AuthProvider } from "./context/AuthContext";
// import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import ProtectedRoute from "./components/ProtectedRoute";
// import FragmentsSample from "./components/FragmentsSample";
// import ParentComponentSample from "./components/ParentComponentSample";
import { ControlledComponent } from "./components/ControlledComponent";
import CookieExample from "./components/CookieExample";
import { LocalStorage } from "./components/LocalStorage";
import { SessionStorageSample } from "./components/SessionStorageSample";
import { TodoExample } from "./components/TodoExample";
import { UncontrolledComponent } from "./components/UnControlledComponent";
import { CakeView } from "./features/cake/CakeView";
import { IceCreamView } from "./features/iceCream/IceCreamView";
import { UserView } from "./features/user/UserView";

function App() {
  return (
    <div>
      {/* <ReactWithTypescript></ReactWithTypescript> */}
      {/* <UseRefHook></UseRefHook>
      <DomManipulationUseRefs></DomManipulationUseRefs>

      <>
        <h3>Using Render Props for Counter in functional component</h3>
        <ButtonCounter></ButtonCounter>
        <HoverCounter></HoverCounter>
      </>

      <>
        <h3>Using Render Props for Counter in class component</h3>
        <ClassButtonCounter></ClassButtonCounter>
        <ClassHoverCounter></ClassHoverCounter>
      </>

      <>
        <h3>Using HOC for Counter in Class and functional component</h3>
        <EnhancedClickCounter></EnhancedClickCounter>
        <EnhancedHoverCounter></EnhancedHoverCounter>
      </>

      <>
        <h3>Custom Hooks Sample</h3>
        <CustomHooksCounter></CustomHooksCounter>
        <SearchUser></SearchUser>
      </>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard></Dashboard>
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      <>
        <FragmentsSample></FragmentsSample>
      </> */}

      {/*Pure Component and Memo samples*/}
      {/* <ParentComponentSample></ParentComponentSample> */}
      <>
        {/* Controlled and uncontolledComponents*/}
        {/* <ControlledComponent></ControlledComponent>
        <UncontrolledComponent></UncontrolledComponent> */}
      </>
      <>
        {/* <CookieExample></CookieExample>
        <LocalStorage></LocalStorage> */}
        {/* <TodoExample></TodoExample> */}
        {/* <SessionStorageSample></SessionStorageSample> */}
        <CakeView></CakeView>
        <IceCreamView></IceCreamView>
        <UserView></UserView>
      </>
    </div>
  );
}

export default App;
