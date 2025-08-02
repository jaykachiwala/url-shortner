import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class URL extends Model {
  public id!: number;
  public longUrl!: string;
  public shortCode!: string;
}

URL.init(
  {
    longUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortCode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'URL',
    tableName: 'urls',
    timestamps: true,
  }
);

export default URL;
