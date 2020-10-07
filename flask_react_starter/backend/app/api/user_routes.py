from flask import Blueprint, jsonify
from app.models import User, Adventure

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
def index():
  response = User.query.all()
  print("user route______")
  return { "users": [user.to_dict() for user in response]}


@user_routes.route('/<int:userId>/adventures')
def get_adventures():
  my_adventures = Adventure.query.filter(Adventure.ownerId == userId).all()
  my_adventures_dict = dict()
  for adventure in my_adventures:
    my_adventures_dict[adventure.to_dict()["id"]] = adventure.to_dict()
  return my_adventures_dict
