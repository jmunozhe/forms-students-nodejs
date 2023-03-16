import { DateTime } from 'luxon'
import { BaseModel, column, hasMany ,HasMany} from '@ioc:Adonis/Lucid/Orm'
import TypeDocument from './TypeDocument'
import Rol from './Rol'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column() public first_name: string
  @column() public second_name: string
  @column() public surname: string
  @column() public second_sur_name: string
  @column() public type_document: number
  @column() public document_number: number
  @column() public email: string
  @column() public password: string
  @column() public rol_id: number
  @column() public phone: string
  @column() public state: boolean


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> TypeDocument,{
    localKey: 'document_number',
    foreignKey: 'id',
  })
  public documentUser: HasMany<typeof TypeDocument>

  @hasMany(()=> Rol,{
    localKey: 'rol_id',
    foreignKey: 'id',
  })
  public rolUser: HasMany<typeof Rol>
}
