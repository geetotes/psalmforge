import { Table, Title, Text, Paper, Group, Tabs } from '@mantine/core';
import { Link } from 'react-router';
import { useLocation } from 'react-router';

function MemberList() {

  const location = useLocation();
  const { id, name, resources, experience } = location.state.crew;
  const members = [
    {
      id: 1,
      name: "John Doe",
      movement: 5,
      agility: -3,
      presence: 1,
      toughness: -1,
      strength: 2,
    }
  ]

  const rows = members.map((member) => (
    <Table.Tr key={member.id}>
      <Table.Td><Link to={`/crews/${id}/members/${member.id}`}>{member.name}</Link></Table.Td>
      <Table.Td>{member.movement}</Table.Td>
      <Table.Td>{member.agility}</Table.Td>
      <Table.Td>{member.presence}</Table.Td>
      <Table.Td>{member.strength}</Table.Td>
      <Table.Td>{member.toughness}</Table.Td>
    </Table.Tr>
  ))

  return(
    <Paper shadow="xs" p="xl">
      <Title order={3} tt="uppercase">{name}</Title>
      <Title order={5} tt="uppercase" c="blue.9">{resources}R, {experience} XP</Title>
      <Tabs defaultValue="members">
        <Tabs.List>
          <Tabs.Tab value="members">Members</Tabs.Tab>
          <Tabs.Tab value="supply">Supply</Tabs.Tab>
          <Tabs.Tab value="bunker">Bunker</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="members">
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Movement</Table.Th>
                <Table.Th>Agility</Table.Th>
                <Table.Th>Presence</Table.Th>
                <Table.Th>Strength</Table.Th>
                <Table.Th>Toughness</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {rows}
            </Table.Tbody>
          </Table>
          <Text>
            {members.length > 5 ? 'A crew must have 5 members' : null}
          </Text>
          <Group justify="flex-end">
          </Group>
        </Tabs.Panel>

        <Tabs.Panel value="supply">
          Supplies!
        </Tabs.Panel>
        
        <Tabs.Panel value="bunker">
          Supplies!
        </Tabs.Panel>
      </Tabs>
    </Paper>
  )
}

export default MemberList