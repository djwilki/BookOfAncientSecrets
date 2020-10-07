from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash


db = SQLAlchemy()


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(40), nullable=False, unique=True)
  email = db.Column(db.String(255), nullable=False, unique=True)
  hashed_password = db.Column(db.String(255), nullable=False, unique=True)
  characters = db.relationship("Character")
  adventures = db.relationship("Adventure")

  @property
  def password(self):
    return self.hashed_password

  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }


class Character(db.Model):
  __tablename__ = 'characters'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(80), nullable=False)
  strength = db.Column(db.Integer, nullable=False)
  dexterity = db.Column(db.Integer, nullable=False)
  constitution = db.Column(db.Integer, nullable=False)
  intelligence = db.Column(db.Integer, nullable=False)
  wisdom = db.Column(db.Integer, nullable=False)
  charisma = db.Column(db.Integer, nullable=False)
  armor_class = db.Column(db.Integer, nullable=False)
  max_hitpoints = db.Column(db.Integer, nullable=False)
  features = db.Column(db.String)
  actions = db.Column(db.String)
  ownerId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

  def to_dict(self):
    return {
        "id": self.id,
        "name": self.name,
        "strength": self.strength,
        "dexterity": self.dexterity,
        "constitution": self.constitution,
        "intelligence": self.intelligence,
        "wisdom": self.wisdom,
        "charisma": self.charisma,
        "armor_class": self.armor_class,
        "max_hitpoints": self.max_hitpoints,
        "features": self.features,
        "actions": self.actions,
        "ownerId": self.ownerId,
    }


class Adventure(db.Model):
  __tablename__ = 'adventures'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(80), nullable=False)
  description = db.Column(db.String, nullable=False)
  published = db.Column(db.Boolean, default=False)
  ownerId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  pages = db.relationship("Page")

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "description": self.description,
      "published": self.published,
      "ownerId": self.ownerId,
    }

class Page(db.Model):
  __tablename__ = 'pages'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(80), nullable=False)
  content = db.Column(db.String, nullable=False)
  adventureId = db.Column(db.Integer, db.ForeignKey('adventures.id'), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "content": self.content,
      "adventureId": self.adventureId,
    }
