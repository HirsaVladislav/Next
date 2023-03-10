import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() firstName: string;
  @Column() lastName: string;
  @Column() age?: number;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
