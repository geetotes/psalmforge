import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text} from '@mantine/core';
import { IconUsersGroup } from '@tabler/icons-react';

function AddCrew() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} title="Create Crew">
        <Text>
        <p>Form to create a crew goes here.</p>
        </Text>
      </Modal>

      <Button onClick={open} leftSection={<IconUsersGroup size={16} />}>
        Create Crew
      </Button>
    </>
  )
}

export default AddCrew