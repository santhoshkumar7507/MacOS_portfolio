import dayjs from "dayjs";
import { navIcons,navLinks } from "#constants";
import useWindowStore from "#store/window.js";

const Navbar = () => {
  const {openWindow } = useWindowStore();

  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo"/>
            <p className='font-bold'>Santhosh Kumar's portfolio</p>
            <ul>
                {navLinks.map(({id,name,type})=>(
                    <li key={id} onClick={()=>openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className="flex items-center gap-5">
            <ul className="flex gap-4">
                {navIcons.map(({ id, img })=>(
                    <li key={id}>
                        <img src={img} className="icon-hover w-6"
                        alt={`icon-${id}`}/>
                    </li>
                ))}
            </ul>
            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>



    </nav>
  );
};

export default Navbar;