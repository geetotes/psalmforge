import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text} from '@mantine/core';
import { IconUsersGroup } from '@tabler/icons-react';
import CrewForm from './crewForm.jsx';

function AddCrew() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} title="Create Crew">
        <CrewForm />
      </Modal>

      <Button onClick={open} leftSection={<IconUsersGroup size={16} />}>
        Create Crew
      </Button>
    </>
  )
}

export default AddCrew