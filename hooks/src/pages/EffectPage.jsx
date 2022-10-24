import { NavLink, Route, Routes } from 'react-router-dom'
import {Effect} from '../effect/Effect'
import {Ref} from '../ref/Ref'
import {RefTimer} from '../reftimer/RefTimer' 

export const EffectPage = () => {
  return (
    <div>
        <nav>
        <NavLink to="" className="font-bold px-3 text-fuchsia-200">Effect</NavLink>
        <NavLink to="ref" className="font-bold px-3 text-fuchsia-200">Ref</NavLink>
        <NavLink to="reftimer" className="font-bold px-3 text-fuchsia-200">RefTimer</NavLink>
        </nav>
        <Routes>
            <Route path="" element={<Effect />} />
            <Route path="ref" element={<Ref />} />
            <Route path="reftimer" element={<RefTimer />} />
        </Routes>
    </div>
  )
}
