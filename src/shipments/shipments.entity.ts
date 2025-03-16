import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import Provider from 'src/providers/providers.entity'; // Importa la entidad Provider

@Entity()
class Shipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trackingNumber: string;

  @Column()
  carrier: string;

  @Column()
  status: string;

  @ManyToOne(() => Provider, (provider) => provider.shipments, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  provider: Provider;

  @CreateDateColumn()
  createdAt: Date;
}

export default Shipment;
