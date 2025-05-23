import { useForm } from '@mantine/form';
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { IconTank } from '@tabler/icons-react';

function MemberForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
    }
  })

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit" leftSection={<IconTank size={16} />}>Save</Button>
      </Group>
    </form>
  )
}

export default MemberForm