import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from 'typeorm';
import { Contact } from 'src/contacts/contact.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true, length: 30 })
  username: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ type: 'bytea', nullable: true })
  profile_photo: Buffer;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => Contact, (contact) => contact.user, { onDelete: 'CASCADE' })
  contacts: Contact[];

  // @BeforeInsert()
  //   async hashPassword() {
  //       this.password = await bcrypt.hash(this.password, 8);
  //   }
}
