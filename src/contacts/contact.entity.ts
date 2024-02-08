import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity({ name: 'contacts' })
export class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  number: number;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'bytea', nullable: true })
  profile_photo: Buffer;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.id)
  user: number;
}
