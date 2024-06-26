
import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = async () => {
        await startDeletingEvent();
    }

  return (
   <button className="btn btn-danger fab-danger"
   style={{
    display: hasEventSelected ? '' : 'none'
   }} 
   onClick={handleDelete}>
    <i className="fas fa-trash-alt"></i>
   </button>
  )
}
