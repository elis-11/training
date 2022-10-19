import {BsTrash} from 'react-icons/bs'

export const TodoItem = ({title, id, completed}) => {
  return (
    <li>
        <label className='flex justify-between items-center w-100 h-12 bg-gray-100 my-1 px-5'>
            <input type="checkbox" defaultChecked={false} className='cursor-pointer'/>
            <span>{title}</span>
            <BsTrash className=' text-gray-500 hover:text-gray-400 cursor-pointer'/>
        </label>
    </li>
  )
}
