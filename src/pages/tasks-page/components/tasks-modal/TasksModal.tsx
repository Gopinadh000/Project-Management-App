import { TextField } from '@mui/material'
import APPModal from '../../../../components/modal/Modal'

const TasksModal = ({openModal , onClose }:any) => {
  return (
    <div>
     <APPModal
          modalType="side"
          size="lg"
          title="Add Tasks"
          open={openModal}
          onClose={onClose}
          footerComponent={<div> Footer </div>}
        >
        </APPModal>
    </div>
  )
}

export default TasksModal
