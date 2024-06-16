import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn  } from "typeorm";

@Entity()
export class StudentDetails{
@PrimaryGeneratedColumn()
ID:number ;

@Column()
FirstName:string;
@Column()
LastName:string;
@Column()
EmailID:string;
@Column("bigint")
MobileNumber:number;
@CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
@UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
}

