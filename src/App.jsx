import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState("")

  const [translateX, setTranslateX] = useState(0);
  const [cursorX, setCursorX] = useState(0);

  const handleMouseOver = (event) => {
        if(username === "admin" && password === "admin"){
          setTranslateX(0)
          setCursorX(0)
          setIsAdmin(true)
        }else{
          setIsAdmin(false)
          setCursorX(event.clientX);
        }
  };

  useEffect(() => {
    
    if(cursorX < 400){
      setTranslateX(translateX + (cursorX - translateX)/3);
    }else{
      setTranslateX(translateX - (cursorX - translateX)/3);
    }
   
  }, [cursorX]);

  useEffect(()=>{
    if(username === "admin" && password === "admin"){
      setTranslateX(0)
      setCursorX(0)
      setIsAdmin(true)
    }
  },[username, password])

  const style = {
    transform: `translateX(${translateX}px)`,
  };


  return (
    <div className="App">
        <form className='flex flex-col w-[300px] mx-auto items-start justify-center'>
           <label className='mb-2'>ຊື່ຜູ້ໃຊ້</label>
           <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='ກະລຸນາປ້ອນ ຊື່ຜູ້ໃຊ້' className='border w-full rounded p-2 mb-5'/>
           <label className='mb-2'>ລະຫັດ</label>
           <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='ກະລຸນາປ້ອນ ລະຫັດ' className='border w-full rounded p-2 mb-5'/>
           <span className={`my-2 ${isAdmin ? "text-green-800" : "text-red-800"}`}>{isAdmin ? "ສະບາຍດີແອັດມິນ" : "ບໍ່ແມ່ນແອັດມິນບໍ່ໃຫ້ຜ່ານ"}</span>
           <button type='submit' onClick={(e)=>e.preventDefault()} onMouseOver={(e)=>handleMouseOver(e)} style={style}  className={`border transition-all ease-linear duration-200 px-5 py-1 bg-green-600 text-white drop-shadow rounded hover:opacity-80 active:opacity-50`}>ເຂົ້າສູ່ລະບົບ</button>
        </form>
    </div>
  )
}

export default App
