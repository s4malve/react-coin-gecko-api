import DownArrow from '../../components/icons/DownArrow'

const THead = ({ index, label, handleClick }) => (
  <th
    className={`py-4 pr-4 ${index === 0 ? 'pl-4' : ''} ${
      handleClick ? 'cursor-pointer' : 'cursor-auto'
    } font-medium text-left whitespace-nowrap`}
    onClick={handleClick}
  >
    <div className="flex items-center gap-x-1">
      {label}
      {handleClick ? <DownArrow /> : null}
    </div>
  </th>
)

export default THead
