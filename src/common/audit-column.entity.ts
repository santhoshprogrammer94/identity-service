import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class AuditColumn {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Column({select: false})
    createdBy!: string;

    @Column({select: false})
    updatedBy!: string;

    @Column({select: false})
    createdOn!: Date;

    @Column({select: false})
    updatedOn!: Date;
    
    @Column({select: false})
    tenantId!:string
}