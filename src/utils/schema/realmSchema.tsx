import Realm from 'realm';
import {RealmProvider} from '@realm/react';

export class Post extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  description!: string;
  images!: string[];
  createdAt!: Date;

  static createPost(title: string, description: string, images: string[]) {
    return {
      _id: new Realm.BSON.ObjectId(),
      title,
      description,
      images,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: 'Post',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      title: 'string',
      description: 'string',
      createdAt: 'date',
      images: 'string[]',
    },
  };
}

export class User extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  phone!: string;
  password!: string;
  createdAt!: Date;

  static createUser(name: string, phone: string, password: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      name,
      phone,
      password,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      phone: 'string',
      password: 'string',
      createdAt: 'date',
    },
  };
}

const RealmProviders: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <RealmProvider schema={[Post, User]} deleteRealmIfMigrationNeeded>
      {children}
    </RealmProvider>
  );
};

export default RealmProviders;
