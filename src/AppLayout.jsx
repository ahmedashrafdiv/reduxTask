import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { useSelector } from "react-redux";

export default function AppLayout() {
  const state = useSelector((state) => state.language.language);

  console.log(state);
  
  return (
    <div dir={`${(state== 'ar')?'rtl':'ltr'}`}>
      <Header/>
      <Outlet/>
    </div>
  )
}
