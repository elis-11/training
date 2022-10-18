import {BsTrash} from 'react-icons/bs'

export const TodoItem = ({title, id, completed}) => {
  return (
    <li>
        <label className='flex justify-between items-center w-100 h-8 bg-red-100 my-1'>
            <input type="checkbox" defaultChecked={false}/>
            <span>{title}</span>
            <BsTrash className='text-gray-500'/>
        </label>
    </li>
  )
}
