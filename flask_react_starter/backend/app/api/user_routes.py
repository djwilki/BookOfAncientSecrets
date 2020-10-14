from flask import Blueprint, jsonify
from app.models import User, Adventure, Page, Character, Link

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  print("user route______")
  return { "users": [user.to_dict() for user in response]}

@user_routes.route('/<int:user_id>')
def get_user_info(user_id):
  user = User.query.get(user_id)
  return user.to_dict()


@user_routes.route('/<int:userId>/adventures')
def get_adventures(userId):
  my_adventures = Adventure.query.filter(Adventure.ownerId == userId).all()
  my_adventures_dict = dict()
  for adventure in my_adventures:
    my_adventures_dict[adventure.to_dict()["id"]] = adventure.to_dict()
  return my_adventures_dict

@user_routes.route('/<int:userId>/pages')
def get_pages(userId):
  my_pages = Page.query.filter(Page.ownerId == userId).all()
  my_pages_dict = dict()
  for page in my_pages:
    my_pages_dict[page.to_dict()["id"]] = page.to_dict()
  return my_pages_dict

@user_routes.route('/<int:userId>/characters')
def get_characters(userId):
  my_characters = Character.query.filter(Character.ownerId == userId).all()
  my_characters_dict = dict()
  for character in my_characters:
    my_characters_dict[character.to_dict()["id"]] = character.to_dict()
  return my_characters_dict

@user_routes.route('/<int:userId>/links')
def get_links(userId):
  my_links = Link.query.filter(Link.ownerId == userId).all()
  my_links_dict = dict()
  for link in my_links:
    my_links_dict[link.to_dict()["id"]] = link.to_dict()
  return my_links_dict
