import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Text} from '@mantine/core';
import { IconUsersGroup } from '@tabler/icons-react';
import MemberForm from './memberForm.jsx';

function AddMember() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} title="Create Crew Member">
        <MemberForm />
      </Modal>

      <Button onClick={open} leftSection={<IconUsersGroup size={16} />}>
        Create Crew Member
      </Button>
    </>
  )
}

export default AddMember