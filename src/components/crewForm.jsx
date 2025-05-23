import { useForm } from '@mantine/form';
import { Button, Checkbox, Group, TextInput } from '@mantine/core';
import { IconTank } from '@tabler/icons-react';

function CrewForm() {
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
        label="Crew Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit" leftSection={<IconTank size={16} />}>Save</Button>
      </Group>
    </form>
  )
}

export default CrewForm