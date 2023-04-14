import Navbar from "../src/components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./pages/register/Register";
import Posts from "./pages/posts/Posts";
import Home from "./pages/home/Home";

import Footer from "../src/components/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import { PostForm } from "./components/Post/PostForm";
import { PostFormEditor } from "./components/Post/PostFormEditor";
import { AuthGuard } from "./guards/auth.guards";
import UserPosts from "./pages/posts/UserPosts";
import  WorkingOnIt  from "./pages/workingOnIt/WorkingOnIt";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className="App bg-gradient-to-r from-yellow-100 via-white to-teal-200 min-h-screen grid grid-rows-[auto_1fr_auto]">
  
      <Provider store={store}>
        <Navbar />

        {/* <Register />
      <Posts/> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/registrarse" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/*" element={<WorkingOnIt/>} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route element={<AuthGuard/>} >
              <Route path="/subirPost" element={<PostForm/> } />
              <Route path="/postUsuario" element={<UserPosts />} />
              <Route path="postUpdate/:postId" element={<PostFormEditor />} />
          </Route>
        </Routes>

        <Footer />
      </Provider>
    </div>
  );
}

export default App;
