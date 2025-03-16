import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Shipment from 'src/shipments/shipments.entity';

@Entity('providers')
class Provider {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Shipment, (shipment) => shipment.provider)
  shipments: Shipment[];
}

export default Provider;
