import { NavLink } from 'react-router-dom';

export default function Header() {
  return <div className='p-3 bg-slate-600 shadow-xl text-white flex justify-between items-center'>
    <span className='text-3xl font-bold'>React Library Examples</span>
    <nav className='flex justify-end gap-1'>
      <NavLink to="/table" className='shadow-lg bg-cyan-800 px-2 py-1 rounded [&.active]:bg-cyan-700'>
        Table
      </NavLink>
      <NavLink to="/charts" className='shadow-lg bg-cyan-800 px-2 py-1 rounded [&.active]:bg-cyan-700'>
        Charts
      </NavLink>
    </nav>
  </div>;
}
