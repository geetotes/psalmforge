import { Table, Title, Text, Paper, Group, Button } from '@mantine/core';
import AddCrew from './addCrew.jsx';

function CrewList() {
  const crews = [
    {
      id: 1,
      name: "Wandering Ghosts",
      resources: 50,
      experience: 5
    }
  ]

  const rows = crews.map((crew) => (
    <Table.Tr key={crew.id}>
      <Table.Td>{crew.name}</Table.Td>
      <Table.Td>{crew.resources}</Table.Td>
      <Table.Td>{crew.experience}</Table.Td>
    </Table.Tr>
  ))

  return(
    <Paper shadow="xs" p="xl">
      <Title order={3} tt="uppercase">Crews</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Resources</Table.Th>
            <Table.Th>Experience</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows}
        </Table.Tbody>
      </Table>
      <Text>
        {crews.length == 0 ? 'To get started, create a crew' : null}
      </Text>
      <Group justify="flex-end">
        <AddCrew />
      </Group>
    </Paper>
  )
}

export default CrewList