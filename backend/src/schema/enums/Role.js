import { enumType } from 'nexus';

const Role = enumType({
  name: 'Role',
  members: [
    'CLIENT',
    'ADMIN',
  ],
  description: 'Types of Role'
});

export default Role;