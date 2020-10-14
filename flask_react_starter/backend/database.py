from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Character, Adventure, Page

with app.app_context():
  db.drop_all()
  db.create_all()

  owen = User(username = 'Owen', email = 'owen@demo.io', password = "password")
  blay = Character(name = 'Blay', strength = 8, dexterity = 14, constitution = 14, intelligence = 12, wisdom = 16, charisma = 12, armor_class = 14, max_hitpoints = 10, features = "", actions = "", ownerId = 1)
  path = Adventure(title = 'The Oasis', description = 'A cautionary tale', published = False, ownerId = 1)
  start = Page(title = 'Downturn Alley', content = 'These streets are rough. Make a Perception Check DC (10)', adventureId = 1, ownerId = 1)

  db.session.add(owen)
  db.session.add(blay)
  db.session.add(path)
  db.session.add(start)
  db.session.commit()
